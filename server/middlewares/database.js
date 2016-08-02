const Sequelize = require('sequelize');
const seedData = require('../../seed.js');

const config = {
  charset: process.env.DB_PASS || 'utf8',
  database: process.env.DB_NAME || 'cobudujist',
  dialect: process.env.DB_DIALECT || 'sqlite',
  host: process.env.DB_HOST || '127.0.0.1',
  password: process.env.DB_PASS || '',
  storage: process.env.DB_STORAGE || 'database.sqlite',
  user: process.env.DB_USER || '',
};

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
  text: { type: Sequelize.TEXT },
});

const Ingredience = db.define('ingredience', {
  name: { type: Sequelize.STRING },
  amount: { type: Sequelize.DECIMAL },
});

const IngredienceType = db.define('ingredienceType', {
  name: { type: Sequelize.STRING },
});

const Unit = db.define('unit', {
  name: { type: Sequelize.STRING },
});

FoodTagCategory.belongsToMany(FoodTag, { as: 'tags', through: 'CategoryTags' });
Recipe.hasMany(Ingredience, { as: 'ingrediences' });
Recipe.belongsTo(RecipeTime, { as: 'prepareTime' });
Recipe.belongsToMany(FoodTag, { as: 'tags', through: 'RecipeTags' });
Ingredience.belongsTo(IngredienceType);
IngredienceType.belongsTo(Unit);

const models = {
  Recipe,
  RecipeTime,
  FoodTag,
  FoodTagCategory,
  Unit,
  Ingredience,
  IngredienceType,
};

const sync = () => {
  const promises = [];

  for (const model of Object.keys(models)) {
    if (models.hasOwnProperty(model)) {
      promises.push(models[model].sync());
    }
  }

  Promise
    .all(promises)
    .catch(err => {
      process.stdout.write('Could not sync the database scheme\n');
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(2);
    });
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

const connect = () => db
  .authenticate()
  .then(() => {
    process.stdout.write(`Connected to database ${config.database}\n`);
  })
  .catch(err => {
    process.stdout.write('Could not connect to database\n');
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });

const prepare = () => connect()
  .then(sync)
  .then(seed)
  .catch(err => {
    process.stdout.write('Failed to prepare database\n');
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(4);
  })
  .then(() => ({ db, models }));

const middleware = database => (req, res, next) => {
  // eslint-disable-next-line no-param-reassign
  req.db = database.models;
  next();
};

module.exports = { middleware, prepare };
