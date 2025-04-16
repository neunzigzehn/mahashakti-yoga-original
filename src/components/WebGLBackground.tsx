
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Material for the gold orb with blur effect
const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.6;
      material.current.roughness = 0.4;
      material.current.transparent = true;
      material.current.opacity = 0.8;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#BFA065" 
      emissive="#BFA065"
      emissiveIntensity={0.3}
      transparent
      opacity={0.8}
    />
  );
};

// Material for the brown orb with blur effect
const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.4;
      material.current.roughness = 0.5;
      material.current.transparent = true;
      material.current.opacity = 0.75;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#3F3628" 
      emissive="#251F17"
      emissiveIntensity={0.2}
      transparent
      opacity={0.75}
    />
  );
};

// Interactive orbs that respond to mouse movement with wider range
const Orbs = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const goldOrbRef = useRef<THREE.Mesh>(null!);
  const brownOrbRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  // Update orb positions based on mouse movement with greater range
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with increased range
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.2,
        0.03
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.2,
        0.03
      );

      // Move brown orb in the opposite direction with increased range
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.5,
        0.02
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.5,
        0.02
      );

      // Gentle rotation for both orbs
      goldOrbRef.current.rotation.x += 0.001;
      goldOrbRef.current.rotation.y += 0.001;
      brownOrbRef.current.rotation.x += 0.0015;
      brownOrbRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <>
      {/* Gold orb - positioned further out to allow more movement range */}
      <mesh ref={goldOrbRef} position={[-5, 3, -15]}>
        <sphereGeometry args={[3, 64, 64]} />
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - positioned further out to allow more movement range */}
      <mesh ref={brownOrbRef} position={[5, -3, -20]}>
        <sphereGeometry args={[4, 64, 64]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

// Post-processing effect to create blur
const BlurEffect = () => {
  const { gl, scene, camera } = useThree();
  const composer = useRef<any>(null);

  useEffect(() => {
    // Simple blur simulation with lower resolution rendering
    gl.setPixelRatio(window.devicePixelRatio * 0.5);
  }, [gl]);

  return null;
};

// Lighting setup with softer, more diffused lights
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      <pointLight position={[-10, -10, -5]} intensity={0.7} color="#BFA065" />
      <pointLight position={[8, 5, 15]} intensity={0.4} color="#FDE1D3" />
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

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    // Track touch movement for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({
          x: (e.touches[0].clientX / window.innerWidth) * 2 - 1,
          y: -(e.touches[0].clientY / window.innerHeight) * 2 + 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  if (!isWebGLAvailable) {
    return <FallbackContent />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      {/* Add CSS blur filter to the entire canvas for additional blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <Canvas dpr={[0.5, 1]} camera={{ position: [0, 0, 10], fov: 60 }}>
        <BlurEffect />
        <Lighting />
        <fog attach="fog" args={['#F5F3EE', 10, 30]} />
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
