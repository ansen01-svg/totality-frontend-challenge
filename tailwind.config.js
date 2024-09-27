/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#fff",
        secondary: "#f2f2f2",
      },
      colors: {
        primary: "#e71c28",
        primaryLight: "#e6656e",
        black: "#444",
        gray: "#999",
        secondary: "#f75d34",
        secondaryLight: "#f7724e",
        gray1: "rgba(36,39,44,.7)",
        gray2: "rgba(36,39,44,.5)",
        red: "#ee4b2b",
        blue: "#2176ae",
        blueLight: "#b1e0ff",
        green: "#6bad23",
      },
      fontSize: {
        medium: "14px",
      },
      // screens: {
      //   tall: { raw: "(min-height: 1024px)" },
      //   // => @media (min-height: 800px) { ... }
      // },
    },
  },
  plugins: [],
};
