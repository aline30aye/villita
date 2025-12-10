import * as THREE from "../js/three.module.js";

export default function CasitasDecoradas({ x, y, z }) {
    
    var puebloGroup = new THREE.Group();
    // 1. FUNCIONES PARA CREAR CASAS 
    // --- CASA AZUL ---
    function CrearCasaAzul(xPos, yPos, zPos) {
        var casa = new THREE.Group();
        // Materiales (Definidos aquí adentro, fijos)
        var matPared = new THREE.MeshLambertMaterial({ color: 0x87CEEB }); // Azul Cielo
        var matTecho = new THREE.MeshLambertMaterial({ color: 0xffffff }); // Nieve
        var matMadera = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
        var matVentana = new THREE.MeshBasicMaterial({ color: 0xffffaa }); 
        var matPiedra = new THREE.MeshLambertMaterial({ color: 0x555555 });
        // Base
        var geoBase = new THREE.BoxGeometry(7, 0.5, 7);
        var base = new THREE.Mesh(geoBase, matPiedra);
        base.position.set(0, 0.25, 0);
        casa.add(base);
        // Paredes
        var geoPared = new THREE.BoxGeometry(6, 4, 6);
        var pared = new THREE.Mesh(geoPared, matPared);
        pared.position.set(0, 2.5, 0);
        casa.add(pared);
        // Techo
        var geoTecho = new THREE.ConeGeometry(5.5, 3.5, 4);
        var techo = new THREE.Mesh(geoTecho, matTecho);
        techo.position.set(0, 6.25, 0);
        techo.rotation.y = 0.785; 
        casa.add(techo);
        // Puerta
        var geoPuerta = new THREE.BoxGeometry(1.6, 2.6, 0.2);
        var puerta = new THREE.Mesh(geoPuerta, matMadera);
        puerta.position.set(0, 1.8, 3.15);
        casa.add(puerta);
        // Ventanas
        var geoVentana = new THREE.BoxGeometry(1.2, 1.2, 0.1);
        var v1 = new THREE.Mesh(geoVentana, matVentana); 
        v1.position.set(-2, 3, 3.05); casa.add(v1);
        var v2 = new THREE.Mesh(geoVentana, matVentana); 
        v2.position.set(2, 3, 3.05); casa.add(v2);
        casa.position.set(xPos, yPos, zPos);
        return casa;
    }
    // --- CASA ROJA ---
    function CrearCasaRoja(xPos, yPos, zPos) {
        var casa = new THREE.Group();
        var matPared = new THREE.MeshLambertMaterial({ color: 0xB22222 }); // Rojo Ladrillo
        var matTecho = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var matMadera = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
        var matVentana = new THREE.MeshBasicMaterial({ color: 0xffffaa }); 
        var matPiedra = new THREE.MeshLambertMaterial({ color: 0x555555 });
        // Base
        var base = new THREE.Mesh(new THREE.BoxGeometry(7, 0.5, 7), matPiedra);
        base.position.set(0, 0.25, 0);
        casa.add(base);
        // Paredes
        var pared = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 6), matPared);
        pared.position.set(0, 2.5, 0);
        casa.add(pared);
        // Techo
        var techo = new THREE.Mesh(new THREE.ConeGeometry(5.5, 3.5, 4), matTecho);
        techo.position.set(0, 6.25, 0);
        techo.rotation.y = 0.785; 
        casa.add(techo);
        // Puerta
        var puerta = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.6, 0.2), matMadera);
        puerta.position.set(0, 1.8, 3.15);
        casa.add(puerta);
        // Ventanas
        var geoVentana = new THREE.BoxGeometry(1.2, 1.2, 0.1);
        var v1 = new THREE.Mesh(geoVentana, matVentana); 
        v1.position.set(-2, 3, 3.05); casa.add(v1);
        var v2 = new THREE.Mesh(geoVentana, matVentana); 
        v2.position.set(2, 3, 3.05); casa.add(v2);

        casa.position.set(xPos, yPos, zPos);
        return casa;
    }

    // --- CASA VERDE ---
    function CrearCasaVerde(xPos, yPos, zPos) {
        var casa = new THREE.Group();

        var matPared = new THREE.MeshLambertMaterial({ color: 0x228B22 }); // Verde Bosque
        var matTecho = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var matMadera = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
        var matVentana = new THREE.MeshBasicMaterial({ color: 0xffffaa }); 
        var matPiedra = new THREE.MeshLambertMaterial({ color: 0x555555 });

        var base = new THREE.Mesh(new THREE.BoxGeometry(7, 0.5, 7), matPiedra); 
        base.position.set(0, 0.25, 0); casa.add(base);
        var pared = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 6), matPared); 
        pared.position.set(0, 2.5, 0); casa.add(pared);
        var techo = new THREE.Mesh(new THREE.ConeGeometry(5.5, 3.5, 4), matTecho); 
        techo.position.set(0, 6.25, 0); techo.rotation.y = 0.785; casa.add(techo);
        var puerta = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.6, 0.2), matMadera); 
        puerta.position.set(0, 1.8, 3.15); casa.add(puerta);
        var geoVentana = new THREE.BoxGeometry(1.2, 1.2, 0.1);
        var v1 = new THREE.Mesh(geoVentana, matVentana); v1.position.set(-2, 3, 3.05); 
        casa.add(v1);
        var v2 = new THREE.Mesh(geoVentana, matVentana); v2.position.set(2, 3, 3.05); 
        casa.add(v2);
        casa.position.set(xPos, yPos, zPos);
        return casa;
    }
    // --- CASA CREMA ---
    function CrearCasaCrema(xPos, yPos, zPos) {
        var casa = new THREE.Group();

        var matPared = new THREE.MeshLambertMaterial({ color: 0xF5DEB3 }); // Color Trigo/Crema
        var matTecho = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var matMadera = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
        var matVentana = new THREE.MeshBasicMaterial({ color: 0xffffaa }); 
        var matPiedra = new THREE.MeshLambertMaterial({ color: 0x555555 });

        var base = new THREE.Mesh(new THREE.BoxGeometry(7, 0.5, 7), matPiedra);
         base.position.set(0, 0.25, 0); casa.add(base);
        var pared = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 6), matPared); 
        pared.position.set(0, 2.5, 0); casa.add(pared);
        var techo = new THREE.Mesh(new THREE.ConeGeometry(5.5, 3.5, 4), matTecho); 
        techo.position.set(0, 6.25, 0); techo.rotation.y = 0.785; casa.add(techo);
        var puerta = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.6, 0.2), matMadera); 
        puerta.position.set(0, 1.8, 3.15); casa.add(puerta);
        var geoVentana = new THREE.BoxGeometry(1.2, 1.2, 0.1);
        var v1 = new THREE.Mesh(geoVentana, matVentana); v1.position.set(-2, 3, 3.05); 
        casa.add(v1);
        var v2 = new THREE.Mesh(geoVentana, matVentana); v2.position.set(2, 3, 3.05); 
        casa.add(v2);
        casa.position.set(xPos, yPos, zPos);
        return casa;
    }

    // 2. CREACION DE LAS CASAS
    // Fila de Atras
    // Casa 1
    var casa1 = CrearCasaAzul(-22, 0, -10);
    puebloGroup.add(casa1);

    // Casa 2
    var casa2 = CrearCasaRoja(-7, 0, -10);
    puebloGroup.add(casa2);
    // Casa 3
    var casa3 = CrearCasaVerde(8, 0, -10);
    puebloGroup.add(casa3);
    // Casa 4
    var casa4 = CrearCasaCrema(23, 0, -10);
    puebloGroup.add(casa4);
    // Fila de Adelante
    // Casa 5
    var casa5 = CrearCasaAzul(-22, 0, 10);
    casa5.rotation.y = 3.1416; 
    puebloGroup.add(casa5);
    // Casa 6
    var casa6 = CrearCasaRoja(-7, 0, 10);
    casa6.rotation.y = 3.1416;
    puebloGroup.add(casa6);
    // Casa 7
    var casa7 = CrearCasaVerde(8, 0, 10);
    casa7.rotation.y = 3.1416;
    puebloGroup.add(casa7);
    // Casa 8
    var casa8 = CrearCasaCrema(23, 0, 10);
    casa8.rotation.y = 3.1416;
    puebloGroup.add(casa8);
    // 3. FAROLAS
    var matFarola = new THREE.MeshLambertMaterial({ color: 0xffffaa });
    var matPoste = new THREE.MeshLambertMaterial({ color: 0x555555 });
    var geoPoste = new THREE.BoxGeometry(0.2, 5, 0.2);
    var geoLuz = new THREE.SphereGeometry(0.5, 8, 8);
    function PonerFarola(xPos, yPos, zPos) {
        var farola = new THREE.Group();
        var poste = new THREE.Mesh(geoPoste, matPoste);
        poste.position.y = 2.5;
        farola.add(poste);
        var luz = new THREE.Mesh(geoLuz, matFarola);
        luz.position.y = 5.5;
        farola.add(luz);
        farola.position.set(xPos, yPos, zPos);
        return farola;
    }
    // Farolas Izquierda
    var f1 = PonerFarola(-30, 0, -7); puebloGroup.add(f1);
    var f2 = PonerFarola(-15, 0, -7); puebloGroup.add(f2);
    var f3 = PonerFarola(0, 0, -7);   puebloGroup.add(f3);
    var f4 = PonerFarola(15, 0, -7);  puebloGroup.add(f4);
    var f5 = PonerFarola(30, 0, -7);  puebloGroup.add(f5);

    // Farolas Derecha
    var f6 = PonerFarola(-30, 0, 7); puebloGroup.add(f6);
    var f7 = PonerFarola(-15, 0, 7); puebloGroup.add(f7);
    var f8 = PonerFarola(0, 0, 7);   puebloGroup.add(f8);
    var f9 = PonerFarola(15, 0, 7);  puebloGroup.add(f9);
    var f10 = PonerFarola(30, 0, 7); puebloGroup.add(f10);
    // Posicion final
    puebloGroup.position.set(x, y, z);

    return puebloGroup;
}