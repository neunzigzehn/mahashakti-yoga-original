
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.8;     // Increased for better reflection
      material.current.roughness = 0.25;    // Decreased for more shininess
      material.current.transparent = true;
      material.current.opacity = 1.0;       // Full opacity for maximum visibility
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#F9D878"              // More saturated blonde/gold color
      emissive="#FFF9E0"           // Subtle warm glow
      emissiveIntensity={0.9}      // Increased for more visibility
      transparent
      opacity={1.0}                // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
