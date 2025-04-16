
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.3;
      material.current.roughness = 0.7;
      material.current.transparent = true;
      material.current.opacity = 0.6;
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#D4AF37" // Gold color
      emissive="#FEF7CD" // Soft warm glow
      emissiveIntensity={0.4}
      transparent
      opacity={0.6}
    />
  );
};

export default GoldMaterial;
