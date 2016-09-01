import Sequelize from 'sequelize';
import seedData from '../../seed.js';
import update from 'react-addons-update';

const defaultConfig = {
  charset: process.env.DB_PASS || 'utf8',
  database: process.env.DB_NAME || 'cobudujist',
  dialect: process.env.DB_DIALECT || 'sqlite',
  host: process.env.DB_HOST || '127.0.0.1',
  password: process.env.DB_PASS || '',
  storage: process.env.DB_STORAGE || 'database.sqlite',
  user: process.env.DB_USER || '',
  logging: process.env.DB_LOGGING || false,
};


export default (passedConfig = {}) => {
  const config = update(defaultConfig, {
    $merge: passedConfig,
  });

  const db = new Sequelize(config.database, config.user, config.password, config);

  const FoodTag = db.define('foodTag', {
    name: { type: Sequelize.STRING, unique: true },
  });

  const FoodTagCategory = db.define('foodTagCategory', {
    name: { type: Sequelize.STRING },
  });

  const RecipeTime = db.define('recipeTime', {
    name: { type: Sequelize.STRING },
    duration: { type: Sequelize.INTEGER.UNSIGNED },
  });

  const Recipe = db.define('recipe', {
    name: { type: Sequelize.STRING },
    duration: { type: Sequelize.INTEGER },
    portions: { type: Sequelize.INTEGER },
    steps: { type: Sequelize.TEXT },
    notes: { type: Sequelize.TEXT },
  });

  const RecipeTags = db.define('recipeTags', {});

  const Ingredient = db.define('ingredient', {
    amount: { type: Sequelize.DECIMAL },
  });

  const IngredientType = db.define('ingredientType', {
    name: { type: Sequelize.STRING },
  });

  const Unit = db.define('unit', {
    name: { type: Sequelize.STRING },
  });

  FoodTagCategory.belongsToMany(FoodTag, { as: 'tags', through: 'CategoryTags' });
  Recipe.hasMany(Ingredient);
  Recipe.belongsTo(RecipeTime, { as: 'prepareTime' });
  Recipe.belongsToMany(FoodTag, { as: 'tags', through: RecipeTags });
  IngredientType.hasMany(Ingredient);
  Unit.hasMany(Ingredient);
  Ingredient.belongsTo(Recipe);
  Ingredient.belongsTo(IngredientType);
  Ingredient.belongsTo(Unit);

  const models = {
    Recipe,
    RecipeTags,
    RecipeTime,
    FoodTag,
    FoodTagCategory,
    Unit,
    Ingredient,
    IngredientType,
  };

  const sync = () => {
    const promises = [];

    for (const model of Object.keys(models)) {
      if (models.hasOwnProperty(model)) {
        promises.push(models[model].sync());
      }
    }

    return Promise.all(promises);
  };

  const seed = () => {
    const promises = [];

    for (const table of seedData) {
      for (const record of table.records) {
        promises.push(models[table.model].upsert(record));
      }
    }

    return Promise
      .all(promises)
      .catch(err => {
        process.stdout.write('Could not seed initial data into the database\n');
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(3);
      });
  };

  const connect = () => db.authenticate();

  const middleware = () => (req, res, next) => {
    // eslint-disable-next-line no-param-reassign
    req.db = models;
    next();
  };

  return { connect, middleware, seed, sync, models };
};
