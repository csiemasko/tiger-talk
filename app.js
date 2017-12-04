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

app.post('/create', (req,res) => {
    var data = req.body;
    mongo.collection('users', (e,c) => c.insertOne({ userName: data.name, avatarUrl: data.avatar }));
    
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
var io = require('socket.io').listen(server);
io.sockets.on('connection', socket => {
    console.log('A user connected: ' + socket.handshake.query.uid );
    socket.on('message', m => {
        console.log('message received');
        console.log(m.text);
        socket.emit('<<msg', {user: 'debug', text: m.text});
    });
});


server.listen(7331);
app.listen(1337);