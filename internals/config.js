const resolve = require('path').resolve;

const ReactBoilerplate = {
  // This refers to the react-boilerplate version this project is based on.
  version: '3.0.0',

  /**
   * The DLL Plugin provides a dramatic speed increase to webpack build and hot module reloading
   * by caching the module metadata for all of our npm dependencies. We enable it by default
   * in development.
   *
   *
   * To disable the DLL Plugin, set this value to false.
   */
  dllPlugin: {
    defaults: {
      /**
       * we need to exclude dependencies which are not intended for the browser
       * by listing them here.
       */
      exclude: [],

      /**
       * Specify any additional dependencies here. We include core-js
       * since a lot of our dependencies depend on them and they get picked up by webpack.
       */
      include: ['core-js', 'eventsource-polyfill', 'babel-polyfill'],

      // The path where the DLL manifest and bundle will get built
      path: resolve('../node_modules/react-boilerplate-dlls'),
    },

    entry(pkg) {
      const dependencyNames = Object.keys(pkg.dependencies);
      const exclude = pkg.dllPlugin.exclude || ReactBoilerplate.dllPlugin.defaults.exclude;
      const include = pkg.dllPlugin.include || ReactBoilerplate.dllPlugin.defaults.include;
      const includeDependencies = dependencyNames
        .concat(include)
        .filter((value, index, self) => self.indexOf(value) === index)
        .filter(value => exclude.indexOf(value) === -1);

      return {
        reactBoilerplateDeps: includeDependencies,
      };
    },
  },
};

module.exports = ReactBoilerplate;
