
import { useRef } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  
  return (
    <meshStandardMaterial 
      ref={materialRef} 
      color="#BFA065"
      emissive="#FEF7CD"
      emissiveIntensity={0.8}
      metalness={0.7}
      roughness={0.3}
      transparent
      opacity={0.9}
    />
  );
};

export default GoldMaterial;
