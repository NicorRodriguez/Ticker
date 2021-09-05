const express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    
    res.send('entraste a la api wacho uando GET')
})

router.post('/', function(req, res){
    
    res.send('entraste a la api wacho usando POST')
})

router.put('/', function(req, res){
    res.send('Usaste el easter anashee')
})

module.exports = router