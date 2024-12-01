/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#5b21b6',
        dark: '#3b0764',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

