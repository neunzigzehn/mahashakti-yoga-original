
import { useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import Orbs from './three/Orbs';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Optimized debounce function for performance
const debounce = (fn: Function, ms = 50) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function(...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// Main WebGL component with performance optimizations and device capability detection
const WebGLBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  
  // Check WebGL availability and device performance on component mount
  useEffect(() => {
    try {
      // Detect WebGL support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsWebGLAvailable(!!gl);
      
      if (!gl) {
        console.warn("WebGL not supported, falling back to static background");
      }
      
      // Check for low performance devices (mobile or low CPU/GPU)
      const isLowPerformance = () => {
        return (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
          (navigator as any).deviceMemory < 4 ||
          (navigator as any).hardwareConcurrency < 4
        );
      };
      
      setIsLowPerfDevice(isLowPerformance());
      
    } catch (e) {
      setIsWebGLAvailable(false);
      console.error("WebGL detection error:", e);
    }
  }, []);

  // Optimized mouse move handler with debounce
  const handleMouseMove = useCallback(
    debounce((e: MouseEvent) => {
      // Skip tracking on low performance devices to save resources
      if (isLowPerfDevice) return;
      
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.5, // Reduced sensitivity for smoother movement
        y: y * 0.5
      });
    }, 16), // ~60fps for smooth performance
    [isLowPerfDevice]
  );

  // Optimized touch move handler with debounce
  const handleTouchMove = useCallback(
    debounce((e: TouchEvent) => {
      // Skip tracking on low performance devices to save resources
      if (isLowPerfDevice || e.touches.length === 0) return;
      
      const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      
      setMousePosition({
        x: x * 0.5,
        y: y * 0.5
      });
    }, 16),
    [isLowPerfDevice]
  );

  // Add event listeners with proper cleanup
  useEffect(() => {
    if (!isLowPerfDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [handleMouseMove, handleTouchMove, isLowPerfDevice]);

  // Fallback for devices without WebGL
  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      <Canvas 
        gl={{ 
          antialias: !isLowPerfDevice, // Disable antialiasing on low-end devices
          alpha: true,
          powerPreference: isLowPerfDevice ? 'low-power' : 'high-performance',
          preserveDrawingBuffer: false, // Better performance when false
          precision: isLowPerfDevice ? 'mediump' : 'highp', // Lower precision for better performance on low-end devices
          depth: true,
          stencil: false // Disable stencil buffer if not needed
        }}
        dpr={isLowPerfDevice ? [1, 1] : [1, 2]} // Lower dpr for low-end devices
        camera={{ 
          position: [0, 0, 8], 
          fov: 60,
          near: 0.1,
          far: 100
        }}
        performance={{ min: 0.5 }} // Performance floor to prevent hanging
      >
        <fog attach="fog" args={['#FFFFFF', 20, 40]} />
        <Lighting lowPerf={isLowPerfDevice} />
        <Orbs mousePosition={mousePosition} lowPerf={isLowPerfDevice} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
