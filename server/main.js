/* eslint consistent-return:0 */

import api from './api';
import device from 'express-device';
import express from 'express';
import logger from './logger';
import setup from './middlewares/frontendMiddleware';

import { connect, middleware, seed } from './middlewares/database';
import { resolve } from 'path';

const argv = require('minimist')(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

connect()
  .then(() => logger.databaseConnected())
  .then(seed)
  .then(() => logger.databaseSeeded())
  .then(() => app
    .use(device.capture())
    .use(middleware())
    .use('/api', api)
  )
  .then(() => {
    // In production we need to pass these values in instead of relying on webpack
    setup(app, {
      outputPath: resolve(process.cwd(), 'build'),
      publicPath: '/',
    });


    // get the intended port number, use port 3000 if not provided
    const port = argv.port || process.env.PORT || 3000;

    // Start your app.
    app.listen(port, (err) => {
      if (err) {
        return logger.error(err.message);
      }

      // Connect to ngrok in dev mode
      if (ngrok) {
        ngrok.connect(port, (innerErr, url) => {
          if (innerErr) {
            return logger.error(innerErr);
          }

          logger.appStarted(port, url);
        });
      } else {
        logger.appStarted(port);
      }
    });
  });
