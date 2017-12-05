var express = require('express')
var app     = express()
var _       = require('lodash')
var server  = require('http').createServer()
var io      = require('socket.io')
var _mongo = require('mongodb')
var mongo   = require('mongodb').MongoClient
var bp = require('body-parser')
var axios = require('axios')

let dbConnection = `mongodb://localhost:27017/tigertalk`;
const googleClientId = '637796729929-ituv77blbneefedj83l28uug9v0j9vn9';
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
    if (data.type == 'google') {
        axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${data.token}`).then(r => {
            getUser(r.data.email, 'googleEmail', user => {
                console.log(user);
                if (user == undefined || user == null) {//First time Google User                  
                    mongo.connect(dbConnection, (e,db) => {
                        var newUser = {
                            googleEmail: r.data.email,
                            name: r.data.name,
                            avatar: r.data.picture,
                            type: 'google',
                            creationDate: new Date()
                        };
                        var mResult = db.collection('users').insertOne(newUser);
                        console.log(mResult);
                        newUser._id = mResult.insertedId
                        res.json({result: 'success', user: newUser });
                    });
                } else {
                    res.json({result: 'success', user: user });
                }
            });
            
        });
    } else if (data.type == 'tt') {
        getUser(data.name, 'name', user => {     
            if (user != undefined && user != null && data.pass === user.pass) res.json({result: 'success', user: user});
            else res.json(user == null 
                    ? { result: 'fail', message: 'User name not found!' } 
                    : data.pass !== user.pass 
                         ? { result: 'fail', message: 'Invalid password'} 
                         : null);
        }); 
    }      
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
    console.log(`data:${userData} | field:${type}`);
    mongo.connect(dbConnection, (e,db) => {
        var q = {};
        q[type] = type == '_id' ? new _mongo.ObjectID(userData) : userData;
        db.collection('users').findOne(q, (e,user) => {
            if (user != null && user != undefined) {                 
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
    var existingUser = _.find(connections, {_id: socket.handshake.query.uid });  
    if (existingUser == undefined || existingUser == null) {
        console.log('connecting: -----');
        console.log(socket.handshake.query.uid);
        getUser(socket.handshake.query.uid, '_id', user => {
            if (user != null) {
                user.ip = socket.handshake.address;
                console.log(`\t∟ IP ${user.ip} recognized as '${user.name}'`);
                connections.push(user);
                socket.emit('+users', {name: user.name, list: connections });  
            }
           
          });
        
    } else {
        console.log('\t∟ IP not a valid user');
    }
    socket.on('disconnect', () => {
        console.log(`<< IP ${socket.handshake.address} has disconnected`);
        var removedUserName = _.find(connections, {ip: socket.handshake.address}).name;        
        _.remove(connections, {ip: socket.handshake.address });
        socket.emit('-users', {name: removedUserName, list: connections });
    });
    socket.on('msg>>', m => {        
        console.log(m);
        socket.emit('<<msg', { user: _.find(connections, { _id: _mongo.ObjectID(m._id) }), message: { text: m.text, type: 'user-message', timestamp: new Date()}});
    });
});


server.listen(7331);
app.listen(1337);