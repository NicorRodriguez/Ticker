const amqp = require('amqplib/callback_api');

async function prod (myqueue, message){

  const credentials = {protocol: 'amqp', hostname: '192.168.1.100', port: Number(5672), username: 'nicolas', password: 'sape', vhost: '/' }
  
  amqp.connect(credentials, function(err, conn){
    conn.createConfirmChannel(function(err, ch) {
      if (err) throw err

      ch.assertQueue(myqueue, { durable: false })

      ch.sendToQueue(myqueue, Buffer.from(message))
    })
  })
}

module.exports = { prod }
