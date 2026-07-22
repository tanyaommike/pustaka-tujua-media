# Pustaka Tujua Media — Requirements Dokumen

**Website**: Company profile untuk jasa penerbitan naskah/buku digital  
**Target Audiens**: Penulis individu & kelompok kecil (akses mayoritas dari HP)  
**Launch Date**: TBD  
**Maintenance**: Client self-edit friendly

---

## 1. FUNCTIONAL REQUIREMENTS

### 1.1 Halaman-halaman

| Halaman | Tujuan | Key Content |
|---------|--------|------------|
| **Home** | Landing & value proposition | Hero, value prop, 3 paket layanan (cards), CTA |
| **About** | Brand credibility | Cerita Pustaka Tujua Media, misi, keunggulan |
| **Layanan** | Detail layanan & proses | 3 paket dengan detail, timeline, proses step-by-step, FAQ |
| **Portfolio** | Proof & case studies | Sampel karya (placeholder untuk struktur) |
| **Contact** | Kontak & info | Form kontak opsional, info WhatsApp, sosial media links |
| **Privacy** | Legal (optional) | Terms & Privacy (minimal, di footer) |

### 1.2 Paket Layanan (3 Tier)

#### **Paket 1: Solo Publishing**
- Formatting naskah
- Cover design (basic)
- Konsultasi 2x
- Lead time: 2 minggu
- CTA → WhatsApp dengan pesan pre-filled: `"Saya tertarik paket Solo Publishing"`

#### **Paket 2: Kolaborasi**
- Target: 2-5 penulis
- Formatting naskah untuk tim
- Cover design (medium)
- Konsultasi unlimited (during process)
- Koordinasi antar penulis
- Lead time: 3 minggu
- CTA → WhatsApp: `"Saya tertarik paket Kolaborasi (2-5 penulis)"`

#### **Paket 3: Konversi Akademik**
- Target: Skripsi/Tesis/Naskah akademik → Buku digital
- Reformatting konten
- Simplifikasi bahasa (optional)
- Cover design
- Konsultasi 3x
- Lead time: 3-4 minggu
- CTA → WhatsApp: `"Saya tertarik paket Konversi Akademik"`

### 1.3 CTA Strategy — WhatsApp Integration

- **No payment gateway, no login, no checkout**
- Semua tombol CTA ("Pilih Paket", "Hubungi Kami") → WhatsApp wa.me link
- Format: `https://wa.me/62xxxxxxxxxx?text={encoded_message}`
- Pesan pre-filled berbeda per paket & page
- Nomor WhatsApp: **placeholder `62xxxxxxxxxx`** (client isi belakangan)

### 1.4 Navigation & Structure

- **Header**: Logo (Pustaka Tujua Media), nav menu (responsive hamburger mobile)
- **Footer**: Copyright, nav links, WhatsApp link, sosial media placeholders
- **Breadcrumb**: Opsional di halaman dalam
- **Mobile Menu**: Hamburger (320px+)

---

## 2. NON-FUNCTIONAL REQUIREMENTS

### 2.1 Tech Stack

- **Frontend**: HTML5 + CSS3 (Tailwind compiled to static CSS) + vanilla JavaScript
- **No frameworks**: No React, Vue, Svelte, Next.js, etc.
- **No backend**: No database, no API, no CMS
- **Tailwind CSS**: Compile locally to `/css/main.css`, NOT from CDN
- **JS**: Vanilla (no jQuery, no heavy libraries — only minimal JS untuk hamburger, smooth scroll, dll)

### 2.2 Performance & Hosting

- **Target load time**: < 3s (mobile)
- **Hosting**: Static site (Netlify, Vercel, GitHub Pages, or traditional static hosting)
- **No external CDN**: All assets (CSS, JS, images) served from source
- **Lazy loading**: Images bisa pakai native `loading="lazy"`
- **Image optimization**: WebP + PNG fallback, max quality 80%

### 2.3 Responsiveness & Accessibility

- **Mobile-first**: Base design 375px (iPhone SE)
- **Breakpoints**: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (wide)
- **Focus states**: Semua interactive elements harus memiliki visible focus (outline/ring)
- **Color contrast**: WCAG AA minimum (4.5:1 untuk text)
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **ARIA labels**: Minimal, untuk icon buttons & hidden content
- **Keyboard navigation**: Seluruh site navigable dengan keyboard

