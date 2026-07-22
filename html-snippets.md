# HTML Snippets & Components Reusable

Kumpulan komponen HTML yang siap copy-paste ke semua halaman. Ini bukan file utama, tapi reference untuk developer.

---

## 1. HEADER (Sticky)

```html
<header class="sticky top-0 z-100 bg-cream border-b border-beige shadow-sm">
  <div class="section-container flex items-center justify-between h-16">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2">
      <div class="w-8 h-8 bg-green rounded-card flex items-center justify-center">
        <span class="text-cream font-bold text-lg">P</span>
      </div>
      <span class="text-ink font-display font-bold text-xl hidden sm:inline">Pustaka Tujua Media</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex gap-8 items-center">
      <a href="/" class="link-nav hover:text-sienna">Home</a>
      <a href="/pages/about.html" class="link-nav hover:text-sienna">Tentang</a>
      <a href="/pages/layanan.html" class="link-nav hover:text-sienna">Layanan</a>
      <a href="/pages/portfolio.html" class="link-nav hover:text-sienna">Portfolio</a>
      <a href="/pages/contact.html" class="link-nav hover:text-sienna">Kontak</a>
    </nav>

    <!-- Mobile Hamburger -->
    <button id="hamburger" class="md:hidden flex flex-col gap-1 p-2 hover:bg-cream-light rounded" aria-label="Toggle menu" aria-expanded="false">
      <span class="hamburger-line w-6"></span>
      <span class="hamburger-line w-6"></span>
      <span class="hamburger-line w-6"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <nav id="mobile-menu" class="mobile-menu md:hidden absolute top-16 left-0 right-0 bg-cream border-b border-beige">
    <div class="section-container py-4 flex flex-col gap-3">
      <a href="/" class="link-nav block py-2 hover:text-sienna">Home</a>
      <a href="/pages/about.html" class="link-nav block py-2 hover:text-sienna">Tentang</a>
      <a href="/pages/layanan.html" class="link-nav block py-2 hover:text-sienna">Layanan</a>
      <a href="/pages/portfolio.html" class="link-nav block py-2 hover:text-sienna">Portfolio</a>
      <a href="/pages/contact.html" class="link-nav block py-2 hover:text-sienna">Kontak</a>
    </div>
  </nav>
</header>
```

---

## 2. FOOTER

```html
<footer class="bg-ink text-cream py-12 md:py-16">
  <div class="section-container">
    <!-- Main Footer Content -->
    <div class="grid-4">
      <!-- About -->
      <div>
        <h4 class="text-h4 text-cream mb-3">Pustaka Tujua Media</h4>
        <p class="text-body-sm text-beige">Membantu penulis menerbitkan naskah jadi buku digital dengan proses yang mudah dan terjangkau.</p>
      </div>

      <!-- Links -->
      <div>
        <h5 class="text-label text-cream mb-3 font-semibold">Halaman</h5>
        <ul class="space-y-2 text-body-sm">
          <li><a href="/" class="text-beige hover:text-sienna">Home</a></li>
          <li><a href="/pages/about.html" class="text-beige hover:text-sienna">Tentang</a></li>
          <li><a href="/pages/layanan.html" class="text-beige hover:text-sienna">Layanan</a></li>
          <li><a href="/pages/portfolio.html" class="text-beige hover:text-sienna">Portfolio</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h5 class="text-label text-cream mb-3 font-semibold">Kontak</h5>
        <ul class="space-y-2 text-body-sm">
          <li><span class="text-beige">Email:</span> <a href="mailto:info@pustaka.id" class="text-sienna hover:underline">info@pustaka.id</a></li>
          <li><span class="text-beige">WhatsApp:</span> <a id="footer-whatsapp" href="https://wa.me/62xxxxxxxxxx" target="_blank" rel="noopener noreferrer" class="text-sienna hover:underline">+62 XXX-XXXX-XXXX</a></li>
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h5 class="text-label text-cream mb-3 font-semibold">Ikuti Kami</h5>
        <div class="flex gap-3">
          <a href="https://instagram.com/pustaka.tujua" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-dark rounded-card flex items-center justify-center hover:bg-sienna transition-colors" aria-label="Instagram">
            <span class="text-cream">📷</span>
          </a>
          <a href="https://facebook.com/pustaka.tujua" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-dark rounded-card flex items-center justify-center hover:bg-sienna transition-colors" aria-label="Facebook">
            <span class="text-cream">f</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-green mt-8 pt-6 text-center text-caption text-beige">
      <p>&copy; 2024 Pustaka Tujua Media. Semua hak dilindungi.</p>
    </div>
  </div>
</footer>
```

---

## 3. HERO SECTION

```html
<section class="bg-gradient-to-br from-green to-green-dark text-cream py-20 md:py-32">
  <div class="section-container text-center">
    <h1 class="text-h1 text-cream mb-4">Terbitkan Naskah Anda Jadi Buku Digital</h1>
    <p class="text-body-lg text-beige mb-8 max-w-2xl mx-auto">
      Dari individu hingga kolaborasi, proses penerbitan naskah yang mudah, terjangkau, dan profesional.
    </p>
    <a id="btn-hubungi" href="#" class="btn-primary inline-block">
      Mulai Sekarang
    </a>
  </div>
</section>
```

---

## 4. PAKET LAYANAN CARD

