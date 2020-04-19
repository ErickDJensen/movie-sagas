const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// router.get('/', (req, res) => {
//     const queryText = `SELECT "movies"."id", "title", "name", "description"
//     FROM "movies"
//     JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id"
//     JOIN "genres" ON "movies_genres"."genres_id" = "genres"."id";
//     `;
//     pool.query(queryText)
//       .then((result) => { res.send(result.rows); })
//       .catch((err) => {
//         console.log('Error completing SELECT details query', err);
//         res.sendStatus(500);
//       });
//   });

  router.get('/', (req, res) => {
    // returns one movie
    console.log('query is:',req.query);
    let id = req.query.q;
    const queryText = `
                        SELECT * FROM movies
                        WHERE movies.id = $1;
                    `;
    pool.query(queryText,[id])
        .then( (result) => {
            res.send(result.rows[0]);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports=router;