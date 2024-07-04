import postcss from 'rollup-plugin-postcss'

export default {
	input: './src/Tokyo Night.scss',
	output: {
		file: './tokyonight.novaextension/Themes/Tokyo Night.css',
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
