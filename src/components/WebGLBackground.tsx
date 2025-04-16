
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Material for the gold orb
const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.8;
      material.current.roughness = 0.2;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#BFA065" 
      emissive="#BFA065"
      emissiveIntensity={0.2}
    />
  );
};

// Material for the brown orb
const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.5;
      material.current.roughness = 0.4;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#3F3628" 
      emissive="#251F17"
      emissiveIntensity={0.1}
    />
  );
};

// Interactive orbs that respond to mouse movement
const Orbs = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const goldOrbRef = useRef<THREE.Mesh>(null!);
  const brownOrbRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  // Update orb positions based on mouse movement
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb in one direction
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) / 5,
        0.05
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) / 5,
        0.05
      );

      // Move brown orb in the opposite direction
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) / 8,
        0.03
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) / 8,
        0.03
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
      {/* Gold orb */}
      <Sphere ref={goldOrbRef} args={[1.5, 64, 64]} position={[-3, 2, -5]}>
        <GoldMaterial />
      </Sphere>
      
      {/* Brown orb */}
      <Sphere ref={brownOrbRef} args={[2, 64, 64]} position={[3, -1, -8]}>
        <BrownMaterial />
      </Sphere>
    </>
  );
};

// Lighting setup
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#BFA065" />
    </>
  );
};

// Main WebGL component
const WebGLBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
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

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
        <Lighting />
        <Orbs mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
