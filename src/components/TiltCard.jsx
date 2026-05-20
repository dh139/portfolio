import React, { useRef, useState } from 'react';

/**
 * A highly interactive card wrapper that tilts in 3D perspective and casts 
 * a dynamic radial glow spotlight tracking the user's cursor.
 */
const TiltCard = ({ children, className = '', glowColor = 'rgba(139, 92, 246, 0.15)' }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to the card container
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to 0.5
    const x = (mouseX / width) - 0.5;
    const y = (mouseY / height) - 0.5;
    
    // Calculate rotation angles (up to 12 degrees max rotation for natural feel)
    const rotateX = -y * 12;
    const rotateY = x * 12;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlow({ x: mouseX, y: mouseY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    // Reset to flat state smoothly
    setRotate({ x: 0, y: 0 });
    setGlow(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out select-none ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.01, 1.01, 1.01)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Spotlight cursor glow overlay */}
      <div
        className="absolute -inset-px rounded-[inherit] pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(300px circle at ${glow.x}px ${glow.y}px, ${glowColor}, transparent 50%)`,
        }}
      />
      <div style={{ transform: 'translateZ(15px)' }} className="h-full w-full relative z-20">
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
