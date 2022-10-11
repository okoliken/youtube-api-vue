/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrey: "rgba(255, 255, 255, 0.1)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
