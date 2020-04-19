const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

  router.get('/', (req, res) => {
    console.log('query is:',req.query);
    let id = req.query.q;
    const queryText = `SELECT * FROM movies WHERE movies.id = $1;`;
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