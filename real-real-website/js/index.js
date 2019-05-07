// Three.js - Background Cubemap
// from https://threejsfundamentals.org/threejs/threejs-background-cubemap.html

  'use strict';

/* global THREE */

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.autoClearColor = false;

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 0;

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 45, 90);
  controls.update();

  const scene = new THREE.Scene();

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(1, 1, 1);
    scene.add(light);
    var light3 = new THREE.AmbientLight( 0xfccfcc );
		scene.add( light3 );
  }

  				// world
				var geometry = new THREE.SphereBufferGeometry( 2, 56, 56  );
				var material = new THREE.MeshPhongMaterial( { color: 0xfbed21, flatShading: true } );
				for ( var i = 0; i < 50; i ++ ) {
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = ( Math.random() - 0.2 ) * 300;
					mesh.position.y = ( Math.random() - 0.2 ) * 300;
					mesh.position.z = ( Math.random() - 0.5 ) * 300;
					mesh.updateMatrix();
					mesh.matrixAutoUpdate = false;
					scene.add( mesh );
				}

        var geometry2 = new THREE.SphereBufferGeometry( 1, 56, 56  );
				var material2 = new THREE.MeshPhongMaterial( { color: 0xfbed21, flatShading: true } );
				for ( var i = 0; i < 800; i ++ ) {
					var mesh2 = new THREE.Mesh( geometry2, material2 );
					mesh2.position.x = ( Math.random() - 0.5 ) * 300;
					mesh2.position.y = ( Math.random() - 0.2 ) * 300;
					mesh2.position.z = ( Math.random() - 0.2 ) * 300;
					mesh2.updateMatrix();
					mesh2.matrixAutoUpdate = false;
					scene.add( mesh2 );
				}


  {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      "https://live.staticflickr.com/65535/47745369902_28eddd0f6f_k.jpg", "https://live.staticflickr.com/65535/40831367863_096816c84c_k.jpg", "https://live.staticflickr.com/65535/47682930712_2388b77554_k.jpg", "https://live.staticflickr.com/65535/47682946012_9701e71c13_k.jpg", "https://live.staticflickr.com/65535/47745369822_b3bbba03e8_k.jpg", "https://live.staticflickr.com/65535/47745369942_ad8bbe12de_k.jpg",
    ]);
    scene.background = texture;
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();