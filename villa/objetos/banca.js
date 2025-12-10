import * as THREE from "../js/three.module.js";

export default function BancasMadera({ x, y, z }) {
    
    var bancasGroup = new THREE.Group();

    // Materiales
    var matMaderaOscura = new THREE.MeshLambertMaterial({ color: 0x5c4033 }); 
    var matMaderaClara = new THREE.MeshLambertMaterial({ color: 0x8B5A2B });  
    var matNieve = new THREE.MeshLambertMaterial({ color: 0xffffff });        


    // Banca 1 (Frente)
    var b1 = new THREE.Group();

    // Patas
    var geoPata = new THREE.BoxGeometry(0.2, 1.5, 1.5);
    
    var pataI1 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataI1.position.set(-1.2, 0.4, 0);
    b1.add(pataI1);

    var pataD1 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataD1.position.set(1.2, 0.4, 0);
    b1.add(pataD1);

    // Asiento
    var geoTablon = new THREE.BoxGeometry(2.8, 0.15, 0.4);
    
    var asiento1a = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento1a.position.set(0, 0.8, 0.4);
    b1.add(asiento1a);

    var asiento1b = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento1b.position.set(0, 0.8, -0.1);
    b1.add(asiento1b);

    // Respaldo
    var geoSoporte = new THREE.BoxGeometry(0.15, 1.5, 0.15);
    
    var soporteI1 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteI1.position.set(-1.2, 1.5, -0.6);
    soporteI1.rotation.x = -0.2;
    b1.add(soporteI1);

    var soporteD1 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteD1.position.set(1.2, 1.5, -0.6);
    soporteD1.rotation.x = -0.2;
    b1.add(soporteD1);

    var respaldo1a = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo1a.position.set(0, 1.9, -0.7);
    respaldo1a.rotation.x = -0.2;
    b1.add(respaldo1a);

    var respaldo1b = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo1b.position.set(0, 1.4, -0.6);
    respaldo1b.rotation.x = -0.2;
    b1.add(respaldo1b);

    // Nieve
    var geoNieve = new THREE.BoxGeometry(2.8, 0.1, 0.4);
    var nieve1 = new THREE.Mesh(geoNieve, matNieve);
    nieve1.position.set(0, 2.0, -0.72); 
    nieve1.rotation.x = -0.2;
    nieve1.scale.set(1.02, 1, 1.1); 
    b1.add(nieve1);

    b1.position.set(0, 0, 2);
    bancasGroup.add(b1);


    // Banca 2 (Izquierda)
    var b2 = new THREE.Group();

    // Patas
    var pataI2 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataI2.position.set(-1.2, 0.4, 0);
    b2.add(pataI2);

    var pataD2 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataD2.position.set(1.2, 0.4, 0);
    b2.add(pataD2);

    // Asiento
    var asiento2a = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento2a.position.set(0, 0.8, 0.4);
    b2.add(asiento2a);

    var asiento2b = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento2b.position.set(0, 0.8, -0.1);
    b2.add(asiento2b);

    // Respaldo
    var soporteI2 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteI2.position.set(-1.2, 1.5, -0.6);
    soporteI2.rotation.x = -0.2;
    b2.add(soporteI2);

    var soporteD2 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteD2.position.set(1.2, 1.5, -0.6);
    soporteD2.rotation.x = -0.2;
    b2.add(soporteD2);

    var respaldo2a = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo2a.position.set(0, 1.9, -0.7);
    respaldo2a.rotation.x = -0.2;
    b2.add(respaldo2a);

    var respaldo2b = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo2b.position.set(0, 1.4, -0.6);
    respaldo2b.rotation.x = -0.2;
    b2.add(respaldo2b);

    // Nieve
    var nieve2 = new THREE.Mesh(geoNieve, matNieve);
    nieve2.position.set(0, 2.0, -0.72); 
    nieve2.rotation.x = -0.2;
    nieve2.scale.set(1.02, 1, 1.1); 
    b2.add(nieve2);

    b2.position.set(-5, 0, 2);
    b2.rotation.y = 0.8;
    bancasGroup.add(b2);


    // Banca 3 (Derecha)
    var b3 = new THREE.Group();

    // Patas
    var pataI3 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataI3.position.set(-1.2, 0.4, 0);
    b3.add(pataI3);

    var pataD3 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataD3.position.set(1.2, 0.4, 0);
    b3.add(pataD3);

    // Asiento
    var asiento3a = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento3a.position.set(0, 0.8, 0.4);
    b3.add(asiento3a);

    var asiento3b = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento3b.position.set(0, 0.8, -0.1);
    b3.add(asiento3b);

    // Respaldo
    var soporteI3 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteI3.position.set(-1.2, 1.5, -0.6);
    soporteI3.rotation.x = -0.2;
    b3.add(soporteI3);

    var soporteD3 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteD3.position.set(1.2, 1.5, -0.6);
    soporteD3.rotation.x = -0.2;
    b3.add(soporteD3);

    var respaldo3a = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo3a.position.set(0, 1.9, -0.7);
    respaldo3a.rotation.x = -0.2;
    b3.add(respaldo3a);

    var respaldo3b = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo3b.position.set(0, 1.4, -0.6);
    respaldo3b.rotation.x = -0.2;
    b3.add(respaldo3b);

    // Nieve
    var nieve3 = new THREE.Mesh(geoNieve, matNieve);
    nieve3.position.set(0, 2.0, -0.72); 
    nieve3.rotation.x = -0.2;
    nieve3.scale.set(1.02, 1, 1.1); 
    b3.add(nieve3);

    b3.position.set(5, 0, 2);
    b3.rotation.y = -0.8;
    bancasGroup.add(b3);


    // Banca 4 (Atrás)
    var b4 = new THREE.Group();

    // Patas
    var pataI4 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataI4.position.set(-1.2, 0.4, 0);
    b4.add(pataI4);

    var pataD4 = new THREE.Mesh(geoPata, matMaderaOscura);
    pataD4.position.set(1.2, 0.4, 0);
    b4.add(pataD4);

    // Asiento
    var asiento4a = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento4a.position.set(0, 0.8, 0.4);
    b4.add(asiento4a);

    var asiento4b = new THREE.Mesh(geoTablon, matMaderaClara);
    asiento4b.position.set(0, 0.8, -0.1);
    b4.add(asiento4b);

    // Respaldo
    var soporteI4 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteI4.position.set(-1.2, 1.5, -0.6);
    soporteI4.rotation.x = -0.2;
    b4.add(soporteI4);

    var soporteD4 = new THREE.Mesh(geoSoporte, matMaderaOscura);
    soporteD4.position.set(1.2, 1.5, -0.6);
    soporteD4.rotation.x = -0.2;
    b4.add(soporteD4);

    var respaldo4a = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo4a.position.set(0, 1.9, -0.7);
    respaldo4a.rotation.x = -0.2;
    b4.add(respaldo4a);

    var respaldo4b = new THREE.Mesh(geoTablon, matMaderaClara);
    respaldo4b.position.set(0, 1.4, -0.6);
    respaldo4b.rotation.x = -0.2;
    b4.add(respaldo4b);

    // Nieve
    var nieve4 = new THREE.Mesh(geoNieve, matNieve);
    nieve4.position.set(0, 2.0, -0.72); 
    nieve4.rotation.x = -0.2;
    nieve4.scale.set(1.02, 1, 1.1); 
    b4.add(nieve4);

    b4.position.set(0, 0, -4);
    b4.rotation.y = 3.1416;
    bancasGroup.add(b4);


    // Posición final
    bancasGroup.position.set(x, y, z);

    return bancasGroup;
}