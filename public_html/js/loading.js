/* 
 * Copyright (C) César Rodríguez Moreno, AKA Idaho
 * Thanks go to Rx, Palo, MadJ0ker, DarkHeavy, Ikky, 
 * The Aberred Crew and all you know who.
 */

/*
 * Globals from main:
 * 
 * var scene, camera, renderer;
 * var geometry, material, mesh, light;
 * 
 */





/* global scene, THREE */

function loading() {

    // TODO: message of loading...

    // Scene creation
    scene = new THREE.Scene();

    // camera creation
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 15;

//    // Object creation
    //
    //
    //geometry = new THREE.BoxGeometry(200, 200, 200);
    //material = new THREE.MeshPhongMaterial({color: 0xff0000});
//mesh = new THREE.Mesh(geometry, material);
//
//    // Object (geometry+material) added to the scene
//scene.add(mesh);

    var loader = new THREE.JSONLoader();
    loader.load('res/mobius.json', function (loaded_geometry, loaded_materials) {
        //THREE.log( 'loader!!!!' );
        //THREE.log( 'Geometria cargada: ' + JSON.stringify(loaded_geometry) );
        //var faceMaterial = new THREE.MeshFaceMaterial( materials );
        //geometry = loaded_geometry;
        material = loaded_materials[ 0 ];
        //THREE.log( 'material cargado: ' + JSON.stringify(material) );
        //material = new THREE.MeshPhongMaterial({color: 0x0000ff});
        mesh = new THREE.Mesh(loaded_geometry,material);
        //THREE.log( 'mesh crado: ' + JSON.stringify(mesh) );
        scene.add(mesh);
        //THREE.log( 'FIN de loader!!!!' );
    });
    //THREE.log( 'Geometria: ' + JSON.stringify(geometry) );
    //mesh = new THREE.Mesh(geometry, material);
    //mesh.scale.set(100,100,100);
    //scene.add(mesh);

    // Ambien light added to the scene
    scene.add(new THREE.AmbientLight(0x111111));

    // light creation
    light = new THREE.PointLight(0xffffff, 1, 100, 2);
    light.position.x = 25;
    light.position.y = 30;
    light.position.z = 30;

    // Light added to the scene
    scene.add(light);

}
