const express = require('express')
var apirouter = require('./routes/apirouter.js')

const app = express()
var router = express.Router()

function logs(req, res, next){
  console.log(new Date(), req.method, req.url, req.headers['content-type'])
  next()
}

router.use(logs)
router.use('/api',function(req, res, next)
{
  if (!req.headers['content-type']=='application/json')res.send(400)
  else next()
},apirouter)

module.exports = router
