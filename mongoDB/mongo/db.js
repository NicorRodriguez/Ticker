const db = require('mongoose')

const user = 'admin'
const pwd = 'admin'
const uri = 'mongodb://localhost:8081/ticker'

db.connect(uri).then(() =>{
  console.log('anashe');
}).catch(err => {
  console.log(err);
})
