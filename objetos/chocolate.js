import * as THREE from "../js/three.module.js";

export default function ExtrasNavidenos({ x, y, z }) {
    
    var extrasGroup = new THREE.Group();

    // Materiales
    var matMadera = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    var matTecho = new THREE.MeshLambertMaterial({ color: 0xaa0000 }); 
    var matBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff }); 
    var matCafe = new THREE.MeshLambertMaterial({ color: 0x3e2723 }); 
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xff0000 }); 
    var matDorado = new THREE.MeshLambertMaterial({ color: 0xFFD700 }); 
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x111111 }); 


    // Puesto de Chocolate (Kiosco)
    var kiosco = new THREE.Group();

    // Mostrador (Base)
    var geoBase = new THREE.BoxGeometry(3, 1.2, 2);
    var mostrador = new THREE.Mesh(geoBase, matMadera);
    mostrador.position.set(0, 0.6, 0);
    kiosco.add(mostrador);

    // Tabla superior
    var geoTabla = new THREE.BoxGeometry(3.2, 0.2, 2.2);
    var tabla = new THREE.Mesh(geoTabla, matMadera);
    tabla.position.set(0, 1.3, 0);
    kiosco.add(tabla);

    // Postes del techo
    var geoPoste = new THREE.BoxGeometry(0.2, 2, 0.2);
    
    var p1 = new THREE.Mesh(geoPoste, matMadera); 
    p1.position.set(-1.4, 2.2, 0.9); 
    kiosco.add(p1);
    
    var p2 = new THREE.Mesh(geoPoste, matMadera); 
    p2.position.set(1.4, 2.2, 0.9); 
    kiosco.add(p2);
    
    var p3 = new THREE.Mesh(geoPoste, matMadera); 
    p3.position.set(-1.4, 2.2, -0.9); 
    kiosco.add(p3);
    
    var p4 = new THREE.Mesh(geoPoste, matMadera); 
    p4.position.set(1.4, 2.2, -0.9); 
    kiosco.add(p4);

    // Techo
    var geoTecho = new THREE.ConeGeometry(2.5, 1.5, 4); 
    var techo = new THREE.Mesh(geoTecho, matTecho);
    techo.position.set(0, 3.8, 0);
    techo.rotation.y = 0.78; // Aprox 45 grados
    kiosco.add(techo);


    // Taza Gigante (Letrero)
    var tazaGroup = new THREE.Group();
    
    // Cuerpo Taza
    var geoTaza = new THREE.CylinderGeometry(0.6, 0.5, 0.8, 16);
    var taza = new THREE.Mesh(geoTaza, matBlanco);
    taza.position.set(0, 0.4, 0);
    tazaGroup.add(taza);

    // Chocolate
    var geoChoco = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 16);
    var choco = new THREE.Mesh(geoChoco, matCafe);
    choco.position.set(0, 0.7, 0);
    tazaGroup.add(choco);

    // Asa
    var geoAsa = new THREE.BoxGeometry(0.3, 0.4, 0.1);
    var asa = new THREE.Mesh(geoAsa, matBlanco);
    asa.position.set(0.6, 0.4, 0);
    tazaGroup.add(asa);

    // Humo
    var geoHumo = new THREE.SphereGeometry(0.2, 8, 8);
    
    var h1 = new THREE.Mesh(geoHumo, matBlanco); 
    h1.position.set(-0.2, 1.2, 0); 
    tazaGroup.add(h1);
    
    var h2 = new THREE.Mesh(geoHumo, matBlanco); 
    h2.position.set(0.2, 1.5, 0); 
    tazaGroup.add(h2);
    
    var h3 = new THREE.Mesh(geoHumo, matBlanco); 
    h3.position.set(0, 1.8, 0); 
    tazaGroup.add(h3);

    // Poner taza en el techo
    tazaGroup.position.set(0, 4.5, 0);
    kiosco.add(tazaGroup);

    // Posición del Kiosco
    kiosco.position.set(-4, 0, 0);
    extrasGroup.add(kiosco);


    // Buzon de Cartas
    var buzon = new THREE.Group();

    // Poste
    var geoPosteBuzon = new THREE.CylinderGeometry(0.2, 0.2, 2.5, 8);
    var poste = new THREE.Mesh(geoPosteBuzon, matRojo);
    poste.position.set(0, 1.2, 0);
    buzon.add(poste);

    // Base del poste
    var geoBaseBuzon = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 8);
    var baseBuzon = new THREE.Mesh(geoBaseBuzon, matDorado);
    baseBuzon.position.set(0, 0.1, 0);
    buzon.add(baseBuzon);

    // Caja del buzón
    var geoCaja = new THREE.BoxGeometry(1.2, 1, 0.8);
    var caja = new THREE.Mesh(geoCaja, matDorado);
    caja.position.set(0, 2.5, 0);
    buzon.add(caja);

    // Ranura para cartas
    var geoRanura = new THREE.BoxGeometry(0.8, 0.1, 0.1);
    var ranura = new THREE.Mesh(geoRanura, matNegro);
    ranura.position.set(0, 2.8, 0.4); 
    buzon.add(ranura);

    // Bandera
    var geoPaloBandera = new THREE.BoxGeometry(0.1, 0.6, 0.1);
    var paloBandera = new THREE.Mesh(geoPaloBandera, matRojo);
    paloBandera.position.set(0.7, 2.7, 0);
    buzon.add(paloBandera);

    var geoBandera = new THREE.BoxGeometry(0.3, 0.2, 0.1);
    var bandera = new THREE.Mesh(geoBandera, matRojo);
    bandera.position.set(0.8, 2.9, 0);
    buzon.add(bandera);

    // Posición del Buzón
    buzon.position.set(4, 0, 0);
    extrasGroup.add(buzon);


    // Posición Final del Grupo
    extrasGroup.position.set(x, y, z);

    return extrasGroup;
}