// Data Anggota (15 siswa + 3 guru)
const anggotaData = [
  // Siswa
  { id: 1, nama: "Adek Arifs,S.S", role: "Bendahara", desc: "perempuan", kategori: ["siswa", "ketua"], img: "img/adek.jpg" },
  { id: 2, nama: "AHMAD FAREL AFANDI", role: "anggota", desc: "laki", kategori: ["siswa", "ketua"], img: "img/ahmadfarel.jpg" },
  { id: 3, nama: "ALIA NOVA PRAMITA", role: "Wakil Ketua", desc: "Perempuan", kategori: ["siswa"], img: "img/alianova.jpg" },
  { id: 4, nama: "ANDI ALFAYED TABA", role: "anggota", desc: "laki", kategori: ["siswa"], img: "img/andial.jpg" },
  { id: 5, nama: "ANDI NURMAN RISQI", role: "Sekertaris", desc: "laki", kategori: ["siswa", "it"], img: "img/andinur.jpg" },
  { id: 6, nama: "ARZIQ KHOLID SAIFULLAH", role: "anggota", desc: "laki", kategori: ["siswa", "it"], img: "img/arziq.jpg" },
  { id: 7, nama: "DANISWARA WAHYU WIDYATAMA", role: "anggota", desc: "laki", kategori: ["siswa", "it"], img: "https://via.placeholder.com/220x210/b8e986/000000?text=Raka" },
  { id: 8, nama: "HABIL QODAM WAHYUD", role: "Ketua Kelas", desc: "laki", kategori: ["siswa", "acara"], img: "img/habil.jpg" },
  { id: 9, nama: "KEIZYA ADITA ZABRINA", role: "Sekertaris", desc: "permpuan", kategori: ["siswa", "acara"], img: "img/keiza.jpg" },
  { id: 10, nama: "MISBACH IRSYAD ACMAD", role: "anggota", desc: "laki", kategori: ["siswa", "acara"], img: "img/misba.jpg" },
  { id: 11, nama: "MOCH. DAMAR AL FAREZT PUTRA K", role: "anggota", desc: "laki", kategori: ["siswa", "kesehatan"], img: "img/damar.jpg" },
  { id: 12, nama: "MOCH. JABAR ALAM", role: "anggota", desc: "laki", kategori: ["siswa", "kesehatan"], img: "img/jabar.jpg" },
  { id: 13, nama: "MUHAMMAD FAUZI", role: "anggota", desc: "laki", kategori: ["siswa", "kesehatan"], img: "img/fauzi.jpg" },
  { id: 14, nama: "RIDWAN RAHMAT", role: "anggota", desc: "laki", kategori: ["siswa"], img: "img/ridwan.jpg" },
  { id: 15, nama: "SEPTHA YUGA SONY WIDJAYA", role: "anggota", desc: "laki", kategori: ["siswa"], img: "img/yugha.jpg" },
  
  // Guru
  { id: 16, nama: "Ismail.", role: "Wali Kelas+Kaprodi", desc: "Guru Bahasa Indonesia & pembimbing karakter", kategori: ["guru"], img: "img/ismail.png" },
  { id: 17, nama: "Siti Hardiyan.", role: "Guru Bengkel", desc: "Pendamping konseling & pengembangan diri", kategori: ["guru"], img: "img/mahardian.png" },
  { id: 18, nama: "Bagus Catur", role: "Guru Bengkel", desc: "Pembina OSIS & pelatih kepemimpinan", kategori: ["guru"], img: "https://via.placeholder.com/220x210/8e44ad/ffffff?text=Bu+Sari" }
];

// Data Kegiatan
const kegiatanData = [
  { judul: "Hari guru", tanggal: "25 nov 2025", img: "img/hari_guru.jpg"},
  { judul: "Kunjungan Industri", tanggal: "16 okt 2025", img: "img/Kunjungan_industri.jpg" },
  { judul: "Maulid", tanggal: "5 Feb 2025", img: "img/maulid.jpg" },
  { judul: "Workshop", tanggal: "25 sep 2025", img: "img/workshop.jpg" },
  { judul: "Workshop", tanggal: "17 sep 2025", img: "img/workshop2.jpg" },
  { judul: "MakanBersama", tanggal: "6 nov 2024", img: "img/makan_bersama.jpg" },
  { judul: "Projek Penguatan Profil Pelajar Pancasila", tanggal: "18 okt 2024", img: "img/p5.jpg" },
  { judul: "Latihan MC & Public Speaking", tanggal: "8 Apr 2025", img: "https://via.placeholder.com/320x180/ff6b35/ffffff?text=Public+Speaking" },
  { judul: "Pelatihan Desain Grafis", tanggal: "17 Apr 2025", img: "https://via.placeholder.com/320x180/9013fe/ffffff?text=Desain+Grafis" },
  { judul: "Simulasi UNBK", tanggal: "30 Apr 2025", img: "https://via.placeholder.com/320x180/26735f/ffffff?text=UNBK" },
  { judul: "Outing Class ke Museum", tanggal: "14 Mei 2025", img: "https://via.placeholder.com/320x180/ab47bc/ffffff?text=Outing+Class" },
  { judul: "Buka Puasa Bersama", tanggal: "20 Mar 2025", img: "https://via.placeholder.com/320x180/e779a0/ffffff?text=Buka+Bersama" },
  { judul: "Pelatihan P3K Dasar", tanggal: "6 Mei 2025", img: "https://via.placeholder.com/320x180/40c9ff/ffffff?text=P3K" },
  { judul: "Pembuatan Poster Edukasi", tanggal: "11 Mei 2025", img: "https://via.placeholder.com/320x180/5c6bc0/ffffff?text=Poster" },
  { judul: "Pentas Seni Akhir Semester", tanggal: "28 Mei 2025", img: "https://via.placeholder.com/320x180/6dd5ed/ffffff?text=Pentas+Seni" }
];