import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

// Enable/disable minification
let minify = true;

// The file banner
let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

// The files to bundle
let files = ['home.js', 'place.js'];

export default files.map(function (file) {
	return {
		input: file,
		output: {
			file: file,
			format: 'iife',
			banner: banner,
			plugins: minify ? [terser()] : null,
			sourcemap: minify
		}
	};
});