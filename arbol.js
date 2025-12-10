import * as THREE from "../js/three.module.js";

export default function BArbolNavidad({ x, y, z }) {


  // Tronco
  var geoTronco = new THREE.CylinderGeometry(0.4, 0.4, 1.5, 32);
  var materialTronco = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
  var meshTronco = new THREE.Mesh(geoTronco, materialTronco);
  meshTronco.position.set(0, -2.5, 0);

  // cono arriba
  var geoBase = new THREE.ConeGeometry(2.5, 3, 32);
  var materialVerde = new THREE.MeshLambertMaterial({ color: 0x006400 });
  var meshBase = new THREE.Mesh(geoBase, materialVerde);
  meshBase.position.set(0, -1.2, 0);

  // Parte media
  var geoMedio = new THREE.ConeGeometry(2, 2.5, 32);
  var meshMedio = new THREE.Mesh(geoMedio, materialVerde);
  meshMedio.position.set(0, 0.3, 0);

  // Parte superior
  var geoPunta = new THREE.ConeGeometry(1.4, 2, 32);
  var meshPunta = new THREE.Mesh(geoPunta, materialVerde);
  meshPunta.position.set(0, 1.9, 0);

  // Estrella dorada
  var geoEstrella = new THREE.OctahedronGeometry(0.4);
  var materialEstrella = new THREE.MeshLambertMaterial({ color: 0xffd700 });
  var meshEstrella = new THREE.Mesh(geoEstrella, materialEstrella);
  meshEstrella.position.set(0, 3, 0);

  // Grupo
  var arbolGroup = new THREE.Group();
  arbolGroup.add(meshTronco);
  arbolGroup.add(meshBase);
  arbolGroup.add(meshMedio);
  arbolGroup.add(meshPunta);
  arbolGroup.add(meshEstrella);
  arbolGroup.position.set(x, y, z);

  return arbolGroup;
}

