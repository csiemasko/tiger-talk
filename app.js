var express = require('express')
var app     = express()
var _       = require('lodash')
var server  = require('http').createServer()
var io      = require('socket.io')
var mongo   = require('mongodb').MongoClient;
var bp = require('body-parser');

let dbConnection = `mongodb://localhost:27017/tigertalk`;
var connections = [];

app.set('view engine', 'pug')
app.use(express.static(`${__dirname}/public`))
app.use(bp.urlencoded());
app.use(bp.json());

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/public/views/index.html`);
});
app.post('/connect', (req,res) => {

});

app.post('/create-user', (req,res) => {
    var data = req.body;
    
});

function initMongo () {
    mongo.connect(dbConnection, (e,db) => {
        if (e) throw e;
        db.collection('messages', (e,c) => {
            
        });
        db.collection('users', (e,c) => {
            
        });
        db.close();
    });
};

initMongo();
app.listen(1337);