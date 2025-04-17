
import { useState, useEffect, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Orbs from './three/Orbs';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Debounce function for performance optimization
const debounce = (fn: Function, ms = 50) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function(...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// Main WebGL component with performance optimizations
const WebGLBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  
  // Check WebGL availability with better error handling
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsWebGLAvailable(!!gl);
      if (!gl) {
        console.warn("WebGL not supported, falling back to static background");
      }
    } catch (e) {
      setIsWebGLAvailable(false);
      console.error("WebGL detection error:", e);
    }
  }, []);

  // Optimized mouse move handler with debounce for performance
  const handleMouseMove = useCallback(
    debounce((e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.5, // Reduced sensitivity for smoother movement
        y: y * 0.5
      });
    }, 16), // ~60fps for smooth performance
    []
  );

  // Optimized touch move handler with debounce
  const handleTouchMove = useCallback(
    debounce((e: TouchEvent) => {
      if (e.touches.length === 0) return;
      
      const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.5,
        y: y * 0.5
      });
    }, 16),
    []
  );

  // Add event listeners with proper cleanup
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  // Fallback for devices without WebGL
  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      <Suspense fallback={<FallbackContent />}>
        <Canvas 
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: 'default',
            preserveDrawingBuffer: true
          }}
          dpr={[1, 2]} 
          camera={{ 
            position: [0, 0, 8], 
            fov: 60,
            near: 0.1,
            far: 100
          }}
        >
          <fog attach="fog" args={['#FFFFFF', 20, 40]} />
          <Lighting />
          <Orbs mousePosition={mousePosition} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default WebGLBackground;
