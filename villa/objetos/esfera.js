import * as THREE from "../js/three.module.js";

export default function EsferaNavidad({ x, y, z }) {

  // Cuerpo esfera
  var geoEsfera = new THREE.SphereGeometry(2, 32, 32);
  var materialEsfera = new THREE.MeshLambertMaterial({ color: 0xff0000 });
  var meshEsfera = new THREE.Mesh(geoEsfera, materialEsfera);
  meshEsfera.position.set(0, 0, 0);

  // Parte dorada 
  var geoSoporte = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 32);
  var materialSoporte = new THREE.MeshLambertMaterial({ color: 0xffd700 });
  var meshSoporte = new THREE.Mesh(geoSoporte, materialSoporte);
  meshSoporte.position.set(0, 2.5, 0);

  // Aro para colgar
  var geoAro = new THREE.TorusGeometry(0.35, 0.08, 16, 100);
  var meshAro = new THREE.Mesh(geoAro, materialSoporte);
  meshAro.rotation.x = 1.57; 
  meshAro.position.set(0, 2.8, 0);

  // Franja 
  var geoFranja = new THREE.TorusGeometry(2, 0.15, 16, 100);
  var materialFranja = new THREE.MeshLambertMaterial({ color: 0xffffff });
  var meshFranja = new THREE.Mesh(geoFranja, materialFranja);
  meshFranja.position.set(0, 0, 0);

  // Grupo
  var esferaGroup = new THREE.Group();
  esferaGroup.add(meshEsfera);
  esferaGroup.add(meshSoporte);
  esferaGroup.add(meshAro);
  esferaGroup.add(meshFranja);
  esferaGroup.position.set(x, y, z);

  return esferaGroup;
}
