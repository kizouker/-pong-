import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas');
  if (!canvas) {
    console.error("Kunde inte hitta <canvas> med id 'canvas'");
    return;
  }

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const loader = new THREE.TextureLoader();
  const texture = loader.load('./assets/pong2025.png');

  const materials = Array(6).fill(new THREE.MeshBasicMaterial({ map: texture }));

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);

  let reverse = false;

  canvas.addEventListener('mouseenter', () => reverse = true);
  canvas.addEventListener('mouseleave', () => reverse = false);

  function animate() {
    requestAnimationFrame(animate);
    const speed = reverse ? -0.01 : 0.01;
    cube.rotation.x += speed;
    cube.rotation.y += speed;
    renderer.render(scene, camera);
  }

  animate();
});
