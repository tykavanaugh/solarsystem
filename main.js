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
renderer.render(scene,camera);

// Camera Globals
let cameraZPosition = 250
let cameraDegreePos = 90


const ambientLight = new THREE.AmbientLight(0xffffff,1); //Max light
scene.add(ambientLight);

const gridHelper = new THREE.GridHelper(500,50);
const controls = new OrbitControls(camera,renderer.domElement);
scene.add(gridHelper);

// const spaceTexture = new THREE.TextureLoader().load('./images/spacebgTexture1.jpg');
// scene.background = spaceTexture;

//Sun
const sunTexture = new THREE.TextureLoader().load('./textures/sunmap.jpg')
const sun = new THREE.Mesh(
  new THREE.SphereGeometry( 15, 64, 32 ),
  new THREE.MeshStandardMaterial( { color: 0xffa500,map:sunTexture } ),
)
scene.add( sun );

//Mercury
const mercuryTexture = new THREE.TextureLoader().load('./textures/mercurymap.jpg')
let mecuryDegreePos = 90
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry( 2, 16, 8 ),
  new THREE.MeshStandardMaterial( { color: 0x484848,map:mercuryTexture} ),
)
scene.add( mercury );
mercury.position.set(25,0,0)

//Venus
const venusTexture = new THREE.TextureLoader().load('./textures/venusmap.jpg')

let venusDegreePos = 270
const venus = new THREE.Mesh(
  new THREE.SphereGeometry( 3.5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xb8b8b8,map:venusTexture } ),
)
scene.add( venus );
venus.position.set(40,0,0)

//Earth
const earthTexture = new THREE.TextureLoader().load('./textures/earthmap1k.jpg')
let earthDegreePos = 0
const earth = new THREE.Mesh(
  new THREE.SphereGeometry( 4, 48, 24 ),
  new THREE.MeshStandardMaterial( { color: 0x1a5276,map:earthTexture   } ),
)
scene.add( earth );
earth.position.set(55,0,0)

//Mars
const marsTexture = new THREE.TextureLoader().load('./textures/marsmap1k.jpg')
let marDegreePos = 300
const mars = new THREE.Mesh(
  new THREE.SphereGeometry( 3, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x993d00,map:marsTexture } ),
)
scene.add( mars );
mars.position.set(70,0,0)

//Jupiter
const jupiterTexture = new THREE.TextureLoader().load('./textures/jupitermap.jpg')

let jupiterDegreePos = 265
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xb07f35,map:jupiterTexture } ),
)
scene.add( jupiter );
jupiter.position.set(100,0,0)

//Saturn
const saturnTexture = new THREE.TextureLoader().load('./textures/saturnmap.jpg')
let saturnDegreePos = 280
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xb08f36,map:saturnTexture  } ),
)
scene.add( saturn );
saturn.position.set(135,0,0)

//Uranus
const uranusTexture = new THREE.TextureLoader().load('./textures/uranusmap.jpg')
let uranusDegreePos = 0
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x5580aa,map:uranusTexture } ),
)
scene.add( uranus );
uranus.position.set(165,0,0)

//Neptune
const neptuneTexture = new THREE.TextureLoader().load('./textures/neptunemap.jpg')
let neptuneDegreePos = 0
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x366896,map:neptuneTexture} ),
)
scene.add( neptune );
neptune.position.set(195,0,0)

//starry background
const spaceTexture = new THREE.TextureLoader().load('./textures/space-stars-twinkle.gif');
scene.background = spaceTexture;

// document.body.onscroll = moveCamera

const convertCoord = (radius,angle) => {
  var x = radius * Math.sin(Math.PI * 2 * angle / 360);
  var y = radius * Math.cos(Math.PI * 2 * angle / 360);
  return {x,y}
};

const mecuryOrbit = () => {
  if (mecuryDegreePos === 360){
    mecuryDegreePos = 0
  } else {
    mecuryDegreePos += .4
  }
  let coords = convertCoord(25,mecuryDegreePos)
  mercury.position.x = coords['x']
  mercury.position.z = coords['y']
}

const venusOrbit = () => {
  if (venusDegreePos === 360){
    venusDegreePos = 0
  } else {
    venusDegreePos += .12
  }
  let coords = convertCoord(40,venusDegreePos)
  venus.position.x = coords['x']
  venus.position.z = coords['y']
}

const earthOrbit = () => {
  if (earthDegreePos === 360){
    earthDegreePos = 0
  } else {
    earthDegreePos += .1
  }
  let coords = convertCoord(55,earthDegreePos)
  earth.position.x = coords['x']
  earth.position.z = coords['y']
}

const marOrbit = () => {
  if (marDegreePos === 360){
    marDegreePos = 0
  } else {
    marDegreePos += .07
  }
  let coords = convertCoord(70,marDegreePos)
  mars.position.x = coords['x']
  mars.position.z = coords['y']
}

const jupiterOrbit = () => {
  if (jupiterDegreePos === 360){
    jupiterDegreePos = 0
  } else {
    jupiterDegreePos += .35
  }
  let coords = convertCoord(100,jupiterDegreePos)
  jupiter.position.x = coords['x']
  jupiter.position.z = coords['y']
}

const saturnOrbit = () => {
  if (saturnDegreePos === 360){
    saturnDegreePos = 0
  } else {
    saturnDegreePos += .13
  }
  let coords = convertCoord(135,saturnDegreePos)
  saturn.position.x = coords['x']
  saturn.position.z = coords['y']
}

const uranusOrbit = () => {
  if (uranusDegreePos === 360){
    uranusDegreePos = 0
  } else {
    uranusDegreePos += .25
  }
  let coords = convertCoord(165,uranusDegreePos)
  uranus.position.x = coords['x']
  uranus.position.z = coords['y']
}

const neptuneOrbit = () => {
  if (neptuneDegreePos === 360){
    neptuneDegreePos = 0
  } else {
    neptuneDegreePos += .05
  }
  let coords = convertCoord(195,neptuneDegreePos)
  neptune.position.x = coords['x']
  neptune.position.z = coords['y']
}

function getRandomNRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Inital camera set

function moveCameraZ(){
  const t = document.body.getBoundingClientRect().top;
  cameraZPosition = 250 + t * .05
}

camera.position.x = 30
camera.position.y = 40

function moveCameraXY(){
  const hypo = Math.hypot(camera.position.x,camera.position.y)
  if (cameraDegreePos === 360){
    cameraDegreePos = 0
  } else {
    cameraDegreePos += .2
  }
  const coords = convertCoord(hypo,cameraDegreePos)
  camera.position.setX(coords['x'])
  camera.position.setY(coords['y'])
}

document.body.onscroll = moveCameraZ


function animate(){
  requestAnimationFrame(animate);
  mecuryOrbit()
  venusOrbit()
  earthOrbit()
  marOrbit()
  jupiterOrbit()
  saturnOrbit()
  uranusOrbit()
  neptuneOrbit()
  moveCameraXY()
  camera.position.setZ(cameraZPosition);
  camera.lookAt(0,0,0)
  renderer.render(scene,camera);
}

animate()

