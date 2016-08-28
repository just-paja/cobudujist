const fail = require('./fail');
const respond = require('./respond');

module.exports = (req, res) => {
  req.db.Recipe
    .findOne({
      where: { id: req.params.recipe },
    })
    .then(recipe => respond(res, recipe))
    .catch(fail(req, res));
};
