import fs from 'fs';
import path from 'path';
import update from 'react-addons-update';

import { create } from 'filestorage';

const defaultConfig = {
  path: path.join(__dirname, '..', '..', 'var'),
};

export default (passedConfig = {}) => {
  const config = update(defaultConfig, {
    $merge: passedConfig,
  });

  if (!fs.existsSync(config.path)) {
    fs.mkdirSync(config.path);
  }

  const storage = create(config.path);

  const middleware = () => (req, res, next) => {
    // eslint-disable-next-line no-param-reassign
    req.storage = storage;
    next();
  };

  return { middleware };
};
