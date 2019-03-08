require('dotenv').config()

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      ctrl = require('./controller'),
     { SERVER_PORT } = process.env

app.use(bodyParser.json())

app.post('/api/send_data', ctrl.send_data)



const port = SERVER_PORT || 8080

app.listen(port, () => console.log(`Server is running on ${SERVER_PORT}`))






