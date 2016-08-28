const express = require('express');
const random = require('./random');
const detail = require('./detail');

const app = express();

app.get('/recipe/random', random);
app.get('/recipe/:recipe', detail);

module.exports = app;
