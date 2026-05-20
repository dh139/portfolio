import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Renders a premium, interactive WebGL 3D scene displaying a glossy refractive 
 * glass Torus Knot shape which reacts to mouse-hover and drifts with inertia.
 */
const Hero3DCanvas = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || 450;
    let height = container.clientHeight || 450;

    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 7.5;

    // Create WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Torus Knot Geometry (curvy, rich with reflections)
    const geometry = new THREE.TorusKnotGeometry(1.15, 0.38, 160, 18);

    // Create Physical Refractive Glass Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5, // Base indigo tint
      emissive: 0x1e1b4b, // Deep cosmic purple self-illumination
      roughness: 0.04,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      transmission: 0.94, // Solid refraction translucent state
      ior: 1.56, // Index of refraction of fine crystal glass
      thickness: 1.6,
      flatShading: false
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Cybernetic wireframe overlay for futuristic technical aesthetics
    const wireframeGeometry = new THREE.TorusKnotGeometry(1.15, 0.385, 160, 18);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Electric cyan line details
      wireframe: true,
      transparent: true,
      opacity: 0.16
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    mesh.add(wireframeMesh);

    // Set Lighting Rig (Highly colorful reactive cyberpunk lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    // Point Light 1: Radiant Magenta (top right front)
    const magentaLight = new THREE.PointLight(0xdb2777, 8, 20);
    magentaLight.position.set(4, 3, 2.5);
    scene.add(magentaLight);

    // Point Light 2: Electric Cyan (bottom left front)
    const cyanLight = new THREE.PointLight(0x06b6d4, 8, 20);
    cyanLight.position.set(-4, -3, 2.5);
    scene.add(cyanLight);

    // Point Light 3: Indigo / Violet (rear glowing backplate)
    const violetLight = new THREE.PointLight(0x8b5cf6, 6, 20);
    violetLight.position.set(0, 4.5, -2);
    scene.add(violetLight);

    // Mouse Tracking Coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      // Map coordinates to normalized range: -1 to 1
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 1.8;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 1.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize Adjustments
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Core Animation Frame Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Fluid levitation movement
      mesh.position.y = Math.sin(elapsed * 1.6) * 0.12;

      // Control rotation speeds based on hover state
      const baseRotation = hovered ? 0.5 : 0.2;
      mesh.rotation.x = elapsed * 0.14 * baseRotation;
      mesh.rotation.y = elapsed * 0.18 * baseRotation;

      // Interpolate mesh position toward mouse offsets for magnetic elasticity
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      mesh.position.x = targetX * 1.15;
      mesh.position.y += -targetY * 1.15;

      // Slowly counter-spin the wireframe overlay for complexity
      wireframeMesh.rotation.z = elapsed * 0.06;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup resources
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      renderer.dispose();
    };
  }, [hovered]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[320px] sm:h-[420px] md:h-[480px] flex items-center justify-center relative cursor-grab active:cursor-grabbing z-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <canvas ref={canvasRef} className="absolute max-w-full max-h-full" />
    </div>
  );
};

export default Hero3DCanvas;
