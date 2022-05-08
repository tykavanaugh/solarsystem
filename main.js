import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);
renderer.render(scene,camera);


const ambientLight = new THREE.AmbientLight(0xffffff,1); //Max light
scene.add(ambientLight);

const gridHelper = new THREE.GridHelper(500,50);
const controls = new OrbitControls(camera,renderer.domElement);
scene.add(gridHelper);

// const spaceTexture = new THREE.TextureLoader().load('./images/spacebgTexture1.jpg');
// scene.background = spaceTexture;

//Sun
const sun = new THREE.Mesh(
  new THREE.SphereGeometry( 15, 32, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xffa500 } ),
)
scene.add( sun );

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry( 2, 16, 8 ),
  new THREE.MeshStandardMaterial( { color: 0x641e16 } ),
)
scene.add( mercury );
mercury.position.set(25,0,0)

const venus = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xf0b27a  } ),
)
scene.add( venus );
venus.position.set(40,0,0)

const earth = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x1a5276   } ),
)
scene.add( earth );
earth.position.set(55,0,0)

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
}

// document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate);

  renderer.render(scene,camera);
}

animate()