
import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Orbs from './three/Orbs';
import BlurEffect from './three/BlurEffect';
import Lighting from './three/Lighting';
import FallbackContent from './three/FallbackContent';

// Main WebGL component
const WebGLBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);
  const [mountComplete, setMountComplete] = useState(false);
  const requestRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef(0);
  
  useEffect(() => {
    // Set mount complete to ensure proper initialization
    setMountComplete(true);
    
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
    const updateInterval = 50; // ms between updates for smoother tracking
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastUpdateTimeRef.current < updateInterval) return;
      
      lastUpdateTimeRef.current = currentTime;
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      requestRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        // Add dampening for more premium feel - smaller range of movement
        setMousePosition({
          x: x * 0.3, // Further reduced movement range
          y: y * 0.3
        });
      });
    };

    // Track touch movement for mobile with throttling
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      
      const currentTime = Date.now();
      if (currentTime - lastUpdateTimeRef.current < updateInterval) return;
      
      lastUpdateTimeRef.current = currentTime;
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      requestRef.current = requestAnimationFrame(() => {
        const x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        const y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        
        // Add dampening for more premium feel
        setMousePosition({
          x: x * 0.3,
          y: y * 0.3
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  // Don't render Canvas until component is fully mounted
  if (!mountComplete) {
    return <div className="absolute inset-0 -z-10 bg-white" />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        dpr={1} // Fixed DPR for better performance and stability
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: false, // Disable antialiasing for performance
          powerPreference: 'high-performance',
          depth: true, // Enable depth testing
          stencil: false, // Disable stencil buffer to save memory
          alpha: true
        }}
        frameloop="demand" // Only render when needed
      >
        <BlurEffect />
        <Lighting />
        {/* Reduced fog density */}
        <fog attach="fog" args={['#FFFFFF', 35, 65]} />
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
