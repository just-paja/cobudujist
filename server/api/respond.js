export default (res, data) =>
  res
    .status(200)
    .header('Content-type', 'application/json; charset=utf-8')
    .send(JSON.stringify(data));
