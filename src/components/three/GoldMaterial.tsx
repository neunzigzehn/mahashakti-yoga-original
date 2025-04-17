
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const GoldMaterial = () => {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      // More subtle shimmer effect
      const shimmer = Math.sin(clock.getElapsedTime() * 0.2) * 0.05 + 0.95;
      materialRef.current.transmission = 0.5 * shimmer;
      materialRef.current.opacity = 0.7 * shimmer;
    }
  });
  
  return (
    <meshPhysicalMaterial 
      ref={materialRef} 
      color="#DFC585"
      metalness={0.2}
      roughness={0.7}
      clearcoat={0.4}
      clearcoatRoughness={0.6}
      transmission={0.5}
      ior={1.3}
      thickness={1}
      envMapIntensity={0.5}
      transparent
      opacity={0.7}
    />
  );
};

export default GoldMaterial;
