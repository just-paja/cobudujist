const Sequelize = require('sequelize');
const fail = require('./fail');
const respond = require('./respond');

module.exports = (req, res) => {
  req.db.Recipe
    .find({
      limit: 1,
      order: [Sequelize.fn('RANDOM')],
    })
    .then(recipes => respond(res, recipes))
    .catch(fail(req, res));
};