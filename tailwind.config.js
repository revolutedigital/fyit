/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./blog/**/*.html",
    "./src/**/*.js"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'brand': {
          charcoal: '#0E0E0E',
          cyan: '#00E0D1',
          green: '#00FF88',
          text: '#FFFFFF',
          light: '#C0C0C0'
        }
      },
      borderRadius: {
        'mdx': '12px',
        'lgx': '24px'
      },
      boxShadow: {
        'soft': '0 10px 20px rgba(0,0,0,0.25)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: []
}
