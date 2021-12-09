const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			maxWidth: {
				'8xl': '92rem'
			},
			height: {
				0: '0',

				'screen-1/4': '25vh',

				'screen-1/2': '50vh',

				'screen-3/4': '75vh'
			},
			colors: {
				primary: '#0d659d', // Blue Grotto
				secondary: '#192e41', // Midnight Blue
				tertiary: '#05263b', // Dark Blue
				highlight: '#bbc8de', // Misty Blue
				focus: '#013a20', // Forest Green
				'warm-gray': colors.warmGray,
				teal: colors.teal,
				matisse: {
					50: '#f3f7fa',
					100: '#e7f0f5',
					200: '#c3d9e7',
					300: '#9ec1d8',
					400: '#5693ba',
					500: '#0d659d',
					600: '#0c5b8d',
					700: '#0a4c76',
					800: '#083d5e',
					900: '#06314d'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
};

module.exports = config;
