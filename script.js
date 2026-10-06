let questionOrder =
  [];

/* Paket soal aktif (lihat soal.js); id unik dipakai papan jawaban. */
function currentSet() {
  return questionSets.find(
    (set) =>
      set.key === state.setKey,
  );
}
function shuffleQuestions() {
  questionOrder =
    currentSet().questions.map(
      (q, i) => ({
        ...q,
        id: `${state.setKey}-${i}`,
      }),
    );
  for (
    let i =
      questionOrder.length -
      1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() *
          (i + 1),
      );
    [
      questionOrder[
        i
      ],
      questionOrder[
        j
      ],
    ] = [
      questionOrder[
        j
      ],
      questionOrder[
        i
      ],
    ];
  }
}

/* State permainan terpusat. */
const state = {
  currentQuestionIndex: 0,
  scores: [0, 0],
  activeTeam: 0,
  strikes: 0,
  revealedAnswers:
    [],
  gameFinished: false,
  setKey: null,
  teamNames: [
    "TIM 1",
    "TIM 2",
  ],
};
const $ = (id) =>
  document.getElementById(
    id,
  );
let audioCtx = null,
  fireworkTimer =
    null,
  strikeTimer = null;

/* Batalkan pergantian tim otomatis setelah 3 X yang masih tertunda. */
function cancelStrikeTimer() {
  clearTimeout(
    strikeTimer,
  );
  strikeTimer = null;
}

function normalizeText(
  text,
) {
  return String(
    text,
  )
    .toLowerCase()
    .normalize(
      "NFD",
    )
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .replace(
      /[^a-z0-9\s]/g,
      " ",
    )
    .replace(
      /\s+/g,
      " ",
    )
    .trim()
    .replace(
      /\bnya\b|\bnya\s/g,
      " ",
    )
    // Akhiran "-nya": "ginjalnya" -> "ginjal" ("hanya"/"punya" tetap).
    .replace(
      /\b(\w{3,})nya\b/g,
      "$1",
    )
    .replace(
      /\s+/g,
      " ",
    )
    .trim();
}
function levenshtein(
  a,
  b,
) {
  const m =
      a.length,
    n = b.length,
    d = Array.from(
      {
        length:
          m + 1,
      },
      (_, i) => [i],
    );
  for (
    let j = 1;
    j <= n;
    j++
  )
    d[0][j] = j;
  for (
    let i = 1;
    i <= m;
    i++
  )
    for (
      let j = 1;
      j <= n;
      j++
    )
      d[i][j] =
        Math.min(
          d[i - 1][
            j
          ] + 1,
          d[i][
            j - 1
          ] + 1,
          d[i - 1][
            j - 1
          ] +
            (a[
              i - 1
            ] ===
            b[j - 1]
              ? 0
              : 1),
        );
  return d[m][n];
}
function similarity(
  a,
  b,
) {
  return (
    1 -
    levenshtein(
      a,
      b,
    ) /
      Math.max(
        a.length,
        b.length,
        1,
      )
  );
}
/* Kemiripan token (Jaccard): "asap" vs "asap rokok" = 0.5, bukan 1. */
function tokenOverlap(
  a,
  b,
) {
  const A = new Set(
      a.split(" ").filter(Boolean),
    ),
    B = new Set(
      b.split(" ").filter(Boolean),
    );
  let shared = 0;
  A.forEach((t) => {
    if (B.has(t))
      shared++;
  });
  return (
    shared /
    Math.max(
      1,
      A.size + B.size - shared,
    )
  );
}
/* Toleransi salah ketik. Huruf awal tiap kata harus sama dan tiap kata
   harus cukup mirip, supaya "pirometer" tidak cocok ke "mikrometer" dan
   "microsoft edge" tidak cocok ke "microsoft excel". */
function typoScore(
  text,
  key,
) {
  const A = text.split(" "),
    B = key.split(" ");
  const wordsOk =
    A.length === B.length
      ? A.every(
          (w, i) =>
            w[0] === B[i][0] &&
            similarity(w, B[i]) >= 0.5,
        )
      : text[0] === key[0];
  return wordsOk
    ? similarity(text, key)
    : 0;
}
const MIN_FUZZY_LENGTH = 3,
  MATCH_THRESHOLD = 0.8;
