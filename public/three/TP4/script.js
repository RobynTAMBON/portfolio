import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import Stats from 'three/addons/libs/stats.module.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { GUI } from 'lil-gui';
//import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { DDSLoader } from 'three/addons/loaders/DDSLoader.js';
import { Legende } from './legende.js';
import { textSprite } from './textSprite.js';



var openOrClose = 1;
var texture1or2 = 1;
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;
const direction = new THREE.Vector3();
let prevTime = performance.now();
const velocity = new THREE.Vector3();
let texture_carte;
let texture_terrain;
let mesh_terrain;
var elem = document.documentElement;
var legende;
var t;
const yLegende = 200;
const colorLegende = 0xffffff;
let canadair;
var rayon = 500;
var vitesse = 0.5;
var angle = 0;

var scene = new THREE.Scene();
var textures_skybox = [
    "skybox/xp.jpg", "skybox/xn.jpg",
    "skybox/yp.jpg", "skybox/yn.jpg",
    "skybox/zp.jpg", "skybox/zn.jpg",
];
scene.background = new THREE.CubeTextureLoader().load(textures_skybox);
scene.fog = new THREE.Fog(0xc2dce9, 2000, 10000);
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(0, 300, 100);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//var controls = new OrbitControls(camera, renderer.domElement);
//scene.add(controls.object)
var controls = new FlyControls(camera, renderer.domElement);
controls.domElement = renderer.domElement;
controls.rollSpeed = Math.PI/6;
controls.autoForward = false;
controls.dragToLook = false;
var gridHelper = new THREE.GridHelper(8000, 10);
scene.add(gridHelper);
var light1 = new THREE.DirectionalLight(0xffffff);
light1.position.set(1, 1, 1);
scene.add(light1);
var light2 = new THREE.AmbientLight(0x888888);
scene.add(light2);
var clock = new THREE.Clock();
const stats = new Stats();
document.body.appendChild(stats.dom);
// let planeHelper = new THREE.PlaneHelper(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), 8000, 0xff0000);
// scene.add(planeHelper);

// Load json model
fetch('./fontvieille_relief.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.dimx)
        console.log(data.dimz);
        console.log(data.altitudes);
        // Create geometry
        const geometrie_terrain = new THREE.PlaneGeometry(5000, 5000, 100, 100);
        geometrie_terrain.rotateX(- Math.PI / 2);
        const vertices = geometrie_terrain.attributes.position.array;
        const hauteurs = data.altitudes;
        for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
            vertices[j + 1] = hauteurs[i];
        }
        geometrie_terrain.computeVertexNormals();
        //LoadTexture
        texture_terrain = new DDSLoader().load('fontvieille_photo.dds');
        texture_terrain.minFilter = texture_terrain.magFilter = THREE.LinearFilter;
        texture_terrain.anisotropy = 4;

        texture_carte = new THREE.TextureLoader().load('fontvieille_carte.jpg');
        texture_carte.minFilter = texture_carte.magFilter = THREE.LinearFilter;
        texture_carte.anisotropy = 4;

        mesh_terrain = new THREE.Mesh(geometrie_terrain, new THREE.MeshBasicMaterial({ map: texture_terrain }));

        scene.add(mesh_terrain);

    })
    .catch(error => console.error('Erreur lors de la récupération du JSON:', error));

fetch('./fontvieille_infos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.legendes);
        console.log(data.legendes.x);
        console.log(data.legendes[0].x);

        for (let i = 0; i < data.legendes.length; i++) {
            var tempLegend = new Legende(new THREE.Vector3(data.legendes[i].x, 0, data.legendes[i].z), new THREE.Vector3(data.legendes[i].x, yLegende, data.legendes[i].z), colorLegende, data.legendes[i].texte);
            var templine = tempLegend.createLine();
            scene.add(templine);
            var tempSprite = textSprite(data.legendes[i].texte, data.legendes[i].x, yLegende, data.legendes[i].z, 20);
            scene.add(tempSprite);
        }


    })
    .catch(error => console.error('Erreur lors de la récupération du JSON:', error));

