import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Background3D.css';

const Background3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const innerModelRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 20;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Dış küp
    const outerGeometry = new THREE.BoxGeometry(8, 8, 8);
    const outerEdgesGeometry = new THREE.EdgesGeometry(outerGeometry);
    const outerMaterial = new THREE.LineBasicMaterial({ 
      color: 0x6E56CF,
      transparent: true,
      opacity: 0.6
    });
    const outerCube = new THREE.LineSegments(outerEdgesGeometry, outerMaterial);
    scene.add(outerCube);
    modelRef.current = outerCube;

    // İç küp
    const innerGeometry = new THREE.BoxGeometry(4, 4, 4);
    const innerEdgesGeometry = new THREE.EdgesGeometry(innerGeometry);
    const innerMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4F46E5,
      transparent: true,
      opacity: 0.8
    });
    const innerCube = new THREE.LineSegments(innerEdgesGeometry, innerMaterial);
    scene.add(innerCube);
    innerModelRef.current = innerCube;

    // Bağlantı çizgileri
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionMaterial = new THREE.LineBasicMaterial({ 
      color: 0x7C3AED,
      transparent: true,
      opacity: 0.3
    });

    // Köşe noktalarını bağla
    const points = [];
    const outerPoints = [
      new THREE.Vector3(-4, -4, -4),
      new THREE.Vector3(4, -4, -4),
      new THREE.Vector3(-4, 4, -4),
      new THREE.Vector3(4, 4, -4),
      new THREE.Vector3(-4, -4, 4),
      new THREE.Vector3(4, -4, 4),
      new THREE.Vector3(-4, 4, 4),
      new THREE.Vector3(4, 4, 4)
    ];
    const innerPoints = [
      new THREE.Vector3(-2, -2, -2),
      new THREE.Vector3(2, -2, -2),
      new THREE.Vector3(-2, 2, -2),
      new THREE.Vector3(2, 2, -2),
      new THREE.Vector3(-2, -2, 2),
      new THREE.Vector3(2, -2, 2),
      new THREE.Vector3(-2, 2, 2),
      new THREE.Vector3(2, 2, 2)
    ];

    for (let i = 0; i < 8; i++) {
      points.push(outerPoints[i], innerPoints[i]);
    }

    connectionGeometry.setFromPoints(points);
    const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    scene.add(connections);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Point lights
    const pointLight1 = new THREE.PointLight(0x6E56CF, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4F46E5, 2, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const animate = () => {
      requestAnimationFrame(animate);

      // Dış küp rotasyonu
      outerCube.rotation.x += 0.002;
      outerCube.rotation.y += 0.003;
      outerCube.rotation.z += 0.001;

      // İç küp ters rotasyonu
      innerCube.rotation.x -= 0.003;
      innerCube.rotation.y -= 0.002;
      innerCube.rotation.z -= 0.001;

      // Bağlantı çizgileri rotasyonu
      connections.rotation.x = outerCube.rotation.x * 0.5;
      connections.rotation.y = outerCube.rotation.y * 0.5;
      connections.rotation.z = outerCube.rotation.z * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      outerGeometry.dispose();
      outerEdgesGeometry.dispose();
      outerMaterial.dispose();
      innerGeometry.dispose();
      innerEdgesGeometry.dispose();
      innerMaterial.dispose();
      connectionGeometry.dispose();
      connectionMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="background-3d" />;
};

export default Background3D; 