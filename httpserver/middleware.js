const express = require('express')
var apirouter = require('./router/apirouter.js')

var connectTimeout = require('connect-timeout');
var longTimeout = connectTimeout({ time: 600000 });

const app = express()
var router = express.Router()

function logs(req, res, next){
  console.log(new Date(), req.method, req.url, req.headers['content-type']==undefined ? 'No header':req.headers['content-type'])
  next()
}

router.use(logs)
router.use(longTimeout)
router.use('/',function(req, res, next)
{
  if (!req.headers['content-type']=='application/json')res.send(400)
  else next()
},apirouter)
router.use('(?:\/\/)?([^\/\s]+\/)(.*)', function(res, res, next){
  console.log('entro');
  res.sendStatus(404)
  next()
},()=>{})

module.exports = router
