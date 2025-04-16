
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.4;   // Increased from 0.3
      material.current.roughness = 0.6;   // Decreased from 0.7
      material.current.transparent = true;
      material.current.opacity = 0.8;     // Increased from 0.6
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#D4AF37"              // Gold color
      emissive="#FEF7CD"           // Soft warm glow
      emissiveIntensity={0.6}      // Increased intensity from 0.4
      transparent
      opacity={0.8}                // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
