/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			'fantasy',
			'dracula',
			'retro',
			'luxury',
			'cyberpunk',
			'aqua',
			'valentine',
			'synthwave'
		],
		darkTheme: 'dracula',
		base: true,
		styled: true,
		utils: true,
		rtl: false,
		prefix: '',
		logs: true
	}
};
