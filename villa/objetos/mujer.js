import * as THREE from "../js/three.module.js";

export default function PersonaVestidoDetallada({ x, y, z }) {

    // Grupo Principal
    var group = new THREE.Group();

    // Materiales
    var matPiel = new THREE.MeshLambertMaterial({ color: 0xffe0bd });
    var matPelo = new THREE.MeshLambertMaterial({ color: 0x2d2b2b });
    var matTorso = new THREE.MeshLambertMaterial({ color: 0xff8a80 });
    var matBrazo = new THREE.MeshLambertMaterial({ color: 0xffe0bd });
    var matVestido = new THREE.MeshLambertMaterial({ color: 0xffb3c6 });
    var matPierna = new THREE.MeshLambertMaterial({ color: 0xffe0bd });
    var matPatin = new THREE.MeshLambertMaterial({ color: 0x444444 });


    // Cabeza
    var geoCabeza = new THREE.SphereGeometry(0.55, 24, 24);
    var cabeza = new THREE.Mesh(geoCabeza, matPiel);
    cabeza.position.set(0, 3, 0);
    group.add(cabeza);


    // Cabello (Parte de arriba)
    // Cambié Math.PI por números (0, 6.3, 0, 1.6)
    var geoPeloArriba = new THREE.SphereGeometry(0.6, 24, 24, 0, 6.3, 0, 1.6);
    var peloArriba = new THREE.Mesh(geoPeloArriba, matPelo);
    peloArriba.position.set(0, 3.1, 0);
    group.add(peloArriba);

    // Cabello (Caída atrás)
    var geoPeloAbajo = new THREE.CylinderGeometry(0.4, 0.35, 1, 20);
    var peloAbajo = new THREE.Mesh(geoPeloAbajo, matPelo);
    peloAbajo.position.set(0, 2.2, -0.25);
    group.add(peloAbajo);


    // Torso
    var geoTorso = new THREE.BoxGeometry(1.1, 1, 0.6);
    var torso = new THREE.Mesh(geoTorso, matTorso);
    torso.position.set(0, 1.8, 0);
    group.add(torso);


    // Brazos
    var geoBrazo = new THREE.CylinderGeometry(0.18, 0.18, 1.4, 16);
    
    var brazoIzq = new THREE.Mesh(geoBrazo, matBrazo);
    brazoIzq.position.set(-0.7, 1.6, 0);
    group.add(brazoIzq);

    var brazoDer = new THREE.Mesh(geoBrazo, matBrazo);
    brazoDer.position.set(0.8, 2.1, 0);
    brazoDer.rotation.z = -0.39;
    group.add(brazoDer);


    // Manos
    var geoMano = new THREE.SphereGeometry(0.22, 16, 16);

    var manoIzq = new THREE.Mesh(geoMano, matPiel);
    manoIzq.position.set(-0.7, 1, 0);
    group.add(manoIzq);

    var manoDer = new THREE.Mesh(geoMano, matPiel);
    manoDer.position.set(1.1, 2.8, 0);
    group.add(manoDer);


    // Vestido
    var geoVestido = new THREE.ConeGeometry(1.4, 2.2, 28);
    var vestido = new THREE.Mesh(geoVestido, matVestido);
    vestido.position.set(0, 0.7, 0);
    group.add(vestido);


    // Piernas
    var geoPierna = new THREE.CylinderGeometry(0.22, 0.22, 1.2, 12);
    
    var piernaIzq = new THREE.Mesh(geoPierna, matPierna);
    piernaIzq.position.set(-0.4, -0.1, 0);
    group.add(piernaIzq);

    var piernaDer = new THREE.Mesh(geoPierna, matPierna);
    piernaDer.position.set(0.4, -0.1, 0);
    group.add(piernaDer);


    // Patines
    var geoPatin = new THREE.BoxGeometry(0.8, 0.25, 1.1);
    
    var patinIzq = new THREE.Mesh(geoPatin, matPatin);
    patinIzq.position.set(-0.4, -0.8, 0);
    group.add(patinIzq);

    var patinDer = new THREE.Mesh(geoPatin, matPatin);
    patinDer.position.set(0.4, -0.8, 0);
    group.add(patinDer);


    // Posición Final
    group.position.set(x, y, z);

    return group;
}