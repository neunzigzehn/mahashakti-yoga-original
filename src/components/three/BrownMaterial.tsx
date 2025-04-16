
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.4;
      material.current.roughness = 0.4;
      material.current.transparent = true;
      material.current.opacity = 0.85;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#5A4A3A" // Enhanced brown
      emissive="#FDE1D3" // Soft peach glow
      emissiveIntensity={0.45}
      transparent
      opacity={0.85}
    />
  );
};

export default BrownMaterial;
