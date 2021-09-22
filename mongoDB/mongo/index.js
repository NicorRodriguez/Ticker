const express = require('express')
const app = express()

app.get('/',(req, res) => {
  res.send('Toro puto')
})

app.listen(5050, () => {
  console.log('Servidor escuchando en el puerto 5050.');
})
