/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ChivoMono: ["Chivo Mono", "monospace"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkTheme: "#262626",
        bg_contact: "rgba(87, 66, 245, 0.9)",
      },
      maxHeight: {
        32: "32px",
      },
      screens: {
        xs: "400px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
