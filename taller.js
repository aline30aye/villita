import * as THREE from "../js/three.module.js";

export default function TallerJuguetes({ x, y, z }) {
    
    var tallerGroup = new THREE.Group();

    // Materiales
    var matMadera = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    var matMaderaOscura = new THREE.MeshLambertMaterial({ color: 0x5c2e0e }); 
    var matNieve = new THREE.MeshLambertMaterial({ color: 0xffffff }); 
    var matVentana = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); 
    var matPiedra = new THREE.MeshLambertMaterial({ color: 0x555555 }); 
    var matPiel = new THREE.MeshLambertMaterial({ color: 0xffccaa });
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xaa0000 });
    var matVerde = new THREE.MeshLambertMaterial({ color: 0x008800 });
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x333333 });
    var matAzul = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    var matAmarillo = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    var matRosa = new THREE.MeshLambertMaterial({ color: 0xff00ff });


    // La Cabaña

    // Paredes
    var geoParedes = new THREE.BoxGeometry(8, 5, 6);
    var paredes = new THREE.Mesh(geoParedes, matMadera);
    paredes.position.set(0, 2.5, 0);
    tallerGroup.add(paredes);

    // Techo
    var geoTechoPrisma = new THREE.CylinderGeometry(4.5, 4.5, 8.5, 3); 
    var techo = new THREE.Mesh(geoTechoPrisma, matNieve);
    techo.rotation.z = 1.57; 
    techo.rotation.y = -1.57; 
    techo.scale.set(1, 0.6, 1);
    techo.position.set(0, 6.5, 0);
    tallerGroup.add(techo);

    // Marco Puerta
    var geoMarco = new THREE.BoxGeometry(2.2, 3.2, 0.2);
    var marco = new THREE.Mesh(geoMarco, matMaderaOscura);
    marco.position.set(0, 1.6, 3.1);
    tallerGroup.add(marco);

    // Puerta
    var geoPuerta = new THREE.BoxGeometry(1.8, 3, 0.2);
    var puerta = new THREE.Mesh(geoPuerta, matMadera);
    puerta.position.set(0, 1.5, 3.15);
    tallerGroup.add(puerta);

    // Pomo
    var geoPomo = new THREE.SphereGeometry(0.1, 8, 8);
    var pomo = new THREE.Mesh(geoPomo, matAmarillo);
    pomo.position.set(0.6, 1.5, 3.3);
    tallerGroup.add(pomo);

    // Ventana Izquierda
    var geoVentana = new THREE.BoxGeometry(1.5, 1.5, 0.1);
    var vent1 = new THREE.Mesh(geoVentana, matVentana);
    vent1.position.set(-2.5, 3, 3.05);
    tallerGroup.add(vent1);

    // Marcos Ventana 1
    var m1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.5, 0.15), matMaderaOscura); 
    m1.position.set(-2.5, 3, 3.05); 
    tallerGroup.add(m1);
    
    var m2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 0.15), matMaderaOscura); 
    m2.position.set(-2.5, 3, 3.05); 
    tallerGroup.add(m2);

    // Ventana Derecha
    var vent2 = new THREE.Mesh(geoVentana, matVentana);
    vent2.position.set(2.5, 3, 3.05);
    tallerGroup.add(vent2);

    // Marcos Ventana 2
    var m3 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.5, 0.15), matMaderaOscura); 
    m3.position.set(2.5, 3, 3.05); 
    tallerGroup.add(m3);
    
    var m4 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 0.15), matMaderaOscura); 
    m4.position.set(2.5, 3, 3.05); 
    tallerGroup.add(m4);

    // Chimenea
    var geoChim = new THREE.BoxGeometry(1, 3, 1);
    var chimenea = new THREE.Mesh(geoChim, matPiedra);
    chimenea.position.set(2.5, 6, -1.5);
    tallerGroup.add(chimenea);

    // Humo
    var geoHumo = new THREE.SphereGeometry(0.3, 8, 8);
    var matHumo = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    
    var h1 = new THREE.Mesh(geoHumo, matHumo); 
    h1.position.set(2.5, 7.8, -1.5); 
    tallerGroup.add(h1);
    
    var h2 = new THREE.Mesh(geoHumo, matHumo); 
    h2.position.set(2.7, 8.2, -1.3); 
    tallerGroup.add(h2);

    // Cartel Taller
    var geoCartel = new THREE.BoxGeometry(2.5, 0.6, 0.1);
    var cartel = new THREE.Mesh(geoCartel, matMaderaOscura);
    cartel.position.set(0, 3.8, 3.2);
    tallerGroup.add(cartel);


    // Duende 1 Verde

    var duende1 = new THREE.Group();

    // Pies
    var geoPie = new THREE.BoxGeometry(0.25, 0.2, 0.4);
    
    var pieI1 = new THREE.Mesh(geoPie, matNegro); 
    pieI1.position.set(-0.2, 0.1, 0); 
    duende1.add(pieI1);
    
    var pieD1 = new THREE.Mesh(geoPie, matNegro); 
    pieD1.position.set(0.2, 0.1, 0); 
    duende1.add(pieD1);

    // Piernas
    var geoPierna = new THREE.CylinderGeometry(0.1, 0.1, 0.6);
    
    var piernaI1 = new THREE.Mesh(geoPierna, matVerde); 
    piernaI1.position.set(-0.2, 0.5, 0); 
    duende1.add(piernaI1);
    
    var piernaD1 = new THREE.Mesh(geoPierna, matVerde); 
    piernaD1.position.set(0.2, 0.5, 0); 
    duende1.add(piernaD1);

    // Cuerpo
    var geoCuerpo = new THREE.CylinderGeometry(0.3, 0.35, 0.8);
    var cuerpo1 = new THREE.Mesh(geoCuerpo, matVerde);
    cuerpo1.position.set(0, 1.1, 0);
    duende1.add(cuerpo1);

    // Cinturón
    var geoCinto = new THREE.CylinderGeometry(0.36, 0.36, 0.1);
    var cinto1 = new THREE.Mesh(geoCinto, matNegro);
    cinto1.position.set(0, 1.0, 0);
    duende1.add(cinto1);

    // Cabeza
    var geoCabeza = new THREE.SphereGeometry(0.25, 16, 16);
    var cabeza1 = new THREE.Mesh(geoCabeza, matPiel);
    cabeza1.position.set(0, 1.65, 0);
    duende1.add(cabeza1);

    // Gorro Rojo
    var geoGorro = new THREE.ConeGeometry(0.26, 0.6, 16);
    var gorro1 = new THREE.Mesh(geoGorro, matRojo);
    gorro1.position.set(0, 2.0, 0);
    gorro1.rotation.x = -0.2; 
    duende1.add(gorro1);

    // Brazos
    var geoBrazo = new THREE.CylinderGeometry(0.08, 0.08, 0.6);
    
    var brazoI1 = new THREE.Mesh(geoBrazo, matVerde); 
    brazoI1.position.set(-0.35, 1.3, 0); 
    brazoI1.rotation.z = 0.5; 
    duende1.add(brazoI1);
    
    var brazoD1 = new THREE.Mesh(geoBrazo, matVerde); 
    brazoD1.position.set(0.35, 1.3, 0); 
    brazoD1.rotation.z = -0.5; 
    duende1.add(brazoD1);

    duende1.position.set(-1.5, 0, 4);
    duende1.rotation.y = 0.5; 
    tallerGroup.add(duende1);


    // Duende 2 Rojo

    var duende2 = new THREE.Group();

    // Pies
    var pieI2 = new THREE.Mesh(geoPie, matNegro); 
    pieI2.position.set(-0.2, 0.1, 0); 
    duende2.add(pieI2);
    
    var pieD2 = new THREE.Mesh(geoPie, matNegro); 
    pieD2.position.set(0.2, 0.1, 0); 
    duende2.add(pieD2);

    // Piernas
    var piernaI2 = new THREE.Mesh(geoPierna, matRojo); 
    piernaI2.position.set(-0.2, 0.5, 0); 
    duende2.add(piernaI2);
    
    var piernaD2 = new THREE.Mesh(geoPierna, matRojo); 
    piernaD2.position.set(0.2, 0.5, 0); 
    duende2.add(piernaD2);

    // Cuerpo
    var cuerpo2 = new THREE.Mesh(geoCuerpo, matRojo);
    cuerpo2.position.set(0, 1.1, 0);
    duende2.add(cuerpo2);

    // Cinturón
    var cinto2 = new THREE.Mesh(geoCinto, matNegro);
    cinto2.position.set(0, 1.0, 0);
    duende2.add(cinto2);

    // Cabeza
    var cabeza2 = new THREE.Mesh(geoCabeza, matPiel);
    cabeza2.position.set(0, 1.65, 0);
    duende2.add(cabeza2);

    // Gorro Verde
    var gorro2 = new THREE.Mesh(geoGorro, matVerde);
    gorro2.position.set(0, 2.0, 0);
    gorro2.rotation.x = -0.2; 
    duende2.add(gorro2);

    // Brazos
    var brazoI2 = new THREE.Mesh(geoBrazo, matRojo); 
    brazoI2.position.set(-0.35, 1.3, 0); 
    brazoI2.rotation.z = 0.5; 
    duende2.add(brazoI2);
    
    var brazoD2 = new THREE.Mesh(geoBrazo, matRojo); 
    brazoD2.position.set(0.35, 1.3, 0); 
    brazoD2.rotation.z = -0.5; 
    duende2.add(brazoD2);

    duende2.position.set(1.5, 0, 4);
    duende2.rotation.y = -0.5; 
    tallerGroup.add(duende2);


    // Regalo 1

    var reg1 = new THREE.Group();
    
    var caja1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), matAzul);
    caja1.position.y = 0.4; 
    reg1.add(caja1);
    
    var lazo1V = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.82, 0.2), matAmarillo);
    lazo1V.position.y = 0.4; 
    reg1.add(lazo1V);
    
    var lazo1H = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.82, 0.82), matAmarillo);
    lazo1H.position.y = 0.4; 
    reg1.add(lazo1H);
    
    reg1.position.set(-3, 0, 4);
    tallerGroup.add(reg1);


    // Regalo 2

    var reg2 = new THREE.Group();
    
    var caja2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), matRosa);
    caja2.position.y = 0.4; 
    reg2.add(caja2);
    
    var lazo2V = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.82, 0.2), matNieve);
    lazo2V.position.y = 0.4; 
    reg2.add(lazo2V);
    
    var lazo2H = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.82, 0.82), matNieve);
    lazo2H.position.y = 0.4; 
    reg2.add(lazo2H);

    reg2.position.set(3.5, 0, 4);
    reg2.rotation.y = 0.4;
    tallerGroup.add(reg2);


    // Posición Final
    tallerGroup.position.set(x, y, z);

    return tallerGroup;
}