import * as THREE from "../js/three.module.js";

export default function MuñecoNieve({ x, y, z }) {
 // Esfera base
  var materialNieve = new THREE.MeshLambertMaterial
  ({ color: 0xffffff });
  var geoBase = new THREE.SphereGeometry(2, 32, 32);
  var meshBase = new THREE.Mesh(geoBase, materialNieve);
  meshBase.position.set(0, -2, 0);

  // Esfera media
  var geoMedio = new THREE.SphereGeometry(1.5, 32, 32);
  var meshMedio = new THREE.Mesh(geoMedio, materialNieve);
  meshMedio.position.set(0, 0.2, 0);

  // Esfera cabeza
  var geoCabeza = new THREE.SphereGeometry(1, 32, 32);
  var meshCabeza = new THREE.Mesh(geoCabeza, materialNieve);
  meshCabeza.position.set(0, 1.8, 0);

  // Sombrero 
  var materialSombrero = new THREE.MeshLambertMaterial
  ({ color: 0x000000 });
  var geoAla = new THREE.CylinderGeometry(1.3, 1.3, 0.2, 32);
  var meshAla = new THREE.Mesh(geoAla, materialSombrero);
  meshAla.position.set(0, 2.7, 0);

  var geoCopa = new THREE.CylinderGeometry(0.7, 0.7, 1, 32);
  var meshCopa = new THREE.Mesh(geoCopa, materialSombrero);
  meshCopa.position.set(0, 3.3, 0);

  // Nariz de zanahoria 
  var geoNariz = new THREE.ConeGeometry(0.15, 0.6, 16);
  var materialNariz = new THREE.MeshLambertMaterial
  ({ color: 0xffa500 });
  var meshNariz = new THREE.Mesh(geoNariz, materialNariz);
  meshNariz.rotation.x =1.57;
  meshNariz.position.set(0, 1.8, 1);

  // Ojos 
  var geoOjo = new THREE.SphereGeometry(0.08, 16, 16);
  var materialOjo = new THREE.MeshLambertMaterial
  ({ color: 0x000000 });
  var ojoIzq = new THREE.Mesh(geoOjo, materialOjo);
  ojoIzq.position.set(-0.3, 2.0, 0.95);

  var ojoDer = new THREE.Mesh(geoOjo, materialOjo);
  ojoDer.position.set(0.3, 2.0, 0.95);

  // Botones 
  var geoBoton = new THREE.SphereGeometry(0.1, 16, 16);
  var materialBoton = new THREE.MeshLambertMaterial
  ({ color: 0x000000 });
  var boton1 = new THREE.Mesh(geoBoton, materialBoton);
  boton1.position.set(0, 0.8, 1.4);
  var boton2 = new THREE.Mesh(geoBoton, materialBoton);
  boton2.position.set(0, 0.3, 1.55);
  var boton3 = new THREE.Mesh(geoBoton, materialBoton);
  boton3.position.set(0, -0.2, 1.5);

  // Bufanda 
  var geoBufanda = new THREE.TorusGeometry
  (0.8, 0.25, 16, 100);
  var materialBufanda = new THREE.MeshLambertMaterial
  ({ color: 0xff0000 });
  var meshBufanda = new THREE.Mesh(geoBufanda, materialBufanda);
  meshBufanda.rotation.x = 1.57;
  meshBufanda.position.set(0, 1.35, 0);

  // Brazos 
  var materialBrazo = new THREE.MeshLambertMaterial
  ({ color: 0x8b4513 });
  var geoBrazo = new THREE.CylinderGeometry(0.08, 0.08, 2.5, 16);
  var brazoIzq = new THREE.Mesh(geoBrazo, materialBrazo);
  brazoIzq.rotation.z =1.05;
  brazoIzq.position.set(-2.2, 0.6, 0);

  var brazoDer = new THREE.Mesh(geoBrazo, materialBrazo);
  brazoDer.rotation.z = -1.05;
  brazoDer.position.set(2.2, 0.6, 0);

  // Grupo completo
 var grupoMuñeco = new THREE.Group();
  grupoMuñeco.add(meshBase);
  grupoMuñeco.add(meshMedio);
  grupoMuñeco.add(meshCabeza);
  grupoMuñeco.add(meshAla);
  grupoMuñeco.add(meshCopa);
  grupoMuñeco.add(meshNariz);
  grupoMuñeco.add(ojoIzq);
  grupoMuñeco.add(ojoDer);
  grupoMuñeco.add(boton1);
  grupoMuñeco.add(boton2);
  grupoMuñeco.add(boton3);
  grupoMuñeco.add(meshBufanda);
  grupoMuñeco.add(brazoIzq);
  grupoMuñeco.add(brazoDer);
  grupoMuñeco.position.set(x, y, z);
  
  return grupoMuñeco;
}
