export default db => (req, res, next) => {
  // eslint-disable-next-line no-param-reassign
  req.db = db;
  next();
};
