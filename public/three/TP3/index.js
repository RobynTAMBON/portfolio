import * as THREE from 'three';
//import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import Stats from 'three/addons/libs/stats.module.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { GUI } from 'lil-gui';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

var troupeau_vaches = new THREE.Group();
const gui = new GUI();
var lod = new THREE.LOD(); // Création d’un LOD
var openOrClose = 1;
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;
const direction = new THREE.Vector3();


let prevTime = performance.now();
const velocity = new THREE.Vector3();
window.addEventListener('resize', onWindowResize, false);
var scene = new THREE.Scene();
var textures_skybox = [
    "skybox/xp.jpg", "skybox/xn.jpg",
    "skybox/yp.jpg", "skybox/yn.jpg",
    "skybox/zp.jpg", "skybox/zn.jpg",
];
scene.background = new THREE.CubeTextureLoader().load(textures_skybox);
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.set(0, 100, 100);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new PointerLockControls(camera, document.body);
scene.add(controls.object)
var gridHelper = new THREE.GridHelper(100, 10);
scene.add(gridHelper);
var light1 = new THREE.DirectionalLight(0xffffff);
light1.position.set(1, 1, 1);
scene.add(light1);
var light2 = new THREE.AmbientLight(0x888888);
scene.add(light2);
var clock = new THREE.Clock();
const stats = new Stats();
document.body.appendChild(stats.dom);
let planeHelper = new THREE.PlaneHelper(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), 100, 0xff0000);
scene.add(planeHelper);

const params = {
    numberOfCow: 10,
    showPlaneHelper: true,
    recreateTroupeau: () => {
        recreateTroupeau(params.numberOfCow);
    }
};
gui.add(params, 'numberOfCow', 0, 2000, 1).name('Nombre de Vaches');
gui.add(params, 'showPlaneHelper').name('Afficher PlaneHelper').onChange((value) => {
    planeHelper.visible = value;
});
gui.add(params, 'recreateTroupeau').name('Recréer troupeau');



const mtlLoader = new MTLLoader();
mtlLoader.load('objets/cow/cow.mtl', (materials) => {
    materials.preload();
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    const models = [
        { path: 'objets/cow/cow_high.obj', distance: 0 },
        { path: 'objets/cow/cow_mid.obj', distance: 10 },
        { path: 'objets/cow/cow_low.obj', distance: 20 },
    ];
    models.forEach((model) => {
        objLoader.load(model.path, (object) => {
            lod.addLevel(object, model.distance);
            if (lod.levels.length === models.length) {
                recreateTroupeau(10);
            }
        },
            undefined, undefined);
    });
    scene.add(lod); // Ajoute le LOD à la scène
});

window.addEventListener('click', function () {
    controls.lock();
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "f":
            openOrClose++;
            if (openOrClose % 2 === 0) {
                openFullscreen();
            } else {
                closeFullscreen();
            }
            openOrClose++;
            console.log('Ouverture/fermeture', openOrClose);
            break;
    }
    event.preventDefault(); // Annule l'action par dÃ©faut pour Ã©viter qu'elle ne soit traitÃ©e deux fois
}, true);

renderer.setAnimationLoop(animate);
function animate() {
    scene.traverse(function (object) {
        if (object instanceof THREE.LOD) {
            object.update(camera);
        }
    });
    stats.update();
    let dt = clock.getDelta();
    controls.update();

    const time = performance.now();
    if (controls.isLocked === true) {
        const delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize(); // this ensures consistent movements in all directions

        if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        controls.moveRight(- velocity.x * delta);
        controls.moveForward(- velocity.z * delta);

        controls.object.position.y += (velocity.y * delta); // new behavior

        if (controls.object.position.y < 10) {

            velocity.y = 0;
            controls.object.position.y = 10;

            canJump = true;

        }

    }

    prevTime = time;

    // Animer la scène
    renderer.render(scene, camera);
    document.getElementById("info").innerHTML = "Triangles : " + renderer.info.render.triangles;

};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

function recreateTroupeau(numberOfCow) {
    // Supprimer les anciennes chèvres
    troupeau_vaches.clear();

    // Ajouter les nouvelles vaches
    for (let i = 0; i < numberOfCow; i++) {
        const cowClone = lod.clone();
        cowClone.traverse((child) => {
            if (child.isMesh) {
                child.name = `cow${i + 1}`;
            }
        });
        cowClone.position.set(randomPosition(-50, 50), 0, randomPosition(-50, 50),);
        troupeau_vaches.add(cowClone);
    }
    scene.add(troupeau_vaches);
    console.log(`${numberOfCow} vaches recréées.`);
}
function randomPosition(begin, end) {
    return THREE.MathUtils.randFloat(begin, end);
}

const onKeyDown = function (event) {

    switch (event.code) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = true;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            break;

        case 'Space':
            if (canJump === true) velocity.y += 350;
            canJump = false;
            break;

    }

};

const onKeyUp = function (event) {

    switch (event.code) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = false;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = false;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = false;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = false;
            break;

    }

};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
