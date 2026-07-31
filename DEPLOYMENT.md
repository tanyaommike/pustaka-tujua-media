# Deployment Guide — Pustaka Tujua Media

## Pre-Deployment Checklist

- [ ] Update nomor WhatsApp (`js/main.js`, footer semua halaman)
- [ ] Update email & link sosial media (semua halaman)
- [ ] Ganti gambar placeholder dengan cover buku asli
- [ ] Update nama tim (`pages/about.html`) & item portfolio (`pages/portfolio.html`)
- [ ] Jalankan `npm run build:css` jika ada perubahan Tailwind/CSS
- [ ] Test lokal di browser (buka `index.html`, cek console tidak ada error)
- [ ] Lihat `CHECKLIST.md` untuk testing lengkap

---

## Opsi 1: cPanel (Hosting Shared — Niagahoster/Hostinger/IDCloudHost dll)

Situs ini **static** (HTML + CSS + JS saja), jadi cara paling mudah: upload file lewat cPanel.

> ⚠️ **Penting**: situs ini pakai path absolut (`/pages/about.html`, `/css/main.css`, dll), jadi file **harus** berada di akar domain — folder `public_html/` untuk domain utama. Jangan taruh di sub-folder (mis. `public_html/blog/`) karena semua link akan patah.

### Langkah 1 — Build & buat paket upload (lokal)

```bash
npm run build
```

Hasil build sudah menghasilkan paket `pustaka-tujua-media-site.zip` di root project (berisi `index.html`, `404.html`, `pages/`, `artikel/`, `css/`, `js/`, `images/`, `robots.txt`, `sitemap.xml`, dan `.htaccess`). Jika zip belum ada, buat manual dengan memilih semua item di atas (kecuali `node_modules/` dan `.git/`) → kanan → *Send to → Compressed (zipped) folder*.

### Langkah 2 — Upload ke cPanel

1. Login ke **cPanel** (biasanya `domain.com/cpanel` atau dari dashboard hosting)
2. Buka **File Manager** → masuk ke folder **`public_html`** (folder utama website)
3. Klik **Upload** → pilih `pustaka-tujua-media-site.zip`
4. Setelah selesai, kembali ke File Manager, klik kanan zip → **Extract**
5. **Pindahkan semua file** hasil extract ke `public_html` root:
   - Buka folder hasil extract → **Select All** → klik **Move** → ketik `../` → pindah ke `public_html`
   - Hapus folder extract & file zip yang sudah tidak terpakai

> **Alternatif (FileZilla)**: Hosting → *FTP/SFTP Details* untuk ambil host, username, password → buka FileZilla → connect → upload semua folder & file dari project ke `public_html`. Pastikan `.htaccess` ikut ter-upload (FileZilla default menyembunyikan file dot; ubah *Server → Force showing hidden files*).

### Langkah 3 — Cek

