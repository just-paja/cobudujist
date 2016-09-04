import express from 'express';

import admin from './admin';
import random from './random';
import detail from './detail';

const app = express();

app.use('/admin/recipe', admin('Recipe'));

app.get('/recipe/random', random);
app.get('/recipe/:recipe', detail);

module.exports = app;
