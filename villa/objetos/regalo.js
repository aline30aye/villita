import * as THREE from "../js/three.module.js";

export default function regalo({ x, y, z }) {
      // Caja principal
      var geoCaja = new THREE.BoxGeometry(4, 4, 4);
      var materialCaja = new THREE.MeshLambertMaterial({ color: 0xff0000 });
      var meshCaja = new THREE.Mesh(geoCaja, materialCaja);
      meshCaja.position.set(0, 0, 0);

      // Tapa
      var geoTapa = new THREE.BoxGeometry(4.2, 0.6, 4.2);
      var materialTapa = new THREE.MeshLambertMaterial({ color: 0xcc0000 });
      var meshTapa = new THREE.Mesh(geoTapa, materialTapa);
      meshTapa.position.set(0, 2.3, 0);

      // Cinta vertical
      var geoCintaV = new THREE.BoxGeometry(0.4, 4.2, 4.1);
      var materialCinta = new THREE.MeshLambertMaterial({ color: 0xffd700 });
      var meshCintaV = new THREE.Mesh(geoCintaV, materialCinta);
      meshCintaV.position.set(0, 0, 0);

      // Cinta horizontal
      var geoCintaH = new THREE.BoxGeometry(4.1, 4.2, 0.4);
      var meshCintaH = new THREE.Mesh(geoCintaH, materialCinta);
      meshCintaH.position.set(0, 0, 0);

      // Moño decorativo
      var materialMoño = new THREE.MeshLambertMaterial({ color: 0xffd700 });

      // Centro del moño (esferita)
      var geoCentro = new THREE.SphereGeometry(0.3, 16, 16);
      var meshCentro = new THREE.Mesh(geoCentro, materialMoño);
      meshCentro.position.set(0, 2.9, 0);

      // Aros laterales
      var geoAro = new THREE.TorusGeometry(0.8, 0.15, 16, 100);
      var moñoIzq = new THREE.Mesh(geoAro, materialMoño);
      var moñoDer = new THREE.Mesh(geoAro, materialMoño);
      moñoIzq.rotation.x = 1.5;
      moñoDer.rotation.x = -1.5;
      moñoIzq.position.set(-0.8, 2.9, 0);
      moñoDer.position.set(0.8, 2.9, 0);


      // Grupo completo
      var cajaGroup = new THREE.Group();
      cajaGroup.add(meshCaja);
      cajaGroup.add(meshTapa);
      cajaGroup.add(meshCintaV);
      cajaGroup.add(meshCintaH);
      cajaGroup.add(meshCentro);
      cajaGroup.add(moñoIzq);
      cajaGroup.add(moñoDer);
      cajaGroup.position.set(x, y, z);

      return cajaGroup;
    }
