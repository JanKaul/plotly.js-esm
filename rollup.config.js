import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'plotly.js/lib/index-strict.js',
    output: {
        dir: 'dist',
        format: 'es'
    },
    plugins: [commonjs(), nodePolyfills(), nodeResolve({ browser: true, preferBuiltins: false })]
};