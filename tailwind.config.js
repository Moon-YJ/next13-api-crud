/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				wide: { max: '1400px' },
				web: { max: '1200px' },
				tablet: { max: '1024px' },
				mobile: { max: '640px' },
			},
			fontFamily: {
				monoton: ['var(--font-monoton)'],
				confortaa: ['var(--font-comfortaa)'],
			},
		},
	},
	plugins: [],
};