### 2.4 SEO & Meta

- **Meta tags**: Title, description, keywords per halaman
- **Open Graph**: og:title, og:description, og:image, og:url
- **Sitemap**: `/sitemap.xml` (static list)
- **Robots.txt**: `/robots.txt` untuk search engines
- **Canonical URLs**: rel="canonical" di semua halaman

### 2.5 Editable Structure

- Content mudah diubah (plain HTML comments, clear sections)
- Placeholder jelas (`<!-- TODO: isi dengan ... -->`)
- Config file optional (JSON untuk company info, WhatsApp number)
- No build step untuk edit content (direct HTML edit OK)

---

## 3. CONTENT PLACEHOLDERS

### Company Info
```
- Nama: Pustaka Tujua Media
- WhatsApp: 62xxxxxxxxxx (placeholder, client isi)
- Email: placeholder@email.com
- Sosial media: Instagram, Facebook (links placeholder)
```

### Portfolio/Sampel Karya
```
- 3-5 book cover samples (placeholder images)
- Sampel proses (before/after naskah formatting)
- Client stories (placeholder text, client isi dengan nama asli)
```

### Testimonial
```
- JANGAN tulis nama orang & testimoni fake
- Alternatif: 
  a) Hilangkan section ini dulu
  b) Pakai placeholder yang jelas terlihat placeholder: 
     "Testimoni pelanggan akan ditampilkan di sini"
```

---

## 4. DESIGN TOKENS (akan di-elaborate di design.md)

### Typography
- **Display**: Serif (untuk headings, book-like aesthetic)
- **Body**: Sans-serif (readable, modern)
- **Monospace**: Code snippets (opsional)

### Color Palette
- **5-6 warna max** (revisi dari palet 7 warna generic)
- **Inspirasi**: Dunia buku (tinta, kertas, sampul, penyejuk mata)
- Akan di-eksplorasi ulang (not teal+gold+cream)

### Spacing, Typography Scale, Components
- Akan di-detail di design.md

---

## 5. DELIVERABLES

### Phase 1: Design (Dokumen)
- ✅ REQUIREMENTS.md (ini)
- ⏳ DESIGN.md (design system, color tokens, component specs)

### Phase 2: Code (Project Setup)
- ⏳ Project structure
- ⏳ Tailwind config → compiled CSS
- ⏳ HTML pages (Home, About, Layanan, Portfolio, Contact, Footer)
- ⏳ Reusable components (header, footer, buttons, cards, sections)
- ⏳ Responsive CSS
- ⏳ Vanilla JS (hamburger, smooth scroll, WhatsApp links)
- ⏳ SEO files (sitemap.xml, robots.txt, meta tags)

### Phase 3: Testing & Optimization
- ⏳ Mobile responsiveness test
- ⏳ Accessibility audit (focus states, contrast, keyboard nav)
- ⏳ Performance: image optimization, load time check
- ⏳ Cross-browser test (Chrome, Firefox, Safari, mobile browsers)

---

## 6. ASSUMPTIONS & OUT-OF-SCOPE

### In Scope
- Static website, multi-halaman
- WhatsApp integration (wa.me links)
- Responsive design
- Basic SEO

### Out of Scope (untuk versi 1)
- ISBN/IKAPI claims & legality
- Payment gateway
- User accounts/login
- Database
- Audiobook consultation
- Author branding advanced services
- Upload ke Amazon KDP automation
- Email automation

---

## 7. SUCCESS CRITERIA

- [ ] Website fully responsive (tested 375px — 1440px)
- [ ] All CTAs link to WhatsApp dengan pesan pre-filled
- [ ] Load time < 3s (mobile, throttled 4G)
- [ ] WCAG AA contrast & focus states
- [ ] Keyboard navigable (tab, enter, escape)
- [ ] Halaman: Home, About, Layanan, Portfolio, Contact tersedia
- [ ] 3 paket layanan jelas dijabarkan
- [ ] SEO meta tags & sitemap present
- [ ] Client dapat edit content tanpa build step ribet
