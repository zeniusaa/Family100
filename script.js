/* Bank soal IPA Kelas VIII: kode dan kata kunci hanya dipakai operator/fuzzy matching. */
const questionBank =
  [
    {
      id: 1,
      question:
        "Sebutkan organel yang berperan dalam aktivitas dan fungsi sel!",
      answers: [
        {
          answerCode: 1,
          text: "Inti sel",
          score: 100,
          keywords:
            [
              "inti sel",
              "nukleus",
              "nucleus",
              "inti",
              "pusat pengendali sel",
            ],
        },
        {
          answerCode: 2,
          text: "Ribosom",
          score: 80,
          keywords:
            [
              "ribosom",
              "ribosome",
              "pembentuk protein",
              "sintesis protein",
              "organel ribosom",
            ],
        },
        {
          answerCode: 3,
          text: "Badan Golgi",
          score: 60,
          keywords:
            [
              "badan golgi",
              "golgi",
              "aparatus golgi",
              "pengeluaran zat",
              "organel golgi",
            ],
        },
        {
          answerCode: 4,
          text: "Mitokondria",
          score: 40,
          keywords:
            [
              "mitokondria",
              "mitochondria",
              "penghasil energi",
              "respirasi seluler",
              "atp",
            ],
        },
        {
          answerCode: 5,
          text: "Vakuola",
          score: 20,
          keywords:
            [
              "vakuola",
              "vacuole",
              "penyimpanan air",
              "cadangan makanan",
              "zat buangan",
            ],
        },
      ],
    },

    {
      id: 2,
      question:
        "Sebutkan contoh organel yang berperan khusus pada sel tumbuhan!",
      answers: [
        {
          answerCode: 1,
          text: "Kloroplas",
          score: 100,
          keywords:
            [
              "kloroplas",
              "chloroplast",
              "fotosintesis",
              "plastida hijau",
              "organel fotosintesis",
            ],
        },
        {
          answerCode: 2,
          text: "Kromoplas",
          score: 80,
          keywords:
            [
              "kromoplas",
              "chromoplast",
              "warna",
              "plastida warna",
              "pemberi warna",
            ],
        },
        {
          answerCode: 3,
          text: "Leukoplas",
          score: 60,
          keywords:
            [
              "leukoplas",
              "leucoplast",
              "cadangan makanan",
              "plastida penyimpan",
              "penyimpanan makanan",
            ],
        },
        {
          answerCode: 4,
          text: "Vakuola",
          score: 40,
          keywords:
            [
              "vakuola",
              "vacuole",
              "getah sel",
              "penyimpanan air",
              "tonoplas",
            ],
        },
        {
          answerCode: 5,
          text: "Ribosom",
          score: 20,
          keywords:
            [
              "ribosom",
              "ribosome",
              "pembentukan protein",
              "sintesis protein",
              "organel protein",
            ],
        },
      ],
    },

    {
      id: 3,
      question:
        "Sebutkan spesialisasi sel yang terdapat pada hewan!",
      answers: [
        {
          answerCode: 1,
          text: "Sel darah merah",
          score: 100,
          keywords:
            [
              "sel darah merah",
              "eritrosit",
              "eritosit",
              "red blood cell",
              "mengangkut oksigen",
            ],
        },
        {
          answerCode: 2,
          text: "Sel darah putih",
          score: 80,
          keywords:
            [
              "sel darah putih",
              "leukosit",
              "lekosit",
              "white blood cell",
              "melawan penyakit",
            ],
        },
        {
          answerCode: 3,
          text: "Trombosit",
          score: 60,
          keywords:
            [
              "trombosit",
              "trombosid",
              "platelet",
              "keping darah",
              "pembekuan darah",
            ],
        },
        {
          answerCode: 4,
          text: "Sel saraf",
          score: 40,
          keywords:
            [
              "sel saraf",
              "neuron",
              "saraf",
              "menghantarkan informasi",
              "rangsangan",
            ],
        },
        {
          answerCode: 5,
          text: "Sel otot",
          score: 20,
          keywords:
            [
              "sel otot",
              "otot rangka",
              "otot polos",
              "otot jantung",
              "pergerakan",
            ],
        },
      ],
    },

    {
      id: 4,
      question:
        "Sebutkan spesialisasi sel yang terdapat pada tumbuhan!",
      answers: [
        {
          answerCode: 1,
          text: "Sel rambut akar",
          score: 100,
          keywords:
            [
              "sel rambut akar",
              "rambut akar",
              "root hair",
              "penyerapan air",
              "penyerapan mineral",
            ],
        },
        {
          answerCode: 2,
          text: "Sel mesofil daun",
          score: 80,
          keywords:
            [
              "sel mesofil",
              "mesofil daun",
              "palisade",
              "spons",
              "fotosintesis",
            ],
        },
        {
          answerCode: 3,
          text: "Sel penjaga stomata",
          score: 60,
          keywords:
            [
              "sel penjaga stomata",
              "sel penjaga",
              "stomata",
              "guard cell",
              "pertukaran gas",
            ],
        },
        {
          answerCode: 4,
          text: "Xilem",
          score: 40,
          keywords:
            [
              "xilem",
              "xylem",
              "jaringan xilem",
              "mengangkut air",
              "mengangkut mineral",
            ],
        },
        {
          answerCode: 5,
          text: "Floem",
          score: 20,
          keywords:
            [
              "floem",
              "phloem",
              "jaringan floem",
              "hasil fotosintesis",
              "mengangkut hasil fotosintesis",
            ],
        },
      ],
    },
    //

    {
      id: 5,
      question:
        "Sebutkan organ yang termasuk dalam sistem pencernaan manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Mulut",
          score: 100,
          keywords:
            [
              "mulut",
              "rongga mulut",
              "oral",
              "mouth",
              "tempat masuk makanan",
            ],
        },
        {
          answerCode: 2,
          text: "Lambung",
          score: 80,
          keywords:
            [
              "lambung",
              "maag",
              "stomach",
              "asam lambung",
              "organ lambung",
            ],
        },
        {
          answerCode: 3,
          text: "Usus halus",
          score: 60,
          keywords:
            [
              "usus halus",
              "usus kecil",
              "small intestine",
              "duodenum",
              "jejunum",
              "ileum",
            ],
        },
        {
          answerCode: 4,
          text: "Usus besar",
          score: 40,
          keywords:
            [
              "usus besar",
              "kolon",
              "colon",
              "large intestine",
              "penyerapan air",
            ],
        },
        {
          answerCode: 5,
          text: "Esofagus",
          score: 20,
          keywords:
            [
              "esofagus",
              "esophagus",
              "kerongkongan",
              "saluran makanan",
              "gerak peristaltik",
            ],
        },
      ],
    },

    {
      id: 6,
      question:
        "Sebutkan organ yang termasuk dalam sistem pernapasan manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Hidung",
          score: 100,
          keywords:
            [
              "hidung",
              "rongga hidung",
              "nose",
              "organ hidung",
              "saluran pernapasan",
            ],
        },
        {
          answerCode: 2,
          text: "Trakea",
          score: 80,
          keywords:
            [
              "trakea",
              "trachea",
              "batang tenggorokan",
              "saluran napas",
              "trakhea",
            ],
        },
        {
          answerCode: 3,
          text: "Bronkus",
          score: 60,
          keywords:
            [
              "bronkus",
              "bronchus",
              "cabang trakea",
              "saluran bronkus",
              "bronchi",
            ],
        },
        {
          answerCode: 4,
          text: "Alveolus",
          score: 40,
          keywords:
            [
              "alveolus",
              "alveoli",
              "gelembung paru",
              "pertukaran gas",
              "tempat pertukaran gas",
            ],
        },
        {
          answerCode: 5,
          text: "Paru-paru",
          score: 20,
          keywords:
            [
              "paru-paru",
              "paru paru",
              "paru",
              "lungs",
              "organ paru",
            ],
        },
      ],
    },

    {
      id: 7,
      question:
        "Sebutkan organ atau bagian yang berperan dalam mekanisme pernapasan!",
      answers: [
        {
          answerCode: 1,
          text: "Diafragma",
          score: 100,
          keywords:
            [
              "diafragma",
              "diaphragm",
              "otot diafragma",
              "pernapasan perut",
              "kontraksi diafragma",
            ],
        },
        {
          answerCode: 2,
          text: "Otot antartulang rusuk",
          score: 80,
          keywords:
            [
              "otot antartulang rusuk",
              "otot antar tulang rusuk",
              "interkostal",
              "otot dada",
              "pernapasan dada",
            ],
        },
        {
          answerCode: 3,
          text: "Rongga dada",
          score: 60,
          keywords:
            [
              "rongga dada",
              "dada",
              "cavum thorax",
              "thoracic cavity",
              "ruang dada",
            ],
        },
        {
          answerCode: 4,
          text: "Paru-paru",
          score: 40,
          keywords:
            [
              "paru-paru",
              "paru paru",
              "paru",
              "lungs",
              "organ pernapasan",
            ],
        },
        {
          answerCode: 5,
          text: "Alveolus",
          score: 20,
          keywords:
            [
              "alveolus",
              "alveoli",
              "pertukaran gas",
              "o2",
              "co2",
            ],
        },
      ],
    },

    {
      id: 8,
      question:
        "Sebutkan komponen darah pada manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Plasma",
          score: 100,
          keywords:
            [
              "plasma",
              "plasma darah",
              "cairan darah",
              "blood plasma",
              "bagian cair darah",
            ],
        },
        {
          answerCode: 2,
          text: "Eritrosit",
          score: 80,
          keywords:
            [
              "eritrosit",
              "sel darah merah",
              "eritosit",
              "red blood cell",
              "hemoglobin",
            ],
        },
        {
          answerCode: 3,
          text: "Leukosit",
          score: 60,
          keywords:
            [
              "leukosit",
              "sel darah putih",
              "lekosit",
              "white blood cell",
              "kekebalan",
            ],
        },
        {
          answerCode: 4,
          text: "Trombosit",
          score: 40,
          keywords:
            [
              "trombosit",
              "trombosid",
              "platelet",
              "keping darah",
              "pembekuan",
            ],
        },
        {
          answerCode: 5,
          text: "Hemoglobin",
          score: 20,
          keywords:
            [
              "hemoglobin",
              "haemoglobin",
              "hb",
              "zat warna darah",
              "protein darah",
            ],
        },
      ],
    },

    {
      id: 9,
      question:
        "Sebutkan jenis pembuluh darah pada manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Arteri",
          score: 100,
          keywords:
            [
              "arteri",
              "artery",
              "pembuluh nadi",
              "nadi",
              "pembuluh darah arteri",
            ],
        },
        {
          answerCode: 2,
          text: "Vena",
          score: 80,
          keywords:
            [
              "vena",
              "vein",
              "pembuluh balik",
              "pembuluh vena",
              "pembuluh menuju jantung",
            ],
        },
        {
          answerCode: 3,
          text: "Kapiler",
          score: 60,
          keywords:
            [
              "kapiler",
              "capillary",
              "pembuluh kapiler",
              "arteriola",
              "venula",
            ],
        },
        {
          answerCode: 4,
          text: "Arteriola",
          score: 40,
          keywords:
            [
              "arteriola",
              "arteriole",
              "cabang arteri",
              "pembuluh kecil",
              "arteri kecil",
            ],
        },
        {
          answerCode: 5,
          text: "Venula",
          score: 20,
          keywords:
            [
              "venula",
              "venule",
              "cabang vena",
              "pembuluh kecil",
              "vena kecil",
            ],
        },
      ],
    },

    {
      id: 10,
      question:
        "Sebutkan organ yang berperan dalam sistem ekskresi manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Ginjal",
          score: 100,
          keywords:
            [
              "ginjal",
              "kidney",
              "buah pinggang",
              "organ ginjal",
              "pembentukan urin",
            ],
        },
        {
          answerCode: 2,
          text: "Paru-paru",
          score: 80,
          keywords:
            [
              "paru-paru",
              "paru paru",
              "paru",
              "lungs",
              "mengeluarkan co2",
            ],
        },
        {
          answerCode: 3,
          text: "Kulit",
          score: 60,
          keywords:
            [
              "kulit",
              "skin",
              "keringat",
              "kelenjar keringat",
              "organ kulit",
            ],
        },
        {
          answerCode: 4,
          text: "Hati",
          score: 40,
          keywords:
            [
              "hati",
              "liver",
              "hepar",
              "empedu",
              "bilirubin",
            ],
        },
        {
          answerCode: 5,
          text: "Usus besar",
          score: 20,
          keywords:
            [
              "Usus besar",
              "usus",
              "Usus halus",
            ],
        },
      ],
    },

    {
      id: 11,
      question:
        "Sebutkan zat sisa metabolisme dan organ yang mengeluarkannya!",
      answers: [
        {
          answerCode: 1,
          text: "Urea",
          score: 100,
          keywords:
            [
              "urea",
              "zat urea",
              "sisa metabolisme",
              "limbah nitrogen",
              "ginjal",
            ],
        },
        {
          answerCode: 2,
          text: "Karbon dioksida",
          score: 80,
          keywords:
            [
              "karbon dioksida",
              "karbondioksida",
              "co2",
              "gas co2",
              "paru-paru",
            ],
        },
        {
          answerCode: 3,
          text: "Kelebihan air",
          score: 60,
          keywords:
            [
              "kelebihan air",
              "air berlebih",
              "air",
              "urin",
              "keringat",
            ],
        },
        {
          answerCode: 4,
          text: "Garam",
          score: 40,
          keywords:
            [
              "garam",
              "kelebihan garam",
              "garam mineral",
              "keringat",
              "urin",
            ],
        },
        {
          answerCode: 5,
          text: "Bilirubin",
          score: 20,
          keywords:
            [
              "bilirubin",
              "zat bilirubin",
              "empedu",
              "hati",
              "feses",
            ],
        },
      ],
    },

    {
      id: 12,
      question:
        "Sebutkan zat atau nutrisi yang penting bagi tubuh!",
      answers: [
        {
          answerCode: 1,
          text: "Air",
          score: 100,
          keywords:
            [
              "air",
              "water",
              "air tubuh",
              "cairan",
              "cairan tubuh",
            ],
        },
        {
          answerCode: 2,
          text: "Vitamin A",
          score: 80,
          keywords:
            [
              "vitamin a",
              "vit a",
              "vitamin a mata",
              "kesehatan mata",
              "vitamin",
            ],
        },
        {
          answerCode: 3,
          text: "Vitamin C",
          score: 60,
          keywords:
            [
              "vitamin c",
              "vit c",
              "asam askorbat",
              "penyembuhan luka",
              "kekebalan",
            ],
        },
        {
          answerCode: 4,
          text: "Zat besi",
          score: 40,
          keywords:
            [
              "zat besi",
              "besi",
              "fe",
              "iron",
              "hemoglobin",
            ],
        },
        {
          answerCode: 5,
          text: "Kalsium",
          score: 20,
          keywords:
            [
              "kalsium",
              "calcium",
              "ca",
              "tulang",
              "gigi",
            ],
        },
      ],
    },

    {
      id: 13,
      question:
        "Sebutkan gangguan yang dapat terjadi pada sistem peredaran darah!",
      answers: [
        {
          answerCode: 1,
          text: "Anemia",
          score: 100,
          keywords:
            [
              "anemia",
              "kurang darah",
              "kekurangan hemoglobin",
              "darah rendah",
              "penyakit anemia",
            ],
        },
        {
          answerCode: 2,
          text: "Hipertensi",
          score: 80,
          keywords:
            [
              "hipertensi",
              "tekanan darah tinggi",
              "darah tinggi",
              "hypertension",
              "tekanan tinggi",
            ],
        },
        {
          answerCode: 3,
          text: "Hipotensi",
          score: 60,
          keywords:
            [
              "hipotensi",
              "tekanan darah rendah",
              "darah rendah",
              "hypotension",
              "tekanan rendah",
            ],
        },
        {
          answerCode: 4,
          text: "Aterosklerosis",
          score: 40,
          keywords:
            [
              "aterosklerosis",
              "atherosclerosis",
              "penyempitan pembuluh",
              "plak",
              "pembuluh darah",
            ],
        },
        {
          answerCode: 5,
          text: "Stroke",
          score: 20,
          keywords:
            [
              "stroke",
              "serangan stroke",
              "gangguan peredaran darah",
              "pembuluh darah otak",
              "penyakit stroke",
            ],
        },
      ],
    },

    {
      id: 14,
      question:
        "Sebutkan gangguan yang dapat terjadi pada sistem pernapasan manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Asma",
          score: 100,
          keywords:
            [
              "asma",
              "sesak napas",
              "penyempitan saluran pernapasan",
            ],
        },
        {
          answerCode: 2,
          text: "Bronkitis",
          score: 80,
          keywords:
            [
              "bronkitis",
              "radang bronkus",
              "peradangan bronkus",
            ],
        },
        {
          answerCode: 3,
          text: "Pneumonia",
          score: 60,
          keywords:
            [
              "pneumonia",
              "radang paru-paru",
              "infeksi paru-paru",
            ],
        },
        {
          answerCode: 4,
          text: "Tuberkulosis",
          score: 40,
          keywords:
            [
              "tuberkulosis",
              "tbc",
              "tb",
              "tbc paru",
            ],
        },
        {
          answerCode: 5,
          text: "Influenza",
          score: 20,
          keywords:
            [
              "influenza",
              "flu",
              "flu biasa",
            ],
        },
      ],
    },

    {
      id: 15,
      question:
        "Sebutkan gangguan yang dapat terjadi pada sistem pencernaan manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Diare",
          score: 100,
          keywords:
            [
              "diare",
              "mencret",
              "buang air besar cair",
            ],
        },
        {
          answerCode: 2,
          text: "Sembelit",
          score: 80,
          keywords:
            [
              "sembelit",
              "konstipasi",
              "susah buang air besar",
              "susah bab",
            ],
        },
        {
          answerCode: 3,
          text: "Gastritis",
          score: 60,
          keywords:
            [
              "gastritis",
              "maag",
              "radang lambung",
              "sakit maag",
            ],
        },
        {
          answerCode: 4,
          text: "Apendisitis",
          score: 40,
          keywords:
            [
              "apendisitis",
              "radang usus buntu",
              "usus buntu",
            ],
        },
        {
          answerCode: 5,
          text: "Karies gigi",
          score: 20,
          keywords:
            [
              "karies gigi",
              "karies",
              "gigi berlubang",
              "gigi rusak",
            ],
        },
      ],
    },

    {
      id: 16,
      question:
        "Sebutkan gangguan yang dapat terjadi pada sistem ekskresi manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Batu ginjal",
          score: 100,
          keywords:
            [
              "batu ginjal",
              "batu pada ginjal",
              "batu saluran kemih",
            ],
        },
        {
          answerCode: 2,
          text: "Nefritis",
          score: 80,
          keywords:
            [
              "nefritis",
              "radang ginjal",
              "peradangan ginjal",
            ],
        },
        {
          answerCode: 3,
          text: "Gagal ginjal",
          score: 60,
          keywords:
            [
              "gagal ginjal",
              "ginjal gagal",
              "kerusakan ginjal",
            ],
        },
        {
          answerCode: 4,
          text: "Albuminuria",
          score: 40,
          keywords:
            [
              "albuminuria",
              "albumin dalam urine",
              "protein dalam urine",
            ],
        },
        {
          answerCode: 5,
          text: "Hematuria",
          score: 20,
          keywords:
            [
              "hematuria",
              "darah dalam urine",
              "darah dalam urin",
              "urin berdarah",
            ],
        },
      ],
    },

    {
      id: 17,
      question:
        "Sebutkan hal-hal yang dapat menyebabkan gangguan pada sistem pernapasan manusia!",
      answers: [
        {
          answerCode: 1,
          text: "Merokok",
          score: 100,
          keywords:
            [
              "merokok",
              "rokok",
              "asap rokok",
            ],
        },
        {
          answerCode: 2,
          text: "Polusi udara",
          score: 80,
          keywords:
            [
              "polusi udara",
              "pencemaran udara",
              "udara tercemar",
            ],
        },
        {
          answerCode: 3,
          text: "Asap kendaraan",
          score: 60,
          keywords:
            [
              "asap kendaraan",
              "asap knalpot",
              "knalpot",
            ],
        },
        {
          answerCode: 4,
          text: "Debu",
          score: 40,
          keywords:
            [
              "debu",
              "paparan debu",
            ],
        },
        {
          answerCode: 5,
          text: "Asap pembakaran",
          score: 20,
          keywords:
            [
              "asap pembakaran",
              "asap",
              "pembakaran sampah",
            ],
        },
      ],
    },

    {
      id: 18,
      question:
        "Sebutkan tingkatan organisasi kehidupan dalam ekologi dari yang paling kecil hingga paling besar!",
      answers: [
        {
          answerCode: 1,
          text: "Populasi",
          score: 100,
          keywords:
            [
              "populasi",
              "population",
              "kumpulan individu sejenis",
            ],
        },
        {
          answerCode: 2,
          text: "Komunitas",
          score: 80,
          keywords:
            [
              "komunitas",
              "community",
              "kumpulan populasi",
              "berbagai populasi",
            ],
        },
        {
          answerCode: 3,
          text: "Ekosistem",
          score: 60,
          keywords:
            [
              "ekosistem",
              "ecosystem",
              "makhluk hidup dan lingkungan",
              "interaksi makhluk hidup",
            ],
        },
        {
          answerCode: 4,
          text: "Bioma",
          score: 40,
          keywords:
            [
              "bioma",
              "biome",
              "kumpulan ekosistem",
              "wilayah luas",
            ],
        },
        {
          answerCode: 5,
          text: "Biosfer",
          score: 20,
          keywords:
            [
              "biosfer",
              "biosphere",
              "seluruh ekosistem",
              "kehidupan di bumi",
            ],
        },
      ],
    },
  ];

