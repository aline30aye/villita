import * as THREE from "../js/three.module.js";

export default function TrineoSanta({ x, y, z }) {
    
    var trineoGroup = new THREE.Group();

    // Materiales
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xcc0000 }); 
    var matRojoOscuro = new THREE.MeshLambertMaterial({ color: 0x990000 }); 
    var matVerde = new THREE.MeshLambertMaterial({ color: 0x008800 }); 
    var matCafe = new THREE.MeshLambertMaterial({ color: 0xa0552d }); 
    var matPiel = new THREE.MeshLambertMaterial({ color: 0xffccaa }); 
    var matBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff }); 
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x111111 }); 
    var matDorado = new THREE.MeshLambertMaterial({ color: 0xFFD700 }); 
    var matCuerda = new THREE.MeshBasicMaterial({ color: 0x5c4033 }); 
    var matNarizRoja = new THREE.MeshPhongMaterial({ color: 0xff0000, shininess: 100 }); 


    // El Trineo

    // Base del cuerpo
    var geoBase = new THREE.BoxGeometry(2.2, 0.5, 3.5);
    var base = new THREE.Mesh(geoBase, matRojo);
    base.position.set(0, 1.0, 0.5);
    trineoGroup.add(base);


    // Pared Izquierda
    var geoPared = new THREE.BoxGeometry(0.2, 1.2, 2.5);
    var paredIzq = new THREE.Mesh(geoPared, matRojo);
    paredIzq.position.set(-1.1, 1.6, 0);
    trineoGroup.add(paredIzq);


    // Pared Derecha
    var paredDer = new THREE.Mesh(geoPared, matRojo);
    paredDer.position.set(1.1, 1.6, 0);
    trineoGroup.add(paredDer);


    // Bordes Dorados
    var geoBorde = new THREE.CylinderGeometry(0.1, 0.1, 2.5);
    
    var bordeIzq = new THREE.Mesh(geoBorde, matDorado);
    bordeIzq.rotation.x = 1.57; 
    bordeIzq.position.set(-1.1, 2.2, 0);
    trineoGroup.add(bordeIzq);

    var bordeDer = new THREE.Mesh(geoBorde, matDorado);
    bordeDer.rotation.x = 1.57;
    bordeDer.position.set(1.1, 2.2, 0);
    trineoGroup.add(bordeDer);


    // Respaldo
    var geoRespaldo = new THREE.BoxGeometry(2.4, 1.8, 0.2);
    var respaldo = new THREE.Mesh(geoRespaldo, matRojo);
    respaldo.position.set(0, 1.8, -1.2);
    respaldo.rotation.x = -0.3; 
    trineoGroup.add(respaldo);


    var geoBordeResp = new THREE.CylinderGeometry(0.1, 0.1, 2.4);
    var bordeResp = new THREE.Mesh(geoBordeResp, matDorado);
    bordeResp.rotation.z = 1.57;
    bordeResp.position.set(0, 2.65, -1.45);
    trineoGroup.add(bordeResp);


    // Frente
    var geoFrente = new THREE.CylinderGeometry(1.1, 1.1, 2.4, 32);
    var frente = new THREE.Mesh(geoFrente, matRojo);
    frente.rotation.z = 1.57; 
    frente.position.set(0, 1.6, 1.25);
    trineoGroup.add(frente);

    // Asiento
    var geoAsiento = new THREE.BoxGeometry(2, 0.3, 1.5);
    var asiento = new THREE.Mesh(geoAsiento, matRojoOscuro);
    asiento.position.set(0, 1.4, -0.5);
    trineoGroup.add(asiento);

    // Patines
    var geoPatinRecto = new THREE.BoxGeometry(0.1, 0.1, 5);
    
    var patinI = new THREE.Mesh(geoPatinRecto, matDorado); 
    patinI.position.set(-1.3, 0.2, 0.5); 
    trineoGroup.add(patinI);
    
    var patinD = new THREE.Mesh(geoPatinRecto, matDorado); 
    patinD.position.set(1.3, 0.2, 0.5); 
    trineoGroup.add(patinD);
    var geoCurvaPatin = new THREE.TorusGeometry(0.5, 0.05, 8, 16);
    
    var curvaI = new THREE.Mesh(geoCurvaPatin, matDorado); 
    curvaI.position.set(-1.3, 0.7, 3); 
    curvaI.rotation.y = 1.57; 
    trineoGroup.add(curvaI);
    
    var curvaD = new THREE.Mesh(geoCurvaPatin, matDorado); 
    curvaD.position.set(1.3, 0.7, 3); 
    curvaD.rotation.y = 1.57; 
    trineoGroup.add(curvaD);

    // Soportes Patines
    var geoSoporte = new THREE.CylinderGeometry(0.08, 0.05, 0.9);
    
    var sop1 = new THREE.Mesh(geoSoporte, matDorado); 
    sop1.position.set(-1.3, 0.6, 1.5); 
    trineoGroup.add(sop1);
    
    var sop2 = new THREE.Mesh(geoSoporte, matDorado); 
    sop2.position.set(-1.3, 0.6, -0.5); 
    trineoGroup.add(sop2);
    
    var sop3 = new THREE.Mesh(geoSoporte, matDorado); 
    sop3.position.set(1.3, 0.6, 1.5); 
    trineoGroup.add(sop3);
    
    var sop4 = new THREE.Mesh(geoSoporte, matDorado); 
    sop4.position.set(1.3, 0.6, -0.5); 
    trineoGroup.add(sop4);
    // Santa Claus
    
    var santaGroup = new THREE.Group();

    // Botas
    var geoBota = new THREE.BoxGeometry(0.4, 0.3, 0.5);
    
    var botaI = new THREE.Mesh(geoBota, matNegro); 
    botaI.position.set(-0.35, 0.15, 0.1); 
    santaGroup.add(botaI);
    
    var botaD = new THREE.Mesh(geoBota, matNegro); 
    botaD.position.set(0.35, 0.15, 0.1); 
    santaGroup.add(botaD);
    // Piernas
    var geoPierna = new THREE.CylinderGeometry(0.2, 0.2, 0.6);
    
    var piernaI = new THREE.Mesh(geoPierna, matRojo); 
    piernaI.position.set(-0.35, 0.5, 0); 
    santaGroup.add(piernaI);
    
    var piernaD = new THREE.Mesh(geoPierna, matRojo); 
    piernaD.position.set(0.35, 0.5, 0); 
    santaGroup.add(piernaD);
    // Panza
    var geoPanza = new THREE.SphereGeometry(0.8, 32, 32);
    var panza = new THREE.Mesh(geoPanza, matRojo);
    panza.position.set(0, 1.3, 0);
    santaGroup.add(panza);
    // Detalle
    var geoDetalle = new THREE.BoxGeometry(0.2, 1.2, 0.1);
    var detalle = new THREE.Mesh(geoDetalle, matBlanco);
    detalle.position.set(0, 1.3, 0.75); 
    santaGroup.add(detalle);
    // Cinturon
    var geoCinto = new THREE.TorusGeometry(0.78, 0.08, 16, 32);
    var cinto = new THREE.Mesh(geoCinto, matNegro);
    cinto.rotation.x = 1.57; 
    cinto.position.set(0, 1.3, 0);
    santaGroup.add(cinto);


    // Hebilla
    var geoHebilla = new THREE.BoxGeometry(0.25, 0.25, 0.1);
    var hebilla = new THREE.Mesh(geoHebilla, matDorado);
    hebilla.position.set(0, 1.3, 0.85);
    santaGroup.add(hebilla);


    // Cabeza
    var geoCabeza = new THREE.SphereGeometry(0.45, 32, 32);
    var cabeza = new THREE.Mesh(geoCabeza, matPiel);
    cabeza.position.set(0, 2.1, 0);
    santaGroup.add(cabeza);


    // Barba
    var geoBarba = new THREE.SphereGeometry(0.46, 32, 32);
    var barba = new THREE.Mesh(geoBarba, matBlanco);
    barba.rotation.x = -0.3; 
    barba.position.set(0, 2.05, 0.05);
    santaGroup.add(barba);


    // Bigote
    var geoBigote = new THREE.SphereGeometry(0.12);
    
    var bigoteI = new THREE.Mesh(geoBigote, matBlanco); 
    bigoteI.position.set(-0.15, 2.15, 0.45); 
    santaGroup.add(bigoteI);
    
    var bigoteD = new THREE.Mesh(geoBigote, matBlanco); 
    bigoteD.position.set(0.15, 2.15, 0.45); 
    santaGroup.add(bigoteD);


    // Nariz
    var nariz = new THREE.Mesh(new THREE.SphereGeometry(0.08), new THREE.MeshLambertMaterial({color: 0xffaaaa}));
    nariz.position.set(0, 2.25, 0.45);
    santaGroup.add(nariz);


    // Ojos
    var geoOjo = new THREE.SphereGeometry(0.05);
    
    var ojoI = new THREE.Mesh(geoOjo, matNegro); 
    ojoI.position.set(-0.15, 2.35, 0.38); 
    santaGroup.add(ojoI);
    
    var ojoD = new THREE.Mesh(geoOjo, matNegro); 
    ojoD.position.set(0.15, 2.35, 0.38); 
    santaGroup.add(ojoD);


    // Gorro
    var geoGorro = new THREE.ConeGeometry(0.45, 0.9, 32);
    var gorro = new THREE.Mesh(geoGorro, matRojo);
    gorro.position.set(0, 2.6, 0);
    santaGroup.add(gorro);


    // Borde Gorro
    var geoBordeGorro = new THREE.TorusGeometry(0.45, 0.1, 16, 32);
    var bordeGorro = new THREE.Mesh(geoBordeGorro, matBlanco);
    bordeGorro.rotation.x = 1.57;
    bordeGorro.position.set(0, 2.45, 0);
    santaGroup.add(bordeGorro);


    // Pompón
    var pompon = new THREE.Mesh(new THREE.SphereGeometry(0.12), matBlanco);
    pompon.position.set(0, 3.05, 0);
    santaGroup.add(pompon);


    // Brazos
    var geoBrazo = new THREE.CylinderGeometry(0.12, 0.12, 0.7);
    
    var brazoI = new THREE.Mesh(geoBrazo, matRojo);
    brazoI.position.set(-0.9, 1.6, 0);
    brazoI.rotation.z = 0.5;
    santaGroup.add(brazoI);

    var manoI = new THREE.Mesh(new THREE.SphereGeometry(0.15), matBlanco);
    manoI.position.set(-1.1, 1.3, 0);
    santaGroup.add(manoI);

    var brazoD = new THREE.Mesh(geoBrazo, matRojo);
    brazoD.position.set(0.9, 1.8, 0); 
    brazoD.rotation.z = 2.5; 
    santaGroup.add(brazoD);

    var manoD = new THREE.Mesh(new THREE.SphereGeometry(0.15), matBlanco);
    manoD.position.set(1.2, 2.1, 0);
    santaGroup.add(manoD);

    santaGroup.position.set(3, 0, 1); 
    santaGroup.rotation.y = -0.3; 
    trineoGroup.add(santaGroup);


    // Reno Izquierdo

    var reno1 = new THREE.Group();
    
    // Cuerpo
    var geoCuerpoReno = new THREE.SphereGeometry(0.6, 16, 16);
    var cuerpoR1 = new THREE.Mesh(geoCuerpoReno, matCafe);
    cuerpoR1.scale.set(1, 1, 1.5);
    cuerpoR1.position.y = 1.2;
    reno1.add(cuerpoR1);

    // Cabeza
    var geoCabezaReno = new THREE.SphereGeometry(0.5, 16, 16);
    var cabezaR1 = new THREE.Mesh(geoCabezaReno, matCafe);
    cabezaR1.position.set(0, 1.8, 1);
    reno1.add(cabezaR1);

    // Hocico
    var geoHocico = new THREE.SphereGeometry(0.25, 16, 16);
    var hocico1 = new THREE.Mesh(geoHocico, new THREE.MeshLambertMaterial({color: 0xc0754d}));
    hocico1.position.set(0, 1.7, 1.3);
    reno1.add(hocico1);

    // Nariz
    var geoNarizBola = new THREE.SphereGeometry(0.15, 16, 16);
    var narizR1 = new THREE.Mesh(geoNarizBola, matNarizRoja);
    narizR1.position.set(0, 1.8, 1.5);
    reno1.add(narizR1);

    // Patas
    var geoPataR = new THREE.CylinderGeometry(0.15, 0.15, 0.8);
    
    var p1R1 = new THREE.Mesh(geoPataR, matCafe); 
    p1R1.position.set(-0.3, 0.4, 0.5); 
    reno1.add(p1R1);
    
    var p2R1 = new THREE.Mesh(geoPataR, matCafe); 
    p2R1.position.set(0.3, 0.4, 0.5); 
    reno1.add(p2R1);
    
    var p3R1 = new THREE.Mesh(geoPataR, matCafe); 
    p3R1.position.set(-0.3, 0.4, -0.5); 
    reno1.add(p3R1);
    
    var p4R1 = new THREE.Mesh(geoPataR, matCafe); 
    p4R1.position.set(0.3, 0.4, -0.5); 
    reno1.add(p4R1);

    // Astas
    var geoAsta = new THREE.TorusGeometry(0.15, 0.05, 8, 16);
    
    var astaI1 = new THREE.Mesh(geoAsta, new THREE.MeshLambertMaterial({color: 0x5c4033}));
    astaI1.position.set(-0.3, 2.2, 1); 
    astaI1.rotation.z = 0.5; 
    reno1.add(astaI1);
    
    var astaD1 = new THREE.Mesh(geoAsta, new THREE.MeshLambertMaterial({color: 0x5c4033}));
    astaD1.position.set(0.3, 2.2, 1); 
    astaD1.rotation.z = -0.5; 
    reno1.add(astaD1);

    // Ojos
    var geoOjoReno = new THREE.SphereGeometry(0.08, 8, 8);
    
    var ojoI1 = new THREE.Mesh(geoOjoReno, matNegro); 
    ojoI1.position.set(-0.2, 1.9, 1.3); 
    reno1.add(ojoI1);
    
    var ojoD1 = new THREE.Mesh(geoOjoReno, matNegro); 
    ojoD1.position.set(0.2, 1.9, 1.3); 
    reno1.add(ojoD1);

    reno1.position.set(-1, 0, 5.5);
    trineoGroup.add(reno1);


    // Reno Derecho

    var reno2 = new THREE.Group();
    
    // Cuerpo
    var cuerpoR2 = new THREE.Mesh(geoCuerpoReno, matCafe);
    cuerpoR2.scale.set(1, 1, 1.5);
    cuerpoR2.position.y = 1.2;
    reno2.add(cuerpoR2);

    // Cabeza
    var cabezaR2 = new THREE.Mesh(geoCabezaReno, matCafe);
    cabezaR2.position.set(0, 1.8, 1);
    reno2.add(cabezaR2);

    // Hocico
    var hocico2 = new THREE.Mesh(geoHocico, new THREE.MeshLambertMaterial({color: 0xc0754d}));
    hocico2.position.set(0, 1.7, 1.3);
    reno2.add(hocico2);

    // Nariz
    var narizR2 = new THREE.Mesh(geoNarizBola, matNegro);
    narizR2.position.set(0, 1.8, 1.5);
    reno2.add(narizR2);

    // Patas
    var p1R2 = new THREE.Mesh(geoPataR, matCafe); 
    p1R2.position.set(-0.3, 0.4, 0.5); 
    reno2.add(p1R2);
    
    var p2R2 = new THREE.Mesh(geoPataR, matCafe); 
    p2R2.position.set(0.3, 0.4, 0.5); 
    reno2.add(p2R2);
    
    var p3R2 = new THREE.Mesh(geoPataR, matCafe); 
    p3R2.position.set(-0.3, 0.4, -0.5); 
    reno2.add(p3R2);
    
    var p4R2 = new THREE.Mesh(geoPataR, matCafe); 
    p4R2.position.set(0.3, 0.4, -0.5); 
    reno2.add(p4R2);

    // Astas
    var astaI2 = new THREE.Mesh(geoAsta, new THREE.MeshLambertMaterial({color: 0x5c4033}));
    astaI2.position.set(-0.3, 2.2, 1); 
    astaI2.rotation.z = 0.5; 
    reno2.add(astaI2);
    
    var astaD2 = new THREE.Mesh(geoAsta, new THREE.MeshLambertMaterial({color: 0x5c4033}));
    astaD2.position.set(0.3, 2.2, 1); 
    astaD2.rotation.z = -0.5; 
    reno2.add(astaD2);

    // Ojos
    var ojoI2 = new THREE.Mesh(geoOjoReno, matNegro); 
    ojoI2.position.set(-0.2, 1.9, 1.3); 
    reno2.add(ojoI2);
    
    var ojoD2 = new THREE.Mesh(geoOjoReno, matNegro); 
    ojoD2.position.set(0.2, 1.9, 1.3); 
    reno2.add(ojoD2);

    reno2.position.set(1, 0, 5.5);
    trineoGroup.add(reno2);


    // Regalos y Saco
    
    var r1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), matVerde);
    r1.position.set(0, 1.5, -0.5);
    trineoGroup.add(r1);

    var r2 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), matDorado);
    r2.position.set(0.5, 1.8, -0.5);
    r2.rotation.y = 0.5;
    trineoGroup.add(r2);

    var saco = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshLambertMaterial({color: 0x8B4513}));
    saco.position.set(-0.5, 1.5, -1.2);
    trineoGroup.add(saco);


    // Riendas
    var riendaGeo = new THREE.CylinderGeometry(0.02, 0.02, 4);
    
    var rienda1 = new THREE.Mesh(riendaGeo, matCuerda);
    rienda1.position.set(-1, 2, 3.5); 
    rienda1.rotation.x = 1.57; 
    trineoGroup.add(rienda1);

    var rienda2 = new THREE.Mesh(riendaGeo, matCuerda);
    rienda2.position.set(1, 2, 3.5); 
    rienda2.rotation.x = 1.57; 
    trineoGroup.add(rienda2);


    // Posición Final
    trineoGroup.position.set(x, y, z);

    return trineoGroup;
}