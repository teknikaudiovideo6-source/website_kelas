// Data Anggota (15 siswa + 3 guru)
const anggotaData = [
  // Siswa
  { id: 1, nama: "Adek Arifs,S.S", role: "Bendahara", desc: "perempuan", kategori: ["siswa", "kesehatan"], img: "img/adek.jpg" },
  { id: 2, nama: "AHMAD FAREL AFANDI", role: "anggota", desc: "cowo mahal", kategori: ["siswa", ], img: "img/ahmadfarel.jpg" },
  { id: 3, nama: "ALIA NOVA PRAMITA", role: "Wakil Ketua", desc: "Perempuan", kategori: ["siswa","ketua"], img: "img/alianova.jpg" },
  { id: 4, nama: "ANDI ALFAYED TABA", role: "anggota", desc: "cowo mahal", kategori: ["siswa"], img: "img/andial.jpg" },
  { id: 5, nama: "ANDI NURMAN RISQI", role: "Sekertaris", desc: "cowo mahal", kategori: ["siswa","it" ,"acara"], img: "img/andinur.jpg" },
  { id: 6, nama: "ARZIQ KHOLID SAIFULLAH", role: "anggota", desc: "cowo mahal", kategori: ["siswa", "acara" ], img: "img/arziq.jpg" },
  { id: 7, nama: "DANISWARA WAHYU WIDYATAMA", role: "anggota", desc: "cowo mahal", kategori: ["siswa", ], img: "https://via.placeholder.com/220x210/b8e986/000000?text=Raka" },
  { id: 8, nama: "HABIL QODAM WAHYUD", role: "Ketua Kelas", desc: "cowo mahal", kategori: ["siswa", "ketua","acara"], img: "img/habil.jpg" },
  { id: 9, nama: "KEIZYA ADITA ZABRINA", role: "Sekertaris", desc: "perempuan", kategori: ["siswa", "it"], img: "img/keiza.jpg" },
  { id: 10, nama: "MISBACH IRSYAD ACMAD", role: "anggota", desc: "cowo mahal", kategori: ["siswa", ], img: "img/misba.jpg" },
  { id: 11, nama: "MOCH. DAMAR AL FAREZT PUTRA K", role: "anggota", desc: "cowo mahal", kategori: ["siswa", "acara"], img: "img/damar.jpg" },
  { id: 12, nama: "MOCH. JABAR ALAM", role: "anggota", desc: "cowo mahal", kategori: ["siswa", "acara" ], img: "img/jabar.jpg" },
  { id: 13, nama: "MUHAMMAD FAUZI", role: "anggota", desc: "cowo mahal", kategori: ["siswa", "acara" ], img: "img/fauzi.jpg" },
  { id: 14, nama: "RIDWAN RAHMAT", role: "anggota", desc: "cowo mahal", kategori: ["siswa"], img: "img/ridwan.jpg" },
  { id: 15, nama: "SEPTHA YUGA SONY WIDJAYA", role: "anggota", desc: "cowo mahal", kategori: ["siswa"], img: "img/yugha.jpg" },
  
  // Guru
  { id: 16, nama: "Ismail.", role: "Wali Kelas+Kaprodi", desc: "Guru Teknik Jaringan & pembimbing karakter", kategori: ["guru"], img: "img/ismail.png" },
  { id: 17, nama: "Siti Hardiyan.", role: "Guru Bengkel", desc: "Pendamping konseling & pengembangan diri", kategori: ["guru"], img: "img/mahardian.png" },
  { id: 18, nama: "Bagus Catur", role: "Guru Bengkel", desc: "Pembina OSIS & pelatih kepemimpinan", kategori: ["guru"], img: "img/bagusc.jpg" }
];

// Data Kegiatan
const kegiatanData = [
  { judul: "Projek Penguatan Profil Pelajar Pancasila", tanggal: "18 Okt 2024", img: "img/p5.jpg" },
  { judul: "Makan Bersama", tanggal: "6 Nov 2024", img: "img/makan_bersama.jpg" },
  { judul: "LDKS", tanggal: "12 Des 2024", img: "img/ldks.jpg" },
  { judul: "Ultah Yayasan", tanggal: "23 Jan 2025", img: "img/ultah.jpg" },
  { judul: "Maulid", tanggal: "5 Feb 2025", img: "img/maulid.jpg" },
  { judul: "🛠 Workshop", tanggal: "17 Sep 2025", img: "img/workshop2.jpg" },
  { judul: "🛠 Workshop", tanggal: "25 Sep 2025", img: "img/workshop.jpg" },
  { judul: "🏫 Kunjungan Industri", tanggal: "16 Okt 2025", img: "img/Kunjungan_industri.jpg" },
  { judul: "🏫 Kunjungan Industri", tanggal: "16 Okt 2025", img: "img/ki.jpg" },
  { judul: "Hari Guru", tanggal: "25 Nov 2025", img: "img/hari_guru.jpg" }


  
  
];
// Data Jadwal Pelajaran XI TAV
const jadwalKelas = [
  {
    hari: "Senin",
    mapel: [
      "Olahraga",
      "PKN",
      "B. Inggris",
      "Bahasa Inggris",
      "Matematika"
    ]
  },
  {
    hari: "Selasa",
    mapel: [
      "B. Jawa",
      "Sejarah",
      "Agama",
      "B. Inggris"
    ]
  },
  {
    hari: "Rabu",
    mapel: [
      "Konsentrasi Keahlian",
      "Konsentrasi Keahlian",
      "Konsentrasi Keahlian"
    ]
  },
  {
    hari: "Kamis",
    mapel: [
      "Konsentrasi Keahlian",
      "Konsentrasi Keahlian"
    ]
  },
  {
    hari: "Jumat",
    mapel: [
      "B. Indonesia",
      "Konsentrasi Keahlian",
      "PKK"
    ]
  }
];
