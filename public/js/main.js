/**
 * @file The main script that deals with the client-side three.js
 * @author TheCodeCrafter <noahcoder77@gmail.com>
 */

var scene, camera, renderer;
var geometry, material, mesh;
var socket;

init(); // 
animate(); // 

/** 
 * @function init
 * @description Initialize scene, camera, socket, and other variables.
 */
function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 1000;

	geometry = new THREE.BoxGeometry( 200, 200, 200 );
	material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );
  
  initSocket();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	document.body.appendChild( renderer.domElement );

}

initSocket() {
  var socket = io.connect('http://localhost'); // Connect to the server running socket. In this case, localhost
  
  /* Socket Events */
}

/** 
 * @function animate
 * @description An update function, really. Update's three.js scene based on client and socket input.
 */
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
