/* 
 * Copyright (C) César Rodríguez Moreno, AKA Idaho
 * Thanks go to Rx, Palo, MadJ0ker, DarkHeavy, Ikky, 
 * The Aberred Crew and all you know who.
 */


function animate() {

    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

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