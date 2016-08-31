const fail = require('./fail');
const respond = require('./respond');

export const findRecipe = (db, id) =>
  db.Recipe.findOne({
    where: { id },
    include: [{ all: true }],
  });

export default (req, res) =>
  findRecipe(req.db, req.params.recipe)
    .then(recipe => respond(res, recipe))
    .catch(fail(req, res));