/* Skor satu kata kunci: sama persis = 1; input pendek (mis. "hb", "tb") hanya boleh sama persis. */
function keyScore(
  text,
  key,
) {
  if (text === key)
    return 1;
  if (
    text.length < MIN_FUZZY_LENGTH ||
    key.length < MIN_FUZZY_LENGTH
  )
    return 0;
  let score = Math.max(
    typoScore(text, key),
    tokenOverlap(text, key),
  );
  // Input memuat kata kunci utuh, mis. "eritrosit dalam darah".
  if (
    key.length >= 4 &&
    ` ${text} `.includes(` ${key} `)
  )
    score = Math.max(score, 0.9);
  // Input awal kata yang terpotong, mis. "mitokon" (bukan potongan
  // tengah: "asma" tidak cocok ke "plasma"; kata utuh seperti
  // "termometer" tidak dianggap potongan "termometer raksa").
  if (
    text.length >= 4 &&
    ` ${key}`.includes(` ${text}`) &&
    !` ${key} `.includes(` ${text} `) &&
    text.length / key.length >= 0.6
  )
    score = Math.max(score, 0.85);
  return score;
}
/* Pemeriksaan gabungan: frasa, substring, token, dan typo ringan. */
function findMatch(
  input,
) {
  const text =
    normalizeText(input);
  if (!text)
    return null;
  const best =
    currentQuestion().answers.map(
      (answer) =>
        Math.max(
          ...answer.keywords
            .concat(answer.text)
            .map((key) =>
              keyScore(
                text,
                normalizeText(key),
              ),
            ),
        ),
    );
  const top = Math.max(...best);
  if (top < MATCH_THRESHOLD)
    return null;
  const winners = best.flatMap(
    (score, i) =>
      score === top ? [i] : [],
  );
  // Skor seri antar jawaban berarti ambigu: biar guru memilih manual.
  return winners.length === 1
    ? winners[0]
    : null;
}

/* Browser hanya mengizinkan audio setelah interaksi pengguna, jadi
   AudioContext dibuat otomatis pada klik/tombol keyboard pertama. */
function ensureAudio() {
  if (
    audioCtx &&
    audioCtx.state !==
      "suspended"
  )
    return;
  try {
    audioCtx =
      audioCtx ||
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();
    audioCtx.resume();
  } catch (e) {
    audioCtx = null;
  }
}
/* Tinggi panel guru dipakai sebagai ruang kosong di bawah halaman. */
function syncDockSpace() {
  document.documentElement.style.setProperty(
    "--dock-h",
    `${$("operatorDock").offsetHeight}px`,
  );
}
/* Kolom jawaban selalu tampil; yang disembunyikan hanya tombol-tombol guru. */
function toggleTools() {
  const tools = $(
      "operatorTools",
    ),
    btn = $(
      "toolsToggle",
    );
  tools.hidden =
    !tools.hidden;
  btn.textContent =
    tools.hidden
      ? "Tampilkan Tombol"
      : "Sembunyikan Tombol";
  btn.setAttribute(
    "aria-expanded",
    !tools.hidden,
  );
}
function tone(
  freq,
  start,
  duration,
  type = "sine",
  vol = 0.09,
) {
  if (!audioCtx)
    return;
  const osc =
      audioCtx.createOscillator(),
    gain =
      audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(
    freq,
    start,
  );
  gain.gain.setValueAtTime(
    vol,
    start,
  );
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    start +
      duration,
  );
  osc
    .connect(gain)
    .connect(
      audioCtx.destination,
    );
  osc.start(start);
  osc.stop(
    start +
      duration,
  );
}
function soundCorrect() {
  if (audioCtx) {
    const t =
      audioCtx.currentTime;
    tone(
      660,
      t,
      0.15,
      "sine",
    );
    tone(
      880,
      t + 0.12,
      0.25,
      "sine",
    );
  }
}
function soundWrong() {
  if (audioCtx) {
    const t =
      audioCtx.currentTime;
    tone(
      130,
      t,
      0.45,
      "sawtooth",
      0.12,
    );
    tone(
      95,
      t + 0.08,
      0.48,
      "square",
      0.06,
    );
  }
}
function soundWin() {
  if (audioCtx) {
    const t =
      audioCtx.currentTime;
    [
      523, 659, 784,
      1046,
    ].forEach(
      (f, i) =>
        tone(
          f,
          t +
            i *
              0.11,
          0.32,
          "triangle",
          0.1,
        ),
    );
  }
}

