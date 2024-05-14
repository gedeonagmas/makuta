/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        night: "rgb(77 78 78)",
        main: "#eb9405",
      },
      backgroundImage: {
        hero: "url('/gedi.jpg')",
        footer: "url('/img/footer-texture.png')",
      },
      boxShadow: {
        "secondary-card-shadow": "0 2px 2px 1px rgba(0, 0, 0, 0.05)",
        bottomShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.15)",
        homeAccordionShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
      },
    },
    fontFamily: {
      roboto: ["Roboto Condensed", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      workSans: ["Work Sans"],
    },
    fontSize: {
      page: ".85rem",
    },
  },
  plugins: [require("flowbite/plugin")],
  // darkMode: 'class',
};
