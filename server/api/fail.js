module.exports = (req, res) => (err) => {
  res.status(500).send('Operation failed');
  // eslint-disable-next-line no-console
  console.error(err);
};
