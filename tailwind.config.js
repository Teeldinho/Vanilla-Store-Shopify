/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ['"Bebas Neue"', "sans-serif"],
        sourceSerif: ['"Source Serif 4"', "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
