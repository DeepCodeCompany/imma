/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
        ],
      },
      colors: {
        imma: {
          50: "#f6f1fb",
          100: "#ede3f7",
          200: "#d9c1ef",
          300: "#c49ae6",
          400: "#ad6fdb",
          500: "#944ad0",
          600: "#7b2fbf",
          700: "#6525a3",
          800: "#521f85",
          900: "#41186a",
        },
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
