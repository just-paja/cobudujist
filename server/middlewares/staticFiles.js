import express from 'express';

const app = express();

app.use('/font-awesome', express.static('node_modules/font-awesome'));
app.use('/bootswatch', express.static('node_modules/bootswatch/flatly'));

export default app;
