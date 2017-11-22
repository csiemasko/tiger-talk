var express = require('express')
var app     = express()
var _       = require('lodash')
var server  = require('http').createServer()
var io      = require('socket.io')

app.set('view engine', 'pug')
app.use(express.static(`${__dirname}/public`))

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/public/views/index.html`);
});

app.listen(1337);