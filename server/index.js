require('dotenv').config()

const express = require('express'),
      path = require('path'),
      app = express(),
      bodyParser = require('body-parser'),
      ctrl = require('./controller'),
     { SERVER_PORT } = process.env

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.post('/api/send_data', ctrl.send_data )






const port = SERVER_PORT || 8080

app.listen(port, () => console.log(`Server is running on ${SERVER_PORT}`))






