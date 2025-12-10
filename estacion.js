import * as THREE from "../js/three.module.js";

export default function TrenNavideno({ x, y, z }) {
    
    var trenGroup = new THREE.Group();

    // Materiales
    var matCuerpo = new THREE.MeshLambertMaterial({ color: 0xff0000 }); 
    var matCaldera = new THREE.MeshLambertMaterial({ color: 0x222222 }); 
    var matDorado = new THREE.MeshLambertMaterial({ color: 0xFFD700 }); 
    var matHumo = new THREE.MeshBasicMaterial({ color: 0xffffff }); 
    var matVagon = new THREE.MeshLambertMaterial({ color: 0x008000 }); 
    var matNegro = new THREE.MeshLambertMaterial({ color: 0x111111 });
    var matRojo = new THREE.MeshLambertMaterial({ color: 0xaa0000 });
    
    // Regalos
    var matRegaloOro = new THREE.MeshLambertMaterial({color: 0xffd700});
    var matRegaloAzul = new THREE.MeshLambertMaterial({color: 0x0000ff});
    var matRegaloRosa = new THREE.MeshLambertMaterial({color: 0xff00ff});


    // Funcion para hacer ruedas
    function CrearRueda(xPos, zPos) {
        var rueda = new THREE.Group();

        var geoLlanta = new THREE.TorusGeometry(0.4, 0.15, 8, 16);
        var llanta = new THREE.Mesh(geoLlanta, matNegro);
        rueda.add(llanta);

        var geoCentro = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 8);
        var centro = new THREE.Mesh(geoCentro, matRojo);
        centro.rotation.x = 1.57; 
        rueda.add(centro);

        rueda.position.set(xPos, 0.55, zPos);
        return rueda;
    }


    // Locomotora

    // Base
    var geoBase = new THREE.BoxGeometry(4, 1, 2);
    var baseLoco = new THREE.Mesh(geoBase, matCuerpo);
    baseLoco.position.set(0, 1, 0);
    trenGroup.add(baseLoco);

    // Caldera
    var geoCaldera = new THREE.CylinderGeometry(0.8, 0.8, 2.5, 16);
    var caldera = new THREE.Mesh(geoCaldera, matCaldera);
    caldera.rotation.z = 1.57; 
    caldera.position.set(0.5, 2, 0); 
    trenGroup.add(caldera);

    // Cabina
    var geoCabina = new THREE.BoxGeometry(1.5, 2, 2);
    var cabina = new THREE.Mesh(geoCabina, matCuerpo);
    cabina.position.set(-1.2, 2, 0);
    trenGroup.add(cabina);

    // Techo
    var geoTecho = new THREE.BoxGeometry(1.8, 0.2, 2.2);
    var techo = new THREE.Mesh(geoTecho, matDorado);
    techo.position.set(-1.2, 3.1, 0);
    trenGroup.add(techo);

    // Chimenea
    var geoChimenea = new THREE.CylinderGeometry(0.3, 0.2, 1, 8);
    var chimenea = new THREE.Mesh(geoChimenea, matDorado);
    chimenea.position.set(1.2, 2.8, 0);
    trenGroup.add(chimenea);

    // Defensa
    var geoDefensa = new THREE.CylinderGeometry(0, 1, 2, 3);
    var defensa = new THREE.Mesh(geoDefensa, matDorado);
    defensa.rotation.z = -1.57; 
    defensa.rotation.y = 1.57; 
    defensa.position.set(2.5, 0.5, 0);
    trenGroup.add(defensa);

    // Ruedas Locomotora
    var r1 = CrearRueda(-1, 1.1); 
    trenGroup.add(r1);
    
    var r2 = CrearRueda(1, 1.1); 
    trenGroup.add(r2);
    
    var r3 = CrearRueda(-1, -1.1); 
    trenGroup.add(r3);
    
    var r4 = CrearRueda(1, -1.1); 
    trenGroup.add(r4);


    // Vagon de Carga
    
    // Conector
    var geoConector = new THREE.BoxGeometry(1, 0.2, 0.5);
    var conector = new THREE.Mesh(geoConector, matCaldera);
    conector.position.set(-2.5, 0.8, 0);
    trenGroup.add(conector);

    // Base Vagon
    var geoBaseVagon = new THREE.BoxGeometry(3, 1, 2);
    var baseVagon = new THREE.Mesh(geoBaseVagon, matVagon);
    baseVagon.position.set(-4.5, 1, 0);
    trenGroup.add(baseVagon);

    // Cuerpo Vagon
    var geoCuerpoVagon = new THREE.BoxGeometry(3, 1.5, 2);
    var cuerpoVagon = new THREE.Mesh(geoCuerpoVagon, matVagon);
    cuerpoVagon.position.set(-4.5, 2, 0);
    trenGroup.add(cuerpoVagon);

    // Regalos
    var geoRegalo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    
    var reg1 = new THREE.Mesh(geoRegalo, matRegaloOro);
    reg1.position.set(-4.5, 3, 0);
    trenGroup.add(reg1);

    var reg2 = new THREE.Mesh(geoRegalo, matRegaloAzul);
    reg2.position.set(-5, 3, 0.5);
    reg2.rotation.y = 0.5;
    trenGroup.add(reg2);

    var reg3 = new THREE.Mesh(geoRegalo, matRegaloRosa);
    reg3.position.set(-4, 3, -0.5);
    trenGroup.add(reg3);

    // Ruedas Vagon
    var rv1 = CrearRueda(-3.8, 1.1); 
    trenGroup.add(rv1);
    
    var rv2 = CrearRueda(-5.2, 1.1); 
    trenGroup.add(rv2);
    
    var rv3 = CrearRueda(-3.8, -1.1); 
    trenGroup.add(rv3);
    
    var rv4 = CrearRueda(-5.2, -1.1); 
    trenGroup.add(rv4);


    // Humo
    var geoHumo = new THREE.SphereGeometry(0.3, 8, 8);
    
    var h1 = new THREE.Mesh(geoHumo, matHumo);
    h1.position.set(1.2, 3.6, 0);
    trenGroup.add(h1);

    var h2 = new THREE.Mesh(geoHumo, matHumo);
    h2.position.set(1.4, 4.0, 0.2);
    h2.scale.set(1.2, 1.2, 1.2); 
    trenGroup.add(h2);

    var h3 = new THREE.Mesh(geoHumo, matHumo);
    h3.position.set(1.0, 4.4, -0.1);
    h3.scale.set(1.5, 1.5, 1.5); 
    trenGroup.add(h3);


    // Posicion final
    trenGroup.position.set(x, y, z);

    return trenGroup;
}