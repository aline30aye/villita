import * as THREE from "../js/three.module.js";
export default function arco({ x, y, z }) {
    var caminoGroup = new THREE.Group();
    // MATERIALES 
    var matDorado = new THREE.MeshLambertMaterial({ color: 0xFFD700 }); 
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xff0000 }); 
    var matBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x222222 });
    var matVerdeLuz = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); 
    var matRojoLuz = new THREE.MeshBasicMaterial({ color: 0xff0000 });  
    var matAmarilloLuz = new THREE.MeshBasicMaterial({ color: 0xffff00 }); 
    // 1. FUNCIONES PARA CREAR PIEZAS (Moldes)
    // Molde para Bastón
    function CrearBaston() {
        var grupo = new THREE.Group();
        // Palo
        var geoPalo = new THREE.CylinderGeometry(0.15, 0.15, 3.5, 16);
        var palo = new THREE.Mesh(geoPalo, matBlanco);
        palo.position.set(0, 1.75, 0);
        grupo.add(palo);
        // Curva
        var geoCurva = new THREE.TorusGeometry(0.4, 0.15, 8, 20, 3.1416);
        var curva = new THREE.Mesh(geoCurva, matBlanco);
        curva.position.set(-0.4, 3.5, 0);
        grupo.add(curva);
        // Anillos Rojos (Manuales)
        var geoAnillo = new THREE.TorusGeometry(0.16, 0.02, 4, 16);
        var a1 = new THREE.Mesh(geoAnillo, matRojo); 
        a1.rotation.x = 1.57; 
        a1.position.set(0, 0.5, 0); grupo.add(a1);
        var a2 = new THREE.Mesh(geoAnillo, matRojo); 
        a2.rotation.x = 1.57; 
        a2.position.set(0, 1.5, 0); grupo.add(a2);
        var a3 = new THREE.Mesh(geoAnillo, matRojo); 
        a3.rotation.x = 1.57; 
        a3.position.set(0, 2.5, 0); grupo.add(a3);
        return grupo;
    }
    // Molde para Campana
    function CrearCampana() {
        var grupo = new THREE.Group();
        var geoCuerpo = new THREE.CylinderGeometry(0.1, 0.35, 0.6, 16);
        var cuerpo = new THREE.Mesh(geoCuerpo, matDorado);
        grupo.add(cuerpo);
        var geoBadajo = new THREE.SphereGeometry(0.12, 8, 8);
        var badajo = new THREE.Mesh(geoBadajo, matDorado);
        badajo.position.y = -0.3;
        grupo.add(badajo);
        return grupo;
    }
    // Molde para Farolita de Suelo
    function CrearFarolita() {
        var grupo = new THREE.Group();
        var geoPoste = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8);
        var poste = new THREE.Mesh(geoPoste, matNegro);
        poste.position.y = 0.6;
        grupo.add(poste);
        var geoLuz = new THREE.SphereGeometry(0.2, 16, 16);
        var luz = new THREE.Mesh(geoLuz, new THREE.MeshBasicMaterial({color: 0xffffff}));
        luz.position.y = 1.2;
        grupo.add(luz);
        return grupo;
    }
    // Molde para Moño
    function CrearMono() {
        var grupo = new THREE.Group();
        var nudo = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), matRojo);
        grupo.add(nudo);
        var geoLazo = new THREE.TorusGeometry(0.6, 0.2, 8, 20);
        var l1 = new THREE.Mesh(geoLazo, matRojo); l1.position.set(-0.7, 0, 0); grupo.add(l1);
        var l2 = new THREE.Mesh(geoLazo, matRojo); l2.position.set(0.7, 0, 0); grupo.add(l2);
        return grupo;
    }
    /////////////
    // 2. FUNCIONES PARA CREAR ARCOS COMPLETOS
    // Arco Tipo 1: Con Moño (Para Entrada y Salida)
    function CrearArcoMoño(zPos) {
        var grupo = new THREE.Group();
        // Estructura
        var geoTubo = new THREE.TorusGeometry(4, 0.15, 16, 50, 3.1416);
        var arco = new THREE.Mesh(geoTubo, matDorado);
        grupo.add(arco);
        // Luces arriba
        var geoFoco = new THREE.SphereGeometry(0.15, 8, 8);
        var f1 = new THREE.Mesh(geoFoco, matAmarilloLuz); 
        f1.position.set(0, 4, 0); grupo.add(f1);
        var f2 = new THREE.Mesh(geoFoco, matRojoLuz); 
        f2.position.set(-2.8, 2.8, 0); grupo.add(f2);
        var f3 = new THREE.Mesh(geoFoco, matRojoLuz); 
        f3.position.set(2.8, 2.8, 0); grupo.add(f3);
        // Moño
        var moño = CrearMono();
        moño.position.set(0, 4.2, 0);
        grupo.add(moño);
        // Farolitas de suelo
        var l1 = CrearFarolita(); l1.position.set(-3.5, 0, 0); grupo.add(l1);
        var l2 = CrearFarolita(); l2.position.set(3.5, 0, 0); grupo.add(l2);
        grupo.position.z = zPos;
        return grupo;
    }
    // Arco Tipo 2: Con Campanas (Para los de en medio)
    function CrearArcoCampanas(zPos) {
        var grupo = new THREE.Group();
        
        // Estructura
        var geoTubo = new THREE.TorusGeometry(4, 0.15, 16, 50, 3.1416);
        var arco = new THREE.Mesh(geoTubo, matDorado);
        grupo.add(arco);

        // Luces arriba
        var geoFoco = new THREE.SphereGeometry(0.15, 8, 8);
        var f1 = new THREE.Mesh(geoFoco, matVerdeLuz); 
        f1.position.set(0, 4, 0); grupo.add(f1);
        var f2 = new THREE.Mesh(geoFoco, matRojoLuz); 
        f2.position.set(-2.8, 2.8, 0); grupo.add(f2);
        var f3 = new THREE.Mesh(geoFoco, matRojoLuz); 
        f3.position.set(2.8, 2.8, 0); grupo.add(f3);

        // Campanas
        var c1 = CrearCampana(); c1.position.set(-0.6, 3.6, 0); 
        c1.rotation.z = 0.3; grupo.add(c1);
        var c2 = CrearCampana(); c2.position.set(0.6, 3.6, 0); 
        c2.rotation.z = -0.3; grupo.add(c2);

        // Farolitas de suelo
        var l1 = CrearFarolita(); l1.position.set(-3.5, 0, 0); grupo.add(l1);
        var l2 = CrearFarolita(); l2.position.set(3.5, 0, 0); grupo.add(l2);

        grupo.position.z = zPos;
        return grupo;
    }
    /////////////
    // 3. ARMADO DEL CAMINO (Uno por uno)
    // BASTONES CRUZADOS EN LA ENTRADA 
    // Izquierda
    var bastonI1 = CrearBaston();
    bastonI1.position.set(-5, 0, 20);
    bastonI1.rotation.z = -0.5; 
    bastonI1.rotation.y = 3.14;  
    caminoGroup.add(bastonI1);
    var bastonI2 = CrearBaston();
    bastonI2.position.set(-6.2, 0, 20);
    bastonI2.rotation.z = 0.5;
    bastonI2.rotation.y = 3.14;  
    caminoGroup.add(bastonI2);
    // Derecha
    var bastonD1 = CrearBaston();
    bastonD1.position.set(5, 0, 20);
    bastonD1.rotation.z = 0.5;
    bastonD1.rotation.y = 3.14;
    caminoGroup.add(bastonD1);
    var bastonD2 = CrearBaston();
    bastonD2.position.set(6.2, 0, 20);
    bastonD2.rotation.z = -0.5;
    bastonD2.rotation.y = 3.14;
    caminoGroup.add(bastonD2);
    // ARCOS DEL CAMINO 
    // Arco 1: Entrada (Moño)
    var arco1 = CrearArcoMoño(20);
    caminoGroup.add(arco1);
    // Arco 2: Medio (Campanas)
    var arco2 = CrearArcoCampanas(12);
    caminoGroup.add(arco2);
    // Arco 3: Medio (Campanas)
    var arco3 = CrearArcoCampanas(4);
    caminoGroup.add(arco3);
    // Arco 4: Medio (Campanas)
    var arco4 = CrearArcoCampanas(-4);
    caminoGroup.add(arco4);
    // Arco 5: Medio (Campanas)
    var arco5 = CrearArcoCampanas(-12);
    caminoGroup.add(arco5);
    // Arco 6: Salida (Moño)
    var arco6 = CrearArcoMoño(-20);
    caminoGroup.add(arco6);
    // --- NIEVE (Copos flotando) ---
    var geoCopo = new THREE.SphereGeometry(0.15, 8, 8);
    var matCopo = new THREE.MeshBasicMaterial({color: 0xffffff});
    
    var n1 = new THREE.Mesh(geoCopo, matCopo); 
    n1.position.set(0, 5, 15); caminoGroup.add(n1);
    var n2 = new THREE.Mesh(geoCopo, matCopo); 
    n2.position.set(2, 4, 10); caminoGroup.add(n2);
    var n3 = new THREE.Mesh(geoCopo, matCopo); 
    n3.position.set(-2, 6, 5); caminoGroup.add(n3);
    var n4 = new THREE.Mesh(geoCopo, matCopo); 
    n4.position.set(3, 3, 0); caminoGroup.add(n4);
    var n5 = new THREE.Mesh(geoCopo, matCopo); 
    n5.position.set(-3, 5, -5); caminoGroup.add(n5);
    var n6 = new THREE.Mesh(geoCopo, matCopo); 
    n6.position.set(1, 6, -10); caminoGroup.add(n6);
    /////////////
    // POSICIÓN FINAL
    caminoGroup.position.set(x, y, z);

    return caminoGroup;
}