function notify(
  message,
) {
  $(
    "toast",
  ).textContent =
    message;
}
function currentQuestion() {
  return questionOrder[
    state
      .currentQuestionIndex
  ];
}
function render() {
  const q =
    currentQuestion();
  const totalQuestions =
    questionOrder.length;
  const currentNumber =
    state.currentQuestionIndex +
    1;
  const progress =
    (currentNumber /
      totalQuestions) *
    100;

  $(
    "questionCount",
  ).textContent =
    `Soal ${currentNumber} dari ${totalQuestions}`;
  $(
    "progressFill",
  ).style.width =
    `${progress}%`;
  $(
    "questionText",
  ).textContent =
    q.question;
  [
    "0",
    "1",
  ].forEach((i) => {
    const team =
        Number(i),
      panel = $(
        "teamPanel" +
          i,
      );
    panel.classList.toggle(
      "active",
      state.activeTeam ===
        team &&
        !state.gameFinished,
    );
    $(
      "score" + i,
    ).textContent =
      state.scores[
        team
      ];
    // Jangan timpa input yang sedang diketik (spasi/kursor bisa hilang).
    const nameInput = $(
      "teamName" + i,
    );
    if (
      document.activeElement !==
      nameInput
    )
      nameInput.value =
        state.teamNames[
          team
        ];
    $(
      "strikes" + i,
    ).innerHTML =
      Array.from(
        {
          length: 3,
        },
        (_, x) =>
          `<span class="strike ${team === state.activeTeam && x < state.strikes ? "on" : ""}">❌</span>`,
      ).join("");
  });
  // Kartu hanya dibuat ulang saat soal berganti; selebihnya cukup toggle
  // class agar transisi flip CSS benar-benar berjalan.
  const board = $(
    "answers",
  );
  if (
    board.dataset.questionId !==
    String(q.id)
  ) {
    board.dataset.questionId =
      q.id;
    board.innerHTML =
      q.answers
        .map(
          (a, i) => `
        <div class="answer-card" aria-label="Jawaban nomor ${i + 1}">
          <div class="answer-inner">
            <div class="answer-front"><span class="answer-number">${i + 1}</span><span class="answer-front-score">${a.score}</span></div>
            <div class="answer-back"><span class="answer-text"></span><span class="answer-score">${a.score}</span></div>
          </div>
        </div>`,
        )
        .join("");
  }
  board
    .querySelectorAll(
      ".answer-card",
    )
    .forEach((card, i) => {
      const open =
        state.revealedAnswers.includes(
          i,
        );
      card.classList.toggle(
        "revealed",
        open,
      );
      card.querySelector(
        ".answer-text",
      ).textContent = open
        ? q.answers[i].text
        : "";
    });
  renderPicker();
}
function renderPicker() {
  $(
    "pickerButtons",
  ).innerHTML =
    currentQuestion()
      .answers.map(
        (a, i) =>
          `<button class="button pick-answer" type="button" data-pick="${i}" ${state.revealedAnswers.includes(i) ? "disabled" : ""}>${i + 1}</button>`,
      )
      .join("");
}
function showPoints(
  points,
) {
  const el = $(
    "points" +
      state.activeTeam,
  );
  el.textContent = `+${points} POIN!`;
  el.classList.remove(
    "show",
  );
  void el.offsetWidth;
  el.classList.add(
    "show",
  );
}
function revealAnswer(
  index,
  award = true,
) {
  if (
    state.gameFinished
  )
    return;
  if (
    state.revealedAnswers.includes(
      index,
    )
  ) {
    notify(
      "Jawaban sudah terbuka.",
    );
    return;
  }
  const answer =
    currentQuestion()
      .answers[
      index
    ];
  state.revealedAnswers.push(
    index,
  );
  if (award) {
    state.scores[
      state.activeTeam
    ] +=
      answer.score;
    showPoints(
      answer.score,
    );
    soundCorrect();
    notify(
      `Benar! +${answer.score} poin untuk ${state.teamNames[state.activeTeam]}.`,
    );
  } else
    notify(
      "Jawaban dibuka tanpa poin.",
    );
  $(
    "answerInput",
  ).value = "";
  render();
}
function wrongAnswer() {
  if (
    state.gameFinished
  )
    return;
  if (
    state.strikes >=
    3
  ) {
    notify(
      "Giliran sudah habis. Ganti tim terlebih dahulu.",
    );
    return;
  }
  state.strikes++;
  soundWrong();
  $(
    "strikeOverlay",
  ).classList.remove(
    "show",
  );
  void $(
    "strikeOverlay",
  ).offsetWidth;
  $(
    "strikeOverlay",
  ).classList.add(
    "show",
  );
  if (
    state.strikes ===
    3
  ) {
    notify(
      `Tiga kesalahan! Giliran ${state.teamNames[state.activeTeam]} habis. Giliran dialihkan.`,
    );
    render();
    strikeTimer = setTimeout(
      () => {
        strikeTimer = null;
        state.activeTeam =
          state.activeTeam ===
          0
            ? 1
            : 0;
        state.strikes = 0;
        render();
      },
      900,
    );
  } else {
    notify(
      `Salah. Kesalahan ${state.strikes} dari 3.`,
    );
    render();
  }
}
function checkAnswer() {
  const raw = $(
    "answerInput",
  ).value;
  if (!raw.trim()) {
    notify(
      "Ketik jawaban peserta terlebih dahulu.",
    );
    $(
      "answerInput",
    ).focus();
    return;
  }
  const match =
    findMatch(raw);
  // Tidak cocok dengan jawaban mana pun: langsung dihitung salah (X).
  if (
    match === null
  ) {
    $(
      "answerInput",
    ).value = "";
    wrongAnswer();
    return;
  }
  revealAnswer(
    match,
    true,
  );
}
function switchTeam() {
  if (
    !state.gameFinished
  ) {
    cancelStrikeTimer();
    state.activeTeam =
      state.activeTeam ===
      0
        ? 1
        : 0;
    state.strikes = 0;
    notify(
      `Giliran ${state.teamNames[state.activeTeam]}.`,
    );
    render();
  }
}
function revealAll() {
  if (
    state.gameFinished
  )
    return;
  state.revealedAnswers =
    currentQuestion().answers.map(
      (_, i) => i,
    );
  notify(
    "Semua jawaban dibuka tanpa penambahan poin.",
  );
  render();
}
function nextQuestion() {
  if (
    state.gameFinished
  )
    return;
  cancelStrikeTimer();
  if (
    state.currentQuestionIndex ===
    questionOrder.length -
      1
  ) {
    finishGame();
    return;
  }
  state.currentQuestionIndex++;
  state.strikes = 0;
  state.revealedAnswers =
    [];
  $(
    "answerInput",
  ).value = "";
  $(
    "manualPicker",
  ).classList.remove(
    "open",
  );
  notify(
    "Soal berikutnya dimulai.",
  );
  render();
  $(
    "answerInput",
  ).focus();
}
function resetGame() {
  // Acak ulang soal setiap game baru
  cancelStrikeTimer();
  shuffleQuestions();

  state.currentQuestionIndex = 0;
  state.scores = [
    0, 0,
  ];
  state.activeTeam = 0;
  state.strikes = 0;
  state.revealedAnswers =
    [];
  state.gameFinished = false;

  $(
    "endModal",
  ).classList.remove(
    "open",
  );

  clearInterval(
    fireworkTimer,
  );

  $(
    "answerInput",
  ).value = "";

  notify(
    "Game direset dan soal diacak. Selamat bermain!",
  );

  render();

  $(
    "answerInput",
  ).focus();
}
function finishGame() {
  state.gameFinished = true;
  const [a, b] =
    state.scores;
  $(
    "finalName0",
  ).textContent =
    state.teamNames[0];
  $(
    "finalName1",
  ).textContent =
    state.teamNames[1];
  $(
    "finalScore0",
  ).textContent = a;
  $(
    "finalScore1",
  ).textContent = b;
  $(
    "winnerText",
  ).textContent =
    a === b
      ? "HASIL SERI!"
      : `${state.teamNames[a > b ? 0 : 1]} MENANG!`;
  $(
    "totalPoints",
  ).textContent =
    `Total poin keseluruhan: ${a + b}`;
  $(
    "endModal",
  ).classList.add(
    "open",
  );
  soundWin();
  render();
  launchFireworks();
}
/* Kembang api sederhana berbasis Canvas, tanpa aset eksternal. */
function launchFireworks() {
  const canvas = $(
      "fireworks",
    ),
    ctx =
      canvas.getContext(
        "2d",
      );
  canvas.width =
    canvas.clientWidth *
    devicePixelRatio;
  canvas.height =
    canvas.clientHeight *
    devicePixelRatio;
  ctx.scale(
    devicePixelRatio,
    devicePixelRatio,
  );
  const particles =
    [];
  function burst() {
    const x =
        70 +
        Math.random() *
          (canvas.clientWidth -
            140),
      y =
        50 +
        Math.random() *
          (canvas.clientHeight *
            0.45);
    for (
      let i = 0;
      i < 28;
      i++
    ) {
      const angle =
          (Math.PI *
            2 *
            i) /
          28,
        speed =
          1 +
          Math.random() *
            2.6;
      particles.push(
        {
          x,
          y,
          vx:
            Math.cos(
              angle,
            ) *
            speed,
          vy:
            Math.sin(
              angle,
            ) *
            speed,
          life: 42,
          color: [
            "#ffd52c",
            "#ffffff",
            "#55b6ff",
            "#ff6680",
          ][i % 4],
        },
      );
    }
  }
  burst();
  fireworkTimer =
    setInterval(
      burst,
      620,
    );
  (function draw() {
    ctx.clearRect(
      0,
      0,
      canvas.clientWidth,
      canvas.clientHeight,
    );
    // Iterasi mundur supaya splice tidak melompati partikel berikutnya.
    for (
      let i =
        particles.length - 1;
      i >= 0;
      i--
    ) {
      const p =
        particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.045;
      p.life--;
      ctx.globalAlpha =
        Math.max(
          p.life /
            42,
          0,
        );
      ctx.fillStyle =
        p.color;
      ctx.fillRect(
        p.x,
        p.y,
        3,
        3,
      );
      if (
        p.life <=
        0
      )
        particles.splice(
          i,
          1,
        );
    }
    ctx.globalAlpha = 1;
    if (
      $(
        "endModal",
      ).classList.contains(
        "open",
      )
    )
      requestAnimationFrame(
        draw,
      );
  })();
}

