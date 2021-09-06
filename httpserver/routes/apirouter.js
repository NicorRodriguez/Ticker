const express = require('express');
const producer = require('../producer.js');

var router = express.Router()

router.get('/', function(req, res){
    console.log(req);
    res.send('entraste a la api wacho uando GET')
})

router.post('/newboard', function(req, res){

  const data = req.body
  let [board] = Object.keys(data)

  producer.prod( 'newboard', board )

  //console.log( JSON.parse(req.body))
  res.send('newboard')
})

module.exports = router
