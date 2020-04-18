const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT "movies"."id", "title", "name", "description"
    FROM "movies"
    JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id"
    JOIN "genres" ON "movies_genres"."genres_id" = "genres"."id";
    `;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT details query', err);
        res.sendStatus(500);
      });
  });


module.exports=router;