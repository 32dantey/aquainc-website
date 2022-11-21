/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        graytog: "url(src/images/StackedWaves.svg)",
        btogtob: "url(src/images/BtoGtoB.svg)",
        gtob: "url(src/images/GreenToBlue.svg)",
      },
    },
  },
  plugins: [],
};
