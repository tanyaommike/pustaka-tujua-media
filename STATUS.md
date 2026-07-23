# Pustaka Tujua Media — Status Proyek

**Project**: Website Company Profile — Jasa Penerbitan Naskah/Buku Digital
**Status**: Kode 100% selesai, siap deploy — menunggu update data & testing

---

## ✅ Sudah Selesai

- **Requirements & Design**: Lihat `REQUIREMENTS.md` & `DESIGN.md`
- **7 Halaman**: `index.html`, `pages/about.html`, `pages/layanan.html`, `pages/portfolio.html`, `pages/contact.html`, `pages/privacy.html`, `pages/terms.html`
- **Assets**: `css/main.css` (Tailwind compiled & minified), `js/main.js` (vanilla, hamburger + WhatsApp links)
- **SEO**: `sitemap.xml`, `robots.txt`, meta tags & Open Graph di semua halaman
- **Config Netlify**: `netlify.toml` — build command dikosongkan (pakai `css/main.css` yang sudah di-compile, tidak perlu build di Netlify)
- **Link WhatsApp konsisten** — semua tombol & link WhatsApp (termasuk `footer-whatsapp`, `contact-whatsapp`, `btn-whatsapp-quick`, `btn-hubungi-bottom` yang sebelumnya tidak ter-update) sekarang memakai nomor asli via `js/main.js`
- **Form kontak fungsional** — `pages/contact.html` terhubung ke Netlify Forms (submit AJAX + pesan sukses/gagal inline), sebelumnya tidak mengirim data kemana pun
- **Konten portfolio & tim tidak lagi kosong** — sebelumnya judul buku, nama tim, dan statistik hanya berupa HTML comment (render kosong di halaman). Sudah diisi data contoh yang terlihat (lihat catatan di bawah — masih perlu diganti data asli)
- **Copyright tahun otomatis** — `&copy; <tahun>` di footer sekarang di-update otomatis oleh JS, tidak perlu edit manual tiap tahun

## ⏳ Belum Selesai / Perlu Dikerjakan

### 1. Ganti Data Contoh dengan Data Asli
- Email asli (masih `info@pustaka.id`), link Instagram/Facebook asli
- Nama, posisi, & foto tim asli (`pages/about.html` — saat ini diisi data contoh: "Nama Founder", "Nama Desainer", "Nama Koordinator")
- Item portfolio asli (`pages/portfolio.html` — saat ini diisi 4 contoh buku fiktif untuk placeholder tampilan, plus angka statistik contoh 50+/150+/2024)

### 2. Gambar Asli
- Ganti placeholder emoji dengan cover buku asli di `/images/covers/`
- Tambah Open Graph image (1200x630px) di `/images/og/`

### 3. Aktifkan Netlify Forms di Dashboard
- Form kontak sudah dikonfigurasi (`data-netlify="true"` + honeypot), tapi Netlify baru mendeteksinya setelah file di-deploy pertama kali. Setelah deploy, cek Netlify Dashboard → Forms untuk memastikan form "contact" terdaftar.

### 4. Testing
- Lihat checklist lengkap di `CHECKLIST.md`

### 5. Push & Deploy
- Commit perubahan (`js/main.js`, `css/main.css`, semua halaman, `config.json`, `netlify.toml`)
- Push ke GitHub → Netlify auto-deploy
- Detail langkah di `DEPLOYMENT.md`

---

## Info Repo

- **GitHub**: https://github.com/tanyoommike/pustaka-tujua-media
- **Branch**: main
- **Hosting rencana**: Netlify (build command kosong, publish directory `.`)
