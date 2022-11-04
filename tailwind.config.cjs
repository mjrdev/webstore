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
        'spacing': '2rem',
        'spacing-y': '2rem 0'
      },
      padding: {
        'spacing': '2rem',
        'spacing-y': '2rem 0',
        'spacing-x': '0 2rem'
      },
      width: {
        small: '900px'
      },
      backgroundImage: {
        'banner-add': "url('/banner2.jpg')",
        'ele': "url('/categorys/eletronicos.jpg')",
        'perf': "url('/categorys/perifericos.jpg')",
        'acess': "url('/categorys/acessorios.jpg')",
        'ofertas': "url('/ofertas.jpg')"
      },
      gridColumn: {
        t: '1fr 2fr'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}