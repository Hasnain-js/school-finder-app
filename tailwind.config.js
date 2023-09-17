/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
				"copper-red": "#CE4A1D",
				"copper-red-lighter": "#de5021",
				rustyRed: "#F05F2D",
				blueStone: "#217C58",
				frenchBlue: "#0C70BD",
				balticSea: "#292929",
				roseWhite: "#FFF7F4",
				LightGreyText: "#ACACAC",
				almond: "#F2E1CE",
				gunMetal: "#2B3240",
				silverGrey: "#949494",
				dusk: "#43597D",
				white: "#FFFFFF",
				transparent: "transparent",
				romance: "#E6E5E4",
			},
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
