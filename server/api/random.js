const Sequelize = require('sequelize');
const fail = require('./fail');
const respond = require('./respond');

export const findRecipe = db => db.Recipe
  .findOne({
    limit: 1,
    order: [Sequelize.fn('RANDOM')],
    where: { visible: true },
  });

export default (req, res) => {
  findRecipe(req.db)
    .then(recipes => respond(res, recipes))
    .catch(fail(req, res));
};
