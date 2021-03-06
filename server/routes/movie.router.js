const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//getting all movies to display on the home page from the database
router.get('/', (req, res) => {
  const queryText = 'SELECT id, title, poster, description FROM movies';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
});


module.exports = router;