legende = new Legende(new THREE.Vector3(200, 0, -400), new THREE.Vector3(200, 300, -400), colorLegende, "Une légende");
var line = legende.createLine();
scene.add(line);
t = new textSprite("ROB CITY", 200, 300, -400, 30);
scene.add(t);


var mtlLoader = new MTLLoader();
mtlLoader.load("canadair/canadair.mtl", function (materials) {
    materials.preload();
    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('canadair/canadair.obj', function (object) {
        canadair = object;
        scene.add(object);
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (error) {
        console.error("Erreur de chargement");
    });
});


// GameLoop 
renderer.setAnimationLoop(animate);
function animate() {
    stats.update();
    let dt = clock.getDelta();
    if (canadair) {
        angle += vitesse * dt;
        var x = Math.cos(angle) * rayon;
        var z = Math.sin(angle) * rayon;
        var y = 300;

        canadair.position.set(x, y, z);
        canadair.lookAt(Math.cos(angle + 0.1) * rayon, y, Math.sin(angle + 0.1) * rayon);
    }
    controls.movementSpeed = 100;
    controls.update(dt);

    // const time = performance.now();
    // if (controls.isLocked === true) {
    //     const delta = (time - prevTime) / 1000;

    //     velocity.x -= velocity.x * 10.0 * delta;
    //     velocity.z -= velocity.z * 10.0 * delta;

    //     velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    //     direction.z = Number(moveForward) - Number(moveBackward);
    //     direction.x = Number(moveRight) - Number(moveLeft);
    //     direction.normalize(); // this ensures consistent movements in all directions

    //     if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
    //     if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

    //     controls.moveRight(- velocity.x * delta);
    //     controls.moveForward(- velocity.z * delta);

    //     controls.object.position.y += (velocity.y * delta); // new behavior

    //     if (controls.object.position.y < 10) {

    //         velocity.y = 0;
    //         controls.object.position.y = 10;

    //         canJump = true;

    //     }

    // }

    // prevTime = time;

    // Animer la scène
    renderer.render(scene, camera);
    //document.getElementById("info").innerHTML = "Triangles : " + renderer.info.render.triangles;

};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
};

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
};

//Movement controls for pointer controls
// const onKeyDown = function (event) {

//     switch (event.code) {

//         case 'ArrowUp':
//         case 'KeyW':
//             moveForward = true;
//             break;

//         case 'ArrowLeft':
//         case 'KeyA':
//             moveLeft = true;
//             break;

//         case 'ArrowDown':
//         case 'KeyS':
//             moveBackward = true;
//             break;

//         case 'ArrowRight':
//         case 'KeyD':
//             moveRight = true;
//             break;

//         case 'Space':
//             if (canJump === true) velocity.y += 350;
//             canJump = false;
//             break;

//     }

// };

// const onKeyUp = function (event) {

//     switch (event.code) {

//         case 'ArrowUp':
//         case 'KeyW':
//             moveForward = false;
//             break;

//         case 'ArrowLeft':
//         case 'KeyA':
//             moveLeft = false;
//             break;

//         case 'ArrowDown':
//         case 'KeyS':
//             moveBackward = false;
//             break;

//         case 'ArrowRight':
//         case 'KeyD':
//             moveRight = false;
//             break;

//     }

// };

//EventListener
window.addEventListener('resize', onWindowResize, false);

// document.addEventListener('keydown', onKeyDown);
// document.addEventListener('keyup', onKeyUp);
//For Pointer Lock Controls
// window.addEventListener('click', function () {
//     controls.lock();
// });
window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "f":
            openOrClose++;
            if (openOrClose % 2 === 0) {
                openFullscreen();
            } else {
                closeFullscreen();
            }
            console.log('Ouverture/fermeture', openOrClose);
            break;
        case "Escape":
            texture1or2++;
            if (texture1or2 % 2 === 0) {
                mesh_terrain.material.map = texture_carte;
            } else {
                mesh_terrain.material.map = texture_terrain;
            }
            console.log('changement de texture', texture1or2);

    }
    event.preventDefault(); // Annule l'action par dÃ©faut pour Ã©viter qu'elle ne soit traitÃ©e deux fois
}, true);
