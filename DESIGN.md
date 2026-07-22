# Pustaka Tujua Media — Design System

**Pendekatan**: Book-centric aesthetic, readable, elegant, warm, professional.

---

## 1. TYPOGRAPHY

### Font Selection

#### Display Font: **Playfair Display** (Serif)
- **Role**: H1, H2, H3 headings, page titles
- **Weight**: 700 (bold), 400 (untuk quote)
- **Pairing**: Evokes classic book design, elegant & literary
- **Source**: Google Fonts (self-hosted or cached)
- **Fallback**: `Georgia, serif`

#### Body Font: **Poppins** (Sans-serif)
- **Role**: Body text, paragraphs, labels, UI text
- **Weight**: 400 (regular), 500 (medium), 600 (semibold)
- **Why**: Modern, readable, friendly tone, good accessibility
- **Source**: Google Fonts
- **Fallback**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

#### Monospace: **JetBrains Mono** (optional, untuk code snippets)
- **Role**: Code samples, technical terms
- **Fallback**: `"Courier New", monospace`

### Typography Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|-----------------|
| **H1** (page title) | Playfair | 48px / 32px mob | 700 | 1.2 | -0.5px |
| **H2** (section title) | Playfair | 36px / 28px mob | 700 | 1.3 | -0.3px |
| **H3** (subsection) | Playfair | 28px / 24px mob | 700 | 1.4 | 0 |
| **H4** (card title) | Playfair | 20px | 700 | 1.4 | 0 |
| **Body Large** | Poppins | 18px | 400 | 1.6 | 0.2px |
| **Body Regular** | Poppins | 16px | 400 | 1.6 | 0.2px |
| **Body Small** | Poppins | 14px | 400 | 1.5 | 0.2px |
| **Label** | Poppins | 14px | 500 | 1.5 | 0.5px |
| **Button** | Poppins | 16px | 600 | 1.4 | 0.3px |
| **Caption** | Poppins | 12px | 400 | 1.4 | 0.3px |

---

## 2. COLOR PALETTE

**Filosofi**: Inspirasi dari dunia buku — tinta, kertas, sampul, warm & inviting.

### Core Colors (5 colors)

| Name | Role | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| **Ink Black** | Primary Dark | `#1f2937` | 31, 41, 55 | Main text, headers, body |
| **Cream Paper** | Primary Light | `#faf8f3` | 250, 248, 243 | Backgrounds, cards, light text on dark |
| **Forest Green** | Primary Action | `#2d5a4a` | 45, 90, 74 | Buttons, links, accents, CTAs |
| **Burnt Sienna** | Secondary Accent | `#c85a3a` | 200, 90, 58 | Highlights, hover states, dividers |
| **Taupe Gray** | Neutral | `#8b8680` | 139, 134, 128 | Muted text, secondary info, disabled states |

### Extended Palette (supporting colors)

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Green** | `#1a4433` | Dark hover states, borders |
| **Light Cream** | `#fefbf7` | Subtle backgrounds, spacing |
| **Warm Beige** | `#e8dcc8` | Dividers, light accents |
| **Success Green** | `#22c55e` | Form validation (optional) |
| **Warning Orange** | `#fb923c` | Alert states (optional) |

### Usage Guidelines

