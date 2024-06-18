import postcss from 'rollup-plugin-postcss'

const css = (file, destination=false) => {

	return {
		input: file,
		output: {
			file: destination,
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

}

export default [
	css('./src/tokyonight.scss', './Themes/tokyonight.css'),
]
