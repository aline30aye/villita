import * as THREE from "../js/three.module.js";

export default function Carrusel({ x, y, z }) {
    
    var carruselGroup = new THREE.Group();

    // Materiales Estructura
    var matPlataforma = new THREE.MeshLambertMaterial({ color: 0xaa0000 }); 
    var matPiso = new THREE.MeshLambertMaterial({ color: 0xffffff }); 
    var matTecho = new THREE.MeshLambertMaterial({ color: 0xaa0000 }); 
    var matCentro = new THREE.MeshLambertMaterial({ color: 0xFFD700 }); 
    var matPalo = new THREE.MeshLambertMaterial({ color: 0xFFD700 });

    // Materiales Caballos
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    var matAzul = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    var matVerde = new THREE.MeshLambertMaterial({ color: 0x008000 });
    var matAmarillo = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var matBlanco = new THREE.MeshLambertMaterial({ color: 0xffffff });


    // Base
    var geoBase = new THREE.CylinderGeometry(4.5, 4.5, 0.5, 32);
    var base = new THREE.Mesh(geoBase, matPlataforma);
    base.position.y = 0.25;
    carruselGroup.add(base);

    // Piso
    var geoPiso = new THREE.CylinderGeometry(4, 4, 0.1, 32);
    var piso = new THREE.Mesh(geoPiso, matPiso);
    piso.position.y = 0.55;
    carruselGroup.add(piso);

    // Columna Central
    var geoCentro = new THREE.CylinderGeometry(1.2, 1.2, 4, 16);
    var centro = new THREE.Mesh(geoCentro, matCentro);
    centro.position.y = 2.5; 
    carruselGroup.add(centro);

    // Decoración central
    var geoAro = new THREE.TorusGeometry(1.25, 0.1, 16, 32);
    
    var aro1 = new THREE.Mesh(geoAro, matPlataforma);
    aro1.rotation.x = 1.57; 
    aro1.position.y = 1.5; 
    carruselGroup.add(aro1);

    var aro2 = new THREE.Mesh(geoAro, matPlataforma);
    aro2.rotation.x = 1.57; 
    aro2.position.y = 3.5; 
    carruselGroup.add(aro2);

    // Techo
    var geoTecho = new THREE.ConeGeometry(5, 2.5, 32);
    var techo = new THREE.Mesh(geoTecho, matTecho);
    techo.position.y = 5.5; 
    carruselGroup.add(techo);

    // Punta
    var geoBola = new THREE.SphereGeometry(0.4, 16, 16);
    var bola = new THREE.Mesh(geoBola, matCentro);
    bola.position.y = 6.8;
    carruselGroup.add(bola);


    // Caballo 1 (Rojo)

    var c1 = new THREE.Group();

    // Poste
    var geoPosteC = new THREE.CylinderGeometry(0.05, 0.05, 3, 8);
    var poste1 = new THREE.Mesh(geoPosteC, matPalo);
    poste1.position.y = 1.5;
    c1.add(poste1);

    // Cuerpo
    var geoCuerpoC = new THREE.CylinderGeometry(0.3, 0.3, 1.2, 16);
    var cuerpo1 = new THREE.Mesh(geoCuerpoC, matRojo);
    cuerpo1.rotation.z = 1.57; 
    cuerpo1.position.y = 1.2;
    c1.add(cuerpo1);

    // Cuello
    var geoCuelloC = new THREE.CylinderGeometry(0.15, 0.25, 0.6, 16);
    var cuello1 = new THREE.Mesh(geoCuelloC, matRojo);
    cuello1.position.set(-0.4, 1.6, 0);
    cuello1.rotation.z = 0.5; 
    c1.add(cuello1);

    // Cabeza
    var geoCabezaC = new THREE.BoxGeometry(0.3, 0.3, 0.5);
    var cabeza1 = new THREE.Mesh(geoCabezaC, matRojo);
    cabeza1.position.set(-0.6, 1.9, 0);
    c1.add(cabeza1);

    // Crina
    var geoCrinaC = new THREE.BoxGeometry(0.1, 0.6, 0.05);
    var crina1 = new THREE.Mesh(geoCrinaC, matNegro);
    crina1.position.set(-0.3, 1.7, 0);
    crina1.rotation.z = 0.5;
    c1.add(crina1);

    // Cola
    var geoColaC = new THREE.CylinderGeometry(0.05, 0.1, 0.5, 8);
    var cola1 = new THREE.Mesh(geoColaC, matNegro);
    cola1.position.set(0.6, 1.1, 0);
    cola1.rotation.z = -0.5;
    c1.add(cola1);

    c1.position.set(0, 0.6, 3);
    carruselGroup.add(c1);


    // Caballo 2 (Azul)

    var c2 = new THREE.Group();

    // Poste
    var poste2 = new THREE.Mesh(geoPosteC, matPalo);
    poste2.position.y = 1.5;
    c2.add(poste2);

    // Cuerpo
    var cuerpo2 = new THREE.Mesh(geoCuerpoC, matAzul);
    cuerpo2.rotation.z = 1.57; 
    cuerpo2.position.y = 1.2;
    c2.add(cuerpo2);

    // Cuello
    var cuello2 = new THREE.Mesh(geoCuelloC, matAzul);
    cuello2.position.set(-0.4, 1.6, 0);
    cuello2.rotation.z = 0.5; 
    c2.add(cuello2);

    // Cabeza
    var cabeza2 = new THREE.Mesh(geoCabezaC, matAzul);
    cabeza2.position.set(-0.6, 1.9, 0);
    c2.add(cabeza2);

    // Crina
    var crina2 = new THREE.Mesh(geoCrinaC, matBlanco);
    crina2.position.set(-0.3, 1.7, 0);
    crina2.rotation.z = 0.5;
    c2.add(crina2);

    // Cola
    var cola2 = new THREE.Mesh(geoColaC, matBlanco);
    cola2.position.set(0.6, 1.1, 0);
    cola2.rotation.z = -0.5;
    c2.add(cola2);

    c2.position.set(0, 0.6, -3);
    c2.rotation.y = 3.1416;
    carruselGroup.add(c2);


    // Caballo 3 (Verde)

    var c3 = new THREE.Group();

    // Poste
    var poste3 = new THREE.Mesh(geoPosteC, matPalo);
    poste3.position.y = 1.5;
    c3.add(poste3);

    // Cuerpo
    var cuerpo3 = new THREE.Mesh(geoCuerpoC, matVerde);
    cuerpo3.rotation.z = 1.57; 
    cuerpo3.position.y = 1.2;
    c3.add(cuerpo3);

    // Cuello
    var cuello3 = new THREE.Mesh(geoCuelloC, matVerde);
    cuello3.position.set(-0.4, 1.6, 0);
    cuello3.rotation.z = 0.5; 
    c3.add(cuello3);

    // Cabeza
    var cabeza3 = new THREE.Mesh(geoCabezaC, matVerde);
    cabeza3.position.set(-0.6, 1.9, 0);
    c3.add(cabeza3);

    // Crina
    var crina3 = new THREE.Mesh(geoCrinaC, matNegro);
    crina3.position.set(-0.3, 1.7, 0);
    crina3.rotation.z = 0.5;
    c3.add(crina3);

    // Cola
    var cola3 = new THREE.Mesh(geoColaC, matNegro);
    cola3.position.set(0.6, 1.1, 0);
    cola3.rotation.z = -0.5;
    c3.add(cola3);

    c3.position.set(3, 0.6, 0);
    c3.rotation.y = -1.57;
    carruselGroup.add(c3);


    // Caballo 4 (Amarillo)

    var c4 = new THREE.Group();

    // Poste
    var poste4 = new THREE.Mesh(geoPosteC, matPalo);
    poste4.position.y = 1.5;
    c4.add(poste4);

    // Cuerpo
    var cuerpo4 = new THREE.Mesh(geoCuerpoC, matAmarillo);
    cuerpo4.rotation.z = 1.57; 
    cuerpo4.position.y = 1.2;
    c4.add(cuerpo4);

    // Cuello
    var cuello4 = new THREE.Mesh(geoCuelloC, matAmarillo);
    cuello4.position.set(-0.4, 1.6, 0);
    cuello4.rotation.z = 0.5; 
    c4.add(cuello4);

    // Cabeza
    var cabeza4 = new THREE.Mesh(geoCabezaC, matAmarillo);
    cabeza4.position.set(-0.6, 1.9, 0);
    c4.add(cabeza4);

    // Crina
    var crina4 = new THREE.Mesh(geoCrinaC, matTecho); // Rojo oscuro
    crina4.position.set(-0.3, 1.7, 0);
    crina4.rotation.z = 0.5;
    c4.add(crina4);

    // Cola
    var cola4 = new THREE.Mesh(geoColaC, matTecho);
    cola4.position.set(0.6, 1.1, 0);
    cola4.rotation.z = -0.5;
    c4.add(cola4);

    c4.position.set(-3, 0.6, 0);
    c4.rotation.y = 1.57;
    carruselGroup.add(c4);

    
    // Animación
    carruselGroup.userData = { esCarrusel: true };

    // Posición final
    carruselGroup.position.set(x, y, z);

    return carruselGroup;
}