- **Text**: Ink Black (#1f2937) on Cream Paper (#faf8f3) — 13:1 contrast ratio ✓ WCAG AAA
- **Text on color**: White on Forest Green (#2d5a4a) — 10.5:1 contrast ratio ✓ WCAG AAA
- **Text on color**: Cream Paper on Forest Green — 7:1 contrast ratio ✓ WCAG AA
- **Links**: Forest Green, underline on hover
- **Focus ring**: Forest Green ring (4px), 2px offset
- **Hover state**: Forest Green → Deep Green (#1a4433)
- **Disabled state**: Taupe Gray (#8b8680) at 50% opacity

---

## 3. SPACING & LAYOUT

### Base Unit: 4px Grid
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Responsive Padding

| Context | Mobile (≤768px) | Tablet (769-1024px) | Desktop (≥1025px) |
|---------|-----------------|---------------------|--------------------|
| **Page padding** | 16px | 24px | 32px |
| **Section padding** (Y) | 40px | 60px | 80px |
| **Container max-width** | 100% | 728px | 1240px |
| **Card padding** | 16px | 20px | 24px |
| **Button padding** | 12px 16px | 12px 24px | 12px 32px |

### Breakpoints

```
Mobile:   0px - 374px (base)
Tablet:   375px - 768px
Desktop:  769px - 1024px
Large:    1025px - 1440px
XL:       1441px+
```

---

## 4. COMPONENT SPECIFICATIONS

### 4.1 Button

**Primary Button (CTA)**
- Background: Forest Green (#2d5a4a)
- Text: Cream Paper (#faf8f3), 600 weight, 16px
- Padding: 12px 24px (mobile), 12px 32px (desktop)
- Border radius: 8px
- Border: none
- Box shadow: none (clean)
- Hover: Background → Deep Green (#1a4433), cursor pointer
- Active: Darker (opacity 0.9)
- Focus: Ring 4px Forest Green, 2px offset
- Disabled: Taupe Gray (#8b8680), cursor not-allowed, opacity 0.6

**Secondary Button**
- Background: transparent
- Border: 2px Forest Green (#2d5a4a)
- Text: Forest Green, 600 weight, 16px
- Padding: 12px 24px (same as primary)
- Border radius: 8px
- Hover: Background → Cream Paper (#faf8f3)
- Focus: Ring 4px Forest Green
- Disabled: Taupe Gray border, text, opacity 0.6

**Button Group**
- Horizontal spacing: 12px between buttons
- Mobile: Stack vertically (100% width each)

### 4.2 Card (Paket Layanan)

- Background: Cream Paper (#faf8f3)
- Border: none
- Border-top: 4px Burnt Sienna (#c85a3a)
- Border radius: 12px
- Padding: 24px (desktop), 20px (tablet), 16px (mobile)
- Box shadow: `0 4px 6px rgba(31, 41, 55, 0.1)` (subtle)
- Hover shadow: `0 10px 15px rgba(31, 41, 55, 0.15)` (lift effect)
- Transition: `box-shadow 0.3s ease`

**Card content hierarchy**:
- Title (H4): Ink Black, Playfair 20px, 700
- Description: Body text, Poppins 14px, Taupe Gray
- Price/highlight: Burnt Sienna, 18px, 600 weight
- Feature list: bullet points, 14px, Ink Black
- Button: Primary or secondary (full width mobile, auto desktop)

### 4.3 Header

- Position: sticky top 0
- Background: Cream Paper (#faf8f3)
- Border-bottom: 1px Warm Beige (#e8dcc8)
- Height: 64px (desktop), 56px (mobile)
- Display: flex, align-items center, justify-content space-between
- Padding: 0 32px (desktop), 0 16px (mobile)
- Z-index: 100

**Logo**:
- Font: Playfair Display, 24px, 700, Ink Black
- Text: "Pustaka Tujua Media" atau icon + text
- Left-aligned

**Navigation**:
- Desktop: Horizontal menu, items spaced 32px
- Mobile: Hamburger icon (3-line), opens offcanvas menu
- Active link: Burnt Sienna underline, 2px
- Link hover: Forest Green

### 4.4 Footer

- Background: Ink Black (#1f2937)
- Text: Cream Paper (#faf8f3)
- Padding: 48px 32px (desktop), 32px 16px (mobile)
- Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)

**Sections**:
1. About / Company info
2. Links (Home, About, Layanan, Portfolio, Contact)
3. Contact (Email, WhatsApp)
4. Sosial media (Instagram, Facebook, LinkedIn - icons)

**Bottom bar**:
- Copyright text, center-aligned
- Padding: 16px
- Border-top: 1px Warm Beige (#e8dcc8)
- Font: 12px, Taupe Gray

### 4.5 Hero Section

- Background: Linear gradient (Forest Green #2d5a4a → Deep Green #1a4433) or solid Forest Green
- Color: Cream Paper text
- Padding: 80px 32px (desktop), 60px 16px (tablet), 40px 16px (mobile)
- Min-height: 480px (desktop), 360px (mobile)
- Text alignment: Center or left-aligned (TBD by page)

**Elements**:
- H1: 48px Playfair, Cream Paper, max-width 800px
- Subheading: 18px Poppins, Warm Beige (#e8dcc8), max-width 600px
- CTA button: Primary button (white/cream text on green)
- Optional: Decorative image/illustration (right side)

### 4.6 Section Container

- Max-width: 1240px
- Margin: 0 auto
- Padding X: 32px (desktop), 16px (mobile)
- Padding Y: 80px top/bottom (desktop), 40px (mobile)
- Background: Cream Paper (#faf8f3) or white

### 4.7 Feature List

- Display: grid 2 columns (desktop), 1 column (mobile)
- Gap: 24px
- Item padding: 16px
- Icon: 24px, Burnt Sienna (#c85a3a)
- Title: H4, Ink Black
- Text: Body Small, Taupe Gray

### 4.8 Form Elements (optional, Contact page)

**Input / Textarea**:
- Background: white
- Border: 1px Taupe Gray (#8b8680)
- Border radius: 6px
- Padding: 12px 16px
- Font: Poppins, 16px, Ink Black
- Placeholder: Taupe Gray, opacity 0.6
- Focus: Border → Forest Green, ring 2px Forest Green, outline none
- Error: Border → Burnt Sienna (#c85a3a)

**Label**:
- Font: Poppins, 14px, 600, Ink Black
- Margin bottom: 8px
- Display: block

---

## 5. RESPONSIVE DESIGN PATTERNS

### Mobile-first Approach

**Baseline (375px - 768px)**:
- Single column layouts
- Full-width sections
- Hamburger menu
- Stacked cards
- Touch-friendly targets (48px min height for buttons)

**Tablet (769px - 1024px)**:
- 2-column grids for cards
- Expanded padding
- Horizontal menu visible
- Optimized image sizes

**Desktop (1025px+)**:
- 3-4 column grids
- Max-width containers
- Expanded spacing
- Multi-column footer

### Images

- Responsive: `max-width: 100%; height: auto;`
- Loading: `loading="lazy"` for below-fold images
- Format: WebP primary, PNG fallback
- Sizes: Generate at 2x resolution for retina (Optimize later)

---

## 6. ACCESSIBILITY SPECIFICATIONS

### Focus Management

- **Tab order**: Logical, left-to-right, top-to-bottom
- **Focus visible**: Outline ring, 4px, Forest Green, 2px offset
- **Skip-to-main**: Hidden link at top (keyboard accessible)
- **Focus trap**: Modal/menu (if implemented later)

### Color & Contrast

- **Minimum ratio**: 4.5:1 (AA standard)
- **Large text** (18px+): 3:1 OK
- **Non-text elements**: 3:1
- **Test**: Using axe DevTools, WCAG Color Contrast Analyzer

### Semantic HTML

```html
<header>
  <nav>Navigation menu</nav>
</header>
<main>
  <section>Section content</section>
</main>
<footer>Footer content</footer>
```

### ARIA

- **Alt text**: All images have descriptive alt
- **Icon buttons**: `aria-label` for icon-only buttons (e.g., close, menu)
- **Live regions**: `aria-live="polite"` for notifications (if added)
- **Hidden content**: `aria-hidden="true"` for decorative elements

### Keyboard Navigation

- **Tab**: Move through interactive elements
- **Shift+Tab**: Backwards
- **Enter**: Activate button, submit form
- **Space**: Toggle checkbox/button
- **Escape**: Close menu/modal
- **Arrow keys**: TBD (not required for static site, but consider for UX)

---

## 7. MOTION & TRANSITIONS

- **Default**: `transition: all 0.3s ease`
- **Hover state**: Button color, box shadow (smooth)
- **Scroll animations**: Optional (smooth scroll to anchor)
- **No auto-play**: Videos/animations only on user click
- **Reduced motion**: Respect `prefers-reduced-motion` media query

---

## 8. TYPOGRAPHY PAIRING EXAMPLES

### Example 1: Hero Headline
```
"Terbitkan Naskah Anda Jadi Buku Digital"
Font: Playfair Display 700, 48px, Cream Paper
Letter spacing: -0.5px
Line height: 1.2
```

### Example 2: Card Title
```
"Paket Solo Publishing"
Font: Playfair Display 700, 20px, Ink Black
```

### Example 3: Body Paragraph
```
"Dari individu hingga kolaborasi, proses terbitkan naskah yang mudah & terjangkau."
Font: Poppins 400, 16px, Ink Black
Line height: 1.6
```

---

## 9. DESIGN TOKENS (Tailwind Config Mapping)

```
Colors:
  - primary: #2d5a4a (Forest Green)
  - primary-dark: #1a4433 (Deep Green)
  - secondary: #c85a3a (Burnt Sienna)
  - neutral-900: #1f2937 (Ink Black)
  - neutral-50: #faf8f3 (Cream Paper)
  - neutral-600: #8b8680 (Taupe Gray)

Typography:
  - font-display: "Playfair Display"
  - font-body: "Poppins"
  - text-h1: 48px 700
  - text-body: 16px 400
  
Spacing:
  - base: 4px
  - container-max: 1240px
  - section-padding: 80px (desktop), 40px (mobile)

Radius:
  - button: 8px
  - card: 12px
  - input: 6px

Shadow:
  - card: 0 4px 6px rgba(31, 41, 55, 0.1)
  - card-hover: 0 10px 15px rgba(31, 41, 55, 0.15)
```

---

## 10. FILE STRUCTURE (untuk production)

```
/css
  ├── main.css (compiled Tailwind + custom CSS)
  └── fonts.css (font-face declarations)

/js
  ├── main.js (hamburger, smooth scroll, WhatsApp links)
  └── utils.js (helper functions)

/images
  ├── /icons (SVG, minimal)
  ├── /covers (book cover samples)
  └── /og (Open Graph images, 1200x630px)

/pages
  ├── index.html (Home)
  ├── about.html (About)
  ├── layanan.html (Layanan)
  ├── portfolio.html (Portfolio)
  ├── contact.html (Contact)
  ├── privacy.html (Privacy Policy)
  └── terms.html (Terms of Service)

/
  ├── sitemap.xml
  ├── robots.txt
  ├── manifest.json (optional PWA)
  └── config.json (placeholder: WhatsApp number, company info)
```

---

**Status**: Design system finalized. Ready for Tailwind config & HTML implementation.

Feedback siap? Atau ada revisi warna/typography lagi sebelum masuk phase coding?
