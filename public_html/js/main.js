/* 
 * Copyright (C) César Rodríguez Moreno, AKA Idaho
 * Thanks go to Rx, Palo, MadJ0ker, DarkHeavy, Ikky, 
 * The Aberred Crew and all you know who.
 */

var scene, camera, renderer;
var geometry, material, mesh, light;

loading();
init();
animate();

// Events
window.addEventListener('resize', onWindowResize, false);


