
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.6;    // Increased for better reflection
      material.current.roughness = 0.35;   // Decreased for stronger highlighting
      material.current.transparent = true;
      material.current.opacity = 0.95;     // Increased opacity for better visibility
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#FEF7CD"              // Soft blonde color matching her hair
      emissive="#FFF9E0"           // Subtle warm glow
      emissiveIntensity={0.85}     // Increased for more visibility
      transparent
      opacity={0.95}               // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
