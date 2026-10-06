/* Bank soal Family 100 per kelas dan mapel, disusun dari "Materi Kelas 7.docx"
   dan "Materi Kelas 8.docx". Kata kunci hanya dipakai untuk mencocokkan jawaban
   yang diketik operator; tiap kata kunci hanya boleh milik satu jawaban per soal. */
const questionSets = [
  {
    key: "7-ipa",
    kelas: 7,
    mapel: "IPA",
    topik: "Laboratorium, Pengukuran & Kalor",
    questions: [
      {
        question: "Sebutkan peralatan dasar yang ada di laboratorium IPA!",
        answers: [
          { text: "Tabung reaksi", score: 100, keywords: ["tabung reaksi", "test tube", "tabung"] },
          { text: "Gelas kimia", score: 80, keywords: ["gelas kimia", "gelas bakar", "gelas beker", "beaker glass", "beker"] },
          { text: "Gelas ukur", score: 60, keywords: ["gelas ukur", "silinder ukur", "measuring cylinder"] },
          { text: "Pipet tetes", score: 40, keywords: ["pipet tetes", "pipet", "penetes"] },
          { text: "Pembakar spiritus", score: 20, keywords: ["pembakar spiritus", "lampu spiritus", "pembakar bunsen", "bunsen", "spiritus"] },
        ],
      },
      {
        question: "Sebutkan alat keselamatan kerja di laboratorium!",
        answers: [
          { text: "Jas laboratorium", score: 100, keywords: ["jas laboratorium", "jas lab", "jas", "baju lab"] },
          { text: "Kacamata keselamatan", score: 80, keywords: ["kacamata keselamatan", "kacamata", "kacamata pelindung", "goggles"] },
          { text: "Sarung tangan", score: 60, keywords: ["sarung tangan", "gloves", "sarung tangan karet"] },
          { text: "Kotak P3K", score: 40, keywords: ["kotak p3k", "p3k", "pertolongan pertama", "obat obatan"] },
          { text: "Pemadam api (APAR)", score: 20, keywords: ["pemadam api", "apar", "alat pemadam api", "pemadam api ringan", "pemadam kebakaran"] },
        ],
      },
      {
        question: "Sebutkan aturan keselamatan saat bekerja di laboratorium!",
        answers: [
          { text: "Memakai jas lab", score: 100, keywords: ["memakai jas lab", "pakai jas lab", "menggunakan jas lab", "jas lab", "jas laboratorium", "pakai jas"] },
          { text: "Mematuhi petunjuk guru", score: 80, keywords: ["mematuhi petunjuk guru", "patuhi petunjuk guru", "ikuti petunjuk guru", "petunjuk guru", "patuh pada guru"] },
          { text: "Tidak makan, minum, atau bercanda", score: 60, keywords: ["tidak makan", "jangan makan", "tidak minum", "jangan minum", "jangan bercanda", "tidak bercanda", "dilarang makan"] },
          { text: "Membersihkan alat setelah dipakai", score: 40, keywords: ["membersihkan alat", "bersihkan alat", "membersihkan meja", "bersihkan meja", "merapikan alat"] },
          { text: "Membuang sampah pada tempatnya", score: 20, keywords: ["membuang sampah pada tempatnya", "membuang sampah", "buang sampah", "buang bahan kimia", "membuang limbah"] },
        ],
      },
      {
        question: "Sebutkan langkah-langkah metode ilmiah dalam kegiatan percobaan!",
        answers: [
          { text: "Mengamati", score: 100, keywords: ["mengamati", "pengamatan", "observasi", "mengamati objek"] },
          { text: "Merumuskan masalah", score: 80, keywords: ["merumuskan masalah", "rumusan masalah", "menentukan masalah", "membuat pertanyaan"] },
          { text: "Mengajukan hipotesis", score: 60, keywords: ["mengajukan hipotesis", "hipotesis", "membuat hipotesis", "dugaan sementara"] },
          { text: "Melakukan percobaan", score: 40, keywords: ["melakukan percobaan", "percobaan", "eksperimen", "mengumpulkan data", "uji coba"] },
          { text: "Menarik kesimpulan", score: 20, keywords: ["menarik kesimpulan", "kesimpulan", "menyimpulkan", "membuat kesimpulan"] },
        ],
      },
      {
        question: "Sebutkan besaran pokok dalam Satuan Internasional (SI)!",
        answers: [
          { text: "Panjang (meter)", score: 100, keywords: ["panjang", "meter"] },
          { text: "Massa (kilogram)", score: 80, keywords: ["massa", "kilogram", "kg"] },
          { text: "Waktu (sekon)", score: 60, keywords: ["waktu", "sekon", "detik"] },
          { text: "Suhu (kelvin)", score: 40, keywords: ["suhu", "kelvin", "temperatur"] },
          { text: "Kuat arus (ampere)", score: 20, keywords: ["kuat arus", "kuat arus listrik", "arus listrik", "arus", "ampere"] },
        ],
      },
      {
        question: "Sebutkan alat ukur yang digunakan dalam pengukuran!",
        answers: [
          { text: "Penggaris", score: 100, keywords: ["penggaris", "mistar", "garisan"] },
          { text: "Neraca", score: 80, keywords: ["neraca", "neraca ohaus", "neraca digital", "timbangan"] },
          { text: "Jangka sorong", score: 60, keywords: ["jangka sorong", "sorong", "vernier"] },
          { text: "Mikrometer sekrup", score: 40, keywords: ["mikrometer sekrup", "mikrometer", "micrometer"] },
          { text: "Stopwatch", score: 20, keywords: ["stopwatch", "stop watch", "pengukur waktu"] },
        ],
      },
      {
        question: "Sebutkan bagian-bagian laporan percobaan!",
        answers: [
          { text: "Judul", score: 100, keywords: ["judul"] },
          { text: "Tujuan", score: 80, keywords: ["tujuan"] },
          { text: "Alat dan bahan", score: 60, keywords: ["alat dan bahan", "alat bahan", "alat alat dan bahan"] },
          { text: "Langkah-langkah percobaan", score: 40, keywords: ["langkah langkah", "langkah kerja", "cara kerja", "prosedur"] },
          { text: "Kesimpulan", score: 20, keywords: ["kesimpulan", "simpulan"] },
        ],
      },
      {
        question: "Sebutkan jenis-jenis termometer!",
        answers: [
          { text: "Termometer zat cair", score: 100, keywords: ["termometer zat cair", "termometer raksa", "termometer alkohol", "raksa", "alkohol", "zat cair"] },
          { text: "Termometer digital", score: 70, keywords: ["termometer digital", "digital", "termistor"] },
          { text: "Termometer bimetal", score: 40, keywords: ["termometer bimetal", "bimetal"] },
          { text: "Pirometer", score: 20, keywords: ["pirometer", "pyrometer"] },
        ],
      },
      {
        question: "Sebutkan cara perpindahan kalor!",
        answers: [
          { text: "Konduksi", score: 100, keywords: ["konduksi", "hantaran"] },
          { text: "Konveksi", score: 60, keywords: ["konveksi", "aliran"] },
          { text: "Radiasi", score: 30, keywords: ["radiasi", "pancaran"] },
        ],
      },
      {
        question: "Sebutkan contoh perpindahan kalor dalam kehidupan sehari-hari!",
        answers: [
          { text: "Panas matahari sampai ke bumi", score: 100, keywords: ["panas matahari", "sinar matahari", "matahari", "berjemur"] },
          { text: "Sendok logam ikut panas", score: 80, keywords: ["sendok logam", "sendok panas", "sendok", "gagang panci", "panci panas"] },
          { text: "Air mendidih", score: 60, keywords: ["air mendidih", "merebus air", "memasak air", "mendidih"] },
          { text: "Angin darat dan angin laut", score: 40, keywords: ["angin darat", "angin laut", "angin"] },
          { text: "Hangat di dekat api unggun", score: 20, keywords: ["api unggun", "dekat api", "hangat api unggun"] },
        ],
      },
      {
        question: "Sebutkan istilah yang berkaitan dengan kalor!",
        answers: [
          { text: "Kalor jenis", score: 100, keywords: ["kalor jenis"] },
          { text: "Kapasitas kalor", score: 80, keywords: ["kapasitas kalor"] },
          { text: "Kalor lebur", score: 60, keywords: ["kalor lebur", "kalor beku"] },
          { text: "Kalor uap", score: 40, keywords: ["kalor uap", "kalor embun", "kalor penguapan"] },
          { text: "Asas Black", score: 20, keywords: ["asas black", "azas black", "hukum black", "black"] },
        ],
      },
      {
        question: "Sebutkan gejala yang terjadi akibat gaya tarik antarpartikel zat!",
        answers: [
          { text: "Kohesi", score: 100, keywords: ["kohesi", "tarik menarik partikel sejenis", "tetesan air di daun talas", "daun talas"] },
          { text: "Adhesi", score: 80, keywords: ["adhesi", "tarik menarik partikel tidak sejenis", "cat menempel"] },
          { text: "Kapilaritas", score: 60, keywords: ["kapilaritas", "pipa kapiler", "tisu menyerap air", "air merembes di dinding"] },
          { text: "Tegangan permukaan", score: 40, keywords: ["tegangan permukaan", "serangga di atas air", "nyamuk di atas air"] },
          { text: "Meniskus", score: 20, keywords: ["meniskus", "meniskus cekung", "meniskus cembung"] },
        ],
      },
    ],
  },
  {
    key: "7-informatika",
    kelas: 7,
    mapel: "Informatika",
    topik: "Berpikir Komputasional & TIK",
    questions: [
      {
        question: "Sebutkan fondasi (konsep) berpikir komputasional!",
        answers: [
          { text: "Dekomposisi", score: 100, keywords: ["dekomposisi", "memecah masalah", "membagi masalah"] },
          { text: "Pengenalan pola", score: 75, keywords: ["pengenalan pola", "mengenali pola", "pola", "pattern recognition"] },
          { text: "Abstraksi", score: 50, keywords: ["abstraksi", "abstrak", "mengabaikan detail"] },
          { text: "Algoritma", score: 25, keywords: ["algoritma", "algorithm", "urutan langkah", "langkah langkah"] },
        ],
      },
      {
        question: "Sebutkan jenis tampilan antarmuka (user interface)!",
        answers: [
          { text: "GUI (Graphical User Interface)", score: 100, keywords: ["gui", "graphical user interface", "antarmuka grafis", "berbasis grafis"] },
          { text: "CLI (Command Line Interface)", score: 60, keywords: ["cli", "command line interface", "antarmuka teks", "berbasis teks"] },
          { text: "VUI (Voice User Interface)", score: 30, keywords: ["vui", "voice user interface", "antarmuka suara", "berbasis suara"] },
        ],
      },
      {
        question: "Sebutkan contoh sistem atau aplikasi yang memakai antarmuka GUI, CLI, atau VUI!",
        answers: [
          { text: "Windows", score: 100, keywords: ["windows", "sistem operasi windows", "microsoft windows"] },
          { text: "Android", score: 80, keywords: ["android"] },
          { text: "Command Prompt", score: 60, keywords: ["command prompt", "cmd"] },
          { text: "Terminal", score: 40, keywords: ["terminal", "terminal linux", "terminal mac"] },
          { text: "Asisten suara (Google Assistant, Siri, Alexa)", score: 20, keywords: ["asisten suara", "google assistant", "siri", "apple siri", "alexa", "amazon alexa"] },
        ],
      },
      {
        question: "Sebutkan contoh peramban (browser)!",
        answers: [
          { text: "Google Chrome", score: 100, keywords: ["google chrome", "chrome"] },
          { text: "Mozilla Firefox", score: 80, keywords: ["mozilla firefox", "firefox", "mozilla"] },
          { text: "Microsoft Edge", score: 60, keywords: ["microsoft edge", "edge"] },
          { text: "Safari", score: 40, keywords: ["safari"] },
          { text: "Opera", score: 20, keywords: ["opera", "opera mini"] },
        ],
      },
      {
        question: "Sebutkan contoh ekstensi file!",
        answers: [
          { text: "DOCX", score: 100, keywords: ["docx", "doc"] },
          { text: "PDF", score: 80, keywords: ["pdf"] },
          { text: "JPG", score: 60, keywords: ["jpg", "jpeg"] },
          { text: "PNG", score: 40, keywords: ["png"] },
          { text: "GIF", score: 20, keywords: ["gif"] },
        ],
      },
      {
        question: "Sebutkan contoh media penyimpanan data!",
        answers: [
          { text: "Harddisk (HDD)", score: 100, keywords: ["harddisk", "hard disk", "hardisk", "hdd"] },
          { text: "Flashdisk", score: 75, keywords: ["flashdisk", "flash disk", "flash drive", "fd", "usb"] },
          { text: "Kartu memori", score: 50, keywords: ["kartu memori", "memory card", "micro sd", "microsd", "sd card"] },
          { text: "Penyimpanan cloud", score: 25, keywords: ["penyimpanan cloud", "cloud storage", "cloud computing", "cloud", "google drive"] },
        ],
      },
      {
        question: "Sebutkan jenis program aplikasi perkantoran!",
        answers: [
          { text: "Pengolah kata", score: 100, keywords: ["pengolah kata", "olah kata", "word processor"] },
          { text: "Pengolah angka", score: 60, keywords: ["pengolah angka", "olah angka", "pengolah data", "spreadsheet", "lembar kerja"] },
          { text: "Presentasi", score: 30, keywords: ["presentasi", "aplikasi presentasi", "program presentasi"] },
        ],
      },
      {
        question: "Sebutkan contoh aplikasi perkantoran!",
        answers: [
          { text: "Microsoft Word", score: 100, keywords: ["microsoft word", "ms word", "word"] },
          { text: "Microsoft Excel", score: 80, keywords: ["microsoft excel", "ms excel", "excel"] },
          { text: "Microsoft PowerPoint", score: 60, keywords: ["microsoft powerpoint", "ms powerpoint", "powerpoint", "power point", "ppt"] },
          { text: "LibreOffice", score: 40, keywords: ["libreoffice", "libre office", "libre"] },
          { text: "WPS Office", score: 20, keywords: ["wps office", "wps"] },
        ],
      },
      {
        question: "Sebutkan hal yang dapat dilakukan pada file!",
        answers: [
          { text: "Diedit", score: 100, keywords: ["diedit", "edit", "mengedit", "diubah"] },
          { text: "Disalin", score: 80, keywords: ["disalin", "salin", "menyalin", "copy", "dicopy"] },
          { text: "Dipindahkan", score: 60, keywords: ["dipindahkan", "dipindah", "memindahkan", "pindah", "move", "cut"] },
          { text: "Dihapus", score: 40, keywords: ["dihapus", "hapus", "menghapus", "delete"] },
          { text: "Diganti nama", score: 20, keywords: ["diganti nama", "ganti nama", "mengganti nama", "rename"] },
        ],
      },
    ],
  },
  {
    key: "8-ipa",
    kelas: 8,
    mapel: "IPA",
    topik: "Sel & Organ Tubuh",
    questions: [
      {
        question: "Sebutkan organel yang berperan dalam aktivitas dan fungsi sel!",
        answers: [
          { text: "Inti sel", score: 100, keywords: ["inti sel", "nukleus", "nucleus", "inti", "pusat pengendali sel"] },
          { text: "Ribosom", score: 80, keywords: ["ribosom", "ribosome", "pembentuk protein", "sintesis protein", "organel ribosom"] },
          { text: "Badan Golgi", score: 60, keywords: ["badan golgi", "golgi", "aparatus golgi", "pengeluaran zat", "organel golgi"] },
          { text: "Mitokondria", score: 40, keywords: ["mitokondria", "mitochondria", "penghasil energi", "respirasi seluler", "atp"] },
          { text: "Vakuola", score: 20, keywords: ["vakuola", "vacuole", "penyimpanan air", "cadangan makanan", "zat buangan"] },
        ],
      },
      {
        question: "Sebutkan contoh organel yang berperan khusus pada sel tumbuhan!",
        answers: [
          { text: "Kloroplas", score: 100, keywords: ["kloroplas", "chloroplast", "fotosintesis", "plastida hijau", "organel fotosintesis"] },
          { text: "Kromoplas", score: 80, keywords: ["kromoplas", "chromoplast", "warna", "plastida warna", "pemberi warna"] },
          { text: "Leukoplas", score: 60, keywords: ["leukoplas", "leucoplast", "cadangan makanan", "plastida penyimpan", "penyimpanan makanan"] },
          { text: "Vakuola", score: 40, keywords: ["vakuola", "vacuole", "getah sel", "penyimpanan air", "tonoplas"] },
          { text: "Ribosom", score: 20, keywords: ["ribosom", "ribosome", "pembentukan protein", "sintesis protein", "organel protein"] },
        ],
      },
      {
        question: "Sebutkan spesialisasi sel yang terdapat pada hewan!",
        answers: [
          { text: "Sel darah merah", score: 100, keywords: ["sel darah merah", "eritrosit", "eritosit", "red blood cell", "mengangkut oksigen"] },
          { text: "Sel darah putih", score: 80, keywords: ["sel darah putih", "leukosit", "lekosit", "white blood cell", "melawan penyakit"] },
          { text: "Trombosit", score: 60, keywords: ["trombosit", "trombosid", "platelet", "keping darah", "pembekuan darah"] },
          { text: "Sel saraf", score: 40, keywords: ["sel saraf", "neuron", "saraf", "menghantarkan informasi", "rangsangan"] },
          { text: "Sel otot", score: 20, keywords: ["sel otot", "otot rangka", "otot polos", "otot jantung", "pergerakan"] },
        ],
      },
      {
        question: "Sebutkan spesialisasi sel yang terdapat pada tumbuhan!",
        answers: [
          { text: "Sel rambut akar", score: 100, keywords: ["sel rambut akar", "rambut akar", "root hair", "penyerapan air", "penyerapan mineral"] },
          { text: "Sel mesofil daun", score: 80, keywords: ["sel mesofil", "mesofil daun", "palisade", "spons", "fotosintesis"] },
          { text: "Sel penjaga stomata", score: 60, keywords: ["sel penjaga stomata", "sel penjaga", "stomata", "guard cell", "pertukaran gas"] },
          { text: "Xilem", score: 40, keywords: ["xilem", "xylem", "jaringan xilem", "mengangkut air", "mengangkut mineral"] },
          { text: "Floem", score: 20, keywords: ["floem", "phloem", "jaringan floem", "hasil fotosintesis", "mengangkut hasil fotosintesis"] },
        ],
      },
      {
        question: "Sebutkan organ yang termasuk dalam sistem pencernaan manusia!",
        answers: [
          { text: "Mulut", score: 100, keywords: ["mulut", "rongga mulut", "oral", "mouth", "tempat masuk makanan"] },
          { text: "Lambung", score: 80, keywords: ["lambung", "maag", "stomach", "asam lambung", "organ lambung"] },
          { text: "Usus halus", score: 60, keywords: ["usus halus", "usus kecil", "small intestine", "duodenum", "jejunum", "ileum"] },
          { text: "Usus besar", score: 40, keywords: ["usus besar", "kolon", "colon", "large intestine", "penyerapan air"] },
          { text: "Esofagus", score: 20, keywords: ["esofagus", "esophagus", "kerongkongan", "saluran makanan", "gerak peristaltik"] },
        ],
      },
      {
        question: "Sebutkan organ yang termasuk dalam sistem pernapasan manusia!",
        answers: [
          { text: "Hidung", score: 100, keywords: ["hidung", "rongga hidung", "nose", "organ hidung", "saluran pernapasan"] },
          { text: "Trakea", score: 80, keywords: ["trakea", "trachea", "batang tenggorokan", "saluran napas", "trakhea"] },
          { text: "Bronkus", score: 60, keywords: ["bronkus", "bronchus", "cabang trakea", "saluran bronkus", "bronchi"] },
          { text: "Alveolus", score: 40, keywords: ["alveolus", "alveoli", "gelembung paru", "pertukaran gas", "tempat pertukaran gas"] },
          { text: "Paru-paru", score: 20, keywords: ["paru-paru", "paru paru", "paru", "lungs", "organ paru"] },
        ],
      },
      {
        question: "Sebutkan organ atau bagian yang berperan dalam mekanisme pernapasan!",
        answers: [
          { text: "Diafragma", score: 100, keywords: ["diafragma", "diaphragm", "otot diafragma", "pernapasan perut", "kontraksi diafragma"] },
          { text: "Otot antartulang rusuk", score: 80, keywords: ["otot antartulang rusuk", "otot antar tulang rusuk", "interkostal", "otot dada", "pernapasan dada"] },
          { text: "Rongga dada", score: 60, keywords: ["rongga dada", "dada", "cavum thorax", "thoracic cavity", "ruang dada"] },
          { text: "Paru-paru", score: 40, keywords: ["paru-paru", "paru paru", "paru", "lungs", "organ pernapasan"] },
          { text: "Alveolus", score: 20, keywords: ["alveolus", "alveoli", "pertukaran gas", "gelembung paru", "kantung udara"] },
        ],
      },
      {
        question: "Sebutkan komponen darah pada manusia!",
        answers: [
          { text: "Plasma", score: 100, keywords: ["plasma", "plasma darah", "cairan darah", "blood plasma", "bagian cair darah"] },
          { text: "Eritrosit", score: 80, keywords: ["eritrosit", "sel darah merah", "eritosit", "red blood cell", "pengangkut oksigen"] },
          { text: "Leukosit", score: 60, keywords: ["leukosit", "sel darah putih", "lekosit", "white blood cell", "kekebalan"] },
          { text: "Trombosit", score: 40, keywords: ["trombosit", "trombosid", "platelet", "keping darah", "pembekuan"] },
          { text: "Hemoglobin", score: 20, keywords: ["hemoglobin", "haemoglobin", "hb", "zat warna darah", "protein darah"] },
        ],
      },
      {
        question: "Sebutkan jenis pembuluh darah pada manusia!",
        answers: [
          { text: "Arteri", score: 100, keywords: ["arteri", "artery", "pembuluh nadi", "nadi", "pembuluh darah arteri"] },
          { text: "Vena", score: 80, keywords: ["vena", "vein", "pembuluh balik", "pembuluh vena", "pembuluh menuju jantung"] },
          { text: "Kapiler", score: 60, keywords: ["kapiler", "capillary", "pembuluh kapiler", "pembuluh rambut", "pertukaran zat"] },
          { text: "Arteriola", score: 40, keywords: ["arteriola", "arteriole", "cabang arteri", "pembuluh nadi kecil", "arteri kecil"] },
          { text: "Venula", score: 20, keywords: ["venula", "venule", "cabang vena", "pembuluh balik kecil", "vena kecil"] },
        ],
      },
      {
        question: "Sebutkan organ yang berperan dalam sistem ekskresi manusia!",
        answers: [
          { text: "Ginjal", score: 100, keywords: ["ginjal", "kidney", "buah pinggang", "organ ginjal", "pembentukan urin"] },
          { text: "Paru-paru", score: 80, keywords: ["paru-paru", "paru paru", "paru", "lungs", "mengeluarkan co2"] },
          { text: "Kulit", score: 60, keywords: ["kulit", "skin", "keringat", "kelenjar keringat", "organ kulit"] },
          { text: "Hati", score: 40, keywords: ["hati", "liver", "hepar", "empedu", "bilirubin"] },
          { text: "Usus besar", score: 20, keywords: ["usus besar", "kolon", "colon", "feses"] },
        ],
      },
      {
        question: "Sebutkan zat sisa metabolisme dan organ yang mengeluarkannya!",
        answers: [
          { text: "Urea", score: 100, keywords: ["urea", "zat urea", "sisa metabolisme", "limbah nitrogen", "ginjal"] },
          { text: "Karbon dioksida", score: 80, keywords: ["karbon dioksida", "karbondioksida", "co2", "gas co2", "paru-paru"] },
          { text: "Kelebihan air", score: 60, keywords: ["kelebihan air", "air berlebih", "air", "urin", "keringat"] },
          { text: "Garam", score: 40, keywords: ["garam", "kelebihan garam", "garam mineral", "natrium", "mineral"] },
          { text: "Bilirubin", score: 20, keywords: ["bilirubin", "zat bilirubin", "empedu", "hati", "feses"] },
        ],
      },
      {
        question: "Sebutkan zat atau nutrisi yang penting bagi tubuh!",
        answers: [
          { text: "Air", score: 100, keywords: ["air", "water", "air tubuh", "cairan", "cairan tubuh"] },
          { text: "Vitamin A", score: 80, keywords: ["vitamin a", "vit a", "vitamin a mata", "kesehatan mata", "vitamin"] },
          { text: "Vitamin C", score: 60, keywords: ["vitamin c", "vit c", "asam askorbat", "penyembuhan luka", "kekebalan"] },
          { text: "Zat besi", score: 40, keywords: ["zat besi", "besi", "fe", "iron", "hemoglobin"] },
          { text: "Kalsium", score: 20, keywords: ["kalsium", "calcium", "ca", "tulang", "gigi"] },
        ],
      },
      {
        question: "Sebutkan gangguan yang dapat terjadi pada sistem peredaran darah!",
        answers: [
          { text: "Anemia", score: 100, keywords: ["anemia", "kurang darah", "kekurangan hemoglobin", "kekurangan sel darah merah", "penyakit anemia"] },
          { text: "Hipertensi", score: 80, keywords: ["hipertensi", "tekanan darah tinggi", "darah tinggi", "hypertension", "tekanan tinggi"] },
          { text: "Hipotensi", score: 60, keywords: ["hipotensi", "tekanan darah rendah", "darah rendah", "hypotension", "tekanan rendah"] },
          { text: "Aterosklerosis", score: 40, keywords: ["aterosklerosis", "atherosclerosis", "penyempitan pembuluh", "plak", "pembuluh darah"] },
          { text: "Stroke", score: 20, keywords: ["stroke", "serangan stroke", "gangguan peredaran darah", "pembuluh darah otak", "penyakit stroke"] },
        ],
      },
      {
        question: "Sebutkan gangguan yang dapat terjadi pada sistem pernapasan manusia!",
        answers: [
          { text: "Asma", score: 100, keywords: ["asma", "sesak napas", "penyempitan saluran pernapasan"] },
          { text: "Bronkitis", score: 80, keywords: ["bronkitis", "radang bronkus", "peradangan bronkus"] },
          { text: "Pneumonia", score: 60, keywords: ["pneumonia", "radang paru-paru", "infeksi paru-paru"] },
          { text: "Tuberkulosis", score: 40, keywords: ["tuberkulosis", "tbc", "tb", "tbc paru"] },
          { text: "Influenza", score: 20, keywords: ["influenza", "flu", "flu biasa"] },
        ],
      },
      {
        question: "Sebutkan gangguan yang dapat terjadi pada sistem pencernaan manusia!",
        answers: [
          { text: "Diare", score: 100, keywords: ["diare", "mencret", "buang air besar cair"] },
          { text: "Sembelit", score: 80, keywords: ["sembelit", "konstipasi", "susah buang air besar", "susah bab"] },
          { text: "Gastritis", score: 60, keywords: ["gastritis", "maag", "radang lambung", "sakit maag"] },
          { text: "Apendisitis", score: 40, keywords: ["apendisitis", "radang usus buntu", "usus buntu"] },
          { text: "Karies gigi", score: 20, keywords: ["karies gigi", "karies", "gigi berlubang", "gigi rusak"] },
        ],
      },
      {
        question: "Sebutkan gangguan yang dapat terjadi pada sistem ekskresi manusia!",
        answers: [
          { text: "Batu ginjal", score: 100, keywords: ["batu ginjal", "batu pada ginjal", "batu saluran kemih"] },
          { text: "Nefritis", score: 80, keywords: ["nefritis", "radang ginjal", "peradangan ginjal"] },
          { text: "Gagal ginjal", score: 60, keywords: ["gagal ginjal", "ginjal gagal", "kerusakan ginjal"] },
          { text: "Albuminuria", score: 40, keywords: ["albuminuria", "albumin dalam urine", "protein dalam urine"] },
          { text: "Hematuria", score: 20, keywords: ["hematuria", "darah dalam urine", "darah dalam urin", "urin berdarah"] },
        ],
      },
      {
        question: "Sebutkan hal-hal yang dapat menyebabkan gangguan pada sistem pernapasan manusia!",
        answers: [
          { text: "Merokok", score: 100, keywords: ["merokok", "rokok", "asap rokok"] },
          { text: "Polusi udara", score: 80, keywords: ["polusi udara", "pencemaran udara", "udara tercemar"] },
          { text: "Asap kendaraan", score: 60, keywords: ["asap kendaraan", "asap knalpot", "knalpot"] },
          { text: "Debu", score: 40, keywords: ["debu", "paparan debu"] },
          { text: "Asap pembakaran", score: 20, keywords: ["asap pembakaran", "asap", "pembakaran sampah"] },
        ],
      },
      {
        question: "Sebutkan tingkatan organisasi kehidupan dalam ekologi!",
        answers: [
          { text: "Populasi", score: 100, keywords: ["populasi", "population", "kumpulan individu sejenis"] },
          { text: "Komunitas", score: 80, keywords: ["komunitas", "community", "kumpulan populasi", "berbagai populasi"] },
          { text: "Ekosistem", score: 60, keywords: ["ekosistem", "ecosystem", "makhluk hidup dan lingkungan", "interaksi makhluk hidup"] },
          { text: "Bioma", score: 40, keywords: ["bioma", "biome", "kumpulan ekosistem", "wilayah luas"] },
          { text: "Biosfer", score: 20, keywords: ["biosfer", "biosphere", "seluruh ekosistem", "kehidupan di bumi"] },
        ],
      },
      {
        question: "Sebutkan zat atau enzim yang membantu proses pencernaan makanan!",
        answers: [
          { text: "Air ludah (amilase)", score: 100, keywords: ["air ludah", "ludah", "amilase", "enzim amilase", "saliva"] },
          { text: "Asam lambung", score: 80, keywords: ["asam lambung", "hcl", "asam klorida"] },
          { text: "Pepsin", score: 60, keywords: ["pepsin", "enzim pepsin"] },
          { text: "Empedu", score: 40, keywords: ["empedu", "cairan empedu", "getah empedu"] },
          { text: "Lipase", score: 20, keywords: ["lipase", "enzim lipase"] },
        ],
      },
    ],
  },
  {
    key: "8-informatika",
    kelas: 8,
    mapel: "Informatika",
    topik: "Big Data, Aplikasi & Sistem Komputer",
    questions: [
      {
        question: "Sebutkan jenis data dalam big data!",
        answers: [
          { text: "Data terstruktur", score: 100, keywords: ["data terstruktur", "terstruktur", "structured data"] },
          { text: "Data tidak terstruktur", score: 60, keywords: ["data tidak terstruktur", "tidak terstruktur", "unstructured data"] },
          { text: "Data semi terstruktur", score: 30, keywords: ["data semi terstruktur", "semi terstruktur", "semistruktur"] },
        ],
      },
      {
        question: "Sebutkan contoh data tidak terstruktur!",
        answers: [
          { text: "Postingan media sosial", score: 100, keywords: ["postingan media sosial", "media sosial", "medsos", "postingan"] },
          { text: "File audio", score: 80, keywords: ["file audio", "audio", "rekaman suara", "musik", "lagu"] },
          { text: "Video", score: 60, keywords: ["video", "file video", "rekaman video"] },
          { text: "Foto / gambar", score: 40, keywords: ["foto", "gambar", "file gambar", "image"] },
          { text: "Teks dalam dokumen", score: 20, keywords: ["teks dalam dokumen", "dokumen teks", "dokumen", "teks"] },
        ],
      },
      {
        question: "Sebutkan contoh file data semi terstruktur!",
        answers: [
          { text: "JSON", score: 100, keywords: ["json", "javascript object notation", "java script object notation"] },
          { text: "XML", score: 60, keywords: ["xml", "extensible markup language"] },
          { text: "ZIP", score: 30, keywords: ["zip"] },
        ],
      },
      {
        question: "Sebutkan fitur umum yang ada pada aplikasi!",
        answers: [
          { text: "User Interface (UI)", score: 100, keywords: ["user interface", "ui", "antarmuka", "tampilan antarmuka"] },
          { text: "User Experience (UX)", score: 80, keywords: ["user experience", "ux", "pengalaman pengguna"] },
          { text: "Keamanan", score: 60, keywords: ["keamanan", "fitur keamanan", "security"] },
          { text: "Shortcut", score: 40, keywords: ["shortcut", "pintasan", "tombol pintas"] },
          { text: "Screenshot", score: 20, keywords: ["screenshot", "screen shot", "tangkapan layar", "ss"] },
        ],
      },
      {
        question: "Sebutkan fitur keamanan pada aplikasi!",
        answers: [
          { text: "Antivirus", score: 100, keywords: ["antivirus", "anti virus"] },
          { text: "Sandi yang kuat", score: 80, keywords: ["sandi yang kuat", "kata sandi", "sandi", "password", "password kuat"] },
          { text: "Firewall", score: 60, keywords: ["firewall", "fire wall"] },
          { text: "Enkripsi data", score: 40, keywords: ["enkripsi data", "enkripsi", "encryption"] },
          { text: "Autentikasi pengguna", score: 20, keywords: ["autentikasi pengguna", "autentikasi", "otentikasi", "authentication", "verifikasi"] },
        ],
      },
      {
        question: "Sebutkan teknik pencarian informasi di mesin pencari!",
        answers: [
          { text: "Tanda kutip (\"...\")", score: 100, keywords: ["tanda kutip", "kutip", "tanda petik", "petik"] },
          { text: "Tanda hubung / minus (-)", score: 80, keywords: ["tanda hubung", "tanda minus", "minus", "tanda strip", "strip"] },
          { text: "site:", score: 60, keywords: ["site", "site titik dua"] },
          { text: "filetype:", score: 40, keywords: ["filetype", "file type", "tipe file"] },
          { text: "AND / OR", score: 20, keywords: ["and or", "and", "or", "dan atau"] },
        ],
      },
      {
        question: "Sebutkan tab yang ada pada Microsoft Word!",
        answers: [
          { text: "Home", score: 100, keywords: ["home", "tab home", "beranda"] },
          { text: "Insert", score: 80, keywords: ["insert", "tab insert", "sisipkan"] },
          { text: "File", score: 60, keywords: ["file", "tab file"] },
          { text: "Layout", score: 40, keywords: ["layout", "tab layout", "page layout", "tata letak"] },
          { text: "View", score: 20, keywords: ["view", "tab view"] },
        ],
      },
      {
        question: "Sebutkan tahapan komputer dalam memproses data!",
        answers: [
          { text: "Pengumpulan data", score: 100, keywords: ["pengumpulan data", "mengumpulkan data", "kumpulkan data"] },
          { text: "Memasukkan data (input)", score: 80, keywords: ["memasukkan data", "masukkan data", "input data", "input"] },
          { text: "Mengolah data (proses)", score: 60, keywords: ["mengolah data", "pengolahan data", "memproses data", "olah data", "proses"] },
          { text: "Menyimpan data", score: 40, keywords: ["menyimpan data", "simpan data", "penyimpanan data", "penyimpanan"] },
          { text: "Menampilkan data (output)", score: 20, keywords: ["menampilkan data", "tampilkan data", "output", "keluaran"] },
        ],
      },
      {
        question: "Sebutkan bagian-bagian CPU!",
        answers: [
          { text: "ALU (Arithmetic Logic Unit)", score: 100, keywords: ["alu", "arithmetic logic unit", "unit aritmatika dan logika"] },
          { text: "CU (Control Unit)", score: 60, keywords: ["cu", "control unit", "unit kendali", "unit kontrol"] },
          { text: "Register", score: 30, keywords: ["register", "registers"] },
        ],
      },
      {
        question: "Sebutkan contoh aplikasi pengolah kata, pengolah data, atau presentasi!",
        answers: [
          { text: "Microsoft Word", score: 100, keywords: ["microsoft word", "ms word", "word"] },
          { text: "Microsoft Excel", score: 80, keywords: ["microsoft excel", "ms excel", "excel"] },
          { text: "Microsoft PowerPoint", score: 60, keywords: ["microsoft powerpoint", "ms powerpoint", "powerpoint", "power point", "ppt"] },
          { text: "Google Docs", score: 40, keywords: ["google docs", "google dokumen"] },
          { text: "Canva", score: 20, keywords: ["canva"] },
        ],
      },
      {
        question: "Sebutkan perangkat input dan output yang dipakai saat mengolah data!",
        answers: [
          { text: "Keyboard", score: 100, keywords: ["keyboard", "papan ketik", "kibor"] },
          { text: "Mouse", score: 75, keywords: ["mouse", "tetikus"] },
          { text: "Monitor", score: 50, keywords: ["monitor", "layar"] },
          { text: "Printer", score: 25, keywords: ["printer", "pencetak"] },
        ],
      },
    ],
  },
];
