import * as THREE from 'three';

// Crie uma cena
const scene = new THREE.Scene();

// Crie uma câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crie um renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crie uma geometria (por exemplo, um cubo)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posicione a câmera
camera.position.z = 5;

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    // Rotacione o cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Renderize a cena
    renderer.render(scene, camera);
}

// Inicie a animação
animate();

