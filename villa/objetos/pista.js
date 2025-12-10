import * as THREE from "../js/three.module.js";

export default function PistaHielo({ x, y, z }) {

    var pistaGroup = new THREE.Group();

    // Materiales
    var matHielo = new THREE.MeshStandardMaterial({ color: 0xaee4ff });
    var matBlanco = new THREE.MeshStandardMaterial({ color: 0xffffff });


    // 1. Piso de hielo (Círculo)
    var iceGeometry = new THREE.CircleGeometry(18, 32);
    var ice = new THREE.Mesh(iceGeometry, matHielo);
    
    // Rotar -90 grados en X
    ice.rotation.x = -1.57; 
    pistaGroup.add(ice);


    // 2. Barandales (Postes y Bolitas)
    // Creamos una función simple para no repetir todo el código del poste
    function CrearPoste(xPos, zPos) {
        var grupo = new THREE.Group();

        // Poste
        var geoPoste = new THREE.CylinderGeometry(0.2, 0.2, 2.5, 8);
        var poste = new THREE.Mesh(geoPoste, matBlanco);
        poste.position.y = 1.25;
        grupo.add(poste);

        // Bolita
        var geoBola = new THREE.SphereGeometry(0.35, 12, 12);
        var bola = new THREE.Mesh(geoBola, matBlanco);
        bola.position.y = 2.3;
        grupo.add(bola);

        grupo.position.set(xPos, 0, zPos);
        return grupo;
    }

    // Colocamos los postes manualmente alrededor del círculo (Radio aprox 19.5)
    
    // Norte, Sur, Este, Oeste
    var p1 = CrearPoste(0, -19.5); pistaGroup.add(p1);
    var p2 = CrearPoste(0, 19.5); pistaGroup.add(p2);
    var p3 = CrearPoste(-19.5, 0); pistaGroup.add(p3);
    var p4 = CrearPoste(19.5, 0); pistaGroup.add(p4);

    // Diagonales (Aprox 13.8 en X y Z)
    var p5 = CrearPoste(13.8, 13.8); pistaGroup.add(p5);
    var p6 = CrearPoste(-13.8, 13.8); pistaGroup.add(p6);
    var p7 = CrearPoste(13.8, -13.8); pistaGroup.add(p7);
    var p8 = CrearPoste(-13.8, -13.8); pistaGroup.add(p8);

    // Intermedios (Para rellenar un poco más)
    var p9 = CrearPoste(7.5, 18); pistaGroup.add(p9);
    var p10 = CrearPoste(-7.5, 18); pistaGroup.add(p10);
    var p11 = CrearPoste(7.5, -18); pistaGroup.add(p11);
    var p12 = CrearPoste(-7.5, -18); pistaGroup.add(p12);
    var p13 = CrearPoste(18, 7.5); pistaGroup.add(p13);
    var p14 = CrearPoste(-18, 7.5); pistaGroup.add(p14);
    var p15 = CrearPoste(18, -7.5); pistaGroup.add(p15);
    var p16 = CrearPoste(-18, -7.5); pistaGroup.add(p16);


    // 3. Nieve Sencilla (Copos manuales)
    var geoCopo = new THREE.SphereGeometry(0.1, 6, 6);
    
    // Copo 1
    var c1 = new THREE.Mesh(geoCopo, matBlanco);
    c1.position.set(5, 8, 5);
    pistaGroup.add(c1);

    // Copo 2
    var c2 = new THREE.Mesh(geoCopo, matBlanco);
    c2.position.set(-5, 6, -5);
    pistaGroup.add(c2);

    // Copo 3
    var c3 = new THREE.Mesh(geoCopo, matBlanco);
    c3.position.set(10, 10, -2);
    pistaGroup.add(c3);

    // Copo 4
    var c4 = new THREE.Mesh(geoCopo, matBlanco);
    c4.position.set(-8, 5, 8);
    pistaGroup.add(c4);

    // Copo 5
    var c5 = new THREE.Mesh(geoCopo, matBlanco);
    c5.position.set(0, 12, 0);
    pistaGroup.add(c5);

    // Copo 6
    var c6 = new THREE.Mesh(geoCopo, matBlanco);
    c6.position.set(3, 7, -10);
    pistaGroup.add(c6);


    // Posición final
    pistaGroup.position.set(x, y, z);

    return pistaGroup;
}