import * as THREE from "../js/three.module.js";

export default function ArbolNavidadGrande({ x, y, z }) {

  // TRONCO 
  var geoTronco = new THREE.CylinderGeometry(1.3, 1.6, 5, 32);
  var matTronco = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
  var tronco = new THREE.Mesh(geoTronco, matTronco);
  tronco.position.set(0, -5, 0);

  // COPAS 
  var matVerde = new THREE.MeshLambertMaterial({ color: 0x006400 });

  var geoCopa1 = new THREE.ConeGeometry(6, 6, 32);
  var copa1 = new THREE.Mesh(geoCopa1, matVerde);
  copa1.position.set(0, -1.5, 0);

  var geoCopa2 = new THREE.ConeGeometry(5, 5, 32);
  var copa2 = new THREE.Mesh(geoCopa2, matVerde);
  copa2.position.set(0, 2.5, 0);

  var geoCopa3 = new THREE.ConeGeometry(4, 5, 32);
  var copa3 = new THREE.Mesh(geoCopa3, matVerde);
  copa3.position.set(0, 6.5, 0);

  // ESTRELLA SUPERIOR 
  var geoEstrella = new THREE.OctahedronGeometry(1.2);
  var matEstrella = new THREE.MeshLambertMaterial({ color: 0xffd700 });
  var estrella = new THREE.Mesh(geoEstrella, matEstrella);
  estrella.position.set(0, 10, 0);

  // ESFERAS DE COLORES 
  var geoEsfera = new THREE.SphereGeometry(0.8, 16, 16);

  var matRojo = new THREE.MeshLambertMaterial({ color: 0xff0000 });
  var matVerdeClaro = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
  var matAzul = new THREE.MeshLambertMaterial({ color: 0x0000ff });
  var matDorado = new THREE.MeshLambertMaterial({ color: 0xffd700 });
  var matRosa = new THREE.MeshLambertMaterial({ color: 0xff69b4 });

  // Esferas colocadas manualmente

  var esfera1 = new THREE.Mesh(geoEsfera, matRojo);
  esfera1.position.set(3, -1, 2);

  var esfera2 = new THREE.Mesh(geoEsfera, matAzul);
  esfera2.position.set(-2, 0, -3);

  var esfera3 = new THREE.Mesh(geoEsfera, matDorado);
  esfera3.position.set(2, 3, -2);

  var esfera4 = new THREE.Mesh(geoEsfera, matVerdeClaro);
  esfera4.position.set(-3, 4, 1);

  var esfera5 = new THREE.Mesh(geoEsfera, matRosa);
  esfera5.position.set(1, 6, 2);

  var esfera6 = new THREE.Mesh(geoEsfera, matRojo);
  esfera6.position.set(3, 2, -1);

  var esfera7 = new THREE.Mesh(geoEsfera, matAzul);
  esfera7.position.set(-1, 5, -2);

  // ---------- REGALOS ----------
  var matRegaloRojo = new THREE.MeshLambertMaterial({ color: 0xd32f2f });
  var matRegaloAzul = new THREE.MeshLambertMaterial({ color: 0x1e90ff });
  var matRegaloVerde = new THREE.MeshLambertMaterial({ color: 0x228b22 });

  var geoRegalo1 = new THREE.BoxGeometry(2.5, 2, 2.5);
  var regalo1 = new THREE.Mesh(geoRegalo1, matRegaloRojo);
  regalo1.position.set(4, -6.5, 2);

  var geoRegalo2 = new THREE.BoxGeometry(2, 1.6, 2);
  var regalo2 = new THREE.Mesh(geoRegalo2, matRegaloAzul);
  regalo2.position.set(-4, -6.7, -1);

  var geoRegalo3 = new THREE.BoxGeometry(3, 2.2, 3);
  var regalo3 = new THREE.Mesh(geoRegalo3, matRegaloVerde);
  regalo3.position.set(0, -6.6, -3);

  // ---------- GRUPO GENERAL ----------
  var grupo = new THREE.Group();
  grupo.add(tronco);
  grupo.add(copa1);
  grupo.add(copa2);
  grupo.add(copa3);
  grupo.add(estrella);

  grupo.add(esfera1);
  grupo.add(esfera2);
  grupo.add(esfera3);
  grupo.add(esfera4);
  grupo.add(esfera5);
  grupo.add(esfera6);
  grupo.add(esfera7);

  grupo.add(regalo1);
  grupo.add(regalo2);
  grupo.add(regalo3);

  grupo.position.set(x, y, z);
  return grupo;
}