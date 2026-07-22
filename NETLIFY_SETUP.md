# Panduan Upload ke Netlify — Step by Step

## STEP 1: PERSIAPAN (5 menit)

### 1.1 Update Placeholder Data

Sebelum upload, update data placeholder ini:

**File: js/main.js** (line ~12)
```javascript
const CONFIG = {
  whatsappNumber: '62xxxxxxxxxx', // GANTI dengan nomor WhatsApp Anda
};
```

**File: Footer (semua pages)** — cari & ganti:
- `62xxxxxxxxxx` → nomor WhatsApp Anda
- `info@pustaka.id` → email Anda
- `https://instagram.com/pustaka.tujua` → Instagram Anda
- `https://facebook.com/pustaka.tujua` → Facebook Anda

**File: index.html & pages/**
- Cari `<!-- TODO:` comments & isi sesuai kebutuhan

### 1.2 Compile CSS (Final)

```bash
npm run build:css
```

Pastikan `css/main.css` sudah di-generate dengan ukuran ~80KB.

### 1.3 Test Lokal

Buka `index.html` di browser:
```
file:///C:/Users/USER/Music/web_penerbit/index.html
```

Verify:
- ✅ Layout OK
- ✅ Warna/font loading
- ✅ Hamburger menu work
- ✅ WhatsApp links work
- ✅ Tidak ada error di console (F12 → Console)

---

## STEP 2: SIAPKAN GITHUB (15 menit)

Netlify deploy dari GitHub, jadi harus upload ke GitHub dulu.

### 2.1 Create GitHub Repository

1. Buka https://github.com/new
2. Isi form:
   - **Repository name**: `pustaka-tujua-media` (atau nama lain)
   - **Description**: "Website company profile untuk jasa penerbitan naskah"
   - **Visibility**: Public (agar Netlify bisa akses)
   - **Add a README**: ✅ Check
   - Click **Create repository**

### 2.2 Upload Files ke GitHub (dari Command Line)

Buka Command Prompt / PowerShell di folder project:

```bash
# Navigate ke folder project
cd C:\Users\USER\Music\web_penerbit

# Inisialisasi git (jika belum)
git init

# Add semua files
git add .

# Commit
git commit -m "Initial commit: Website Pustaka Tujua Media"

# Add remote (ganti USERNAME & REPONAME)
git remote add origin https://github.com/USERNAME/pustaka-tujua-media.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

**Output yang diharapkan:**
```
Enumerating objects: 50, done.
...
To https://github.com/USERNAME/pustaka-tujua-media.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ Files sudah di GitHub!

### 2.3 Verify di GitHub

1. Buka https://github.com/USERNAME/pustaka-tujua-media
2. Lihat semua files sudah upload
3. Copy repository URL (untuk Netlify nanti)

---

## STEP 3: DEPLOY KE NETLIFY (10 menit)

### 3.1 Create Netlify Account

1. Buka https://app.netlify.com/signup
2. Pilih: **Sign up with GitHub**
3. Authorize Netlify untuk akses GitHub
4. ✅ Account created!

### 3.2 Connect Repository

1. Di Netlify dashboard, click **Add new site → Import an existing project**
2. Click **GitHub**
3. Authorize Netlify (jika diminta)
4. **Select a repository** → cari `pustaka-tujua-media`
5. Click repository

### 3.3 Configure Build Settings

Netlify akan tampilkan form:

```
Build settings:
- Branch to deploy: main ✅ (default OK)
- Build command: npm run build:css
- Publish directory: . (root folder)
```

**Copy-paste ini untuk Build command:**
```
npm run build:css
```

**Publish directory:** `.` (dot, artinya root)

Click **Deploy site**

### 3.4 Wait for Deploy

Netlify akan:
1. Install dependencies (npm install)
2. Run build command (npm run build:css)
3. Deploy files ke Netlify CDN
4. Generate URL

**Status page:**
```
Deploy in progress...
Building...
Published!

Site: https://xxxxx.netlify.app
```

⏱️ Takes 2-3 minutes

✅ Website LIVE! 🎉

---

## STEP 4: SETUP CUSTOM DOMAIN (10 menit)

### 4.1 (Optional) Gunakan Custom Domain

Jika Anda punya domain sendiri (misalnya: pustaka-tujua.com):

1. **Di Netlify Dashboard** → Site settings → Domain management
2. Click **Add custom domain**
3. Ketik domain Anda: `pustaka-tujua.com`
4. Click **Verify**

### 4.2 Update DNS (di Domain Registrar)

Netlify akan kasih instruksi DNS. Contoh:
```
CNAME: www.pustaka-tujua.com → xxxxx.netlify.app
A: pustaka-tujua.com → 75.2.60.5 (Netlify nameserver)
```

Update DNS di tempat Anda beli domain (Namecheap, GoDaddy, Google Domains, dll).

**Takes 24-48 hours** untuk propagate.

### 4.3 Enable HTTPS

Netlify auto-enable HTTPS dengan Let's Encrypt:
```
✅ HTTPS enabled
🔒 https://pustaka-tujua.com
```

---

## STEP 5: POST-DEPLOY TEST (10 menit)

### 5.1 Test Live Site

1. Buka URL Netlify: `https://xxxxx.netlify.app`
2. Verify:
   - ✅ Homepage load
   - ✅ Hamburger menu work (klik 3 garis)
   - ✅ Klik "Mulai Sekarang" → WhatsApp terbuka
   - ✅ Navigation ke About, Layanan, Portfolio, Contact
   - ✅ Footer links work
   - ✅ CSS loaded (colors OK)
   - ✅ Mobile responsive (resize browser)

### 5.2 Run Lighthouse

1. Buka site di Chrome
2. Press **F12** (DevTools)
3. Click **Lighthouse** tab
4. Click **Analyze page load**
5. Check scores:
   - Performance: ≥ 90 ✅
   - Accessibility: ≥ 95 ✅
   - Best Practices: ≥ 90 ✅
   - SEO: ≥ 95 ✅

### 5.3 Check Console untuk Errors

1. DevTools → Console tab
2. Verify: NO red errors
3. Jika ada error, fix lokal → push ke GitHub → Netlify auto-redeploy

---

## STEP 6: SETUP MONITORING (5 menit)

### 6.1 Google Search Console

1. Buka https://search.google.com/search-console/about
2. Click **Start now**
3. **Add property** → URL prefix
4. Paste URL Netlify: `https://xxxxx.netlify.app`
5. **Verify ownership** → Download HTML file → upload ke root folder
6. **Submit sitemap**: `/sitemap.xml`
7. ✅ GSC setup!

### 6.2 Google Analytics (Optional)

1. Buka https://analytics.google.com/
2. Create new property
3. Get tracking ID
4. Add ke semua HTML files di `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## TROUBLESHOOTING

### Deploy Gagal

**Error: "Build command failed"**
1. Check `npm run build:css` works lokal
2. Check `package.json` OK
3. Check `tailwind.config.js` OK
4. Push fixes ke GitHub
5. Netlify auto-redeploy

**Solution:**
```bash
# Lokal
npm run build:css  # Verify works
git add .
git commit -m "Fix build"
git push origin main
# Netlify akan auto-deploy
```

### CSS Not Loading

**Problem: Site looks ugly, colors missing**

1. Check `css/main.css` exists di GitHub
2. Check build command: `npm run build:css`
3. Force rebuild: **Netlify dashboard → Deploys → Trigger deploy**

### WhatsApp Links Not Working

1. Check WhatsApp number di `js/main.js` sudah correct
2. Test di mobile browser (better support)
3. Check console (F12) untuk errors

---

## CHECKLIST SEBELUM DEPLOY

- [ ] WhatsApp number updated (js/main.js)
- [ ] Email updated (footer, contact page)
- [ ] Social media links updated
- [ ] CSS compiled: `npm run build:css`
- [ ] Tested lokal (browser, mobile responsive)
- [ ] No console errors
- [ ] GitHub repository created & files uploaded
- [ ] Netlify account created
- [ ] GitHub connected to Netlify
- [ ] Build command set: `npm run build:css`
- [ ] Publish directory: `.`
- [ ] Site deployed & live
- [ ] Lighthouse test done (90+)
- [ ] Google Search Console submitted
- [ ] Analytics setup (optional)

---

## LINK PENTING

| Layanan | URL |
|---------|-----|
| GitHub | https://github.com |
| Netlify | https://app.netlify.com |
| Google Search Console | https://search.google.com/search-console/ |
| Google Analytics | https://analytics.google.com/ |
| Lighthouse | https://pagespeed.web.dev/ |

---

## SETELAH DEPLOY — MAINTENANCE

### Weekly
- Check Google Search Console untuk crawl errors
- Monitor traffic (if analytics enabled)

### Monthly
- Run Lighthouse test
- Check all links work
- Update content if needed

### Edit Content Nanti

**PENTING**: Tidak perlu rebuild CSS untuk edit HTML content!

```bash
# Edit HTML files (any page)
# Push ke GitHub
git add pages/about.html
git commit -m "Update content"
git push origin main

# Netlify auto-deploy (30 sec)
```

Hanya rebuild CSS jika mengubah Tailwind config atau CSS.

---

## QUICK REFERENCE

```bash
# Update placeholder data → Update files locally

# Compile CSS
npm run build:css

# Git commands
git add .
git commit -m "Initial commit"
git push origin main

# Netlify akan auto-deploy ketika push ke main branch
```

---

**Status**: Ready to deploy! Follow steps 1-6 untuk go live. 🚀

Sudah siap? Mulai dari STEP 1!
