const express = require('express');
const random = require('./random');

const app = express();

app.get('/recipe/random', random);

module.exports = app;
