/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins','sans-serif']
      },
      colors: {
        'aqua-green':'rgb(151, 195, 85)',
        "aqua-blue":'rgb(56, 115, 181)'
      },
      backgroundImage:{
        'gtob':"url(./src/images/SVGs/StackedWaves.svg)"
      }
    },
  },
  plugins: [],
}
// gtob path
// src\images\SVGs\StackedWaves.svg