/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
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
		extend: {},
	},
	plugins: [],
};
