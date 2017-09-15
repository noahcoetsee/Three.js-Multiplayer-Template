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
    
    for(var i = 0; i < objects.length; i++) {
      socket.emit('new object', { geometry: objects[i].geometry, material: objects[i].material });
    }
    
    socket.broadcast.emit('new object', { geometry: data.mesh.geometry, material: data.mesh.material });
  });
  socket.on('disconnect', function() {
    objects.splice(objects.indexOf()); // FIX
  });
  
  // Movement Events
  socket.on('forward', function(data) {
    socket.broadcast.emit('update object', { changePosition: { axis: z, value: 10} });
  });
  socket.on('backward', function(data) {
    socket.broadcast.emit('update object', { changePosition: { axis: z, value: -10} });
  });
  socket.on('left', function(data) {
    socket.broadcast.emit('update object', { changePosition: { axis: x, value: -10} });
  });
  socket.on('right', function(data) {
    socket.broadcast.emit('update object', { changePosition: { axis: x, value: 10} });
  });
  socket.on('jump', function(data) {
    socket.broadcast.emit('update object', { changePosition: { axis: y, value: 15} });
  });
}
