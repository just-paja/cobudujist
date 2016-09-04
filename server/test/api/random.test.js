import { expect } from 'chai';
import databaseInit from '../../middlewares/database';
import { findRecipe } from '../../api/random';

describe('random recipe getting', () => {
  beforeEach(function beforeHook() {
    this.db = databaseInit({ storage: ':memory:' });
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
          ingredients: [
            { id: 1, amount: 400, ingredientTypeId: 1, unitTypeId: 1 },
          ],
          visible: true,
        }),
      ]));
  });

  it('should respond with correct recipe', function testDetail() {
    return findRecipe(this.db.models)
      .then(recipe => {
        expect(recipe.id).to.equal(1);
      });
  });
});
