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

//Mercury
let mecuryDegreePos = 90
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry( 2, 16, 8 ),
  new THREE.MeshStandardMaterial( { color: 0x484848} ),
)
scene.add( mercury );
mercury.position.set(25,0,0)

//Venus
let venusDegreePos = 270
const venus = new THREE.Mesh(
  new THREE.SphereGeometry( 3.5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xb8b8b8  } ),
)
scene.add( venus );
venus.position.set(40,0,0)

//Earth
let earthDegreePos = 0
const earth = new THREE.Mesh(
  new THREE.SphereGeometry( 4, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x1a5276   } ),
)
scene.add( earth );
earth.position.set(55,0,0)

//Mars
let marDegreePos = 300
const mars = new THREE.Mesh(
  new THREE.SphereGeometry( 3, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x993d00   } ),
)
scene.add( mars );
mars.position.set(70,0,0)

//Jupiter
let jupiterDegreePos = 265
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xb07f35   } ),
)
scene.add( jupiter );
jupiter.position.set(100,0,0)

//Saturn
let saturnDegreePos = 280
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0xb08f36   } ),
)
scene.add( saturn );
saturn.position.set(135,0,0)

//Uranus
let uranusDegreePos = 0
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x5580aa   } ),
)
scene.add( uranus );
uranus.position.set(165,0,0)

//Neptune
let neptuneDegreePos = 0
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry( 5, 24, 16 ),
  new THREE.MeshStandardMaterial( { color: 0x366896  } ),
)
scene.add( neptune );
neptune.position.set(195,0,0)

//starry background
const spaceTexture = new THREE.TextureLoader().load('./textures/space-stars-twinkle.gif');
scene.background = spaceTexture;


function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
}

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
  renderer.render(scene,camera);
}

animate()

