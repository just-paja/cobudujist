import fail from './fail';
import respond from './respond';

export const findRecipe = (db, id) =>
  db.models.recipe.findOne({
    where: { id, visible: true },
    include: [
      {
        as: 'ingredients',
        model: db.models.ingredient,
        include: [db.models.ingredientType, db.models.unit],
      },
    ],
  });

export default (req, res) =>
  findRecipe(req.db, req.params.recipe)
    .then(recipe => respond(res, recipe))
    .catch(fail(req, res));
