const c = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: c.slate["100"],
        black: c.slate["900"],
        primary: "rgb(var(--primary) , <alpha-value>)",
        "btn": "rgb(var(--primary) , <alpha-value>)",
          "btn-hover": "rgb(var(--btn-hover) , <alpha-value>)",
          "btn-muted": "rgb(var(--btn-muted) , <alpha-value>)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      screens: {
        min: "320px",
        xsm: "420px",
        xs: "576px",
      },
      gridAutoColumns:{
        fluid:"repeat(auto-fit,minmax(0,1fr))"
      },
      gridAutoRows: {
        fluid: "repeat(auto-fit,minmax(0,1fr))"
      },
      aspectRatio:{
        square:"1",
        "golden-w":"16/9",
        "golden-h":"9/16"
      },
      animation: {
        "fadeUp": "fadeUp 0.7s ease-in-out forwards",
      },
      keyframes: {
        "fadeUp": {
          "0%": { transform: "translateY(2%);", opacity: 0 },
          "100%": { transform: "translateY(0%);", opacity: 1 }
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-brand-colors"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require('tailwindcss-animate'),

    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
};