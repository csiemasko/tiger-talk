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

app.post('/login', (req,res) => {//Get user
    var data = req.body;   
    console.log(data); 
    getUser(data.name, 'name', user => {     
        if (user != undefined && user != null && data.pass === user.pass) res.json({result: 'success', user: user});
        else res.json(user == null 
                ? { result: 'fail', message: 'User name not found!' } 
                : data.pass !== user.pass 
                     ? { result: 'fail', message: 'Invalid password'} 
                     : null);
    });   
});
app.post('/create', (req,res) => {//New user
    var data = req.body;
    console.log(data);
    var existing = getUser(data.name, 'name');
    console.log(existing);
    if (existing != undefined) {
        res.json({result: 'fail', message: 'User name already exists!', type: 'name-exist'});
    } else {
        mongo.connect(dbConnection, (e,db) => {
            var newUser = data;
            newUser.creationDate = new Date();
            newUser.type = 'local';                        
            db.collection('users').insertOne(newUser);            
            res.json({result: 'success', user: newUser });
        });
    }
});
function getUser(userData, type, callback) {
    mongo.connect(dbConnection, (e,db) => {
        var q = {};
        q[type] = userData;
        db.collection('users').findOne(q, (e,user) => {
            if (user != null) {                 
                callback(user);
            } else {//User doesn't exist...
                console.log(`User with ${type} = ${userData} not found!`);  
                callback(null);      
            }
        });        
    });
}

var io = require('socket.io').listen(server);
io.sockets.on('connection', socket => {
    console.log(`>> IP ${socket.handshake.address} has connected`);    
    if (_.find(connections, {_id: socket.handshake.query.uid } == null)) {
        var newUser = getUser(socket.handshake.query.uid, '_id');
        newUser.ip = socket.handshake.address;
        console.log(`\t∟ IP ${newUser.ip} recognized as '${newUser.name}'`);
        connections.push(newUser);
        socket.emit('+users', {name: newUser.name, list: connections });
    } else {
        console.log('\t∟ IP not a valid user');
    }
    socket.on('disconnect', () => {
        console.log(`<< IP ${socket.handshake.address} has disconnected`);
        var removedUserName = _.find(connections, {ip: socket.handshake.address}).name;        
        _.remove(connections, {ip: socket.handshake.address });
        socket.emit('-users', {name: removedUserName, list: connections });
    });
    socket.on('message', m => {
        console.log('message received');
        console.log(m.text);
        socket.emit('<<msg', { user: _.find(connections, {uid: m.uid }), text: m.text});
    });
});


server.listen(7331);
app.listen(1337);