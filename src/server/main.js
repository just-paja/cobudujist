/* eslint consistent-return:0 */

import device from 'express-device';
import express from 'express';
import bodyParser from 'body-parser';
import minimist from 'minimist';

import { resolve } from 'path';

import api from './api';
import logger from './logger';
import setup from './middlewares/frontendMiddleware';
import staticFiles from './middlewares/staticFiles';
import storageInit from './middlewares/storage';
import databaseInit from './middlewares/database';


const argv = minimist(process.argv.slice(2));
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

      logger.appStarted(port);
    });
  });
