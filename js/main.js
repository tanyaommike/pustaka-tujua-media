/**
 * Pustaka Tujua Media - Main JavaScript
 * Hamburger menu, smooth scroll, WhatsApp link helpers
 */

// Configuration
const CONFIG = {
  whatsappNumber: '6285256095692', // Replace with actual number
  mobileBreakpoint: 768,
};

/**
 * Initialize hamburger menu
 */
function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks = mobileMenu?.querySelectorAll('a');

  if (!hamburger || !mobileMenu) return;

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close menu when link clicked
  menuLinks?.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

/**
 * Generate WhatsApp link with pre-filled message
 * @param {string} message - Message to send
 * @returns {string} WhatsApp link
 */
function generateWhatsappLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Setup WhatsApp CTA buttons
 */
function setupWhatsappLinks() {
  // Package buttons
  const packageButtons = {
    'btn-solo': 'Saya tertarik paket Solo Publishing. Saya ingin mendiskusikan kebutuhan naskah saya.',
    'btn-kolaborasi': 'Saya tertarik paket Kolaborasi (2-5 penulis). Mari kita diskusikan proyek tim kami.',
    'btn-konversi': 'Saya tertarik paket Konversi Akademik. Naskah saya adalah karya akademik yang ingin dijadikan buku.',
    'btn-hubungi': 'Halo, saya ingin berkonsultasi lebih lanjut tentang layanan Pustaka Tujua Media.',
  };

  Object.entries(packageButtons).forEach(([btnId, message]) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.href = generateWhatsappLink(message);
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
    }
  });
}

/**
 * Setup smooth scroll for anchor links
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Setup skip-to-main link
 */
function setupSkipToMain() {
  const skipLink = document.getElementById('skip-to-main');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/**
 * Handle window resize for responsive behavior
 */
function handleResize() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (window.innerWidth > CONFIG.mobileBreakpoint) {
    // Close menu on desktop
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
  }
}

/**
 * Initialize all features
 */
document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  setupWhatsappLinks();
  setupSmoothScroll();
  setupSkipToMain();
  window.addEventListener('resize', handleResize);
});

// Update WhatsApp config dynamically (optional, for future CMS integration)
window.updateWhatsappConfig = function(newNumber) {
  CONFIG.whatsappNumber = newNumber;
  setupWhatsappLinks();
};
