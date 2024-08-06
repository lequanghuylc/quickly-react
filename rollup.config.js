import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
export default {
  input: './src/index.ts',
  output: [
    {
      file: './quickly.min.js',
      format: 'iife', // Immediately Invoked Function Expression (good for <script> tags)
      name: 'Quickly' // The name of the global variable representing your bundle
    },
    {
      file: './index.bundle.js',
      format: 'cjs',
    },
  ],
  plugins: [
    resolve(), // Allows Rollup to find modules in node_modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript() // Transpiles TypeScript to JavaScript
  ]
}