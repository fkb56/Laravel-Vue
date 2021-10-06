const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
// import colors from "tailwindcss/colors";

module.exports = {
	mode: "jit",
	purge: [
		"./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
		"./vendor/laravel/jetstream/**/*.blade.php",
		"./storage/framework/views/*.php",
		"./resources/views/**/*.blade.php",
		"./resources/js/**/*.vue",
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Nunito", ...defaultTheme.fontFamily.sans],
		},
		extend: {},
		colors: {
			white: {
				DEFAULT: "#fff",
			},
			blueGray: colors.blueGray,
			coolGray: colors.coolGray,
			gray: {
				50: "#FAFAFA",
				100: "#F4F4F5",
				200: "#E4E4E7",
				300: "#D4D4D8",
				400: "#A1A1AA",
				500: "#71717A",
				600: "#52525B",
				700: "#3F3F46",
				800: "#27272A",
				900: "#18181B",
				950: "#333333",
				// 950: '#1F2937'
			},
			trueGray: colors.trueGray,
			warmGray: colors.warmGray,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			2: "2px",
			3: "3px",
			4: "4px",
			5: "5px",
			6: "6px",
			7: "7px",
			8: "8px",
			9: "9px",
			10: "10px",
		},
		boxShadow: {
			sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			DEFAULT: "0 0 30px rgba(194, 65, 12, 1)",
			md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			xl: "0 0 20px rgba(194, 65, 12, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
			"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
			none: "none",
		},
	},

	variants: {
		extend: {
			opacity: ["disabled"],
		},
	},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
		require("tailwindcss-pseudo")({
			empty: true, // defaults to true
		}),
	],
};
