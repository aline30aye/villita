import * as THREE from "../js/three.module.js";

export default function IgluPinguino({ x, y, z }) {
    
    var escenaGroup = new THREE.Group();

    // Materiales
    var matHielo = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var matNieve = new THREE.MeshLambertMaterial({ color: 0xf0f8ff }); 
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x111111 });
    var matBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var matNaranja = new THREE.MeshLambertMaterial({ color: 0xFFA500 });


    // Iglu

    // Cúpula
    var geoCupula = new THREE.SphereGeometry(3, 32, 16, 0, 6.28, 0, 1.57);
    var cupula = new THREE.Mesh(geoCupula, matHielo);
    cupula.position.set(0, 0, 0);
    escenaGroup.add(cupula);

    // Entrada
    var geoTunel = new THREE.CylinderGeometry(0.8, 1, 2.5, 16);
    var tunel = new THREE.Mesh(geoTunel, matHielo);
    tunel.rotation.z = 1.57; 
    tunel.position.set(-2.5, 0, 0); 
    escenaGroup.add(tunel);


    // Pinguino
    var pinguinoGroup = new THREE.Group();

    // Cuerpo
    var geoCuerpo = new THREE.CapsuleGeometry(0.6, 1.2, 4, 8);
    var cuerpo = new THREE.Mesh(geoCuerpo, matNegro);
    cuerpo.position.set(0, 1.1, 0);
    pinguinoGroup.add(cuerpo);

    // Panza
    var geoPanza = new THREE.CapsuleGeometry(0.45, 1.0, 4, 8);
    var panza = new THREE.Mesh(geoPanza, matBlanco);
    panza.position.set(0.3, 1.0, 0); 
    pinguinoGroup.add(panza);

    // Ojo Izquierdo
    var geoOjo = new THREE.SphereGeometry(0.08, 8, 8);
    var ojoI = new THREE.Mesh(geoOjo, matBlanco);
    ojoI.position.set(0.45, 1.8, 0.2);
    pinguinoGroup.add(ojoI);

    var geoPupila = new THREE.SphereGeometry(0.03, 8, 8);
    var pupilaI = new THREE.Mesh(geoPupila, matNegro);
    pupilaI.position.set(0.52, 1.8, 0.2);
    pinguinoGroup.add(pupilaI);

    // Ojo Derecho
    var ojoD = new THREE.Mesh(geoOjo, matBlanco);
    ojoD.position.set(0.45, 1.8, -0.2);
    pinguinoGroup.add(ojoD);

    var pupilaD = new THREE.Mesh(geoPupila, matNegro);
    pupilaD.position.set(0.52, 1.8, -0.2);
    pinguinoGroup.add(pupilaD);

    // Pico
    var geoPico = new THREE.ConeGeometry(0.1, 0.4, 8);
    var pico = new THREE.Mesh(geoPico, matNaranja);
    pico.rotation.z = -1.57; 
    pico.position.set(0.6, 1.7, 0);
    pinguinoGroup.add(pico);

    // Aleta Izquierda
    var geoAleta = new THREE.BoxGeometry(0.2, 0.8, 0.1);
    var aletaI = new THREE.Mesh(geoAleta, matNegro);
    aletaI.position.set(0, 1.2, 0.6);
    aletaI.rotation.x = 0.5; 
    pinguinoGroup.add(aletaI);

    // Aleta Derecha
    var aletaD = new THREE.Mesh(geoAleta, matNegro);
    aletaD.position.set(0, 1.2, -0.6);
    aletaD.rotation.x = -0.5;
    pinguinoGroup.add(aletaD);

    // Pata Izquierda
    var geoPata = new THREE.BoxGeometry(0.4, 0.1, 0.3);
    var pataI = new THREE.Mesh(geoPata, matNaranja);
    pataI.position.set(0.2, 0.1, 0.25);
    pinguinoGroup.add(pataI);

    // Pata Derecha
    var pataD = new THREE.Mesh(geoPata, matNaranja);
    pataD.position.set(0.2, 0.1, -0.25);
    pinguinoGroup.add(pataD);

    // Posición Pinguino
    pinguinoGroup.position.set(4, 0, 2);
    pinguinoGroup.rotation.y = -0.5; 
    escenaGroup.add(pinguinoGroup);


    // Montañas
    
    // Montaña 1
    var geoM1 = new THREE.ConeGeometry(4, 6, 16);
    var m1 = new THREE.Mesh(geoM1, matNieve);
    m1.position.set(-8, 3, -5); 
    escenaGroup.add(m1);

    // Montaña 2
    var geoM2 = new THREE.ConeGeometry(3, 4, 16);
    var m2 = new THREE.Mesh(geoM2, matNieve);
    m2.position.set(-5, 2, -8);
    escenaGroup.add(m2);

    // Montaña 3
    var geoM3 = new THREE.ConeGeometry(5, 5, 16);
    var m3 = new THREE.Mesh(geoM3, matNieve);
    m3.position.set(5, 2.5, -8);
    escenaGroup.add(m3);


    // Nieve
    
    var geoCopo = new THREE.SphereGeometry(0.1, 8, 8);

    // Copo 1
    var c1 = new THREE.Mesh(geoCopo, matBlanco);
    c1.position.set(0, 6, 0);
    escenaGroup.add(c1);

    // Copo 2
    var c2 = new THREE.Mesh(geoCopo, matBlanco);
    c2.position.set(3, 5, 2);
    escenaGroup.add(c2);

    // Copo 3
    var c3 = new THREE.Mesh(geoCopo, matBlanco);
    c3.position.set(-2, 7, -3);
    escenaGroup.add(c3);

    // Copo 4
    var c4 = new THREE.Mesh(geoCopo, matBlanco);
    c4.position.set(5, 4, -5);
    escenaGroup.add(c4);

    // Copo 5
    var c5 = new THREE.Mesh(geoCopo, matBlanco);
    c5.position.set(-4, 6, 5);
    escenaGroup.add(c5);

    // Copo 6
    var c6 = new THREE.Mesh(geoCopo, matBlanco);
    c6.position.set(2, 5, -4);
    escenaGroup.add(c6);

    // Copo 7
    var c7 = new THREE.Mesh(geoCopo, matBlanco);
    c7.position.set(-3, 8, 2);
    escenaGroup.add(c7);


    // Posición Final
    escenaGroup.position.set(x, y, z);

    return escenaGroup;
}