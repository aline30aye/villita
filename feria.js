import * as THREE from "../js/three.module.js";

export default function RuedaFortuna({ x, y, z }) {
    
    var ruedaGroup = new THREE.Group();

    // Materiales
    var matGris = new THREE.MeshLambertMaterial({ color: 0x888888 });
    var matBase = new THREE.MeshLambertMaterial({ color: 0x555555 });
    var matBlanco = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x222222 });

    // Colores para las cabinas
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    var matAzul = new THREE.MeshLambertMaterial({ color: 0x0000FF });
    var matRosa = new THREE.MeshLambertMaterial({ color: 0xFF00FF });
    var matCian = new THREE.MeshLambertMaterial({ color: 0x00FFFF });
    var matMorado = new THREE.MeshLambertMaterial({ color: 0x800080 });
    var matAmarillo = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    var matNaranja = new THREE.MeshLambertMaterial({ color: 0xFFA500 });
    var matVerde = new THREE.MeshLambertMaterial({ color: 0x008000 });


    // Base y Soportes
    
    // Plataforma
    var geoPlataforma = new THREE.BoxGeometry(8, 1, 6);
    var meshPlataforma = new THREE.Mesh(geoPlataforma, matBase);
    meshPlataforma.position.set(0, 0.5, 0);
    ruedaGroup.add(meshPlataforma);

    // Soporte Delantero
    var geoPata = new THREE.CylinderGeometry(0.3, 0.3, 11, 16);
    
    // Pata Izquierda
    var pataDelIzq = new THREE.Mesh(geoPata, matGris);
    pataDelIzq.position.set(-2.5, 5, 2);
    pataDelIzq.rotation.z = 0.4; 
    ruedaGroup.add(pataDelIzq);

    // Pata Derecha
    var pataDelDer = new THREE.Mesh(geoPata, matGris);
    pataDelDer.position.set(2.5, 5, 2);
    pataDelDer.rotation.z = -0.4;
    ruedaGroup.add(pataDelDer);

    // Travesaño
    var geoTravesano = new THREE.CylinderGeometry(0.2, 0.2, 4.5, 16);
    var travesanoDel = new THREE.Mesh(geoTravesano, matGris);
    travesanoDel.rotation.z = 1.57; 
    travesanoDel.position.set(0, 3.5, 2);
    ruedaGroup.add(travesanoDel);

    // Esfera arriba
    var geoEsferaTop = new THREE.SphereGeometry(0.8, 32, 32);
    var esferaDel = new THREE.Mesh(geoEsferaTop, matNegro);
    esferaDel.position.set(0, 10, 2);
    ruedaGroup.add(esferaDel);


    // Soporte Trasero
    
    // Pata Izquierda
    var pataTrasIzq = new THREE.Mesh(geoPata, matGris);
    pataTrasIzq.position.set(-2.5, 5, -2);
    pataTrasIzq.rotation.z = 0.4; 
    ruedaGroup.add(pataTrasIzq);

    // Pata Derecha
    var pataTrasDer = new THREE.Mesh(geoPata, matGris);
    pataTrasDer.position.set(2.5, 5, -2);
    pataTrasDer.rotation.z = -0.4;
    ruedaGroup.add(pataTrasDer);

    // Travesaño
    var travesanoTras = new THREE.Mesh(geoTravesano, matGris);
    travesanoTras.rotation.z = 1.57;
    travesanoTras.position.set(0, 3.5, -2);
    ruedaGroup.add(travesanoTras);

    // Esfera arriba
    var esferaTras = new THREE.Mesh(geoEsferaTop, matNegro);
    esferaTras.position.set(0, 10, -2);
    ruedaGroup.add(esferaTras);

    // Eje central
    var geoEje = new THREE.CylinderGeometry(0.5, 0.5, 5, 16);
    var eje = new THREE.Mesh(geoEje, matNegro);
    eje.rotation.x = 1.57; 
    eje.position.set(0, 10, 0);
    ruedaGroup.add(eje);


    // La Rueda Giratoria
    var parteGiratoria = new THREE.Group();
    parteGiratoria.position.set(0, 10, 0); 
    
    // Aro grande
    var geoAro = new THREE.TorusGeometry(4.5, 0.3, 16, 100);
    var meshAro = new THREE.Mesh(geoAro, matBlanco);
    parteGiratoria.add(meshAro);

    // Centro estrella
    var geoCentro = new THREE.CylinderGeometry(1.2, 1.2, 0.7, 8);
    var meshCentro = new THREE.Mesh(geoCentro, matBlanco);
    meshCentro.rotation.x = 1.57;
    parteGiratoria.add(meshCentro);

    // Geometrías reusables
    var geoRayo = new THREE.CylinderGeometry(0.1, 0.1, 4.2, 8);
    var geoCajaCabina = new THREE.BoxGeometry(1, 1.2, 1);
    var geoTechoCabina = new THREE.ConeGeometry(0.75, 0.5, 4);

    // Cabina 1 Roja
    var rayo1 = new THREE.Mesh(geoRayo, matBlanco);
    rayo1.position.set(0, 2.2, 0); 
    parteGiratoria.add(rayo1);

    var cabina1 = new THREE.Group();
    cabina1.position.set(0, 4.5, 0); 
    var caja1 = new THREE.Mesh(geoCajaCabina, matRojo);
    var techo1 = new THREE.Mesh(geoTechoCabina, matRojo);
    techo1.position.y = 0.85; techo1.rotation.y = 0.78;
    cabina1.add(caja1); cabina1.add(techo1);
    parteGiratoria.add(cabina1);

    // Cabina 2 Naranja
    var rayo2 = new THREE.Mesh(geoRayo, matBlanco);
    rayo2.position.set(1.55, 1.55, 0);
    rayo2.rotation.z = -0.78; 
    parteGiratoria.add(rayo2);

    var cabina2 = new THREE.Group();
    cabina2.position.set(3.18, 3.18, 0);
    var caja2 = new THREE.Mesh(geoCajaCabina, matNaranja);
    var techo2 = new THREE.Mesh(geoTechoCabina, matNaranja);
    techo2.position.y = 0.85; techo2.rotation.y = 0.78;
    cabina2.add(caja2); cabina2.add(techo2);
    parteGiratoria.add(cabina2);

    // Cabina 3 Amarillo
    var rayo3 = new THREE.Mesh(geoRayo, matBlanco);
    rayo3.position.set(2.2, 0, 0);
    rayo3.rotation.z = -1.57; 
    parteGiratoria.add(rayo3);

    var cabina3 = new THREE.Group();
    cabina3.position.set(4.5, 0, 0);
    var caja3 = new THREE.Mesh(geoCajaCabina, matAmarillo);
    var techo3 = new THREE.Mesh(geoTechoCabina, matAmarillo);
    techo3.position.y = 0.85; techo3.rotation.y = 0.78;
    cabina3.add(caja3); cabina3.add(techo3);
    parteGiratoria.add(cabina3);

    // Cabina 4 Verde
    var rayo4 = new THREE.Mesh(geoRayo, matBlanco);
    rayo4.position.set(1.55, -1.55, 0);
    rayo4.rotation.z = -2.35; 
    parteGiratoria.add(rayo4);

    var cabina4 = new THREE.Group();
    cabina4.position.set(3.18, -3.18, 0);
    var caja4 = new THREE.Mesh(geoCajaCabina, matVerde);
    var techo4 = new THREE.Mesh(geoTechoCabina, matVerde);
    techo4.position.y = 0.85; techo4.rotation.y = 0.78;
    cabina4.add(caja4); cabina4.add(techo4);
    parteGiratoria.add(cabina4);

    // Cabina 5 Cian
    var rayo5 = new THREE.Mesh(geoRayo, matBlanco);
    rayo5.position.set(0, -2.2, 0);
    rayo5.rotation.z = 3.14; 
    parteGiratoria.add(rayo5);

    var cabina5 = new THREE.Group();
    cabina5.position.set(0, -4.5, 0);
    var caja5 = new THREE.Mesh(geoCajaCabina, matCian);
    var techo5 = new THREE.Mesh(geoTechoCabina, matCian);
    techo5.position.y = 0.85; techo5.rotation.y = 0.78;
    cabina5.add(caja5); cabina5.add(techo5);
    parteGiratoria.add(cabina5);

    // Cabina 6 Azul
    var rayo6 = new THREE.Mesh(geoRayo, matBlanco);
    rayo6.position.set(-1.55, -1.55, 0);
    rayo6.rotation.z = 2.35; 
    parteGiratoria.add(rayo6);

    var cabina6 = new THREE.Group();
    cabina6.position.set(-3.18, -3.18, 0);
    var caja6 = new THREE.Mesh(geoCajaCabina, matAzul);
    var techo6 = new THREE.Mesh(geoTechoCabina, matAzul);
    techo6.position.y = 0.85; techo6.rotation.y = 0.78;
    cabina6.add(caja6); cabina6.add(techo6);
    parteGiratoria.add(cabina6);

    // Cabina 7 Morado
    var rayo7 = new THREE.Mesh(geoRayo, matBlanco);
    rayo7.position.set(-2.2, 0, 0);
    rayo7.rotation.z = 1.57; 
    parteGiratoria.add(rayo7);

    var cabina7 = new THREE.Group();
    cabina7.position.set(-4.5, 0, 0);
    var caja7 = new THREE.Mesh(geoCajaCabina, matMorado);
    var techo7 = new THREE.Mesh(geoTechoCabina, matMorado);
    techo7.position.y = 0.85; techo7.rotation.y = 0.78;
    cabina7.add(caja7); cabina7.add(techo7);
    parteGiratoria.add(cabina7);

    // Cabina 8 Rosa
    var rayo8 = new THREE.Mesh(geoRayo, matBlanco);
    rayo8.position.set(-1.55, 1.55, 0);
    rayo8.rotation.z = 0.78; 
    parteGiratoria.add(rayo8);

    var cabina8 = new THREE.Group();
    cabina8.position.set(-3.18, 3.18, 0);
    var caja8 = new THREE.Mesh(geoCajaCabina, matRosa);
    var techo8 = new THREE.Mesh(geoTechoCabina, matRosa);
    techo8.position.y = 0.85; techo8.rotation.y = 0.78;
    cabina8.add(caja8); cabina8.add(techo8);
    parteGiratoria.add(cabina8);

    
    // Agregar la rueda al grupo
    ruedaGroup.add(parteGiratoria);

    // Animacion
    ruedaGroup.userData = { giratoria: parteGiratoria };

    // Posición final
    ruedaGroup.position.set(x, y, z);

    return ruedaGroup;
}