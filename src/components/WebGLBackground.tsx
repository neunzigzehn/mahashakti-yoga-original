
import { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import Orbs from './three/Orbs';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Main WebGL component with premium visual effects
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

    // Optimized mouse tracking with throttling
    let lastUpdateTime = 0;
    const updateInterval = 30; // ms between updates for smoother performance
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      
      // Calculate smooth, normalized position
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.5, // Reduced sensitivity for smoother movement
        y: y * 0.5
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
        x: x * 0.5,
        y: y * 0.5
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
      {/* Premium background effect with radial gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(245, 243, 238, 0.8) 60%, rgba(229, 209, 184, 0.75) 100%)',
          backgroundBlendMode: 'screen',
          backgroundImage: `url(${noisePattern})`,
        }}
      />
      
      {/* Enhanced blur effect */}
      <div className="absolute inset-0 backdrop-blur-3xl opacity-70" />
      
      <Canvas 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'default',
          stencil: false,
          depth: true
        }}
        dpr={[0.8, 1.5]} 
        camera={{ position: [0, 0, 10], fov: 55, near: 0.1, far: 100 }}
        style={{ mixBlendMode: 'plus-lighter' }} // Premium blend mode
      >
        <fog attach="fog" args={['#F5F3EE', 30, 50]} />
        <Lighting />
        <Orbs mousePosition={mousePosition} />
        
        {/* Post-processing effects for premium look */}
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={0.8}
            blendFunction={BlendFunction.SCREEN}
          />
          <DepthOfField
            focusDistance={0.02}
            focalLength={0.05}
            bokehScale={3}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
