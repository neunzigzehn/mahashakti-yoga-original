
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.5;
      material.current.roughness = 0.3;
      material.current.transparent = true;
      material.current.opacity = 0.9;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#D4AF37" // Brighter gold
      emissive="#FEF7CD" // Soft yellow glow
      emissiveIntensity={0.6}
      transparent
      opacity={0.9}
    />
  );
};

export default GoldMaterial;
