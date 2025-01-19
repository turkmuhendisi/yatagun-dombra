/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#F59E0B", // Ana renk
        secondary: "#111827", // Koyu ton
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};


