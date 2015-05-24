/* 
 * Copyright (C) César Rodríguez Moreno, AKA Idaho
 * Thanks go to Rx, Palo, MadJ0ker, DarkHeavy, Ikky, 
 * The Aberred Crew and all you know who.
 */


/* global mesh, renderer, camera, scene */

function animate() {

    requestAnimationFrame(animate);

    if (typeof mesh !== 'undefined') {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
    }
    render();

}


function render() {

    renderer.render(scene, camera);

}

//

function onWindowResize(event) {

    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

}