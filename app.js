'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/router');
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '/.env')
});
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use('/vehicle/health/', ( req,res )=>{
    res.status(200).send({
        status: 200,
        name: 'OK',
        message: 'OK',
        customMessage: "I'm healthy"
    });
  })

app.use('/vehicle/', router);


app.listen(port, function () {
    console.log(`http://localhost:${port}`)
})