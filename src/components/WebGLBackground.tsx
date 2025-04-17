
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

    // Track mouse movement with heavy throttling for very smooth, subtle movement
    let timeoutId: number;
    let lastUpdateTime = 0;
    const updateInterval = 80; // Increased interval for even smoother tracking
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval) return;
      
      lastUpdateTime = currentTime;
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = window.setTimeout(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Add significant dampening for subtle, premium feel
        setMousePosition({
          x: x * 0.5, // Reduce movement range by 50%
          y: y * 0.5
        });
        
        timeoutId = 0;
      }, 45);
    };

    // Track touch movement for mobile with throttling
    const handleTouchMove = (e: TouchEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < updateInterval || e.touches.length === 0) return;
      
      lastUpdateTime = currentTime;
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = window.setTimeout(() => {
        const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        
        // Add significant dampening
        setMousePosition({
          x: x * 0.5,
          y: y * 0.5
        });
        
        timeoutId = 0;
      }, 45);
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
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <BlurEffect />
        <Lighting />
        {/* Very light fog for soft distance fade */}
        <fog attach="fog" args={['#FFFFFF', 40, 80]} />
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
