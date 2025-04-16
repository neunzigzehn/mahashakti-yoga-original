
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.2;
      material.current.roughness = 0.8;
      material.current.transparent = true;
      material.current.opacity = 0.55;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#5A4A3A" // Rich brown
      emissive="#FDE1D3" // Soft peach glow
      emissiveIntensity={0.3}
      transparent
      opacity={0.55}
    />
  );
};

export default BrownMaterial;
