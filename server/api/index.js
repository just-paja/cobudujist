import express from 'express';
import random from './random';
import detail from './detail';

const app = express();

app.get('/recipe/random', random);
app.get('/recipe/:recipe', detail);

module.exports = app;
