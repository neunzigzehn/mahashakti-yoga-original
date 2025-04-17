
import { useRef } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  
  return (
    <meshStandardMaterial 
      ref={materialRef} 
      color="#BFA065"
      metalness={0.4}
      roughness={0.6}
      transparent
      opacity={0.8}
    />
  );
};

export default GoldMaterial;
