import * as THREE from "../js/three.module.js";



   import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";  // ← NECESARIO

export default function GalletaJengibre({ x, y, z }) {

var grupo = new THREE.Group();
// MATERIAL JENGIBRE
var matJengibre = new THREE.MeshStandardMaterial({
    color: 0xC47A2B,
    roughness: 0.8
});

// CUERPO
var geoCuerpo = new RoundedBoxGeometry(2.2, 3.2, 0.5, 8, 0.4);
var cuerpo = new THREE.Mesh(geoCuerpo, matJengibre);
cuerpo.position.set(0, 0, 0);


// CABEZA
var geoCabeza = new RoundedBoxGeometry(1.8, 1.8, 0.6, 8, 0.3);
var cabeza = new THREE.Mesh(geoCabeza, matJengibre);
cabeza.position.set(0, 2.4, 0);


// BRAZO IZQUIERDO ARRIBA
var geoBrazo = new RoundedBoxGeometry(0.7, 2.2, 0.4, 8, 0.25);
var brazoIzq = new THREE.Mesh(geoBrazo, matJengibre);
brazoIzq.position.set(-1.8, 1.2, 0);
brazoIzq.rotation.z = 0.8;


// BRAZO DERECHO (AGARRA PALETA)
var brazoDer = new THREE.Mesh(geoBrazo, matJengibre);
brazoDer.position.set(1.8, 1.2, 0);
brazoDer.rotation.z = -0.8;


// PIERNAS
var geoPierna = new RoundedBoxGeometry(0.9, 1.8, 0.4, 8, 0.25);

var pierna1 = new THREE.Mesh(geoPierna, matJengibre);
pierna1.position.set(-0.7, -2.4, 0);


var pierna2 = new THREE.Mesh(geoPierna, matJengibre);
pierna2.position.set(0.7, -2.4, 0);


// OJOS
var geoOjo = new THREE.SphereGeometry(0.13);
var matOjo = new THREE.MeshStandardMaterial({ color: 0xffffff });

var ojo1 = new THREE.Mesh(geoOjo, matOjo);
ojo1.position.set(-0.4, 2.65, 0.45);


var ojo2 = new THREE.Mesh(geoOjo, matOjo);
ojo2.position.set(0.4, 2.65, 0.45);


// CEJAS
var geoCeja = new RoundedBoxGeometry(0.6, 0.18, 0.15, 6, 0.1);
var matCeja = new THREE.MeshStandardMaterial({ color: 0x87CEFA });

var ceja1 = new THREE.Mesh(geoCeja, matCeja);
ceja1.position.set(-0.4, 2.9, 0.42);
ceja1.rotation.z = 0.3;


var ceja2 = new THREE.Mesh(geoCeja, matCeja);
ceja2.position.set(0.4, 2.9, 0.42);
ceja2.rotation.z = -0.3;


// BOCA ROSA
var geoBoca = new RoundedBoxGeometry(1.0, 0.35, 0.2, 8, 0.15);
var matBoca = new THREE.MeshStandardMaterial({ color: 0xff4da6 });

var boca = new THREE.Mesh(geoBoca, matBoca);
boca.position.set(0, 2.2, 0.42);


// BOTONES MORADOS
var geoBoton = new THREE.SphereGeometry(0.22);
var matBoton = new THREE.MeshStandardMaterial({ color: 0xA020F0 });

var boton1 = new THREE.Mesh(geoBoton, matBoton);
boton1.position.set(0, 1.1, 0.42);


var boton2 = new THREE.Mesh(geoBoton, matBoton);
boton2.position.set(0, 0.3, 0.42);


// DECORACIÓN BLANCA DE PIERNAS
var geoDeco = new RoundedBoxGeometry(0.35, 0.15, 0.15, 6, 0.05);
var matDeco = new THREE.MeshStandardMaterial({ color: 0xffffff });

var deco1 = new THREE.Mesh(geoDeco, matDeco);
deco1.position.set(-0.7, -1.8, 0.42);


var deco2 = new THREE.Mesh(geoDeco, matDeco);
deco2.position.set(0.7, -1.8, 0.42);


// DECORACIÓN verdes DE PIERNAS
var geoDecov = new RoundedBoxGeometry(0.35, 0.15, 0.15, 6, 0.05);
var matDecov = new THREE.MeshStandardMaterial({ color: 0x64AB13 });

var deco3 = new THREE.Mesh(geoDecov, matDecov);
deco3.position.set(-0.7, -2.5, 0.42);


var deco4 = new THREE.Mesh(geoDecov, matDecov);
deco4.position.set(0.7, -2.5, 0.42);



// PALO
var geoPalo = new THREE.CylinderGeometry(0.18, 0.18, 6, 20);
var matPalo = new THREE.MeshStandardMaterial({ color: 0xffffff });

var palo = new THREE.Mesh(geoPalo, matPalo);
palo.position.set(2.5, 2.5, 0);
palo.rotation.z = -0.3;


// PALETA 

var geoDiscoa = new THREE.CylinderGeometry(1.5, 1.5, 0.4, 32);
var matAzul = new THREE.MeshStandardMaterial({ color: 0x27aae1 });
var disco1 = new THREE.Mesh(geoDiscoa, matAzul);
disco1.position.set(2.5, 4.8, 0);


var geoDiscob = new THREE.CylinderGeometry(1, 1, 0.4, 32);
var matRosa = new THREE.MeshStandardMaterial({ color: 0xff5ebc });
var disco2 = new THREE.Mesh(geoDiscob, matRosa);
disco2.position.set(2.5, 4.8, 0.15);


var geoDiscoc= new THREE.CylinderGeometry(1.3, 1.3, 0.8, 32);
var matAmarillo = new THREE.MeshStandardMaterial({ color: 0xffd700 });
var disco3 = new THREE.Mesh(geoDiscoc, matAmarillo);
disco3.position.set(2.5, 4.8, -0.15);


// Palo vertical
palo.rotation.z = 0;

// Discos 
disco1.rotation.x = 1.57;
disco2.rotation.x = 1.57;
disco3.rotation.x = 1.57;

//grupo
grupo.add(
        cuerpo, cabeza,
        brazoIzq, brazoDer,
        pierna1, pierna2,
        ojo1, ojo2,
        ceja1, ceja2,
        boca,
        boton1, boton2,
        deco1, deco2, deco3, deco4,
        palo, disco1, disco2, disco3
    );

    grupo.position.set(x, y, z);

    return grupo;
}