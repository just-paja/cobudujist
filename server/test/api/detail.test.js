import { expect } from 'chai';
import databaseInit from '../../middlewares/database';
import { findRecipe } from '../../api/detail';

describe('detail getting', () => {
  before(function beforeHook() {
    this.db = databaseInit({ storage: 'detail.test.sqlite' });
    return this.db
      .connect()
      .then(this.db.sync)
      .then(() => Promise.all([
        this.db.models.Unit.upsert({ id: 1, name: 'g' }),
        this.db.models.IngredientType.upsert({ id: 1, name: 'Rýže', unitId: 1 }),
        this.db.models.Recipe.upsert({
          id: 1,
          name: 'Test Recipe',
          steps: 'Testing markdown steps',
          notes: 'test notes',
          createdAt: '2016-01-01T01:01:01.000Z',
          updatedAt: '2016-01-01T01:01:01.000Z',
          prepareTimeId: null,
          prepareTime: null,
        }),
        this.db.models.Ingredient.upsert({
          id: 1,
          amount: 400,
          recipeId: 1,
          typeId: 1,
        }),
      ]));
  });

  it('should respond with correct recipe', function testDetail() {
    return findRecipe(this.db.models, 1)
      .then(recipe => {
        expect(recipe.id).to.equal(1);
      });
  });
});
