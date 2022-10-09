/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "/assets/css/**/.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#141414",
        balticSea: "#262626",
        catskillWhite: "#F2F4F8",
        bluish: "#2D6FBC",
        porcelain: "#F2F2F2",
        doveGrey: "#6D6D6D",
        vampireGrey: "#525252",
        dark: "#26293C",
        success: "#00C851",
        danger: "#FF5252",
        warning: "#FFEB3B",
        info: "#2196F3",
        light: "#F2F2F2",
        darkGray: "#8E8E8E",
        softPeach: "#EFEFEF",
        sunGlow: "#FFCE31",
        greyCloud: "#B4B4B4",
        platinum: "#E4E4E4",
        lavenderMist: "#E1EBFF",
        starDust: "#9B9B9B",
        lavenderPinocchio: "#E0E0E0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
