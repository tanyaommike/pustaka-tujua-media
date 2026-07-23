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

## Opsi 1: Netlify (Rekomendasi)

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
   - **Build command**: kosongkan (CSS sudah di-compile & di-commit ke `css/main.css`)
   - **Publish directory**: `.`
4. Deploy — Netlify beri URL `https://xxxxx.netlify.app`

Konfigurasi di atas sudah tersimpan di `netlify.toml` (root project), termasuk `404.html` custom dan cache headers untuk `css/`, `js/`, `images/`, `.html`.

> **Kenapa build command dikosongkan?** Karena `node_modules/` tidak ikut di-push ke GitHub, Netlify tidak bisa menjalankan `npm run build:css` (`tailwindcss: command not found`). Solusinya: compile CSS lokal (`npm run build:css`), commit `css/main.css`, biarkan Netlify hanya publish file statis.

> **Penting soal cache**: `css/main.css` dan `js/main.js` punya nama file yang sama tiap deploy (tidak pakai hash seperti `main.a1b2c3.css`). Karena itu, **jangan** set `Cache-Control` jadi `immutable` atau `max-age` yang sangat panjang untuk `css/`/`js`/`images` — begitu isinya berubah tapi nama filenya sama, browser pengunjung lama akan terus pakai versi cache yang basi (gejalanya: style/ikon jadi berantakan setelah update, padahal kode sudah benar). Setelan saat ini (`max-age=3600, must-revalidate` untuk css/js) sengaja dibuat pendek untuk menghindari ini.

### Custom Domain (opsional)

1. Netlify Dashboard → Site settings → Domain management → **Add custom domain**
2. Update DNS di registrar sesuai instruksi Netlify (CNAME atau nameserver)
3. Tunggu 24-48 jam propagasi, HTTPS otomatis aktif (Let's Encrypt)

---

## Opsi 2: Vercel

1. https://vercel.com/ → **Add New → Project** → import repo
2. Build command: kosongkan (sama alasan seperti Netlify)
3. Output directory: `.`
4. Deploy

## Opsi 3: GitHub Pages

1. Push ke GitHub → repo **Settings → Pages**
2. Source: branch `main`, folder `/ (root)`
3. Site live di `https://username.github.io/repo-name/`
4. Catatan: jika pakai path bukan root, semua link relatif (`/pages/about.html`) perlu disesuaikan dengan nama repo — ini alasan Netlify/Vercel lebih simpel untuk custom domain.

## Opsi 4: Hosting Tradisional (FTP)

1. `npm run build:css` lokal
2. Upload semua file via FTP (FileZilla dll) ke `public_html/` atau `www/`
3. Set custom domain via DNS di registrar
4. Aktifkan HTTPS (biasanya Let's Encrypt otomatis dari panel hosting)

---

## Update Konten Setelah Live

**Perubahan HTML/konten** — tidak perlu rebuild CSS:
```bash
git add pages/about.html
git commit -m "Update content"
git push origin main
```
Netlify/Vercel auto-deploy dalam ~30 detik – 2 menit.

**Perubahan CSS/Tailwind config**:
```bash
npm run build:css
git add css/main.css
git commit -m "Update styles"
git push
```

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
| Build gagal / `tailwindcss: command not found` | Pastikan build command di Netlify/Vercel dikosongkan, `css/main.css` sudah di-commit |
| CSS tidak muncul / styling rusak | Cek `css/main.css` ada di GitHub; trigger redeploy manual di dashboard |
| Link WhatsApp tidak jalan | Cek `CONFIG.whatsappNumber` di `js/main.js` sudah nomor asli; test di device mobile |
| Gambar tidak muncul | Cek path relatif benar, file ada di `/images/`, cek console untuk 404 |

**Referensi**: [Netlify Docs](https://docs.netlify.com/) · [Vercel Docs](https://vercel.com/docs) · [GitHub Pages Docs](https://pages.github.com/) · [PageSpeed Insights](https://pagespeed.web.dev/)
