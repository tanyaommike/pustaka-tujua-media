# Performance & SEO Optimization Guide

## 1. IMAGE OPTIMIZATION

### Current Status
- Placeholder emoji icons (no file size impact)
- Need: Real book cover images, sample images

### Optimization Steps

#### 1.1 Image Format & Compression

**For PNG Images**:
1. Optimize with TinyPNG: https://tinypng.com/
2. Target file size:
   - Hero image: 100-200KB
   - Card images: 50-100KB each
   - Icons: < 10KB

**For JPG Images**:
1. Use https://compressor.io/
2. Quality setting: 80-85% (good balance)

**For WebP (future)**:
1. Convert using https://convertio.co/ or imagemagick
2. Use `<picture>` with fallback:
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.png" alt="description">
</picture>
```

#### 1.2 Responsive Images

Use `srcset` for retina displays:
```html
<img 
  src="image-1x.jpg" 
  srcset="image-1x.jpg 1x, image-2x.jpg 2x"
  alt="Book cover"
  loading="lazy"
>
```

Or use `sizes` for responsive layouts:
```html
<img 
  src="image.jpg" 
  srcset="image-small.jpg 480w, image-large.jpg 1024w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Portfolio item"
  loading="lazy"
>
```

#### 1.3 Lazy Loading

Add to below-fold images:
```html
<img 
  src="image.jpg" 
  alt="description"
  loading="lazy"
>
```

**Already in code**: Hero & first-fold images don't have `loading="lazy"` (correct - load immediately). Below-fold portfolio/contact images should have it.

---

## 2. CSS & JS OPTIMIZATION

### CSS

**Current Status**:
- ✅ Tailwind compiled to `css/main.css` (minified)
- ✅ Only used utilities included (Tailwind PurgeCSS working)

**To verify**:
```bash
# Check file size
ls -lh css/main.css

# Target: < 100KB (depending on Tailwind setup)
```

**If CSS is too large**:
1. Check content patterns in tailwind.config.js
2. Verify all HTML files included in `content: [...]`
3. Remove unused custom utilities
4. Run: `npm run build:css --minify`

### JavaScript

**Current Status**:
- ✅ Vanilla JS (no framework overhead)
- ✅ `js/main.js` is lightweight (~5KB)

**To optimize**:
1. Minify with: `npx terser js/main.js -o js/main.min.js`
2. Use in HTML: `<script src="/js/main.min.js"></script>`
3. Add `defer` attribute for non-critical scripts

**Already good**: No external heavy libraries, no jQuery, no polyfills needed for modern browsers.

---

## 3. FONT OPTIMIZATION

### Current Setup
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
```

### Optimization Tips

#### 3.1 Font Display Strategy
```html
<link 
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" 
  rel="stylesheet"
>
```
- `display=swap`: Show fallback, load custom font in background (RECOMMENDED)

#### 3.2 Self-host Fonts (Optional for future)
Download from Google Fonts, host locally:
```css
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display-700.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

Benefits: No external dependency, faster for repeated visits

#### 3.3 Font Loading Performance
- Current: 2 fonts, 3 weights = 6 HTTP requests (minimal impact)
- Good for this project size
- Monitor with Lighthouse

---

## 4. DELIVERY OPTIMIZATION

### Gzip Compression
- Enable on web server (Netlify/Vercel auto-enables)
- Reduces CSS/JS by ~70%

### HTTP/2 Server Push
- Automatically enabled on modern hosts
- Preload critical resources:

```html
<!-- In <head> -->
<link rel="preload" href="/css/main.css" as="style">
<link rel="preload" href="/fonts/playfair-display-700.woff2" as="font" type="font/woff2" crossorigin>
```

### Caching Headers
- Static files: Cache 1 year (far-future expiry)
- HTML: Cache 1 hour (or no-cache, must-revalidate)
- Netlify/Vercel handles automatically

---

## 5. PERFORMANCE BUDGETS

### Target Metrics

| Metric | Target | Current Estimate |
|--------|--------|------------------|
| FCP (First Contentful Paint) | < 1.8s | ~1.2s |
| LCP (Largest Contentful Paint) | < 2.5s | ~1.5s |
| CLS (Cumulative Layout Shift) | < 0.1 | ~0.01 |
| TTI (Time to Interactive) | < 3.8s | ~2.5s |
| Total Size | < 500KB | ~150KB |

### Breakdown (Estimated)
- HTML: 20-30KB (7-8 pages)
- CSS: 60-80KB (Tailwind compiled)
- JS: 5-10KB (main.js)
- Fonts: 50-80KB (2 fonts, 3 weights)
- **Total: 135-200KB** (before images)

---

## 6. SEO OPTIMIZATION CHECKLIST

### On-Page SEO

#### Title Tags
```html
<!-- Home -->
<title>Pustaka Tujua Media — Terbitkan Naskah Anda Jadi Buku Digital</title>

