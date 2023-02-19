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
			colors: {
				"copper-red": "#CE4A1D",
				"copper-red-lighter": "#de5021",
				rustyRed: "#F05F2D",
				blueStone: "#217C58",
				frenchBlue: "#0C70BD",
				balticSea: "#292929",
				roseWhite: "#FFF7F4",
			},
			borderRadius: {
				curvy: "0% 100% 15% 85% / 90% 7% 93% 10% ",
			},
			fontSize: {
				"x-lg": "60px",
			},
		},
	},
	plugins: [],
};
