/**
 * @file Initiates the server and gets all required packages.
 * @author TheCodeCrafter <noahcoder77@gmail.com>
 */

/* Requirements */
var app = require('express').createServer();
var io = require('socket.io')(app);

/* Settings/Local Requirements */
var config = require('./config.json');

/* Routing */
app.use(express.static(__dirname + '/public'));


/* Logic */
io.on('connection', function (socket) {
  
});
