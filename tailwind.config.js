/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",  // white background
        neutral: "#1f2937",     // gray-800 text

        brand: {
          dark: "#111827",
          red: "#D90429",
          brown: "#8C5B3F",
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6", // base
          600: "#0d9488", // primary
          700: "#0f766e", // hover
          800: "#115e59",
          900: "#134e4a",
        },

        "brand-dark": "#2B2B2B",  // extra dark shade
        "brand-red": "#D64545",   // extra red shade
      },
    },
  },
  plugins: [],
}
