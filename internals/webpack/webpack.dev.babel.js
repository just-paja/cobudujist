/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const logger = require('../../server/logger');
const pkg = require(path.resolve(process.cwd(), 'package.json'));
const dllPlugin = pkg.dllPlugin;

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  new webpack.NoErrorsPlugin(),
];

module.exports = require('./webpack.base.babel')({
  // Add hot reloading in development
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'app/app.js'), // Start with js/app.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  // Add development plugins
  plugins: dependencyHandlers().concat(plugins), // eslint-disable-line no-use-before-define

  // Load the CSS in a style tag in development
  // eslint-disable-next-line max-len
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',

  // Process the CSS with PostCSS
  postcssPlugins: [
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
  ],

  // Tell babel that we want to hot-reload
  babelQuery: {
    presets: ['react-hmre'],
  },

  // Emit a source map for easier debugging
  devtool: 'eval-source-map',
});

/**
 * Select which plugins to use to optimize the bundle's handling of
 * third party dependencies.
 *
 * If there is a dllPlugin key on the project's package.json, the
 * Webpack DLL Plugin will be used.  Otherwise the CommonsChunkPlugin
 * will be used.
 *
 */
function dependencyHandlers() {
  // Don't do anything during the DLL Build step
  if (process.env.BUILDING_DLL) { return []; }

  const dllPath = path.resolve(
    process.cwd(),
    dllPlugin.path || 'node_modules/react-boilerplate-dlls'
  );

  const manifestPath = path.resolve(dllPath, 'reactBoilerplateDeps.json');

  if (!fs.existsSync(manifestPath)) {
    logger.error('The DLL manifest is missing. Please run `npm run build:dll`');
    process.exit(0);
  }

  return [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifestPath), // eslint-disable-line global-require
    }),
  ];
}

/**
 * We dynamically generate the HTML content in development so that the different
 * DLL Javascript files are loaded in script tags and available to our application.
 */
// function templateContent() {
  // const dllNames = !dllPlugin.dlls ? ['reactBoilerplateDeps'] : Object.keys(dllPlugin.dlls);
  // eslint-disable-next-line max-len
  // dllNames.forEach(dllName => body.append(`<script data-dll='true' src='/${dllName}.dll.js'></script>`));

  // return doc.toString();
// }
