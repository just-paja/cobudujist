import fail from './fail';
import respond from './respond';

export const findRecipe = (db, id) =>
  db.Recipe.findOne({
    where: { id, visible: true },
    include: [
      {
        as: 'ingredients',
        model: db.Ingredient,
        include: [db.IngredientType, db.Unit],
      },
    ],
  });

export default (req, res) =>
  findRecipe(req.db, req.params.recipe)
    .then(recipe => respond(res, recipe))
    .catch(fail(req, res));
