# Warisan Cirebon: Harmoni Budaya dalam Dunia Digital

![Logo Warisan Cirebon](./assets/logo.svg)

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Unggulan](#fitur-unggulan)
- [Struktur Direktori Proyek](#struktur-direktori-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Panduan Menjalankan Proyek](#panduan-menjalankan-proyek)
- [Halaman-Halaman Website](#halaman-halaman-website)
- [Fitur Interaktif](#fitur-interaktif)
- [Pengembang](#pengembang)

## Tentang Proyek

**Warisan Cirebon** adalah website yang didedikasikan untuk melestarikan dan memperkenalkan kekayaan budaya Cirebon kepada dunia digital. Website ini menampilkan berbagai aspek budaya Cirebon mulai dari sejarah, seni budaya tradisional, hingga profil pengembang yang berkontribusi dalam pelestarian budaya.

Proyek ini dikembangkan dengan teknologi web modern namun tetap menggunakan pendekatan fundamental (HTML, CSS, JavaScript murni) untuk memberikan pengalaman yang optimal dan mudah diakses oleh semua kalangan.

## Fitur Unggulan

### Halaman Beranda Interaktif

- Tampilan hero section yang menarik dengan informasi singkat tentang Cirebon
- Navigasi yang intuitif dan responsif
- Desain modern dengan perpaduan warna yang mencerminkan budaya Cirebon

### Galeri Budaya Interaktif

- **Slider Tari Topeng Cirebon** dengan 3 jenis topeng: Panji, Tumenggung, dan Samba
- **Slider Wayang Kulit Cirebon** menampilkan berbagai karakter wayang
- Fitur navigasi button untuk berpindah antar gambar
- Deskripsi detail untuk setiap elemen budaya

### Konten Sejarah Mendalam

- Timeline sejarah Cirebon dari masa kerajaan hingga modern
- Informasi tentang tokoh-tokoh penting seperti Sunan Gunung Jati
- Visualisasi yang menarik untuk pembelajaran sejarah

### Profil Tim Pengembang

- Halaman khusus yang memperkenalkan tim di balik proyek
- Informasi tentang kontribusi masing-masing anggota tim

### Desain Responsif

- Tampilan optimal di berbagai ukuran layar (desktop, tablet, mobile)
- Menu hamburger untuk navigasi mobile
- Layout yang adaptif tanpa framework eksternal

## Struktur Direktori Proyek

```
Warisan Cirebon/
├── index.html              # Halaman beranda
├── budaya.html             # Halaman budaya dengan slider interaktif
├── sejarah.html            # Halaman sejarah Cirebon
├── tentang-kami.html       # Halaman profil tim pengembang
├── detail-project.json     # File konfigurasi project
├── readme.md              # Dokumentasi project
├── assets/                # Folder aset media
│   ├── logo.svg           # Logo Warisan Cirebon
│   ├── topeng-panji.png   # Gambar topeng Panji
│   ├── topeng-tumenggung.png # Gambar topeng Tumenggung
│   ├── topeng-samba.png   # Gambar topeng Samba
│   ├── wayang-kulit-1.jpg # Gambar wayang kulit 1
│   ├── wayang-kulit-2.webp # Gambar wayang kulit 2
│   ├── wayang-kulit-3.jpg # Gambar wayang kulit 3
│   ├── sejarah-crb.jpg    # Gambar sejarah Cirebon
│   ├── budaya-crb.jpg     # Gambar budaya Cirebon
│   └── [gambar-lainnya]   # Aset gambar pendukung lainnya
├── scripts/               # Folder JavaScript
│   ├── main.js           # Script utama untuk navigasi
│   ├── budaya.js         # Script untuk slider interaktif
│   ├── sejarah.js        # Script untuk halaman sejarah
│   └── tentang-kami.js   # Script untuk halaman tim
└── styles/               # Folder CSS
    ├── main.css          # Stylesheet utama
    ├── budaya.css        # Style untuk halaman budaya
    ├── sejarah.css       # Style untuk halaman sejarah
    └── tentang-kami.css  # Style untuk halaman tim
```

## Teknologi yang Digunakan

### Frontend Technologies

- **HTML5** - Struktur semantik dan aksesibilitas
- **CSS3 Murni** - Styling responsif tanpa framework
- **JavaScript Vanilla** - Interaktivitas dan fungsi slider
- **Google Fonts** - Typography (Archivo & Libre Baskerville)

### Fitur Teknis

- **Responsive Design** - Media queries untuk semua ukuran layar
- **Interactive Sliders** - Navigasi gambar dengan JavaScript murni
- **Mobile Navigation** - Menu hamburger untuk perangkat mobile
- **Semantic HTML** - Struktur yang SEO-friendly
- **CSS Grid & Flexbox** - Layout modern dan fleksibel

**Catatan:** Proyek ini **100% menggunakan teknologi murni** tanpa framework atau library eksternal seperti Bootstrap, jQuery, React, atau Vue.js.

## Panduan Menjalankan Proyek

### Persyaratan Sistem

- Web browser modern (Chrome, Firefox, Safari, Edge)
- Tidak memerlukan server khusus (dapat dijalankan secara lokal)

### Langkah Instalasi

1. **Clone atau Download Project:**

   ```bash
   git clone [repository-url]
   # atau download sebagai ZIP dan extract
   ```

2. **Masuk ke Direktori Project:**

   ```bash
   cd "Warisan Cirebon"
   ```

3. **Jalankan Website:**
   - Buka file `index.html` dengan web browser
   - Atau gunakan Live Server jika menggunakan VS Code
   - Atau jalankan local server sederhana:
     ```bash
     python -m http.server 8000
     # kemudian buka http://localhost:8000
     ```

## Halaman-Halaman Website

### **index.html** - Beranda

Halaman utama yang memperkenalkan Warisan Cirebon dengan hero section dan navigasi utama.

### **budaya.html** - Budaya

Halaman khusus yang menampilkan:

- Slider interaktif Tari Topeng Cirebon (3 jenis topeng)
- Slider interaktif Wayang Kulit Cirebon (3 karakter wayang)
- Deskripsi detail setiap elemen budaya

### **sejarah.html** - Sejarah

Halaman yang menceritakan perjalanan sejarah Cirebon dari masa ke masa.

### **tentang-kami.html** - Tim Pengembang

Halaman profil tim yang mengembangkan website ini.

## Fitur Interaktif

### Slider Budaya

- **Slider Topeng:** 3 button navigasi untuk topeng Panji, Tumenggung, dan Samba
- **Slider Wayang:** 3 button navigasi untuk berbagai karakter wayang kulit
- **Auto-active Button:** Button pertama otomatis aktif saat halaman dimuat
- **Smooth Transition:** Pergantian gambar yang smooth dengan feedback visual

### Navigasi Responsif

- **Desktop:** Menu horizontal penuh
- **Mobile:** Menu hamburger dengan animasi
- **Auto-close:** Menu mobile tertutup otomatis saat item dipilih

### Interaksi JavaScript

- Event handling untuk semua button slider
- Responsive navigation toggle
- Dynamic content switching

## Pengembang

Website ini dikembangkan oleh tim yang berdedikasi untuk melestarikan budaya Cirebon melalui teknologi digital.

**Teknologi:** HTML5, CSS3, JavaScript (Vanilla)  
**Tahun:** 2025  
**Tujuan:** Pelestarian dan Digitalisasi Budaya Cirebon

---

_"Melestarikan warisan budaya melalui harmoni teknologi digital"_