<!-- About -->
<title>Tentang Kami — Pustaka Tujua Media</title>

<!-- Layanan -->
<title>Layanan Kami — Paket Penerbitan Naskah</title>

<!-- Portfolio -->
<title>Portfolio — Karya Kami</title>

<!-- Contact -->
<title>Kontak — Hubungi Kami</title>
```

✅ Already implemented with unique titles (50-60 chars, keyword-rich)

#### Meta Descriptions
```html
<meta name="description" content="Jasa penerbitan naskah/buku digital untuk penulis individu dan kelompok. Paket mulai dari Rp 1.5 juta, proses transparan, hasil profesional.">
```

✅ Already implemented (150-160 chars, action-oriented)

#### Keywords
```html
<meta name="keywords" content="penerbitan, naskah, buku digital, self-publishing, formatting, cover design">
```

✅ Already implemented (5-7 relevant keywords)

#### Open Graph Tags
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://pustaka-tujua-media.com/">
<meta property="og:title" content="Pustaka Tujua Media — Terbitkan Naskah Anda Jadi Buku Digital">
<meta property="og:description" content="...">
<meta property="og:image" content="https://pustaka-tujua-media.com/images/og/home-og.jpg">
<meta property="og:locale" content="id_ID">
```

✅ Already implemented on all pages

#### Canonical URLs
```html
<link rel="canonical" href="https://pustaka-tujua-media.com/">
```

✅ Already implemented (self-referential on all pages)

### Technical SEO

#### Sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pustaka-tujua-media.com/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... other URLs ... -->
</urlset>
```

✅ Already in place (`/sitemap.xml`)

**Action**: Update `lastmod` dates when content changes

#### Robots.txt
```
User-agent: *
Allow: /

Sitemap: https://pustaka-tujua-media.com/sitemap.xml
```

✅ Already in place (`/robots.txt`)

#### Mobile Friendliness
✅ Responsive design
✅ Viewport meta tag
✅ Touch-friendly buttons (48px+)
✅ No horizontal scroll

Test: https://search.google.com/test/mobile-friendly

#### Page Speed
✅ CSS minified
✅ JS lightweight
✅ Lazy loading placeholders ready
✅ Fonts optimized

Test: https://pagespeed.web.dev/

### Content SEO

#### Heading Structure
```html
<h1>Terbitkan Naskah Anda Jadi Buku Digital</h1>
  <h2>Mengapa Memilih Kami?</h2>
  <h3>Proses Cepat</h3>
  <h2>Paket Layanan Kami</h2>
  <h3>Solo Publishing</h3>
```

✅ Correct hierarchy (H1 → H2 → H3, no skipping)

#### Keyword Placement
- **H1**: Primary keyword ("terbitkan naskah")
- **H2/H3**: Secondary keywords ("paket", "solo publishing")
- **Body**: Natural keyword distribution (no stuffing)
- **Links**: Descriptive anchor text (not "click here")

✅ Already optimized

#### Internal Linking
```html
<a href="/pages/layanan.html">Lihat Paket Layanan</a>
<a href="/pages/about.html">Tentang Kami</a>
<a href="/pages/portfolio.html">Portfolio</a>
```

✅ Already present, could add more contextual links in content

#### Schema Markup (Optional Advanced)
Add JSON-LD for rich snippets:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Pustaka Tujua Media",
  "description": "Jasa penerbitan naskah/buku digital",
  "url": "https://pustaka-tujua-media.com/",
  "telephone": "+62-XXX-XXXX-XXXX",
  "email": "info@pustaka.id",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jakarta",
    "addressCountry": "ID"
  }
}
</script>
```

