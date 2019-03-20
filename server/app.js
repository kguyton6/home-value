const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      ctrl = require('./controller'),
      path = require('path')
      Mailgun = require('mailgun-js')

app.use(express.static(path.join(`${__dirname}/../build`)));

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });
   
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/api/send', ctrl.send_data )




const { port } = require('./config.js')

app.listen(port, () => console.log(`Server is running on ${port}`))






