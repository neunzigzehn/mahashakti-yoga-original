
import { useRef } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  
  return (
    <meshStandardMaterial 
      ref={materialRef} 
      color="#3F3628"
      metalness={0.3}
      roughness={0.7}
      transparent
      opacity={0.8}
    />
  );
};

export default BrownMaterial;
