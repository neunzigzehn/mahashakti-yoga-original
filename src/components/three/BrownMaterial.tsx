
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const BrownMaterial = () => {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      // Very subtle pulsing effect
      const pulse = Math.sin(clock.getElapsedTime() * 0.15) * 0.05 + 0.95;
      materialRef.current.opacity = 0.75 * pulse;
    }
  });
  
  return (
    <meshBasicMaterial 
      ref={materialRef} 
      color="#FDE1D3"
      transparent
      opacity={0.75}
      blending={THREE.AdditiveBlending}
    />
  );
};

export default BrownMaterial;
