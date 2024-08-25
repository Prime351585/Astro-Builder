/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			  },
			colors:{
				primary: '#ff5525',
				secondary: {
					100: '#000000',
					200: '#888883',
				}
			},
			animation:{
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},
			keyframes: {
			  'infinite-scroll': {
				from: { transform: 'translateX(0)' },
				to: { transform: 'translateX(-100%)' },
			  }
			}
			}
		},
	plugins: [],
}
