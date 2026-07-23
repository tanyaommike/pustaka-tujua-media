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
- **Tombol WhatsApp mengambang** — muncul konsisten di semua halaman (termasuk `404.html`) untuk CTA yang selalu terlihat
- **FAQ jadi accordion** — `pages/layanan.html` sekarang pakai `<details>/<summary>` native, lebih ringkas terutama di mobile
- **Loading state tombol kirim** — tombol "Kirim Pesan" nonaktif & berubah teks "Mengirim..." saat proses submit form
- **Halaman 404 kustom** — `404.html` di root, sebelumnya URL salah ketik akan auto-redirect ke homepage (redirect SPA-style di `netlify.toml` sudah dihapus karena situs ini bukan SPA)
- **Schema.org LocalBusiness** — JSON-LD ditambahkan di `index.html` untuk SEO
- **Gambar pengganti emoji** — cover buku portfolio (`/images/covers/book-1.svg` s.d. `book-4.svg`) dan avatar tim (`/images/team/avatar-1.svg` s.d. `avatar-3.svg`) berupa SVG buatan sendiri (bukan foto asli, bukan stok internet) supaya tampilan tidak polos sebelum ada foto sungguhan, dengan ikon buku yang konsisten di semua cover
- **Halaman detail portfolio** — tiap cover di `pages/portfolio.html` sekarang bisa diklik, menuju halaman sendiri di `pages/portfolio/<slug>.html` (cover besar, judul, deskripsi lebih lengkap, tombol WhatsApp khusus per buku, link ke halaman layanan). Sengaja **tidak** pakai harga per buku — lihat alasan di bawah
- **5 section baru di homepage** (`index.html`): Buku Terbitan Kami (grid cover 6/3/2 kolom + link ke portfolio lengkap), revisi Paket Layanan (badge "Best Value" di paket Kolaborasi, durasi proses dalam hari, icon checklist, fitur tambahan seperti proofreading/cek plagiarisme/gratis ongkir — sengaja tanpa fitur ISBN), Testimoni (3 kartu, ditandai `[DUMMY]`), Artikel Terbaru (4 kartu, link ke `/artikel/<slug>` yang belum ada halamannya), FAQ accordion dengan icon plus/minus. Tombol WhatsApp di section baru pakai sistem id + `js/main.js` yang sudah ada (bukan placeholder terpisah) supaya nomor tetap satu sumber kebenaran

## ⏳ Belum Selesai / Perlu Dikerjakan

### 1. Ganti Data & Gambar Contoh dengan Data Asli
- Email asli (masih `info@pustaka.id`), link Instagram/Facebook asli
- Nama, posisi, & foto tim asli (`pages/about.html` — saat ini teks contoh "Nama Founder" dll, foto masih ikon SVG generik)
- Item portfolio asli (`pages/portfolio.html` — saat ini 4 contoh buku fiktif + cover SVG buatan, plus angka statistik contoh 50+/150+/2024)
- Foto asli tim & cover buku asli (ganti file di `/images/team/` dan `/images/covers/`, bisa pakai nama file yang sama supaya tidak perlu ubah HTML)
- **Testimoni asli** — 3 kartu testimoni di homepage masih dummy (ditandai `[DUMMY]` di tiap kartu), ganti teks, nama, jabatan, dan foto (`/images/team/client-1.svg` s.d. `client-3.svg`)
- **Artikel asli** — 4 link artikel di homepage (`/artikel/...`) belum ada halamannya sama sekali (dummy link, akan 404 kalau diklik). Perlu diputuskan: mau bikin blog sungguhan (perlu halaman detail per artikel) atau ganti jadi galeri foto kegiatan yang lebih simpel

### 2. Open Graph Image
- Tambah gambar OG asli (format JPG/PNG, 1200x630px) di `/images/og/` — SVG tidak reliable untuk og:image di kebanyakan platform sosial media, jadi ini butuh gambar raster asli

### 3. Aktifkan Netlify Forms di Dashboard
- Form kontak sudah dikonfigurasi (`data-netlify="true"` + honeypot), tapi Netlify baru mendeteksinya setelah file di-deploy pertama kali. Setelah deploy, cek Netlify Dashboard → Forms untuk memastikan form "contact" terdaftar.

### 4. Testing
- Lihat checklist lengkap di `CHECKLIST.md`

### 5. Push & Deploy
- Commit perubahan
- Push ke GitHub → Netlify auto-deploy
- Detail langkah di `DEPLOYMENT.md`

---

## Info Repo

- **GitHub**: https://github.com/tanyaommike/pustaka-tujua-media
- **Branch**: main
- **Hosting rencana**: Netlify (build command kosong, publish directory `.`)
