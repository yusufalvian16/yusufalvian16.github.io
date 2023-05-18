/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      screens: {
        "2xl": "1320px",
      },
      colors: {
        primary: "#c026d3",
        texPrimary: "#64748b",
        texSacond: "#334155",
        texthrid: "#1e293b",
        bgNav: "#fae8ff",
      },
      fontFamily: {
        hind: "Hind",
      },
    },
  },
  plugins: [],
};
