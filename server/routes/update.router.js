const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.put('/', (req, res) => {
    let title=req.body.title
    let description=req.body.description
    let id=req.body.id
    let sqlText=`UPDATE movies SET title=$1, description=$2 WHERE id=$3`;
    console.log('in router put', req.body.id, req.body.description, req.body.title);
    pool.query(sqlText[title, description, id])
      .then((result) => { 
          res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error completing movie update', err);
        res.sendStatus(500);
      });
  });


module.exports=router;