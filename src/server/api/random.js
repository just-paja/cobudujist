import Sequelize from 'sequelize';

import fail from './fail';
import respond from './respond';

export const findRecipe = db => db.models.recipe
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
