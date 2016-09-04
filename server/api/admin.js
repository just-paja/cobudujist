import express from 'express';

import fail from './fail';
import respond from './respond';

export const notFound = (res) => res.status(404);

export const getItem = (model, id) =>
  model.findOne({ where: { id } })
    .then(item => {
      if (!item) {
        throw new Error('item-not-found');
      }

      return item;
    });

export const createItem = (model, data) =>
  model.create(data);

export const deleteItem = (model, id) =>
  getItem(model, id).then(item => item.destroy());

export const patchItem = (model, id, data) =>
  getItem(model, id)
    .then(item => item.update(data));

const admin = (model) => {
  const app = express();

  app.post('/', (req, res) =>
    createItem(req.db[model], req.body)
      .then(data => respond(res, data))
      .catch(fail(req, res))
  );

  app.get('/:id', (req, res) =>
    getItem(req.db[model], req.params.id)
      .then(data => respond(res, data))
      .catch(fail(req, res))
  );

  app.delete('/:id', (req, res) =>
    deleteItem(req.db[model], req.params.id)
      .then(data => respond(res, data))
      .catch(fail(req, res))
  );

  app.patch('/:id', (req, res) =>
    patchItem(req.db[model], req.params.id, req.body)
      .then(data => respond(res, data))
      .catch(fail(req, res))
  );

  app.put('/:id', (req, res) => {
    res.status(405).send('Method not allowed');
  });

  return app;
};

export default admin;