let questionOrder =
  [];

function shuffleQuestions() {
  questionOrder = [
    ...questionBank,
  ];
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
  soundEnabled: false,
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
    null;

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
function tokenOverlap(
  a,
  b,
) {
  const A = new Set(
      a
        .split(" ")
        .filter(
          Boolean,
        ),
    ),
    B = new Set(
      b
        .split(" ")
        .filter(
          Boolean,
        ),
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
      Math.min(
        A.size,
        B.size,
      ),
    )
  );
}
/* Pemeriksaan gabungan: frasa, substring, token, dan typo ringan. */
function findMatch(
  input,
) {
  const text =
    normalizeText(
      input,
    );
  if (!text)
    return null;
  const answers =
    questionBank[
      state
        .currentQuestionIndex
    ].answers;
  let best = null,
    bestScore = 0;
  answers.forEach(
    (
      answer,
      index,
    ) =>
      answer.keywords
        .concat(
          answer.text,
        )
        .forEach(
          (key) => {
            const k =
              normalizeText(
                key,
              );
            let score =
              similarity(
                text,
                k,
              );
            if (
              text.includes(
                k,
              ) ||
              k.includes(
                text,
              )
            )
              score =
                Math.max(
                  score,
                  0.9,
                );
            score =
              Math.max(
                score,
                tokenOverlap(
                  text,
                  k,
                ),
              );
            if (
              score >
              bestScore
            ) {
              bestScore =
                score;
              best =
                index;
            }
          },
        ),
  );
  return bestScore >=
    0.72
    ? best
    : null;
}

