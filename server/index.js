require('dotenv').config()

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      ctrl = require('./controller'),
     { SERVER_PORT } = process.env

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())
app.get('*', (req, res) => {
     res.send('Hello from Express.js!')
   })
app.get("/get", (req, res, next) => {
     res.json({
         "version": process.env.VERSION
     });
 });

 app.post('/post', function(request, response) {
     response.send(request.body);
 });

app.post('/api/send_data', ctrl.send_data)



const port = SERVER_PORT || 8080

app.listen(port, () => console.log(`Server is running on ${SERVER_PORT}`))






