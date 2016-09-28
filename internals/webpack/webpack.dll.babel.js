/**
 * WEBPACK DLL GENERATOR
 *
 * This profile is used to cache webpack's module
 * contexts for external library and framework type
 * dependencies which will usually not change often enough
 * to warrant building them from scratch every time we use
 * the webpack process.
 */

import webpack from 'webpack';
import { join } from 'path';

import pkg from '../../package.json';
import { dllPlugin } from '../config';

if (!pkg.dllPlugin) { process.exit(0); }

const dllConfig = pkg.dllPlugin;
const outputPath = join(process.cwd(), dllConfig.path);

module.exports = {
  context: process.cwd(),
  entry: dllConfig.dlls ? dllConfig.dlls : dllPlugin.entry(pkg),
  devtool: 'eval',
  output: {
    filename: '[name].dll.js',
    path: outputPath,
    library: '[name]',
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: join(outputPath, '[name].json'),
    }),
  ],
};
