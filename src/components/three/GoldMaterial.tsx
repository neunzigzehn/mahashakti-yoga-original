
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const GoldMaterial = () => {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      // Very subtle pulsing effect
      const pulse = Math.sin(clock.getElapsedTime() * 0.2) * 0.05 + 0.95;
      materialRef.current.opacity = 0.8 * pulse;
    }
  });
  
  return (
    <meshBasicMaterial 
      ref={materialRef} 
      color="#FEF7CD"
      transparent
      opacity={0.8}
      blending={THREE.AdditiveBlending}
    />
  );
};

export default GoldMaterial;
