/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        hand: ["'Gochi Hand'", "cursive", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        green: "#10b981",
        "light-purple": "#4f46e5",
        purple: "#4338ca",
        yellow: "#f9eb57"
      }
    }
  },
  plugins: [require("tailwind-heropatterns")({})]
};
