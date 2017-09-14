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

/* Variables */
var objects = [];

/* Logic */
io.on('connection', function (socket) {
  setupEvents(socket);
});

function setupEvents(socket) {
  // Connection Events
  socket.on('new player', function(data) {
    
    socket.emit('new object', { geometry: data.mesh.geometry, material: data.mesh.material });
  });
  socket.on('disconnect', function(data) {
    
  });
  
  // Movement Events
  socket.on('forward', function(data) {
    
  });
  socket.on('backward', function(data) {
    
  });
  socket.on('left', function(data) {
    
  });
  socket.on('right', function(data) {
    
  });
  socket.on('jump', function(data) {
    
  });
}
