const express = require('express');
const producer = require('../producer.js');

var router = express.Router()

router.get('/', function(req, res){
    res.send('entraste a la api wacho uando GET')
})

router.post('/newboard', function(req, res){

  const data = req.body
  let board = data['1']['name']

  if(board){
    producer.prod( 'newboard', unescape(encodeURIComponent(data)) )
    res.sendStatus(200)
  } else res.send(400)

})

router.post('/newtask'+'\/*/', function(req, res){

  try{
    const url = req.url.split('/')
    const idBoard = url[2]

    const data = req.body
    const board = data[idBoard]['name']
    const task = data[idBoard]['tasks']['1']['name']

    if(board && task){

      producer.prod( 'newtask', unescape(encodeURIComponent(data)))
      res.sendStatus(200)

    } else res.send(400)
  } catch (e) { res.sendStatus(400) }

})

router.put('/newdesc'+'\/*/', function(req, res){

  try {
    const url = req.url.split('/')
    const idBoard = url[2]
    const idTask = url[3]

    const data = req.body
    const board = data[idBoard]['name']
    const task = data[idBoard]['tasks'][idTask]['name']
    const desc = data[idBoard]['tasks'][idTask]['desc']

    if(board && task && desc){

      producer.prod( 'newdesc', unescape(encodeURIComponent(data)))
      res.sendStatus(200)

    } else res.sendStatus(400)
  } catch (e){ res.sendStatus(400) }

})

router.put('/newdate'+'\/*/', function(req, res){

  try {
    const url = req.url.split('/')
    const idBoard = url[2]
    const idTask = url[3]

    const data = req.body
    const board = data[idBoard]['name']
    const task = data[idBoard]['tasks'][idTask]['name']
    const date = data[idBoard]['tasks'][idTask]['date']

    if(board && task && date){

      producer.prod( 'newdate', unescape(encodeURIComponent(data)))
      res.sendStatus(200)

    } else res.sendStatus(400)
  } catch (e){ res.sendStatus(400) }

})

router.put('/checktask'+'\/*/', function(req, res){

  try {
    const url = req.url.split('/')
    const idBoard = url[2]
    const idTask = url[3]

    const data = req.body
    const board = data[idBoard]['name']
    const task = data[idBoard]['tasks'][idTask]['name']
    const status = data[idBoard]['tasks'][idTask]['status']

    if(board && task && status){

      producer.prod( 'checktask', unescape(encodeURIComponent(data)))
      res.sendStatus(200)

    } else res.sendStatus(400)
  } catch (e){ res.sendStatus(400) }

})

router.delete('/delboard'+'\/*/', function(req, res){

  try {
    const url = req.url.split('/')
    const idBoard = url[2]

    const data = req.body
    const board = data[idBoard]['name']

    if(board){

      producer.prod( 'delboard', unescape(encodeURIComponent(data)))
      res.sendStatus(200)

    } else res.sendStatus(400)
  } catch (e){ res.sendStatus(400) }

})

router.delete('/deltask'+'\/*/', function(req, res){

  try {
    const url = req.url.split('/')
    const idBoard = url[2]
    const idTask = url[3]

    const data = req.body
    const board = data[idBoard]['name']
    const task = data[idBoard]['tasks'][idTask]['name']

    if(board && task){

      producer.prod( 'deltask', unescape(encodeURIComponent(data)))
      res.sendStatus(200)

    } else res.sendStatus(400)
  } catch (e){ res.sendStatus(400) }

})

module.exports = router
