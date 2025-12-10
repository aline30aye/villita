import * as THREE from "../js/three.module.js";

export default function Elfo1({ x, y, z }) {



    // --- CUERPO ---
    var cuerpo = new THREE.Mesh(
        new THREE.CylinderGeometry(3, 3, 8, 16),
        new THREE.MeshStandardMaterial({ color: 0x1ba047 }) // verde
    );
    cuerpo.position.set(0, 5.5, 0);

    // --- CABEZA ---
    var cabeza = new THREE.Mesh(
        new THREE.SphereGeometry(3, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xffe0bd })
    );
    cabeza.position.set(0, 12, 0);

    // --- OREJAS PUNTIAGUDAS ---
    var oreja1 = new THREE.Mesh(
        new THREE.ConeGeometry(1.2, 2.5, 12),
        new THREE.MeshStandardMaterial({ color: 0xffe0bd })
    );
    oreja1.position.set(-3.2, 12, 0);
    oreja1.rotation.z = 0.9;

    var oreja2 = new THREE.Mesh(
        new THREE.ConeGeometry(1.2, 2.5, 12),
        new THREE.MeshStandardMaterial({ color: 0xffe0bd })
    );
    oreja2.position.set(3.2, 12, 0);
    oreja2.rotation.z = -0.9;

    // --- GORRO ---
    var gorro = new THREE.Mesh(
        new THREE.ConeGeometry(4, 7, 16),
        new THREE.MeshStandardMaterial({ color: 0xd40000 })
    );
    gorro.position.set(0, 17, 0);

    var borla = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    borla.position.set(0, 20, 0);

    // --- OJOS ---
    var ojo1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 8, 8),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    ojo1.position.set(-1, 12.3, 2.5);

    var ojo2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 8, 8),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    ojo2.position.set(1, 12.3, 2.5);

    // --- BRAZOS ---
    var brazo1 = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 7, 12),
        new THREE.MeshStandardMaterial({ color: 0x1ba047 })
    );
    brazo1.position.set(-4, 6, 0);
    brazo1.rotation.z = -0.59;

    var brazo2 = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 7, 12),
        new THREE.MeshStandardMaterial({ color: 0x1ba047 })
    );
    brazo2.position.set(4, 8, 0);
    brazo2.rotation.z = -0.39;

    // --- MANOS ---
    var mano1 = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xffe0bd })
    );
    mano1.position.set(-6.4, 3, 0);

    var mano2 = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xffe0bd })
    );
    mano2.position.set(5.8, 12, 0);

    
    // --- PIERNAS ---
    var pierna1 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.3, 8, 12),
        new THREE.MeshStandardMaterial({ color: 0x6d3f00 })
    );
    pierna1.position.set(-1.6, 1.5, 0);

    var pierna2 = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.3, 8, 12),
        new THREE.MeshStandardMaterial({ color: 0x6d3f00 })
    );
    pierna2.position.set(1.6, 1.5, 0);

    // --- GRUPO ---
    var elfo = new THREE.Group();
    elfo.add(cuerpo, cabeza, oreja1, oreja2, gorro, borla, ojo1, ojo2, brazo1, brazo2,mano1, mano2, pierna1, pierna2);

    elfo.position.set(x, y, z);
    return elfo;
}