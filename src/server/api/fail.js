export default (req, res) => (err) => {
  if (err.message === 'item-not-found') {
    res.status(404).send('Not found');
  } else {
    res.status(500).send('Operation failed');
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
