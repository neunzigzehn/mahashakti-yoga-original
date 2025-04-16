
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Enhanced material for the gold orb with stronger glow effect
const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.5;
      material.current.roughness = 0.3;
      material.current.transparent = true;
      material.current.opacity = 0.9;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#D4AF37" // Brighter gold
      emissive="#FEF7CD" // Soft yellow glow
      emissiveIntensity={0.6}
      transparent
      opacity={0.9}
    />
  );
};

// Enhanced material for the brown orb with stronger glow effect
const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.4;
      material.current.roughness = 0.4;
      material.current.transparent = true;
      material.current.opacity = 0.85;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#5A4A3A" // Enhanced brown
      emissive="#FDE1D3" // Soft peach glow
      emissiveIntensity={0.45}
      transparent
      opacity={0.85}
    />
  );
};

// Interactive orbs with slower, more subtle movement
const Orbs = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const goldOrbRef = useRef<THREE.Mesh>(null!);
  const brownOrbRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  // Update orb positions based on mouse movement with gentler, slower transitions
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with much slower, gentle lerp factor
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.5,
        0.008 // Much slower transition
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.5,
        0.008 // Much slower transition
      );

      // Move brown orb in the opposite direction with slower transitions
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.8,
        0.005 // Very slow and calm movement
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.8,
        0.005 // Very slow and calm movement
      );

      // Very gentle rotation for both orbs - extremely subtle
      goldOrbRef.current.rotation.x += 0.0005;
      goldOrbRef.current.rotation.y += 0.0005;
      brownOrbRef.current.rotation.x += 0.0008;
      brownOrbRef.current.rotation.y += 0.0007;
    }
  });

  return (
    <>
      {/* Gold orb - much larger size and further position for wider movement range */}
      <mesh ref={goldOrbRef} position={[-6, 4, -20]}>
        <sphereGeometry args={[6, 64, 64]} /> {/* Increased size from 3 to 6 */}
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - much larger size and further position for wider movement range */}
      <mesh ref={brownOrbRef} position={[6, -4, -25]}>
        <sphereGeometry args={[8, 64, 64]} /> {/* Increased size from 4 to 8 */}
        <BrownMaterial />
      </mesh>
    </>
  );
};

// Enhanced blur effect with stronger blurring
const BlurEffect = () => {
  const { gl, scene, camera } = useThree();
  
  useEffect(() => {
    // More aggressive blur simulation with lower resolution rendering
    gl.setPixelRatio(window.devicePixelRatio * 0.4);
  }, [gl]);

  return null;
};

// Enhanced lighting setup with stronger, more diffused lights for better orb visibility
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.8} /> {/* Increased from 0.6 */}
      <directionalLight position={[10, 10, 5]} intensity={0.8} /> {/* Increased from 0.6 */}
      <pointLight position={[-10, -10, -5]} intensity={1.0} color="#FEF7CD" /> {/* Increased intensity and changed color */}
      <pointLight position={[8, 5, 15]} intensity={0.6} color="#FDE1D3" /> {/* Increased from 0.4 */}
      <pointLight position={[0, 0, 10]} intensity={0.5} color="#FFFFFF" /> {/* Added a center light */}
    </>
  );
};

// Fallback component when WebGL isn't available
const FallbackContent = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-yoga-brown to-yoga-gold opacity-30" />
);

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
