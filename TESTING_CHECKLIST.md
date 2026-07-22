# Testing & Optimization Checklist

## 1. RESPONSIVENESS TESTING

### Device Sizes to Test
- ✅ Mobile: 375px (iPhone SE)
- ✅ Tablet: 768px (iPad)
- ✅ Desktop: 1024px+
- ✅ Large: 1440px

### Checklist

#### Layout & Spacing
- [ ] All sections stack properly on mobile
- [ ] Padding/margins responsive (`px-4 md:px-8`)
- [ ] Grid layouts adjust correctly (grid-1 → grid-2 → grid-3)
- [ ] Images scale properly & don't overflow
- [ ] Text readability maintained (not too small on mobile)

#### Navigation
- [ ] Hamburger menu visible on mobile (≤768px)
- [ ] Desktop nav hidden on mobile
- [ ] Mobile menu opens/closes correctly
- [ ] Menu closes when link clicked
- [ ] Menu closes on Escape key press

#### Forms
- [ ] Input fields full width on mobile
- [ ] Labels visible & properly spaced
- [ ] Submit buttons touch-friendly (48px+ height)
- [ ] Placeholder text visible

#### Images & Media
- [ ] Images don't overflow containers
- [ ] SVG icons scale properly
- [ ] No horizontal scroll on any device
- [ ] Images load quickly (lazy loading working)

### Testing Tools
- Chrome DevTools (F12 → responsive mode)
- Firefox DevTools
- Safari Developer Tools
- Real device testing (iPhone, Android)
- Responsive design tester: https://responsivedesignchecker.com/

---

## 2. ACCESSIBILITY TESTING

### Keyboard Navigation
- [ ] Tab through all interactive elements (buttons, links, form fields)
- [ ] Tab order is logical (left-to-right, top-to-bottom)
- [ ] Can activate buttons with Enter key
- [ ] Can toggle hamburger with Space/Enter
- [ ] Can close menu with Escape key
- [ ] Focus indicators visible on all interactive elements

### Focus States
- [ ] All buttons have visible focus ring (4px teal ring)
- [ ] All links have visible focus ring
- [ ] Form inputs show focus indicator
- [ ] Focus ring not obscured by other elements
- [ ] Focus ring has sufficient contrast (teal on cream/light bg)

### Color & Contrast
**Verify WCAG AA (4.5:1 for normal text, 3:1 for large text)**

