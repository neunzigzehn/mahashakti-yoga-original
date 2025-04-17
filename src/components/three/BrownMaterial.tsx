
import { useRef } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null!);
  
  return (
    <meshBasicMaterial 
      ref={materialRef} 
      color="#3F3628"
      transparent
      opacity={0.7}
    />
  );
};

export default BrownMaterial;
