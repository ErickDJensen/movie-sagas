const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('query is:', req.query);
    let id = req.query.q;
    const queryText = `SELECT "name"
         FROM "movies"
         JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id"
         JOIN "genres" ON "movies_genres"."genres_id" = "genres"."id" WHERE movies.id = $1;
         `;
    pool.query(queryText, [id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});





module.exports = router;