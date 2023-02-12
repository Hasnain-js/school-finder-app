/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./public/*.html",
    "./src/**/*.js",
    "./src/*.js",
    "./src/**/*.html",
    "./src/*.html",
    "./public/**/*.js",
    "./public/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'copper-red':'#CE4A1D',
        'copper-red-lighter':'#de5021',
      }
    },
  },
  plugins: [],
}
