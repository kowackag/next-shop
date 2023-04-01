/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