1. Buka `domain.com` di browser — homepage harus muncul
2. Test beberapa halaman: `domain.com/pages/layanan.html`, `domain.com/artikel/5-kesalahan-penulis-pemula.html`
3. Test halaman salah ketik → harus tampil halaman 404 kustom (via `.htaccess`)
4. Aktifkan **HTTPS/SSL**: cPanel → *SSL/TLS Status* atau fitur *AutoSSL* hosting (Let's Encrypt) — aktifkan agar URL pakai `https://`

### Langkah 4 — Custom domain

Jika domain sudah terhubung ke hosting ini, tidak perlu konfigurasi DNS lagi. Jika domain terdaftar di tempat lain, set **nameserver** domain ke nameserver hosting Anda (lihat email konfirmasi hosting), tunggu propagasi 24-48 jam.

---

## Opsi 2: Netlify

### Setup GitHub

```bash
cd C:\Users\USER\Music\web_penerbit
git init          # jika belum ada
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/pustaka-tujua-media.git
git branch -M main
git push -u origin main
```

### Connect ke Netlify

1. https://app.netlify.com/signup → sign up dengan GitHub
2. **Add new site → Import an existing project** → pilih repo
3. Build settings:
   - **Build command**: `npm run build` (compile CSS Tailwind + build halaman artikel & sitemap)
   - **Publish directory**: `.`
4. Deploy — Netlify beri URL `https://xxxxx.netlify.app`

Konfigurasi di atas sudah tersimpan di `netlify.toml` (root project), termasuk redirect `/artikel/*` → `.html`, `404.html` custom dan cache headers untuk `css/`, `js/`, `images/`, `.html`.

> **Kenapa `npm run build`?** `node_modules/` tidak ikut di-push ke GitHub (lihat `.gitignore`), jadi Netlify akan menjalankan `npm install` lalu `npm run build` otomatis. Ini memastikan CSS, halaman artikel, dan `sitemap.xml` selalu terbaru tanpa harus di-commit ulang manual.

> **Penting soal cache**: `css/main.css` dan `js/main.js` punya nama file yang sama tiap deploy (tidak pakai hash seperti `main.a1b2c3.css`). Karena itu, **jangan** set `Cache-Control` jadi `immutable` atau `max-age` yang sangat panjang untuk `css/`/`js`/`images` — begitu isinya berubah tapi nama filenya sama, browser pengunjung lama akan terus pakai versi cache yang basi (gejalanya: style/ikon jadi berantakan setelah update, padahal kode sudah benar). Setelan saat ini (`max-age=3600, must-revalidate` untuk css/js) sengaja dibuat pendek untuk menghindari ini.

### Custom Domain (opsional)

1. Netlify Dashboard → Site settings → Domain management → **Add custom domain**
2. Update DNS di registrar sesuai instruksi Netlify (CNAME atau nameserver)
3. Tunggu 24-48 jam propagasi, HTTPS otomatis aktif (Let's Encrypt)

---

## Opsi 3: Vercel

1. https://vercel.com/ → **Add New → Project** → import repo
2. Build command: `npm run build`
3. Output directory: `.`
4. Deploy

## Opsi 4: GitHub Pages

1. Push ke GitHub → repo **Settings → Pages**
2. Source: branch `main`, folder `/ (root)`
3. Site live di `https://username.github.io/repo-name/`
4. Catatan: jika pakai path bukan root, semua link relatif (`/pages/about.html`) perlu disesuaikan dengan nama repo — ini alasan Netlify/Vercel lebih simpel untuk custom domain.

---

## Update Konten Setelah Live

**Perubahan HTML/konten** — tidak perlu rebuild CSS:
```bash
git add pages/about.html
git commit -m "Update content"
git push origin main
```
Netlify/Vercel auto-deploy dalam ~30 detik – 2 menit.

**Perubahan CSS/Tailwind config atau artikel Markdown**:
```bash
npm run build
git add css/main.css artikel/ sitemap.xml
git commit -m "Update styles"
git push
```
> Catatan: `artikel/*.html`, `css/main.css`, dan `sitemap.xml` adalah hasil build. Jika mengubah `content/articles/*.md`, jalankan `npm run build` dan commit hasilnya.

---

## Post-Deployment

- [ ] Buka live URL, test semua halaman (desktop & mobile)
- [ ] Test hamburger menu & link WhatsApp di mobile
- [ ] Cek console tidak ada error (F12)
- [ ] Submit `sitemap.xml` ke [Google Search Console](https://search.google.com/search-console/)
- [ ] (Opsional) Setup Google Analytics — tambahkan tracking script di `<head>` semua halaman
- [ ] (Opsional) Setup uptime monitoring ([Uptime Robot](https://uptimerobot.com/))

---

## Troubleshooting

| Masalah | Solusi |
|---|---|
| Build gagal / `tailwindcss: command not found` | Pastikan `npm install` jalan saat build (Netlify/Vercel otomatis); cek `package.json` & `.gitignore` benar |
| CSS tidak muncul / styling rusak | Jalankan `npm run build:css`, commit `css/main.css`, redeploy |
| Halaman artikel 404 | Pastikan sudah `npm run build` dan `artikel/*.html` ter-commit |
| Halaman 404 kustom tidak muncul (cPanel) | Pastikan `.htaccess` ikut ter-upload di `public_html` |
| Semua link/style patah (cPanel) | File tidak di akar domain — pindahkan dari sub-folder ke `public_html` langsung |
| Link WhatsApp tidak jalan | Cek `CONFIG.whatsappNumber` di `js/main.js` sudah nomor asli; test di device mobile |
| Gambar tidak muncul | Cek path relatif benar, file ada di `/images/`, cek console untuk 404 |

**Referensi**: [Netlify Docs](https://docs.netlify.com/) · [Vercel Docs](https://vercel.com/docs) · [GitHub Pages Docs](https://pages.github.com/) · [PageSpeed Insights](https://pagespeed.web.dev/)
