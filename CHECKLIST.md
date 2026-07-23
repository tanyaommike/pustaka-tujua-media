# Testing & Optimization Checklist — Pustaka Tujua Media

## 1. Responsiveness

Device sizes: Mobile 375px · Tablet 768px · Desktop 1024px+ · Large 1440px

- [ ] Semua section stack dengan benar di mobile
- [ ] Grid layout menyesuaikan (1 → 2 → 3 kolom)
- [ ] Gambar tidak overflow, tidak ada scroll horizontal
- [ ] Hamburger menu muncul di mobile (≤768px), tertutup di desktop
- [ ] Menu mobile bisa dibuka/tutup, tertutup saat klik link atau Escape
- [ ] Form input full width di mobile, tombol touch-friendly (48px+)

Test dengan: Chrome/Firefox/Safari DevTools (responsive mode), device asli, [responsivedesignchecker.com](https://responsivedesignchecker.com/)

## 2. Accessibility

- [ ] Tab melewati semua elemen interaktif secara logis
- [ ] Semua tombol/link punya focus ring terlihat (ring-4 ring-green)
- [ ] Hamburger bisa di-toggle dengan Enter/Space, tutup dengan Escape
- [ ] Kontras warna WCAG AA (≥4.5:1 teks normal, ≥3:1 teks besar) — cek Ink Black/Cream, Forest Green/Cream, Taupe Gray, Burnt Sienna
- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Heading hierarchy benar (H1 → H2 → H3, tanpa loncat), hanya 1 H1 per halaman
- [ ] `aria-label` untuk tombol icon-only, `<label for>` untuk semua form field
- [ ] Alt text deskriptif untuk semua gambar
- [ ] Animasi menghormati `prefers-reduced-motion`

Test dengan: WebAIM Contrast Checker, axe DevTools, Chrome Lighthouse (Accessibility), screen reader (NVDA/VoiceOver)

## 3. Performance

Target: LCP < 2.5s · FID < 100ms · CLS < 0.1 · FCP < 1.8s · Total size < 500KB (tanpa gambar: ~150-200KB)

- [ ] CSS minified (`css/main.css` sudah terkompresi via Tailwind purge)
- [ ] Gambar dioptimasi (TinyPNG/Compressor.io, quality 80-85%), target: hero 100-200KB, card 50-100KB, icon <10KB
- [ ] `loading="lazy"` di gambar below-fold (bukan hero/first-fold)
- [ ] Font pakai `display=swap` (sudah di Google Fonts link)
- [ ] Tidak ada render-blocking resource

Test dengan: [PageSpeed Insights](https://pagespeed.web.dev/), [WebPageTest](https://www.webpagetest.org/), Chrome Lighthouse

## 4. SEO

- [ ] Title unik per halaman (50-60 karakter)
- [ ] Meta description (150-160 karakter), meta keywords relevan
- [ ] Open Graph tags lengkap (og:title, og:description, og:image, og:url, og:locale)
- [ ] Canonical URL self-referential
- [ ] `sitemap.xml` & `robots.txt` accessible dan berisi semua halaman
- [ ] Internal linking antar halaman terkait
- [ ] (Opsional) Schema.org LocalBusiness JSON-LD

Test dengan: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly), Google Search Console

## 5. Cross-Browser

- [ ] Chrome, Firefox, Safari, Edge (desktop & mobile) — layout, warna, font, interaksi konsisten
- [ ] CSS Grid, Flexbox, CSS variables, media query berfungsi normal

## 6. Functionality (Manual Test per Halaman)

**Home**: hero tampil, scroll smooth, tombol "Mulai Sekarang" buka WhatsApp, hamburger mobile jalan
**About**: section tampil, team placeholder card, footer link jalan
**Layanan**: 3 paket card tampil, tiap tombol "Pilih Paket" beda pesan WhatsApp, FAQ terbaca jelas
**Portfolio**: grid tampil (1 kolom mobile, 2+ desktop), stats terbaca, CTA konsultasi jalan
**Contact**: form label & input terlihat, submit tanpa error, link WhatsApp & social jalan

## 7. Common Issues

| Gejala | Cek |
|---|---|
| Hamburger tidak jalan | `document.getElementById('hamburger')` & `#mobile-menu` ada; `js/main.js` ter-load (Network tab) |
| Focus ring tidak terlihat | CSS `.focus-ring` ada; test pakai keyboard (Tab), bukan mouse |
| Link WhatsApp gagal | `CONFIG.whatsappNumber` benar; format `https://wa.me/62xxx?text=...`; test di mobile |
| Gambar tidak muncul | Path relatif benar, file ada di `/images/`, cek console 404 |
| CSS tidak update | `npm run build:css` ulang; clear cache browser (Ctrl+Shift+Del) |

---

## Final Deployment Checklist

- [ ] Semua halaman tested mobile & desktop
- [ ] Tidak ada broken link atau console error
- [ ] Lighthouse: Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥95
- [ ] Data placeholder (WhatsApp, email, sosmed, tim, portfolio) sudah diganti data asli
- [ ] Gambar sudah dioptimasi & di-upload

**Maintenance rutin**: cek Google Search Console (mingguan), jalankan Lighthouse & cek broken link (bulanan), update portfolio/testimonial (kuartalan).
