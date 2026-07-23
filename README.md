# Pustaka Tujua Media — Website Company Profile

Website company profile untuk jasa penerbitan naskah/buku digital. Static, responsive, accessible, dan mudah di-edit.

---

## 📋 Tech Stack

- **HTML5** — Semantic markup
- **CSS3 + Tailwind CSS** — Styling (compiled locally, no CDN)
- **Vanilla JavaScript** — Interactivity (hamburger, WhatsApp links)
- **No backend** — Pure static site
- **No external dependencies** — Fonts dari Google Fonts, semua asset lokal

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (untuk Tailwind CSS build)
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repo-url>
cd pustaka-tujua-media

# Install dependencies
npm install

# Build CSS
npm run build:css

# Watch CSS changes (development)
npm run dev
```

### File Structure

```
├── index.html                 # Home page
├── pages/
│   ├── about.html            # Tentang Kami
│   ├── layanan.html          # Layanan & Paket
│   ├── portfolio.html        # Portfolio
│   ├── contact.html          # Contact
│   ├── privacy.html          # Privacy Policy
│   └── terms.html            # Terms of Service
├── css/
│   ├── input.css             # Tailwind input (source)
│   └── main.css              # Compiled output (generated)
├── js/
│   └── main.js               # Vanilla JS (hamburger, WhatsApp)
├── images/
│   ├── icons/                # SVG icons
│   ├── covers/               # Book cover samples
│   └── og/                   # Open Graph images
├── config.json               # Configuration (WhatsApp, company info)
├── sitemap.xml               # SEO sitemap
├── robots.txt                # SEO robots file
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind config
├── REQUIREMENTS.md           # Requirements doc
├── DESIGN.md                 # Design system
├── STATUS.md                  # Status proyek & yang belum selesai
├── DEPLOYMENT.md              # Panduan deploy (Netlify/Vercel/GitHub Pages/FTP)
├── CHECKLIST.md               # Testing & optimization checklist
├── html-snippets.md           # Komponen HTML reusable
└── README.md                 # This file
```

---

## ⚙️ Configuration

### WhatsApp Number

Edit `js/main.js`, cari line:
```javascript
const CONFIG = {
  whatsappNumber: '62xxxxxxxxxx', // Replace dengan nomor Anda
};
```

Atau edit langsung di HTML, ganti `62xxxxxxxxxx` di atribut `href` button WhatsApp.

### Company Info

Edit `config.json`:
```json
{
  "company": {
    "name": "Pustaka Tujua Media",
    "email": "info@pustaka.id",
    "whatsapp": "62xxxxxxxxxx",
    "instagram": "https://instagram.com/pustaka.tujua",
    "facebook": "https://facebook.com/pustaka.tujua"
  }
}
```

---

## 📝 Content Editing

### For HTML Changes

1. Buka file HTML (e.g., `index.html`, `pages/layanan.html`)
2. Edit content langsung
3. Save file
4. Refresh browser

### For Styling Changes

1. Edit `css/input.css` atau tailwind classes di HTML
2. Run `npm run build:css` atau `npm run dev`
3. Compiled CSS otomatis masuk ke `css/main.css`
4. Refresh browser

### For JavaScript Changes

1. Edit `js/main.js`
2. Reload page di browser
3. No build step needed

---

## 🎨 Design System

### Colors
- **Primary**: `#2d5a4a` (Forest Green)
- **Secondary**: `#c85a3a` (Burnt Sienna)
- **Dark**: `#1f2937` (Ink Black)
- **Light**: `#faf8f3` (Cream Paper)

### Fonts
- **Display**: Playfair Display (serif) — headings
- **Body**: Poppins (sans-serif) — text

### Components
- `.btn-primary` — Primary button (CTA)
- `.btn-secondary` — Secondary button
- `.card` — Card component
- `.section-container` — Max-width container
- `.grid-2`, `.grid-3` — Responsive grids

Lihat `DESIGN.md` untuk detail lengkap.

---

## ♿ Accessibility

- ✅ WCAG AA contrast ratio
- ✅ Focus states visible (ring outline)
- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Keyboard navigable (Tab, Enter, Escape)
- ✅ Alt text untuk semua images
- ✅ ARIA labels untuk icon buttons
- ✅ Respects `prefers-reduced-motion`

---

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px - 1440px
- **Large**: 1441px+

Mobile-first approach: base styles untuk mobile, expand dengan media queries.

---

## 🔍 SEO

### Meta Tags
Setiap halaman sudah punya:
- `<title>`
- `<meta name="description">`
- `<meta name="keywords">`
- Open Graph tags (og:title, og:description, og:image, og:url)
- `<link rel="canonical">`

### Sitemap & Robots
- `/sitemap.xml` — List semua halaman
- `/robots.txt` — Search engine directives

Pastikan update saat tambah halaman baru.

---

## 🚢 Deployment

Lihat `DEPLOYMENT.md` untuk panduan lengkap (Netlify, Vercel, GitHub Pages, hosting tradisional).

---

## 📊 Performance Tips

- ✅ CSS compiled (no CDN)
- ✅ JS minimal (hamburger, WhatsApp)
- ✅ Images optimized (WebP + PNG)
- ✅ Fonts cached dari Google Fonts
- ✅ No external libraries

Target: **< 3s load time** (mobile, 4G throttled)

Check dengan:
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools Lighthouse

---

## 🐛 Troubleshooting

### CSS not updating
```bash
# Clear CSS and rebuild
rm css/main.css
npm run build:css
```

### Hamburger menu not working
- Check `js/main.js` is loaded in HTML
- Check hamburger button has `id="hamburger"`
- Check mobile menu has `id="mobile-menu"`

### WhatsApp links not working
- Check `CONFIG.whatsappNumber` di `js/main.js` benar
- Check URL encode korrekt di WhatsApp message
- Tes di mobile device (wa.me links lebih baik di mobile)

---

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance](https://web.dev/performance/)

---

## 📄 License

MIT License — Gunakan bebas, modifikasi sesuai kebutuhan.

---

## ✨ Next Steps

1. Update company info di `config.json` & footer
2. Isi content di semua halaman
3. Upload book cover images ke `/images/covers/`
4. Test responsif di mobile & desktop
5. Deploy ke hosting pilihan

Happy building! 🚀
