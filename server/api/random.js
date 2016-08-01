const Sequelize = require('sequelize');
const fail = require('./fail');

module.exports = (req, res) => {
  req.db.Recipe
    .find({
      limit: 1,
      order: [Sequelize.fn('RANDOM')],
    })
    .then(recipes => {
      res.send(JSON.stringify(recipes));
    })
    .catch(fail(req, res));
};
