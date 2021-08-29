import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

var config = require('../../data.json');
console.log(config.models);
console.log(config.materialConfigurator);
console.log(config.materials);




const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const ambient = new THREE.AmbientLight( '#ffffff' );

scene.add( ambient );

camera.position.set( 0, 0, 100 );


const controls = new OrbitControls( camera, renderer.domElement );


window.addEventListener( 'resize', onWindowResize );
var i;
for(i=0; i< config.models.length; i++){
	if (config.models[i].type == 'torusknot'){
		const geometry1 = new THREE.TorusKnotGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const torus = new THREE.Mesh( geometry1, material );
			scene.add( torus );
	}
	if (config.models[i].type == 'sphere'){
		const geometry2 = new THREE.SphereGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const sphere = new THREE.Mesh( geometry2, material );
			scene.add( sphere );
	}
	if (config.models[i].type == 'box'){
		const geometry3 = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const box = new THREE.Mesh( geometry3, material );
			scene.add( box );
	}
}



function animate() {

	controls.update();

	requestAnimationFrame( animate );

				torus.rotation.x += 0.01;
				torus.rotation.y += 0.01;

				renderer.render( scene, camera );

				sphere.rotation.x += 0.01;
				sphere.rotation.y += 0.01;

				renderer.render( scene, camera );

				box.rotation.x += 0.01;
				box.rotation.y += 0.01;

				renderer.render( scene, camera );

}

animate();

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}
