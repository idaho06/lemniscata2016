/* 
 * Copyright (C) César Rodríguez Moreno, AKA Idaho
 * Thanks go to Rx, Palo, MadJ0ker, DarkHeavy, Ikky, 
 * The Aberred Crew and all you know who.
 */

function loading() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    geometry = new THREE.BoxGeometry(200, 200, 200);
//                    material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false});
    material = new THREE.MeshPhongMaterial({color: 0xff0000});

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    scene.add(new THREE.AmbientLight(0x111111));

    light = new THREE.PointLight(0xff0040, 2, 1000, 2);

    light.position.x = 300;
    light.position.y = 400;
    light.position.z = 300;

    scene.add(light);

}