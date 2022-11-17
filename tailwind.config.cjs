/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "aqua-green": "rgb(151, 195, 85)",
        "aqua-blue": "rgb(56, 115, 181)",
      },
      backgroundImage: {
        graytog: "url(./src/images/SVGs/StackedWaves.svg)",
        btogtob: "url(./src/images/SVGs/BtoGtoB.svg)",
        gtob: "url(./src/images/SVGs/GreenToBlue.svg)",
      },
    },
  },
  plugins: [],
};
// gtob path
// src\images\SVGs\StackedWaves.svg
// src\images\SVGs\BtoGtoB.svg
