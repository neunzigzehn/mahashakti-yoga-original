
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const BrownMaterial = () => {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      // Subtle pulsing effect
      const pulse = Math.sin(clock.getElapsedTime() * 0.2) * 0.1 + 0.9;
      materialRef.current.transmission = 0.15 * pulse;
    }
  });
  
  return (
    <meshPhysicalMaterial 
      ref={materialRef} 
      color="#3F3628"
      metalness={0.4}
      roughness={0.5}
      clearcoat={0.5}
      clearcoatRoughness={0.2}
      transmission={0.15}
      ior={1.3}
      thickness={3}
      envMapIntensity={0.8}
      transparent
      opacity={0.9}
    />
  );
};

export default BrownMaterial;
