import postcss from 'rollup-plugin-postcss'

export default {
	input: './src/tokyonight.scss',
	output: {
		file: './Themes/tokyonight.css',
	},
	watch: {
		chokidar: {
			usePolling: true,
		},
	},
	plugins: [
		postcss({
			extract: true,
		}),
	],
}
