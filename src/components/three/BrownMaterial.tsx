
import { useRef } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  
  return (
    <meshStandardMaterial 
      ref={materialRef} 
      color="#3F3628"
      emissive="#E5D1B8"
      emissiveIntensity={0.6}
      metalness={0.35}
      roughness={0.65}
      transparent
      opacity={0.85}
    />
  );
};

export default BrownMaterial;
