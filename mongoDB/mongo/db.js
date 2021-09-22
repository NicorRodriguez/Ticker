const db = require('mongoose')

const user = 'admin'
const pwd = 'admin'
const uri = 'mongodb://localhost:8081'

db.connect(uri,{useNewUrlParser: true, iseUnifiedTopology: true}).then(() =>{

}).catch(err => {
  console.log(err);
})