/* Layar pilih paket soal (kelas + mapel) sebelum permainan. */
const ROMAN = {
  7: "VII",
  8: "VIII",
};
function renderSetupScreen() {
  const kelasList = [
    ...new Set(
      questionSets.map(
        (set) => set.kelas,
      ),
    ),
  ];
  $(
    "setChoices",
  ).innerHTML = kelasList
    .map(
      (kelas) => `
      <section class="set-group" aria-label="Kelas ${ROMAN[kelas]}">
        <h3 class="set-group-title">Kelas ${ROMAN[kelas]}</h3>
        <div class="set-row">${questionSets
          .filter((set) => set.kelas === kelas)
          .map(
            (set) => `
          <button class="set-choice" type="button" data-set="${set.key}">
            <span class="set-mapel">${set.mapel}</span>
            <span class="set-topik">${set.topik}</span>
            <span class="set-count">${set.questions.length} soal</span>
          </button>`,
          )
          .join("")}
        </div>
      </section>`,
    )
    .join("");
}
/* Selama layar pilih soal terbuka, isi halaman di belakangnya tidak bisa difokus/diklik. */
function setGameInert(inert) {
  document.querySelector(
    ".app-shell",
  ).inert = inert;
  $(
    "operatorDock",
  ).inert = inert;
}
function openSetup() {
  cancelStrikeTimer();
  setGameInert(true);
  clearInterval(
    fireworkTimer,
  );
  $(
    "endModal",
  ).classList.remove(
    "open",
  );
  $(
    "setupScreen",
  ).classList.add(
    "open",
  );
  const first =
    document.querySelector(
      ".set-choice",
    );
  if (first)
    first.focus();
}
function chooseSet(key) {
  state.setKey = key;
  const set =
      currentSet(),
    label = `${set.mapel} Kelas ${ROMAN[set.kelas]}`;
  $(
    "gameTitle",
  ).textContent = `FAMILY 100 – ${label.toUpperCase()}`;
  $(
    "gameSubtitle",
  ).textContent =
    set.topik;
  $(
    "footerText",
  ).textContent = `Mode Operator Guru • ${label}`;
  document.title = `Family 100 – ${label}`;
  // Kartu lama harus dibuat ulang walau id soal kebetulan sama.
  delete $("answers")
    .dataset.questionId;
  $(
    "setupScreen",
  ).classList.remove(
    "open",
  );
  setGameInert(false);
  resetGame();
}
function backToSetup() {
  const inProgress =
    !state.gameFinished &&
    (state.scores[0] ||
      state.scores[1] ||
      state.revealedAnswers
        .length ||
      state.currentQuestionIndex);
  if (
    inProgress &&
    !confirm(
      "Kembali ke pilihan soal? Skor permainan ini akan hilang.",
    )
  )
    return;
  openSetup();
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderSetupScreen();
    $(
      "setChoices",
    ).onclick = (e) => {
      const button =
        e.target.closest(
          "[data-set]",
        );
      if (button)
        chooseSet(
          button.dataset.set,
        );
    };
    $(
      "setupBtn",
    ).onclick =
      backToSetup;
    $(
      "modalSetupBtn",
    ).onclick =
      openSetup;
    openSetup();
    $(
      "checkBtn",
    ).onclick =
      checkAnswer;
    $(
      "toolsToggle",
    ).onclick =
      toggleTools;
    ["pointerdown", "keydown"].forEach(
      (type) =>
        document.addEventListener(
          type,
          ensureAudio,
          true,
        ),
    );
    new ResizeObserver(
      syncDockSpace,
    ).observe(
      $("operatorDock"),
    );
    $(
      "wrongBtn",
    ).onclick =
      wrongAnswer;
    $(
      "switchBtn",
    ).onclick =
      switchTeam;
    $(
      "resetXBtn",
    ).onclick =
      () => {
        cancelStrikeTimer();
        state.strikes = 0;
        notify(
          "Tanda X direset.",
        );
        render();
      };
    $(
      "revealAllBtn",
    ).onclick =
      revealAll;
    $(
      "nextBtn",
    ).onclick =
      nextQuestion;
    $(
      "resetBtn",
    ).onclick =
      resetGame;
    $(
      "modalResetBtn",
    ).onclick =
      resetGame;
    $(
      "manualBtn",
    ).onclick =
      () => {
        $(
          "manualPicker",
        ).classList.toggle(
          "open",
        );
        renderPicker();
      };
    $(
      "pickerButtons",
    ).onclick = (
      e,
    ) => {
      const button =
        e.target.closest(
          "[data-pick]",
        );
      if (button)
        revealAnswer(
          Number(
            button
              .dataset
              .pick,
          ),
          true,
        );
    };
    $(
      "answerInput",
    ).addEventListener(
      "keydown",
      (e) => {
        if (
          e.key ===
          "Enter"
        ) {
          e.preventDefault();
          checkAnswer();
        }
      },
    );
    [0, 1].forEach((i) => {
      const input = $(
        "teamName" + i,
      );
      // Simpan nama saat diketik, tapi biarkan isi input apa adanya
      // (spasi, kosong) sampai fokus pindah.
      input.addEventListener(
        "input",
        () => {
          state.teamNames[i] =
            input.value
              .trim()
              .toUpperCase() ||
            `TIM ${i + 1}`;
        },
      );
      input.addEventListener(
        "blur",
        () => {
          input.value =
            state.teamNames[i];
        },
      );
    });
  },
);
