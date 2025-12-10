import * as THREE from "../js/three.module.js";

export default function PersonaNavidena({ x, y, z }) {

    // --- CUERPO ---
    var cuerpoGeo = new THREE.CylinderGeometry(3, 3, 7, 16);
    var cuerpoMat = new THREE.MeshStandardMaterial({ color: 0x4a90e2 });
    var cuerpo = new THREE.Mesh(cuerpoGeo, cuerpoMat);
    cuerpo.position.set(0, 7, 0);

    // --- CABEZA ---
    var cabezaGeo = new THREE.SphereGeometry(3, 10, 10);
    var cabezaMat = new THREE.MeshStandardMaterial({ color: 0xffd9b3 });
    var cabeza = new THREE.Mesh(cabezaGeo, cabezaMat);
    cabeza.position.set(0, 13, 0);

    // --- GORRO ---
    var gorroGeo = new THREE.ConeGeometry(4, 6, 16);
    var gorroMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    var gorro = new THREE.Mesh(gorroGeo, gorroMat);
    gorro.position.set(0, 17, 0);

    var borlaGeo = new THREE.SphereGeometry(1.2, 16, 16);
    var borlaMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    var borla = new THREE.Mesh(borlaGeo, borlaMat);
    borla.position.set(0, 20, 0);

    // --- OJOS ---
    var ojoGeo = new THREE.SphereGeometry(0.5, 8, 8);
    var ojoMat = new THREE.MeshStandardMaterial({ color: 0x000000 });

    var ojo1 = new THREE.Mesh(ojoGeo, ojoMat);
    ojo1.position.set(-1, 13, 2.5);

    var ojo2 = new THREE.Mesh(ojoGeo, ojoMat);
    ojo2.position.set(1, 13, 2.5);

    // --- BRAZOS ---
    var brazoGeo = new THREE.CylinderGeometry(1, 1, 8, 12);
    var brazoMat = new THREE.MeshStandardMaterial({ color: 0x4a90e2 });

    var brazo1 = new THREE.Mesh(brazoGeo, brazoMat);
    brazo1.position.set(-4, 8, 0);
    brazo1.rotation.z = 1.2;

    var brazo2 = new THREE.Mesh(brazoGeo, brazoMat);
    brazo2.position.set(4, 8, 0);
    brazo2.rotation.z = -1.2;

    // --- PIERNAS ---
    var piernaGeo = new THREE.CylinderGeometry(1.4, 1.4, 8, 12);
    var piernaMat = new THREE.MeshStandardMaterial({ color: 0x000000 });

    var pierna1 = new THREE.Mesh(piernaGeo, piernaMat);
    pierna1.position.set(-1.8, 1.5, 0);

    var pierna2 = new THREE.Mesh(piernaGeo, piernaMat);
    pierna2.position.set(1.8, 1.5, 0);

    // --- GRUPO ---
    var personaGroup = new THREE.Group();
    personaGroup.add(cuerpo);
    personaGroup.add(cabeza);
    personaGroup.add(gorro);
    personaGroup.add(borla);
    personaGroup.add(ojo1);
    personaGroup.add(ojo2);
    personaGroup.add(brazo1);
    personaGroup.add(brazo2);
    personaGroup.add(pierna1);
    personaGroup.add(pierna2);

    personaGroup.position.set(x, y, z);

    return personaGroup;
}
