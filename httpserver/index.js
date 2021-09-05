const express = require('express')

//var routes = require('.routes/index')
var middleware = require('./middleware.js')
const app = express()
const port = 3000

app.use('/', middleware)

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})