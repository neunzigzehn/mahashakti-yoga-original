
import { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Orbs from './three/Orbs';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Optimized WebGL background component with fixed visibility issues
const WebGLBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  
  useEffect(() => {
    // Check if WebGL is available
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsWebGLAvailable(!!gl);
    } catch (e) {
      setIsWebGLAvailable(false);
      console.error("WebGL not supported:", e);
    }

    // Mouse/touch tracking
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.2, // Increased sensitivity
        y: y * 0.2
      });
    };

    // Touch handling
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      
      const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.2,
        y: y * 0.2
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Noise pattern for background
  const noisePattern = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const value = Math.random() * 12;
          ctx.fillStyle = `rgba(255, 255, 255, ${value / 100})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    return canvas.toDataURL('image/webp', 0.8);
  }, []);

  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      {/* Lighter background to ensure orbs are visible */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.97) 0%, rgba(245, 243, 238, 0.9) 60%, rgba(229, 209, 184, 0.85) 100%)',
          backgroundBlendMode: 'screen',
          backgroundImage: `url(${noisePattern})`,
        }}
      />
      
      {/* Reduced blur effect to ensure orbs are visible */}
      <div className="absolute inset-0 backdrop-blur-[15px] opacity-20" />
      
      <Canvas 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: false,
        }}
        dpr={[1, 2]} 
        camera={{ 
          position: [0, 0, 15], // Moved camera back to see orbs better
          fov: 50, 
          near: 0.1, 
          far: 100 
        }}
        style={{ mixBlendMode: 'plus-lighter' }}
      >
        <Lighting />
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
