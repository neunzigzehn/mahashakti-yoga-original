
import { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Orbs from './three/Orbs';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Optimized WebGL background component for production
const WebGLBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  
  useEffect(() => {
    // Check if WebGL is available - crucial for production
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsWebGLAvailable(!!gl);
    } catch (e) {
      setIsWebGLAvailable(false);
      console.error("WebGL not supported:", e);
    }

    // Production-optimized mouse/touch tracking with better throttling
    let lastUpdateTime = 0;
    const updateInterval = 120; // Further throttling for production performance
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      
      // Calculate smooth normalized position with optimized sensitivity
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.15, // Fine-tuned sensitivity
        y: y * 0.15
      });
    };

    // Production-optimized touch handling
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      
      const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.15,
        y: y * 0.15
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true }); // Passive flag for better performance
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Optimized noise pattern for production with better caching
  const noisePattern = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256; // Increased for better quality
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const value = Math.random() * 12; // Subtle noise
          ctx.fillStyle = `rgba(255, 255, 255, ${value / 100})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    return canvas.toDataURL('image/webp', 0.8); // WebP for better compression
  }, []);

  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      {/* Production-optimized background with better gradients */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.97) 0%, rgba(245, 243, 238, 0.9) 60%, rgba(229, 209, 184, 0.85) 100%)',
          backgroundBlendMode: 'screen',
          backgroundImage: `url(${noisePattern})`,
        }}
      />
      
      {/* Optimized blur effect for production */}
      <div className="absolute inset-0 backdrop-blur-[25px] opacity-25" />
      
      <Canvas 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance', // Better for production
          stencil: false,
          depth: false,
          failIfMajorPerformanceCaveat: false // More permissive for wider device support
        }}
        dpr={[1, window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio]} // Dynamic DPR based on device capability
        camera={{ 
          position: [0, 0, 8], 
          fov: 45, 
          near: 0.1, 
          far: 100 
        }}
        style={{ mixBlendMode: 'plus-lighter' }}
        performance={{ min: 0.5 }} // Performance optimization for production
      >
        <Lighting />
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
