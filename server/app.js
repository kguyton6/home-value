const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      ctrl = require('./controller'),
      path = require('path')
      Mailgun = require('mailgun-js'),
      MessagingResponse = require('twilio').twiml.MessagingResponse;

app.use(express.static(path.join(`${__dirname}/../build`)));

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });
   
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/api/send', ctrl.send_email )

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  
  twiml.message('Thank you for your information. I will contact you shortly.   --Heather');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});



const { port } = require('./config.js')

app.listen(port, () => console.log(`Server is running on ${port}`))






