
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const BrownMaterial = () => {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null!);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      // More subtle pulsing effect
      const pulse = Math.sin(clock.getElapsedTime() * 0.15) * 0.05 + 0.95;
      materialRef.current.transmission = 0.45 * pulse;
      materialRef.current.opacity = 0.65 * pulse;
    }
  });
  
  return (
    <meshPhysicalMaterial 
      ref={materialRef} 
      color="#6A5A45"
      metalness={0.15}
      roughness={0.8}
      clearcoat={0.3}
      clearcoatRoughness={0.7}
      transmission={0.45}
      ior={1.2}
      thickness={1.5}
      envMapIntensity={0.4}
      transparent
      opacity={0.65}
    />
  );
};

export default BrownMaterial;
