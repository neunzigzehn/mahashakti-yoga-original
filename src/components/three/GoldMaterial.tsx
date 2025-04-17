
import { useRef } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  
  return (
    <meshStandardMaterial 
      ref={materialRef} 
      color="#BFA065"
      emissive="#FEF7CD"
      emissiveIntensity={0.7}
      metalness={0.5}
      roughness={0.5}
      transparent
      opacity={0.85}
    />
  );
};

export default GoldMaterial;
