/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7',
        'primary-dark': '#044363',
        light: '#7dd3fc',
        graybg: '#2b2b2b',
        secundary: '#684ede',
        'secundary-dark': '#27186b'

      },
      maxWidth: {
        'screen-max': '1400px'
      },
      margin: {
        'spacing': '2rem'
      },
      padding: {
        'spacing': '2rem',
        'spacing-y': '2rem 0',
        'spacing-x': '0 2rem'
      },
      width: {
        small: '900px'
      }
    },
  },
  plugins: [],
}