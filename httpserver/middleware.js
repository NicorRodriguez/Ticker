const express = require('express')
var apirouter = require('./routes/apirouter.js')

const app = express()
var router = express.Router()

function logs(req, res, next){
    console.log(new Date(), req.method, req.url)
    next()
}

router.use(logs)
router.use('/api',apirouter)
router.use('/',(req, res)=>{
    res.send('Main')
})

module.exports = router