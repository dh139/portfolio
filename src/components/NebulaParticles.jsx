import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Renders a full-screen, highly optimized, non-intrusive 3D particle starfield 
 * in the background. Particles react subtly to mouse movements for interactive depth.
 */
const NebulaParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Three.js Scene Configuration
    const scene = new THREE.Scene();

    // Camera Configuration
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 32;

    // Renderer Configuration (Alpha enable ensures custom CSS page gradients show through)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Buffers Setup
    const particlesCount = 1400;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    // Specially curated cosmic colors matching Obsidian palette
    const colorPalette = [
      new THREE.Color('#8b5cf6'), // Cosmic Violet
      new THREE.Color('#06b6d4'), // Hyper Cyan
      new THREE.Color('#ec4899'), // Electric Magenta
      new THREE.Color('#3b82f6'), // Luminous Blue
    ];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Disperse particles randomly across a large 3D sphere field
      positions[i] = (Math.random() - 0.5) * 90;     // X
      positions[i + 1] = (Math.random() - 0.5) * 90; // Y
      positions[i + 2] = (Math.random() - 0.5) * 70; // Z

      // Distribute palette colors randomly across points
      const activeColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i] = activeColor.r;
      colors[i + 1] = activeColor.g;
      colors[i + 2] = activeColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Programmatic high-fidelity circular glow texture (prevents network assets from failing)
    const createCircularParticleTexture = () => {
      const matCanvas = document.createElement('canvas');
      matCanvas.width = 16;
      matCanvas.height = 16;
      const matContext = matCanvas.getContext('2d');
      const radialGlow = matContext.createRadialGradient(8, 8, 0, 8, 8, 8);
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
      radialGlow.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
      radialGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      matContext.fillStyle = radialGlow;
      matContext.fillRect(0, 0, 16, 16);

      const texture = new THREE.Texture(matCanvas);
      texture.needsUpdate = true;
      return texture;
    };

    // Material Configuration
    const material = new THREE.PointsMaterial({
      size: 0.16,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: createCircularParticleTexture(),
      transparent: true,
      opacity: 0.75,
    });

    const starfield = new THREE.Points(geometry, material);
    scene.add(starfield);

    // Ambient floating lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Parallax Mouse Variables
    let mouseX = 0;
    let mouseY = 0;
    let lerpTargetX = 0;
    let lerpTargetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 12;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 12;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Canvas Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();
    let animFrameId;

    const tick = () => {
      const elapsed = clock.getElapsedTime();

      // Rotate starfield slowly and dynamically
      starfield.rotation.y = elapsed * 0.012;
      starfield.rotation.x = elapsed * 0.006;

      // Apply smooth mouse lerping for fluid 3D parallax
      lerpTargetX += (mouseX - lerpTargetX) * 0.04;
      lerpTargetY += (mouseY - lerpTargetY) * 0.04;

      starfield.position.x = lerpTargetX;
      starfield.position.y = -lerpTargetY;

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(tick);
    };

    tick();

    // Clean up all resources when unmounted to avoid leaks
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#030014]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default NebulaParticles;
