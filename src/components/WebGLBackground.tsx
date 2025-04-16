
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

    // Track mouse movement with throttling for performance
    let timeoutId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutId) return; // Skip if we're still in throttle period
      
      timeoutId = window.setTimeout(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1
        });
        timeoutId = 0;
      }, 10); // Very small throttle to ensure smoothness
    };

    // Track touch movement for mobile with throttling
    const handleTouchMove = (e: TouchEvent) => {
      if (timeoutId || e.touches.length === 0) return;
      
      timeoutId = window.setTimeout(() => {
        setMousePosition({
          x: (e.touches[0].clientX / window.innerWidth) * 2 - 1,
          y: -(e.touches[0].clientY / window.innerHeight) * 2 + 1
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
      {/* Enhanced CSS blur filter for additional glow effect */}
      <div className="absolute inset-0 backdrop-blur-xl"></div>
      <Canvas dpr={[0.4, 1]} camera={{ position: [0, 0, 10], fov: 70 }}>
        <BlurEffect />
        <Lighting />
        <fog attach="fog" args={['#F5F3EE', 15, 35]} /> {/* Adjusted fog for better visibility */}
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
