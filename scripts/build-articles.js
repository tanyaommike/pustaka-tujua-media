/**
 * Pustaka Tujua Media - Article Build Script
 * Reads Markdown files from content/articles/, renders each to
 * /artikel/<slug>.html using the same header/footer as the rest of the site.
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ARTICLES_DIR = path.join(__dirname, '..', 'content', 'articles');
const OUTPUT_DIR = path.join(__dirname, '..', 'artikel');
const SITE_URL = 'https://pustaka-tujua-media.com';

const MONTHS_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Missing frontmatter block');
  }

  const [, frontmatterBlock, body] = match;
  const data = {};

  frontmatterBlock.split(/\r?\n/).forEach((line) => {
    const lineMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (lineMatch) {
      data[lineMatch[1]] = lineMatch[2].trim();
    }
  });

  return { data, body };
}

function formatDateId(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number);
  return `${day} ${MONTHS_ID[month - 1]} ${year}`;
}

function renderPage({ title, slug, date, excerpt, thumbnail, contentHtml }) {
  const dateDisplay = formatDateId(date);
  const pageUrl = `${SITE_URL}/artikel/${slug}`;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${excerpt}">
  <meta name="keywords" content="penerbitan naskah, buku digital, tips menulis">
  <meta name="author" content="Pustaka Tujua Media">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${title} — Pustaka Tujua Media">
  <meta property="og:description" content="${excerpt}">
  <meta property="og:image" content="${SITE_URL}${thumbnail}">
  <meta property="og:locale" content="id_ID">

  <!-- Canonical -->
  <link rel="canonical" href="${pageUrl}">

  <title>${title} — Pustaka Tujua Media</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <!-- Skip to Main -->
  <a id="skip-to-main" href="#main-content" class="skip-to-main">Lompat ke konten utama</a>

  <!-- Header -->
  <header class="sticky top-0 z-50 bg-cream border-b border-beige shadow-sm">
    <div class="section-container flex items-center justify-between h-16">
      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div class="w-8 h-8 bg-green rounded-button flex items-center justify-center">
          <span class="text-cream font-display font-bold text-lg">P</span>
        </div>
        <span class="text-ink font-display font-bold text-xl hidden sm:inline">Pustaka Tujua</span>
      </a>

      <nav class="hidden md:flex gap-8 items-center">
        <a href="/" class="link-nav font-medium hover:text-sienna">Home</a>
        <a href="/pages/about.html" class="link-nav font-medium hover:text-sienna">Tentang</a>
        <a href="/pages/layanan.html" class="link-nav font-medium hover:text-sienna">Layanan</a>
        <a href="/pages/portfolio.html" class="link-nav font-medium hover:text-sienna">Portfolio</a>
        <a href="/pages/contact.html" class="link-nav font-medium hover:text-sienna">Kontak</a>
      </nav>

      <button id="hamburger" class="md:hidden flex flex-col gap-1 p-2 hover:bg-cream-light rounded-button transition-colors" aria-label="Toggle navigation menu" aria-expanded="false">
        <span class="hamburger-line line1 w-6"></span>
        <span class="hamburger-line line2 w-6"></span>
        <span class="hamburger-line line3 w-6"></span>
      </button>
    </div>

    <nav id="mobile-menu" class="mobile-menu md:hidden absolute top-16 left-0 right-0 bg-cream border-b border-beige">
      <div class="section-container py-4 flex flex-col gap-2">
        <a href="/" class="link-nav block py-2 px-3 hover:bg-cream-light rounded font-medium">Home</a>
        <a href="/pages/about.html" class="link-nav block py-2 px-3 hover:bg-cream-light rounded font-medium">Tentang</a>
        <a href="/pages/layanan.html" class="link-nav block py-2 px-3 hover:bg-cream-light rounded font-medium">Layanan</a>
        <a href="/pages/portfolio.html" class="link-nav block py-2 px-3 hover:bg-cream-light rounded font-medium">Portfolio</a>
        <a href="/pages/contact.html" class="link-nav block py-2 px-3 hover:bg-cream-light rounded font-medium">Kontak</a>
      </div>
    </nav>
  </header>

  <main id="main-content">
    <section class="section bg-cream-light">
      <div class="section-container max-w-3xl">
        <a href="/#artikel" class="text-body-sm text-muted hover:text-sienna inline-flex items-center gap-1 mb-8">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Kembali ke Artikel
        </a>

        <p class="text-caption text-muted mb-2">${dateDisplay}</p>
        <h1 class="text-h2 text-ink mb-6">${title}</h1>

        <img src="${thumbnail}" alt="" class="w-full aspect-[4/3] object-cover rounded-card shadow-card mb-8" loading="lazy" width="800" height="600">

        <article class="prose-article text-body text-ink leading-relaxed">
${contentHtml}
        </article>

        <div class="mt-12 pt-8 border-t border-beige">
          <a id="btn-inquiry-article" href="#" target="_blank" rel="noopener noreferrer" class="btn-primary">
            Konsultasi Naskah Saya
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-ink text-cream py-12 md:py-16">
    <div class="section-container">
      <div class="grid-4">
        <div>
          <h4 class="text-h4 text-cream mb-4">Pustaka Tujua Media</h4>
          <p class="text-body-sm text-beige leading-relaxed">
            Membantu penulis menerbitkan naskah jadi buku digital dengan proses yang mudah dan terjangkau.
          </p>
        </div>

        <div>
          <h5 class="text-label text-cream mb-4 font-semibold">Halaman</h5>
          <ul class="space-y-2 text-body-sm">
            <li><a href="/" class="text-beige hover:text-sienna transition-colors">Home</a></li>
            <li><a href="/pages/about.html" class="text-beige hover:text-sienna transition-colors">Tentang</a></li>
            <li><a href="/pages/layanan.html" class="text-beige hover:text-sienna transition-colors">Layanan</a></li>
            <li><a href="/pages/portfolio.html" class="text-beige hover:text-sienna transition-colors">Portfolio</a></li>
          </ul>
        </div>

        <div>
          <h5 class="text-label text-cream mb-4 font-semibold">Kontak</h5>
          <ul class="space-y-2 text-body-sm">
            <li><span class="text-beige">Email:</span><br><a href="mailto:info@pustaka.id" class="text-sienna hover:underline">info@pustaka.id</a></li>
            <li><span class="text-beige">WhatsApp:</span><br><a id="footer-whatsapp" href="https://wa.me/62xxxxxxxxxx" target="_blank" rel="noopener noreferrer" class="text-sienna hover:underline">+62 XXX-XXXX-XXXX</a></li>
          </ul>
        </div>

        <div>
          <h5 class="text-label text-cream mb-4 font-semibold">Ikuti Kami</h5>
          <div class="flex gap-3">
            <a href="https://instagram.com/pustaka.tujua" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-dark rounded-button flex items-center justify-center hover:bg-sienna transition-colors" aria-label="Instagram">
              <span>📷</span>
            </a>
            <a href="https://facebook.com/pustaka.tujua" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-dark rounded-button flex items-center justify-center hover:bg-sienna transition-colors" aria-label="Facebook">
              <span>f</span>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-green mt-8 pt-6 text-center text-caption text-beige">
        <p>&copy; <span id="copyright-year">2024</span> Pustaka Tujua Media. Semua hak dilindungi.</p>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Button -->
  <a id="btn-whatsapp-float" href="#" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Chat via WhatsApp">
    <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.05 22.5c-1.812 0-3.59-.454-5.163-1.316L2.5 22.5l1.35-4.278A10.45 10.45 0 011.5 12.05C1.5 6.23 6.23 1.5 12.05 1.5c5.821 0 10.55 4.73 10.55 10.55 0 5.821-4.729 10.45-10.55 10.45zm0-19c-4.687 0-8.5 3.813-8.5 8.5 0 1.875.61 3.609 1.643 5.017l-.968 3.068 3.152-.938a8.463 8.463 0 004.673 1.403c4.687 0 8.5-3.767 8.5-8.45s-3.813-8.6-8.5-8.6z"/>
    </svg>
  </a>

  <script src="/js/main.js"></script>
</body>
</html>
`;
}

function build() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error(`Articles directory not found: ${ARTICLES_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));

  files.forEach((file) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    const { data, body } = parseFrontmatter(raw);

    ['title', 'slug', 'date', 'excerpt', 'thumbnail'].forEach((field) => {
      if (!data[field]) {
        throw new Error(`Missing "${field}" in frontmatter of ${file}`);
      }
    });

    const contentHtml = marked.parse(body.trim());
    const html = renderPage({ ...data, contentHtml });

    const outputPath = path.join(OUTPUT_DIR, `${data.slug}.html`);
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`Built /artikel/${data.slug}.html`);
  });

  console.log(`\n${files.length} article(s) built.`);
}

build();
