/* 
 * Copyright (C) César Rodríguez Moreno, AKA Idaho
 * Thanks go to Rx, Palo, MadJ0ker, DarkHeavy, Ikky, 
 * The Aberred Crew and all you know who.
 */


function init() {

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('renderer01').appendChild(renderer.domElement);

}
