import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';

// シーンの作成
const scene = new THREE.Scene();

// カメラの作成
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 20);
camera.lookAt(new THREE.Vector3(0, 1, 0));

// 環境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 光源
const spotLight = new THREE.SpotLight(0xffffff, 2.0);
spotLight.position.set(-10, 10, 10);
spotLight.castShadow = true;
spotLight.shadow.mapSize.set(4096, 4096);
scene.add(spotLight);

// レンダラー
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

// オブジェクトを作成
const meshKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(2, 1, 100, 16),
    new THREE.MeshStandardMaterial());
// 影を落とす
meshKnot.castShadow = true;
meshKnot.position.set(-8, 0, 0);
scene.add(meshKnot);

// GLTFファイルの読み込み
let gltfmodel;
const loader = new GLTFLoader();
loader.load('./just_a_monkey.glb', (gltf) => {
    const model = gltf.scene;
    //参考 https://zenn.dev/tanabee8/articles/c3f6b7133125e7e2b1f8
    model.traverse((object) => { //モデルの構成要素をforEach的に走査
        if (object.isMesh) { //その構成要素がメッシュだったら
            object.castShadow = true;
            object.receiveShadow = true;

        }
    });
    scene.add(model);
    gltfmodel = model;

}, undefined, function (e) {
    console.error(e);
});

// 床を作成
const meshFloor = new THREE.Mesh(
    new THREE.BoxGeometry(2000, 0.1, 2000),
    new THREE.MeshStandardMaterial());
// 影を受け付ける
meshFloor.receiveShadow = true;
scene.add(meshFloor);

document.getElementById('webgl').appendChild(renderer.domElement);
tick();
function tick() {
    requestAnimationFrame(tick);
    if (gltfmodel) {
        gltfmodel.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}