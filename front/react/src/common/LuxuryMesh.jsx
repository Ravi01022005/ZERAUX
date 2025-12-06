import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LuxuryMesh() {
const containerRef = useRef(null);

useEffect(() => {
const container = containerRef.current;
const width = container.clientWidth;
const height = container.clientHeight;


// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// Scene / Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 500);
camera.position.set(0, 0, 90);

// Nodes
const nodeCount = 120;
const nodes = [];
const nodeGeometry = new THREE.SphereGeometry(0.6, 12, 12);
const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xE6A400});

for (let i = 0; i < nodeCount; i++) {
  const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
  node.position.set(
    (Math.random() - 0.5) * 80,
    (Math.random() - 0.5) * 80,
    (Math.random() - 0.5) * 80
  );

  // Random velocity
  node.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 0.15,
    (Math.random() - 0.5) * 0.15,
    (Math.random() - 0.5) * 0.15
  );

  scene.add(node);
  nodes.push(node);
}

// Lines between close nodes
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0xffb14d,
  transparent: true,
  opacity: 0.45,
});

const lineGeometry = new THREE.BufferGeometry();
const positions = [];

function updateLines() {
  positions.length = 0;
  nodes.forEach((a) => {
    nodes.forEach((b) => {
      if (a !== b) {
        const dist = a.position.distanceTo(b.position);
        if (dist < 22) {
          positions.push(
            a.position.x, a.position.y, a.position.z,
            b.position.x, b.position.y, b.position.z
          );
        }
      }
    });
  });

  lineGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  lineGeometry.computeBoundingSphere();
}

updateLines();
const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(lines);

// Hover glow
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
});

// Animation
function animate() {
  requestAnimationFrame(animate);

  // Move each node randomly
  nodes.forEach((node) => {
    node.position.add(node.velocity);

    // Small random change in velocity
    node.velocity.x += (Math.random() - 0.5) * 0.01;
    node.velocity.y += (Math.random() - 0.5) * 0.01;
    node.velocity.z += (Math.random() - 0.5) * 0.01;

    // Clamp speed
    node.velocity.clampScalar(-0.2, 0.2);

    // Bounce inside boundaries
    const bound = 45;
    ["x", "y", "z"].forEach((axis) => {
      if (node.position[axis] > bound || node.position[axis] < -bound) {
        node.velocity[axis] *= -1;
      }
    });
  });

  // Update lines
  updateLines();

  // Hover detection
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(nodes);

  if (intersects.length > 0) {
    intersects[0].object.material.color.set(0xffe7a3);
    lineMaterial.opacity = 1;
    lineMaterial.color.set(0xffe7a3);
  } else {
    lineMaterial.opacity = 0.45;
    lineMaterial.color.set(0xffb14d);
    nodeMaterial.color.set(0xffc56e);
  }

  renderer.render(scene, camera);
}

animate();

// Resize handler
window.addEventListener("resize", () => {
  const w = container.clientWidth;
  const h = container.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});

return () => container.removeChild(renderer.domElement);


}, []);

return (
<div
ref={containerRef}
style={{
width: "250%",
height: "570px",
background: "transparent",
}}
/>

);
}