- [ ] **Ink Black (#1f2937) on Cream (#faf8f3)**: ✅ 13:1 (WCAG AAA)
- [ ] **White/Cream on Forest Green (#2d5a4a)**: ✅ 10.5:1 (WCAG AAA)
- [ ] **Taupe Gray (#8b8680) text**: Verify 4.5:1+ against background
- [ ] **Burnt Sienna (#c85a3a)**: Check links & accents have sufficient contrast
- [ ] **Placeholder text**: Should meet 4.5:1 contrast

Test with:
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Chrome DevTools (Lighthouse → Accessibility)
- axe DevTools browser extension

### Semantic HTML
- [ ] Header uses `<header>` tag
- [ ] Navigation uses `<nav>` tag
- [ ] Main content uses `<main>` tag
- [ ] Sections use `<section>` tag
- [ ] Headings hierarchy correct (H1 > H2 > H3, no skipping)
- [ ] Forms use `<form>`, `<label>`, `<input>` tags
- [ ] Buttons are `<button>` tags (not `<a>` pretending to be buttons)
- [ ] Links are `<a>` tags (not `<button>` pretending to be links)

### ARIA & Labels
- [ ] Icon-only buttons have `aria-label` (hamburger, close, etc.)
- [ ] Form labels properly associated with inputs (`<label for="id">`)
- [ ] Hidden content marked with `aria-hidden="true"` if needed
- [ ] Images have descriptive `alt` text (not "image" or empty)
- [ ] Link text descriptive (not "click here" or "read more")

### Screen Reader Testing
Test with:
- NVDA (Windows, free): https://www.nvaccess.org/
- JAWS (Windows, paid)
- VoiceOver (Mac/iOS built-in)
- TalkBack (Android built-in)

Checklist:
- [ ] Page title announced
- [ ] Navigation structure clear
- [ ] Heading hierarchy makes sense
- [ ] Form labels announced
- [ ] Button text/purpose clear
- [ ] Links distinguishable from regular text
- [ ] Focus indicators announced

### Reduced Motion
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Users with reduced motion setting see static version
- [ ] No auto-playing animations/videos

---

## 3. PERFORMANCE TESTING

### Load Time Targets
- **Target**: < 3s (mobile 4G throttled)
- **Goal**: < 2s (desktop)

### Tools
- Google PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Chrome DevTools Lighthouse
- GTmetrix: https://gtmetrix.com/

### Metrics to Check
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] First Input Delay (FID): < 100ms
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] First Contentful Paint (FCP): < 1.8s

### Optimization Checklist
- [ ] CSS minified (main.css is minified)
- [ ] JS minified (if applicable)
- [ ] Images optimized (WebP + PNG, quality 80%)
- [ ] Images lazy-loaded (`loading="lazy"`)
- [ ] No render-blocking resources
- [ ] Fonts cached/preloaded
- [ ] Unused CSS removed (Tailwind purge working)

### Image Optimization
- [ ] Images compressed with https://tinypng.com/ or similar
- [ ] Retina images (2x resolution for screens)
- [ ] Use `<picture>` for WebP with fallback (optional)
- [ ] `loading="lazy"` on below-fold images
- [ ] Descriptive `alt` text

---

## 4. SEO TESTING

### Meta Tags
Check each page has:
- [ ] Unique `<title>` (50-60 chars)
- [ ] `<meta name="description">` (150-160 chars)
- [ ] `<meta name="keywords">` (relevant keywords)
- [ ] `<meta name="author">` (if applicable)
- [ ] `<meta name="viewport">` (for responsive)
- [ ] `<link rel="canonical">` (self-referential)

### Open Graph Tags
- [ ] `og:type` (website)
- [ ] `og:title` (same as title)
- [ ] `og:description` (same as meta description)
- [ ] `og:image` (1200x630px, optimized)
- [ ] `og:url` (canonical URL)
- [ ] `og:locale` (id_ID)

### Structured Data (Schema)
- [ ] Organization schema (company name, logo, contact)
- [ ] Website schema (homepage)
- [ ] Page schema (each page)
- Use https://schema.org/

### Sitemap & Robots
- [ ] `/sitemap.xml` accessible
- [ ] All important pages listed in sitemap
- [ ] `/robots.txt` present
- [ ] `Sitemap:` directive in robots.txt
- [ ] No `Disallow:` for important pages

### Headings & Content
- [ ] Only one H1 per page
- [ ] Heading hierarchy correct (H1 > H2 > H3)
- [ ] Headings descriptive (not "Section", "Title")
- [ ] Key content in headings/subheadings
- [ ] Internal links between related pages

### Mobile Friendliness
- [ ] Viewport meta tag present
- [ ] Responsive design works
- [ ] Text readable without zooming
- [ ] Touch targets 48px+ (buttons, links)
- [ ] Mobile-friendly tested via Google: https://search.google.com/test/mobile-friendly

Test Results:
- [ ] Google PageSpeed: Mobile score > 90
- [ ] Google PageSpeed: Desktop score > 95

---

## 5. CROSS-BROWSER TESTING

### Browsers to Test
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Checklist Per Browser
- [ ] Layout renders correctly
- [ ] Colors display properly
- [ ] Fonts load correctly
- [ ] Interactions work (hamburger, buttons, links)
- [ ] Forms functional
- [ ] No console errors

### CSS Compatibility
- [ ] CSS Grid works (IE not required)
- [ ] Flexbox works
- [ ] CSS Variables work (`--font-display`, etc.)
- [ ] Media queries work
- [ ] Transitions/animations smooth

---

## 6. FUNCTIONALITY TESTING

### Navigation
- [ ] All header links work
- [ ] Footer links work
- [ ] Hamburger menu toggles correctly
- [ ] Mobile menu closes on link click
- [ ] Active link highlighting works
- [ ] No broken links

### WhatsApp Integration
- [ ] "Mulai Sekarang" button opens WhatsApp
- [ ] Messages pre-filled correctly
- [ ] Messages different for each paket
- [ ] Links work on mobile (wa.me)
- [ ] Links work on desktop (fallback to web.whatsapp.com)

### Forms (Contact Page)
- [ ] Form submits without errors
- [ ] Required fields validated
- [ ] Email field validates email format
- [ ] Form resets after submit
- [ ] Error messages display

### Interactive Elements
- [ ] Buttons clickable
- [ ] Hover states work
- [ ] Active states work
- [ ] Disabled states work (if applicable)
- [ ] Links have underlines/indicators

---

## 7. LIGHTHOUSE AUDIT (Chrome DevTools)

Run Lighthouse (F12 → Lighthouse tab):

### Performance
- [ ] Score > 90
- [ ] LCP: Green
- [ ] FID: Green
- [ ] CLS: Green

### Accessibility
- [ ] Score > 95
- [ ] All WCAG AA violations fixed
- [ ] Color contrast OK
- [ ] ARIA labels present
- [ ] Semantic HTML used

### Best Practices
- [ ] Score > 90
- [ ] No console errors
- [ ] No security issues
- [ ] HTTPS (if deployed)

### SEO
- [ ] Score > 95
- [ ] Mobile friendly
- [ ] Meta tags present
- [ ] Structured data (optional)

---

## 8. MANUAL TESTING SCRIPT

### Home Page (index.html)
1. Load page → check hero displays correctly
2. Scroll down → sections load smoothly
3. Click "Mulai Sekarang" → opens WhatsApp
4. Test hamburger on mobile (≤768px)
5. Tab through → all focus states visible
6. Check color contrast in DevTools
7. Test image lazy loading (scroll down)

### About Page
1. Load page → sections display correctly
2. Tab through → focus states visible
3. Check team placeholder cards display
4. Test mobile hamburger menu
5. Click footer links

### Layanan Page
1. Load 3 paket cards → display correctly
2. Click each "Pilih Paket" button → WhatsApp messages different
3. Scroll to FAQ → read questions clearly
4. Test mobile responsiveness
5. Tab through forms

### Portfolio Page
1. Load portfolio grid → items display correctly
2. Stats section → numbers readable
3. Test responsiveness (mobile: 1 column, desktop: 2 columns)
4. Click "Mulai Konsultasi" → WhatsApp

### Contact Page
1. Load contact form → labels & inputs visible
2. Fill form → submit (check action if applicable)
3. Click WhatsApp link → opens chat
4. Social icons → links work
5. Contact info readable

---

## 9. COMMON ISSUES & FIXES

### Hamburger Menu Not Working
```javascript
// Check in DevTools console:
// 1. Is #hamburger element found?
document.getElementById('hamburger')
// 2. Is #mobile-menu element found?
document.getElementById('mobile-menu')
// 3. Is js/main.js loaded? Check Network tab
```

### Focus Ring Not Visible
- Check CSS: `.focus-ring { @apply outline-none ring-4 ring-green ring-offset-2; }`
- Verify ring color has sufficient contrast
- Test with keyboard (Tab key), not mouse

### WhatsApp Links Not Working
- Check `CONFIG.whatsappNumber` in js/main.js
- Verify URL encoding: use `encodeURIComponent()`
- Test on mobile device (better support)
- Check link format: `https://wa.me/62xxxxxxxxx?text=...`

### Images Not Loading
- Check image paths (relative, not absolute)
- Verify image files exist in `/images/` folder
- Check console for 404 errors
- Lazy loading: add `loading="lazy"` attribute

### CSS Not Applying
- Run `npm run build:css` to recompile
- Check main.css was generated
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS class names match (typos?)

### Fonts Not Loading
- Check Google Fonts import in css/input.css
- Verify font names in tailwind.config.js
- Check font-display CSS property
- Use fallback fonts in font stack

---

## 10. DEPLOYMENT CHECKLIST

Before going live:

- [ ] All pages tested on mobile & desktop
- [ ] No broken links
- [ ] All images optimized
- [ ] CSS/JS minified
- [ ] Lighthouse scores > 90
- [ ] SEO tags on all pages
- [ ] Sitemap.xml accessible
- [ ] Robots.txt in place
- [ ] 404 page (optional)
- [ ] No console errors
- [ ] No sensitive data in code
- [ ] WhatsApp number updated (not placeholder)
- [ ] Company info updated in footer
- [ ] Social media links updated
- [ ] Email address updated
- [ ] Meta tags unique per page
- [ ] OG images uploaded

---

## 11. MONITORING AFTER LAUNCH

- [ ] Check Google Search Console for crawl errors
- [ ] Monitor Lighthouse scores monthly
- [ ] Track Core Web Vitals with Google Analytics
- [ ] Set up uptime monitoring
- [ ] Monitor 404 errors
- [ ] Check user feedback (contact form)

---

## Quick Test Command

```bash
# Run Lighthouse from CLI (if Node installed)
npm install -g lighthouse
lighthouse https://pustaka-tujua-media.com/ --view

# Or use online tools:
# https://pagespeed.web.dev/
# https://www.webpagetest.org/
# https://gtmetrix.com/
```

---

**Status**: Ready for manual & automated testing. Run Lighthouse, test on real devices, verify keyboard navigation & contrast ratios.
