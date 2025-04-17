
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const GoldMaterial = () => {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      // Subtle shimmer effect
      const shimmer = Math.sin(clock.getElapsedTime() * 0.3) * 0.1 + 0.9;
      materialRef.current.transmission = 0.2 * shimmer;
    }
  });
  
  return (
    <meshPhysicalMaterial 
      ref={materialRef} 
      color="#BFA065"
      metalness={0.6}
      roughness={0.4}
      clearcoat={0.6}
      clearcoatRoughness={0.1}
      transmission={0.2}
      ior={1.5}
      thickness={2}
      envMapIntensity={1.0}
      transparent
      opacity={0.9}
    />
  );
};

export default GoldMaterial;
