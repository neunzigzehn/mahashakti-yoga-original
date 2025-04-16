
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Orbs from './three/Orbs';
import BlurEffect from './three/BlurEffect';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Main WebGL component
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

    // Track mouse movement with minimal throttling for smoother tracking
    let timeoutId: number;
    let lastUpdateTime = 0;
    const updateInterval = 30; // ms between updates for smoother tracking
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = window.setTimeout(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Less dampening for better responsiveness
        setMousePosition({
          x: x * 0.85, 
          y: y * 0.85
        });
        
        timeoutId = 0;
      }, 10); // Faster response time
    };

    // Track touch movement for mobile with reduced throttling
    const handleTouchMove = (e: TouchEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval || e.touches.length === 0) return;
      
      lastUpdateTime = currentTime;
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = window.setTimeout(() => {
        const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        
        setMousePosition({
          x: x * 0.85,
          y: y * 0.85
        });
        
        timeoutId = 0;
      }, 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        dpr={[1, 2]} // Increased DPR for better quality
        camera={{ position: [0, 0, 15], fov: 50 }} // Moved camera closer with narrower field of view
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        <BlurEffect />
        <Lighting />
        <fog attach="fog" args={['#FFFFFF', 40, 70]} /> {/* Moved fog further away */}
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
