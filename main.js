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


const ambientLight = new THREE.AmbientLight(0xffffff,.5);
scene.add(ambientLight);

const gridHelper = new THREE.GridHelper(200,50);
const controls = new OrbitControls(camera,renderer.domElement);
scene.add(gridHelper);

// const spaceTexture = new THREE.TextureLoader().load('./images/spacebgTexture1.jpg');
// scene.background = spaceTexture;

function addStar(){
  const geometry = new THREE.SphereGeometry(0.1,24,24);
  const material = new THREE.MeshStandardMaterial({color:0xffffff,emissive:0xfffffff});
  const star = new THREE.Mesh(geometry,material);
  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star)
}

Array(500).fill().forEach(addStar)

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
}

// document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate);

  renderer.render(scene,camera);
}

animate()