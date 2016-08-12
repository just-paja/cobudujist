/* eslint consistent-return:0 */

require('babel-register');
require('babel-polyfill');

const cssHook = require('css-modules-require-hook');

cssHook({
  generateScopedName: '[local]__[path][name]__[hash:base64:5]',
});

require('./main');
