/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#166938',     // Green
        secondary: '#FEC313',   // Gold/Yellow
        'brand-bg': '#FFF9F6',  // Light Background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // You might want to import this font in index.css
      },
    },
  },
  plugins: [],
}
