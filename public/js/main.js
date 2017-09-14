/**
 * @file The main script that deals with the client-side three.js
 * @author TheCodeCrafter <noahcoder77@gmail.com>
 */

var scene, camera, renderer;
var socket;

// KEYS
var SPACE = 32;
var ESC = 27;

var W = 87;
var S = 83;
var A = 65;
var D = 68;

var objects = [];

init();
animate();

/** 
 * @function init
 * @description Initialize scene, camera, socket, and other variables.
 */
function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.z = 1000;
	
	var geometry = new THREE.BoxGeometry(200, 200, 200);
	var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	var mesh = new THREE.Mesh(geometry, material);
  
  	initSocket();
	
	socket.emit('new player', { mesh: mesh });

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
	
	input();
}

initSocket() {
  var socket = io.connect('http://localhost'); // Connect to the server running socket. In this case, localhost.
  
  /* Socket Events */
  socket.on('new object', function(data) {
		var newObject; // Create new Object variable
		
		// Define all of the objects variables
		newObject.geometry = data.geometry;
		newObject.material = data.material;
		newObject.id = data.id; // Received from the server, which generates an id for it.
		
		newObject.mesh = new THREE.Mesh(newObject.geometry, newObject.material);
		
		objects.push(newObject);
		sccene.add(newObject.mesh);
		
		animate();
	});
	
	socket.on('update object', function(data) {
		var object = objectById(data.id);
		
		if(data.position)
			object.mesh.position = data.position;
		if(data.rotation)
			object.mesh.rotation = data.rotation;
		
		if(data.material)
			object.material, object.mesh.material = data.material;
		if(data.geometry)
			object.geometry, object.mesh.geometry = data.geometry;
		
		animate();
	});
	
	socket.on('destroy object', function(data) {
		var removeObject = objectById(data.id)
		objects.splice(objects.indexOf(removeObject));
    scene.remove(removeObject);
    animate();
	});
}

/** 
 * @function animate
 * @description An update function, really. Update's three.js scene based on client and socket input.
 */
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

/**
 * @function setupInput
 * @description Sets up jQuery to detect keyDown events. WASD, Escape, and Space.
 */
function setupInput() {
	$(renderer.domElement).keydown(function(e) {
		if(e.which == W) {
			e.preventDefalt();
			socket.emit('forward');
		}
		if(e.which == S) {
			e.preventDefault();
			socket.emit('backward');
		}
		if(e.which == A) {
			e.preventDefault();
			socket.emit('left');
		}
		if(e.which == D) {
			e.preventDefault();
			socket.emit('right');
		}
		if(e.which == SPACE) {
			e.preventDefault();
			socket.emit('up');
		} else if(e.which == ESC) {
			//pause();
		}
	});
}
	
/// HELPER FUNCTIONS
function objectById (id) {
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].id === id) {
      return objects[i];
    }
  }

  return false;
}