/* Audio Web Audio API hanya berjalan setelah interaksi pengguna. */
function enableSound() {
  try {
    audioCtx =
      audioCtx ||
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();
    audioCtx.resume();
    state.soundEnabled = true;
    $(
      "soundBtn",
    ).textContent =
      "Suara Aktif ✓";
    notify(
      "Efek suara aktif.",
    );
  } catch (e) {
    notify(
      "Suara tidak tersedia di browser ini.",
    );
  }
}
function tone(
  freq,
  start,
  duration,
  type = "sine",
  vol = 0.09,
) {
  if (
    !state.soundEnabled ||
    !audioCtx
  )
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
    $(
      "teamName" +
        i,
    ).value =
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
  $(
    "answers",
  ).innerHTML =
    q.answers
      .map(
        (a, i) => `
        <div class="answer-card ${state.revealedAnswers.includes(i) ? "revealed" : ""}" aria-label="Jawaban nomor ${i + 1}">
          <div class="answer-inner">
            <div class="answer-front"><span class="answer-number">${i + 1}</span><span class="answer-front-score">${a.score}</span></div>
            <div class="answer-back"><span class="answer-text">${state.revealedAnswers.includes(i) ? a.text : ""}</span><span class="answer-score">${a.score}</span></div>
          </div>
        </div>`,
      )
      .join("");
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
    setTimeout(
      () => {
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
  if (
    match === null
  ) {
    notify(
      "Belum cocok. Guru dapat memilih Salah / ❌ atau cek kembali.",
    );
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
  if (
    state.currentQuestionIndex ===
    questionBank.length -
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
    particles.forEach(
      (p, i) => {
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
      },
    );
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

document.addEventListener(
  "DOMContentLoaded",
  () => {
    shuffleQuestions();
    render();
    $(
      "checkBtn",
    ).onclick =
      checkAnswer;
    $(
      "soundBtn",
    ).onclick =
      enableSound;
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
    [0, 1].forEach(
      (i) =>
        $(
          "teamName" +
            i,
        ).addEventListener(
          "input",
          (e) => {
            state.teamNames[
              i
            ] =
              e.target.value
                .trim()
                .toUpperCase() ||
              `TIM ${i + 1}`;
            render();
          },
        ),
    );
  },
);
