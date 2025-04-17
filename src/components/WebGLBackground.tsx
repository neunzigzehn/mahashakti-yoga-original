import { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Orbs from './three/Orbs';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Main WebGL component with visual effects
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

    // Optimized mouse tracking with more throttling for smoother movement
    let lastUpdateTime = 0;
    const updateInterval = 50; // Increased time between updates for smoother performance
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      
      // Calculate smooth, normalized position with reduced sensitivity
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.3, // Further reduced sensitivity for smoother movement
        y: y * 0.3
      });
    };

    // Optimized touch handling
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      
      const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.3,
        y: y * 0.3
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Enhanced noise pattern for background
  const noisePattern = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const value = Math.random() * 20; // Subtle noise
          ctx.fillStyle = `rgba(255, 255, 255, ${value / 100})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    return canvas.toDataURL();
  }, []);

  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      {/* Premium background effect with softer radial gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.97) 0%, rgba(245, 243, 238, 0.85) 60%, rgba(229, 209, 184, 0.8) 100%)',
          backgroundBlendMode: 'screen',
          backgroundImage: `url(${noisePattern})`,
        }}
      />
      
      {/* Enhanced blur effect */}
      <div className="absolute inset-0 backdrop-blur-[50px] opacity-70" />
      
      <Canvas 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'default',
          stencil: false,
          depth: true
        }}
        dpr={[0.7, 1.2]} // Slightly reduced DPR for better performance
        camera={{ position: [0, 0, 15], fov: 45, near: 0.1, far: 120 }} // Adjusted camera for better view
        style={{ mixBlendMode: 'plus-lighter' }} // Premium blend mode
      >
        <Lighting />
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