```html
<!-- Container untuk 3 paket -->
<section class="section bg-cream-light">
  <div class="section-container">
    <h2 class="text-h2 text-center mb-12">Paket Layanan Kami</h2>
    
    <div class="grid-3">
      <!-- Paket 1: Solo -->
      <div class="card card-header">
        <div class="card-body">
          <h4 class="text-h4 text-ink mb-2">Solo Publishing</h4>
          <p class="text-body-sm text-muted mb-4">Untuk penulis individu</p>
          
          <div class="mb-6">
            <p class="text-body font-semibold text-sienna mb-1">Rp 1.500.000</p>
            <p class="text-caption text-muted">Harga mulai dari</p>
          </div>

          <ul class="space-y-2 mb-6 text-body-sm">
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Formatting naskah profesional</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Cover design basic</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Konsultasi 2x sesi</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Lead time: 2 minggu</span>
            </li>
          </ul>

          <a id="btn-solo" href="#" class="btn-primary w-full block text-center">
            Pilih Paket
          </a>
        </div>
      </div>

      <!-- Paket 2: Kolaborasi -->
      <div class="card card-header">
        <div class="card-body">
          <h4 class="text-h4 text-ink mb-2">Kolaborasi</h4>
          <p class="text-body-sm text-muted mb-4">Untuk 2-5 penulis</p>
          
          <div class="mb-6">
            <p class="text-body font-semibold text-sienna mb-1">Rp 2.500.000</p>
            <p class="text-caption text-muted">Harga mulai dari</p>
          </div>

          <ul class="space-y-2 mb-6 text-body-sm">
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Formatting naskah untuk tim</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Cover design medium</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Konsultasi unlimited</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Koordinasi antar penulis</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Lead time: 3 minggu</span>
            </li>
          </ul>

          <a id="btn-kolaborasi" href="#" class="btn-primary w-full block text-center">
            Pilih Paket
          </a>
        </div>
      </div>

      <!-- Paket 3: Konversi Akademik -->
      <div class="card card-header">
        <div class="card-body">
          <h4 class="text-h4 text-ink mb-2">Konversi Akademik</h4>
          <p class="text-body-sm text-muted mb-4">Skripsi/Tesis → Buku</p>
          
          <div class="mb-6">
            <p class="text-body font-semibold text-sienna mb-1">Rp 2.000.000</p>
            <p class="text-caption text-muted">Harga mulai dari</p>
          </div>

          <ul class="space-y-2 mb-6 text-body-sm">
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Reformatting konten akademik</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Simplifikasi bahasa (optional)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Cover design profesional</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Konsultasi 3x sesi</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-sienna mt-1">✓</span>
              <span>Lead time: 3-4 minggu</span>
            </li>
          </ul>

          <a id="btn-konversi" href="#" class="btn-primary w-full block text-center">
            Pilih Paket
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 5. SECTION TEMPLATE

```html
<section class="section bg-cream">
  <div class="section-container">
    <h2 class="text-h2 mb-8">Section Title</h2>
    
    <div class="grid-2">
      <div>
        <p class="text-body mb-4">Content goes here</p>
      </div>
      <div>
        <p class="text-body mb-4">More content</p>
      </div>
    </div>
  </div>
</section>
```

---

## 6. FEATURE LIST

```html
<div class="feature-list">
  <div class="feature-item">
    <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
      <!-- Icon SVG here -->
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
    </svg>
    <h4 class="text-h4 text-ink mb-2">Feature Title</h4>
    <p class="text-body-sm text-muted">Feature description goes here</p>
  </div>

  <div class="feature-item">
    <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
      <!-- Icon SVG here -->
    </svg>
    <h4 class="text-h4 text-ink mb-2">Feature Title 2</h4>
    <p class="text-body-sm text-muted">Feature description goes here</p>
  </div>
</div>
```

---

## 7. CONTACT FORM

```html
<form class="max-w-2xl mx-auto space-y-6">
  <div class="form-group">
    <label for="name" class="form-label">Nama Lengkap</label>
    <input id="name" type="text" name="name" class="form-input" placeholder="Nama Anda" required>
  </div>

  <div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input id="email" type="email" name="email" class="form-input" placeholder="email@contoh.com" required>
  </div>

  <div class="form-group">
    <label for="message" class="form-label">Pesan</label>
    <textarea id="message" name="message" class="form-textarea" placeholder="Tulis pesan Anda..."></textarea>
  </div>

  <div class="flex gap-3">
    <button type="submit" class="btn-primary">Kirim</button>
    <button type="reset" class="btn-secondary">Bersihkan</button>
  </div>
</form>
```

---

## 8. BREADCRUMB

```html
<nav class="py-4 text-body-sm text-muted" aria-label="Breadcrumb">
  <ol class="flex gap-2">
    <li><a href="/" class="link-nav">Home</a></li>
    <li class="text-taupe">/</li>
    <li><a href="/pages/layanan.html" class="link-nav">Layanan</a></li>
    <li class="text-taupe">/</li>
    <li aria-current="page" class="text-ink">Detail Paket</li>
  </ol>
</nav>
```

---

## 9. SKIP-TO-MAIN LINK

```html
<!-- Add di awal <body>, sebelum <header> -->
<a id="skip-to-main" href="#main-content" class="skip-to-main">
  Lompat ke konten utama
</a>
```

---

## Usage

Copy-paste komponen ini ke halaman HTML Anda. Semua class sudah didefinisikan di `css/input.css`, jadi cukup compile Tailwind dan selesai.

