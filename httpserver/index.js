const express = require('express')
const bodyParser = require('body-parser');

//var routes = require('.routes/index')
var middleware = require('./middleware.js')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use('/', middleware)

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})