**Action**: Add to index.html for better Google Search visibility

---

## 7. LIGHTHOUSE SCORE IMPROVEMENT

### Current Estimated Scores
- **Performance**: 90+ (good)
- **Accessibility**: 95+ (excellent)
- **Best Practices**: 90+ (good)
- **SEO**: 95+ (excellent)

### To Improve Further

#### Performance (if < 90)
1. Check LCP (Largest Contentful Paint)
   - Hero image too large? Compress
   - Lazy load below-fold images
   - Preload critical fonts

2. Reduce JavaScript
   - Current `main.js` is small, OK

3. Eliminate render-blocking resources
   - Fonts: use `display=swap`
   - CSS: inline critical styles (optional)

#### Accessibility (if < 95)
1. Check focus indicators
   - ✅ Already present (ring-4 ring-green)

2. Check color contrast
   - ✅ Already WCAG AA+ compliant

3. Check ARIA labels
   - ✅ Already present (hamburger, etc.)

4. Check alt text
   - Verify all images have descriptive alt

#### Best Practices (if < 90)
1. No console errors
   - Debug with DevTools → Console

2. HTTPS enabled
   - Auto on Netlify/Vercel

3. No deprecated APIs
   - Check compatibility

#### SEO (if < 95)
1. Mobile-friendly
   - ✅ Already responsive

2. Meta tags
   - ✅ Already in place

3. Structured data (Schema.org)
   - Optional: Add LocalBusiness schema

---

## 8. OPTIMIZATION COMMANDS

```bash
# Build CSS (minified)
npm run build:css

# Watch CSS changes
npm run watch:css

# Minify JS (if needed)
npx terser js/main.js -o js/main.min.js -c -m

# Check file sizes
du -sh css/main.css js/main.js

# Run Lighthouse (CLI)
npx lighthouse https://pustaka-tujua-media.com --view

# Analyze HTML
npx htmlhint pages/about.html pages/layanan.html
```

---

## 9. DEPLOYMENT OPTIMIZATION

### Netlify Deployment
```toml
# netlify.toml
[build]
  command = "npm run build:css"
  publish = "."

[[redirects]]
  from = "/index.html"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

### Vercel Deployment
```json
// vercel.json
{
  "buildCommand": "npm run build:css",
  "public": true
}
```

---

## 10. MONITORING & MAINTENANCE

### Monthly Checklist
- [ ] Run Lighthouse audit
- [ ] Check Google Search Console for errors
- [ ] Verify all links still work
- [ ] Check Core Web Vitals
- [ ] Review analytics (if enabled)
- [ ] Update content/dates

### Tools to Setup
- **Google Search Console**: Monitor indexing, search performance
- **Google Analytics**: Track traffic, user behavior
- **Hotjar**: Session recording, heatmaps
- **Sentry**: Error tracking (optional)

---

## 11. QUICK WINS (Easy Optimizations)

1. ✅ **Add Schema Markup** (5 min)
   - Copy JSON-LD LocalBusiness schema to index.html

2. ✅ **Preload Fonts** (2 min)
   - Add `rel="preload"` link in <head>

3. ✅ **Update Images** (30 min)
   - Replace emoji with optimized JPG/PNG images
   - Add lazy loading to portfolio images

4. ✅ **Update Meta Tags** (10 min)
   - Fill in company-specific keywords
   - Update OG image URLs

5. ✅ **Test & Monitor** (ongoing)
   - Use Lighthouse monthly
   - Check Google Search Console weekly

---

## Status

- **CSS**: ✅ Optimized, minified
- **JS**: ✅ Lightweight, vanilla
- **Fonts**: ✅ Efficient loading strategy
- **Images**: ⏳ Needs real images
- **SEO**: ✅ Setup complete, ready for schema
- **Performance**: ✅ Target < 3s achievable

**Next**: Add real images, update placeholder data, test with Lighthouse.
