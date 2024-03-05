/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: "'Roboto', sans-serif",
        secondary: "'Poppins', sans-serif",
      },
      colors: {
        primary: "#8b3eea",
        secondary: "#2b2540",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
