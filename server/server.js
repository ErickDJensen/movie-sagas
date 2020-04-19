const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const movieRouter = require('./routes/movie.router');
const detailsRouter = require('./routes/details.router');
const genresRouter = require('./routes/genres.router');
const updateRouter = require('./routes/update.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movie', movieRouter);
app.use('/api/details', detailsRouter);
app.use('/api/genres', genresRouter);
app.use('/api/update', updateRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});