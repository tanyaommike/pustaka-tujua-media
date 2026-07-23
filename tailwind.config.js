/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './pages/**/*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'h1-mob': ['32px', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.3px' }],
        'h2-mob': ['28px', { lineHeight: '1.3', letterSpacing: '-0.3px' }],
        'h3': ['28px', { lineHeight: '1.4', letterSpacing: '0' }],
        'h3-mob': ['24px', { lineHeight: '1.4', letterSpacing: '0' }],
        'h4': ['20px', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0.2px' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0.2px' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0.2px' }],
        'label': ['14px', { lineHeight: '1.5', letterSpacing: '0.5px' }],
        'button': ['16px', { lineHeight: '1.4', letterSpacing: '0.3px' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.3px' }],
      },
      colors: {
        'ink': '#1f2937',
        'ink-light': '#374151',
        'cream': '#faf8f3',
        'cream-light': '#fefbf7',
        'green': '#2d5a4a',
        'green-dark': '#1a4433',
        'sienna': '#c85a3a',
        'taupe': '#8b8680',
        'beige': '#e8dcc8',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '20': '96px',
        '24': '128px',
      },
      maxWidth: {
        'container': '1240px',
      },
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'input': '6px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(31, 41, 55, 0.1)',
        'card-hover': '0 10px 15px rgba(31, 41, 55, 0.15)',
      },
      outlineWidth: {
        '3': '3px',
        '4': '4px',
      },
      outlineOffset: {
        '2': '2px',
      },
    },
  },
  plugins: [],
}
