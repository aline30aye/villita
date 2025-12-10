import * as THREE from "../js/three.module.js";

export default function MiniCoro({ x, y, z }) {
    
    var coroGroup = new THREE.Group();

    // Materiales
    var matPiel = new THREE.MeshLambertMaterial({ color: 0xffccaa }); 
    var matTunica = new THREE.MeshLambertMaterial({ color: 0x8B0000 }); 
    var matTunicaDirector = new THREE.MeshLambertMaterial({ color: 0x000080 }); 
    var matLibro = new THREE.MeshLambertMaterial({ color: 0xffffff }); 
    var matPelo = new THREE.MeshLambertMaterial({ color: 0x332211 }); 
    var matMadera = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x111111 });
    var matLuz = new THREE.MeshBasicMaterial({ color: 0xffffaa });


    // Estructura

    // Tarima
    var geoTarima = new THREE.CylinderGeometry(2.5, 2.5, 0.2, 16);
    var tarima = new THREE.Mesh(geoTarima, matMadera);
    tarima.position.set(0, 0.1, 0);
    coroGroup.add(tarima);

    // Farol
    var geoPoste = new THREE.CylinderGeometry(0.05, 0.05, 3, 8);
    var poste = new THREE.Mesh(geoPoste, matNegro);
    poste.position.set(0, 1.5, -1.5);
    coroGroup.add(poste);

    var geoLuz = new THREE.SphereGeometry(0.3, 8, 8);
    var luz = new THREE.Mesh(geoLuz, matLuz);
    luz.position.set(0, 3, -1.5);
    coroGroup.add(luz);


    // Cantante 1 (Izquierda)

    var c1 = new THREE.Group();

    // Cuerpo
    var geoCuerpo = new THREE.CylinderGeometry(0.15, 0.35, 1.1, 8);
    var cuerpo1 = new THREE.Mesh(geoCuerpo, matTunica);
    cuerpo1.position.set(0, 0.55, 0);
    c1.add(cuerpo1);

    // Cabeza
    var geoCabeza = new THREE.SphereGeometry(0.22, 16, 16);
    var cabeza1 = new THREE.Mesh(geoCabeza, matPiel);
    cabeza1.position.set(0, 1.25, 0);
    c1.add(cabeza1);

    // Pelo
    var geoPelo = new THREE.SphereGeometry(0.23, 16, 16, 0, 6.3, 0, 1.5);
    var pelo1 = new THREE.Mesh(geoPelo, matPelo);
    pelo1.position.set(0, 1.3, 0);
    pelo1.rotation.x = -0.2; 
    c1.add(pelo1);

    // Brazos
    var geoBrazo = new THREE.CylinderGeometry(0.06, 0.06, 0.5, 8);
    
    var brazoI1 = new THREE.Mesh(geoBrazo, matTunica);
    brazoI1.position.set(-0.25, 0.8, 0.2);
    brazoI1.rotation.x = -1; 
    brazoI1.rotation.z = 0.5; 
    c1.add(brazoI1);

    var brazoD1 = new THREE.Mesh(geoBrazo, matTunica);
    brazoD1.position.set(0.25, 0.8, 0.2);
    brazoD1.rotation.x = -1;
    brazoD1.rotation.z = -0.5;
    c1.add(brazoD1);

    // Libro
    var geoHoja = new THREE.BoxGeometry(0.25, 0.3, 0.02);
    
    var hojaI1 = new THREE.Mesh(geoHoja, matLibro);
    hojaI1.position.set(-0.12, 0.85, 0.45);
    hojaI1.rotation.x = -0.5; 
    hojaI1.rotation.y = 0.3;  
    c1.add(hojaI1);

    var hojaD1 = new THREE.Mesh(geoHoja, matLibro);
    hojaD1.position.set(0.12, 0.85, 0.45);
    hojaD1.rotation.x = -0.5;
    hojaD1.rotation.y = -0.3; 
    c1.add(hojaD1);

    c1.position.set(-1, 0.2, -0.5);
    c1.rotation.y = 0.5; 
    coroGroup.add(c1);


    // Cantante 2 (Centro)

    var c2 = new THREE.Group();

    var cuerpo2 = new THREE.Mesh(geoCuerpo, matTunica);
    cuerpo2.position.set(0, 0.55, 0);
    c2.add(cuerpo2);

    var cabeza2 = new THREE.Mesh(geoCabeza, matPiel);
    cabeza2.position.set(0, 1.25, 0);
    c2.add(cabeza2);

    var pelo2 = new THREE.Mesh(geoPelo, matPelo);
    pelo2.position.set(0, 1.3, 0);
    pelo2.rotation.x = -0.2; 
    c2.add(pelo2);
    
    var brazoI2 = new THREE.Mesh(geoBrazo, matTunica);
    brazoI2.position.set(-0.25, 0.8, 0.2);
    brazoI2.rotation.x = -1; 
    brazoI2.rotation.z = 0.5; 
    c2.add(brazoI2);

    var brazoD2 = new THREE.Mesh(geoBrazo, matTunica);
    brazoD2.position.set(0.25, 0.8, 0.2);
    brazoD2.rotation.x = -1;
    brazoD2.rotation.z = -0.5;
    c2.add(brazoD2);

    var hojaI2 = new THREE.Mesh(geoHoja, matLibro);
    hojaI2.position.set(-0.12, 0.85, 0.45);
    hojaI2.rotation.x = -0.5; 
    hojaI2.rotation.y = 0.3;  
    c2.add(hojaI2);

    var hojaD2 = new THREE.Mesh(geoHoja, matLibro);
    hojaD2.position.set(0.12, 0.85, 0.45);
    hojaD2.rotation.x = -0.5;
    hojaD2.rotation.y = -0.3; 
    c2.add(hojaD2);

    c2.position.set(0, 0.2, -0.8);
    coroGroup.add(c2);


    // Cantante 3 (Derecha)

    var c3 = new THREE.Group();

    var cuerpo3 = new THREE.Mesh(geoCuerpo, matTunica);
    cuerpo3.position.set(0, 0.55, 0);
    c3.add(cuerpo3);

    var cabeza3 = new THREE.Mesh(geoCabeza, matPiel);
    cabeza3.position.set(0, 1.25, 0);
    c3.add(cabeza3);

    var pelo3 = new THREE.Mesh(geoPelo, matPelo);
    pelo3.position.set(0, 1.3, 0);
    pelo3.rotation.x = -0.2; 
    c3.add(pelo3);
    
    var brazoI3 = new THREE.Mesh(geoBrazo, matTunica);
    brazoI3.position.set(-0.25, 0.8, 0.2);
    brazoI3.rotation.x = -1; 
    brazoI3.rotation.z = 0.5; 
    c3.add(brazoI3);

    var brazoD3 = new THREE.Mesh(geoBrazo, matTunica);
    brazoD3.position.set(0.25, 0.8, 0.2);
    brazoD3.rotation.x = -1;
    brazoD3.rotation.z = -0.5;
    c3.add(brazoD3);

    var hojaI3 = new THREE.Mesh(geoHoja, matLibro);
    hojaI3.position.set(-0.12, 0.85, 0.45);
    hojaI3.rotation.x = -0.5; 
    hojaI3.rotation.y = 0.3;  
    c3.add(hojaI3);

    var hojaD3 = new THREE.Mesh(geoHoja, matLibro);
    hojaD3.position.set(0.12, 0.85, 0.45);
    hojaD3.rotation.x = -0.5;
    hojaD3.rotation.y = -0.3; 
    c3.add(hojaD3);

    c3.position.set(1, 0.2, -0.5);
    c3.rotation.y = -0.5;
    coroGroup.add(c3);


    // Director

    var director = new THREE.Group();

    // Cuerpo Azul
    var cuerpoDir = new THREE.Mesh(geoCuerpo, matTunicaDirector);
    cuerpoDir.position.set(0, 0.55, 0);
    director.add(cuerpoDir);

    var cabezaDir = new THREE.Mesh(geoCabeza, matPiel);
    cabezaDir.position.set(0, 1.25, 0);
    director.add(cabezaDir);

    var peloDir = new THREE.Mesh(geoPelo, matPelo);
    peloDir.position.set(0, 1.3, 0);
    peloDir.rotation.x = -0.2; 
    director.add(peloDir);

    // Brazos Azules
    var brazoIDir = new THREE.Mesh(geoBrazo, matTunicaDirector);
    brazoIDir.position.set(-0.25, 0.8, 0.2);
    brazoIDir.rotation.x = -1; 
    brazoIDir.rotation.z = 0.5; 
    director.add(brazoIDir);

    var brazoDDir = new THREE.Mesh(geoBrazo, matTunicaDirector);
    brazoDDir.position.set(0.25, 0.8, 0.2);
    brazoDDir.rotation.x = -1;
    brazoDDir.rotation.z = -0.5;
    director.add(brazoDDir);

    // Batuta
    var geoBatuta = new THREE.CylinderGeometry(0.01, 0.01, 0.4);
    var batuta = new THREE.Mesh(geoBatuta, matLibro);
    batuta.position.set(0.25, 1.0, 0.4);
    batuta.rotation.x = -0.5;
    director.add(batuta);

    director.position.set(0, 0.2, 1.5);
    director.rotation.y = 3.1416; 
    coroGroup.add(director);


    // Posición Final
    coroGroup.position.set(x, y, z);

    return coroGroup;
}