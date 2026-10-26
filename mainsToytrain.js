import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// シーン、カメラ、レンダラーを作成
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// カメラの位置を設定
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

// ライトを追加
const light = new THREE.PointLight(0xffffff, 50, 10);
light.position.set(3, 3, 3);
scene.add(light);

// 座標軸を表示
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);


// 頭
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2.5, 32);
const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); 
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial); 
cylinder.rotation.z = Math.PI / 2;
// コーン
const coneGeometry = new THREE.ConeGeometry(0.3, 0.5, 25);
const coneMaterial = new THREE.MeshPhongMaterial({ color: 0x663333 }); 
const cone = new THREE.Mesh(coneGeometry, coneMaterial); 
cone.rotation.x = Math.PI;
// 車体
const cubeGeometry = new THREE.BoxGeometry(1.5, 3, 2); 
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff }); 
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); 
// 車輪1
const cylinderGeometry1 = new THREE.CylinderGeometry(0.9, 0.9, 0.3, 32);
const cylinderMaterial1 = new THREE.MeshPhongMaterial({ color: 0xff0000 }); 
const cylinder1 = new THREE.Mesh(cylinderGeometry1, cylinderMaterial1);
cylinder1.rotation.x = Math.PI / 2; 
// 車輪2
const cylinderGeometry2 = new THREE.CylinderGeometry(0.9, 0.9, 0.3, 32);
const cylinderMaterial2 = new THREE.MeshPhongMaterial({ color: 0xff0000 }); 
const cylinder2 = new THREE.Mesh(cylinderGeometry2, cylinderMaterial2); 
cylinder2.rotation.x = Math.PI / 2; 

// グループを作成 
const group = new THREE.Group(); 
// 球と立方体をグループに追加 
group.add(cylinder); 
group.add(cone);
group.add(cube); 
group.add(cylinder1); 
group.add(cylinder2); 
// それぞれの位置を設定 
cylinder.position.x = 1; 
cone.position.x = 0;
cone.position.y = 1;
cube.position.x = 3; 
cylinder1.position.x = 3;
cylinder1.position.z = -1.3;
cylinder1.position.y = -1.5;
cylinder2.position.x = 3;
cylinder2.position.z = 1.3;
cylinder2.position.y = -1.5;


// グループをシーンに追加 
scene.add(group); 
// アニメーション 
function animate() {
 requestAnimationFrame(animate); 
 // グループ全体をY軸の周りに回転 
 group.rotation.y += 0.01; 
 light.rotation.y += 0.01;
 renderer.render(scene, camera); 
} 

// OrbitControlsを追加​

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

animate();
