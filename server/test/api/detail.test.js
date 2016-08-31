import expect from 'expect';
import databaseInit from '../../middlewares/database';
import { findRecipe } from '../../api/detail';

describe('detail getting', () => {
  before(function beforeHook(next) {
    this.db = databaseInit({ storage: 'detail.test.sqlite' });
    this.db
      .connect()
      .then(this.db.sync)
      .then(() => Promise.all([
        this.db.models.Unit.upsert({ id: 1, name: 'g' }),
        this.db.models.IngredientType.upsert({ id: 1, name: 'Rýže', unitId: 1 }),
        this.db.models.Recipe.upsert({
          id: 1,
          name: 'Test Recipe',
          steps: 'Testing markdown steps',
        }),
        this.db.models.Ingredient.upsert({
          id: 1,
          amount: 400,
          recipeId: 1,
          typeId: 1,
        }),
      ]))
      .then(() => next())
      .catch(next);
  });

  it('should respond with correct recipe', function testDetail() {
    findRecipe(this.db.models, 2)
      .then(recipe => {
        expect(recipe).to.equal({
          id: 1,
          name: 'Test Recipe',
          steps: 'Testing markdown steps',
        });
      });
  });
});
