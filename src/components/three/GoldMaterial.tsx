
import { useRef } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
  
  return (
    <meshBasicMaterial 
      ref={materialRef} 
      color="#BFA065"
      transparent
      opacity={0.7}
    />
  );
};

export default GoldMaterial;
