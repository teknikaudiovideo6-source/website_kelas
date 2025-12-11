// ===== DARK MODE =====
document.addEventListener('DOMContentLoaded', () => {
  const htmlRoot = document.getElementById('htmlRoot');
  const themeToggle = document.getElementById('themeToggle');
  
  // Cek preferensi sistem & localStorage
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
  
  if (currentTheme === 'dark') {
    htmlRoot.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlRoot.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
  });

  // ===== RENDER DATA =====
  const kegiatanContainer = document.getElementById('kegiatanContainer');
  kegiatanData.forEach(keg => {
    const card = document.createElement('div');
    card.className = 'kegiatan-card';
    card.innerHTML = `
      <div class="kegiatan-img" style="background-image: url('${keg.img}')"></div>
      <div class="kegiatan-content">
        <span class="date">${keg.tanggal}</span>
        <h3>${keg.judul}</h3>
      </div>
    `;
    kegiatanContainer.appendChild(card);
  });
  

  // Render dropdown siswa
  const studentSelect = document.getElementById('student');
  anggotaData
    .filter(a => a.kategori.includes('siswa'))
    .forEach(siswa => {
      const option = document.createElement('option');
      option.value = siswa.nama;
      option.textContent = siswa.nama;
      studentSelect.appendChild(option);
    });

  // Render anggota
  const anggotaContainer = document.getElementById('anggotaContainer');
  const renderAnggota = (filter = 'all') => {
    anggotaContainer.innerHTML = '';
    const filtered = anggotaData.filter(or => 
      filter === 'all' || or.kategori.includes(filter)
    );

    filtered.forEach(or => {
      const card = document.createElement('div');
      card.className = 'anggota-card';
      card.dataset.id = or.id;
      card.innerHTML = `
        <div class="anggota-img" style="background-image: url('${or.img}')"></div>
        <h3>${or.nama}</h3>
        <p class="role">${or.role}</p>
        <p class="desc">${or.desc}</p>
      `;
      anggotaContainer.appendChild(card);

      card.addEventListener('click', () => {
        const data = anggotaData.find(a => a.id === or.id);
        if (data) {
          document.getElementById('lightboxImg').src = data.img;
          document.getElementById('lightboxName').textContent = data.nama;
          document.getElementById('lightboxRole').textContent = data.role;
          document.getElementById('lightboxDesc').textContent = data.desc;
          document.getElementById('lightbox').classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  };
  renderAnggota();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAnggota(btn.dataset.filter);
    });
  });

  // ===== LIGHTBOX =====
  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ===== KALENDER =====
  // Ganti dengan URL kalender publik Anda
  const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FJakarta&bgcolor=%23ffffff&src=c21hbmVnZXJpMW1hamJlcnNhLmdvdi5pZV85MnNzMWt0cW45YzFvZjJzcTJwMWZ0aWVuc0Bncm91cC5hbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5';
  document.getElementById('calendarIframe').src = CALENDAR_URL;
  document.getElementById('calendarLink').href = CALENDAR_URL.replace('embed?', 'u/0?cid=');

  // ===== FORM KEHADIRAN =====
// ===== FORM KEHADIRAN: SIMPAN LANGSUNG KE EXCEL =====
document.getElementById('saveToExcelBtn')?.addEventListener('click', () => {
  // Validasi SheetJS
  if (typeof XLSX === 'undefined') {
    alert("❌ ERROR: Library Excel belum dimuat!\nPastikan sudah tambahkan:\n<script src=\"https://cdn.jsdelivr.net/npm/xlsx@0.20.0/dist/xlsx.full.min.js\"></script>");
    return;
  }

  // Ambil data form
  const date = document.getElementById('date')?.value;
  const student = document.getElementById('student')?.value;
  const status = document.querySelector('input[name="status"]:checked')?.value;
  const note = document.getElementById('note')?.value || '-';

  // Validasi
  if (!date || !student || !status) {
    alert('⚠️ Lengkapi: Tanggal, Nama Siswa, dan Status!');
    return;
  }

  // Format tanggal Indonesia
  const dateObj = new Date(date);
  const tanggalIndo = dateObj.toLocaleDateString('id-ID');

  // Data untuk Excel
  const data = [
    ["No", "Tanggal", "Nama Siswa", "Status", "Catatan"],
    [1, tanggalIndo, student, status, note]
  ];

  // Buat file Excel
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Kehadiran");

  // Download
  const fileName = `Kehadiran_${student}_${tanggalIndo.replace(/\//g, '-')}.xlsx`;
  XLSX.writeFile(wb, fileName);
  
  // Reset form
  document.getElementById('attendanceForm')?.reset();
  document.getElementById('date').value = new Date().toISOString().split('T')[0];
  
  alert(`✅ Data ${student} berhasil disimpan!\nFile: ${fileName}`);
});

  // ===== EXPORT KE PDF =====
  document.getElementById('exportPdfBtn').addEventListener('click', () => {
    const records = JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
    
    if (records.length === 0) {
      alert('Belum ada data kehadiran untuk di-export!');
      return;
    }

    // Buat konten PDF
    let pdfContent = `
      <div style="font-family: 'Poppins', sans-serif; max-width:800px; margin:0 auto; padding:2rem">
        <h1 style="color:#1e56a0; text-align:center">Laporan Kehadiran Kelas X-5</h1>
        <p style="text-align:center; color:#4a5568">SMA Negeri 1 Maju Bersama | Periode: ${new Date().toLocaleDateString('id-ID')}</p>
        <hr style="margin:1.5rem 0; border:0; border-top:1px solid #e2e8f0">
        <table style="width:100%; border-collapse:collapse; margin-top:1rem">
          <thead>
            <tr style="background:#1e56a0; color:white">
              <th style="padding:0.8rem; text-align:left">No</th>
              <th style="padding:0.8rem; text-align:left">Tanggal</th>
              <th style="padding:0.8rem; text-align:left">Nama Siswa</th>
              <th style="padding:0.8rem; text-align:left">Status</th>
              <th style="padding:0.8rem; text-align:left">Catatan</th>
            </tr>
          </thead>
          <tbody>
    `;

    records.forEach((rec, i) => {
      const statusColor = 
        rec.status === 'Hadir' ? '#38a169' :
        rec.status === 'Sakit' ? '#dd6b20' :
        rec.status === 'Izin' ? '#3182ce' : '#e53e3e';
      
      pdfContent += `
        <tr style="border-bottom:1px solid #e2e8f0">
          <td style="padding:0.8rem">${i+1}</td>
          <td style="padding:0.8rem">${new Date(rec.date).toLocaleDateString('id-ID')}</td>
          <td style="padding:0.8rem">${rec.student}</td>
          <td style="padding:0.8rem">
            <span style="background:${statusColor}; color:white; padding:0.2rem 0.6rem; border-radius:4px; display:inline-block">
              ${rec.status}
            </span>
          </td>
          <td style="padding:0.8rem">${rec.note}</td>
        </tr>
      `;
    });

    pdfContent += `
            </tbody>
          </table>
          <div style="margin-top:2rem; padding-top:1rem; border-top:1px solid #e2e8f0; color:#718096; font-size:0.9rem">
            Dicetak pada: ${new Date().toLocaleString('id-ID')} | Jumlah: ${records.length}
          </div>
        </div>
      `;

    // Generate PDF
    const opt = {
      margin: 10,
      filename: `Kehadiran_Kelas_X-5_${new Date().toISOString().slice(0,10)}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(pdfContent).set(opt).save();
  });

  // ===== LIHAT RIWAYAT =====
  document.getElementById('viewHistoryBtn').addEventListener('click', () => {
    const records = JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
    if (records.length === 0) {
      alert('Belum ada riwayat kehadiran.');
      return;
    }

    let history = '=== RIWAYAT KEHADIRAN ===\n\n';
    records.forEach(rec => {
      history += `${rec.date} | ${rec.student} | ${rec.status} | ${rec.note}\n`;
    });

    alert(history);
  });

  // ===== NAVIGASI =====
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const headerHeight = 80;
        const offsetPosition = target.offsetTop - headerHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% of element is visible
    };

    const elements = document.querySelectorAll('.anggota-card, .kegiatan-card, .section-subtitle');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... Kode JavaScript yang sudah ada (Theme Toggle, Hamburger Menu, dll.) ...

     
