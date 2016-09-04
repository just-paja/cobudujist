/* eslint consistent-return:0 */

import api from './api';
import device from 'express-device';
import express from 'express';
import bodyParser from 'body-parser';
import logger from './logger';
import setup from './middlewares/frontendMiddleware';
import staticFiles from './middlewares/staticFiles';
import storageInit from './middlewares/storage';
import databaseInit from './middlewares/database';

import { resolve } from 'path';

const argv = require('minimist')(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;

const app = express();
const db = databaseInit();
const storage = storageInit();

app.use(bodyParser.json());

db.connect()
  .then(logger.databaseConnected)
  .then(db.sync)
  .then(logger.databaseSynchronized)
  .then(db.seed)
  .then(logger.databaseSeeded)
  .then(() => app
    .use(device.capture())
    .use(db.middleware())
    .use(storage.middleware())
    .use('/api', api)
    .use('/static', staticFiles)
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
