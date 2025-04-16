
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.45;   // Reduced for softer blonde glow
      material.current.roughness = 0.55;   // Increased for more natural hair-like reflection
      material.current.transparent = true;
      material.current.opacity = 0.85;    // Keep the same opacity
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#FEF7CD"              // Soft blonde color matching her hair
      emissive="#FFF9E0"           // Subtle warm glow
      emissiveIntensity={0.65}      // Slightly reduced for more natural look
      transparent
      opacity={0.85}               // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
