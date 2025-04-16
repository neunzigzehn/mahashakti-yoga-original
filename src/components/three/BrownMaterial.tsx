
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.45;   // Increased for better visibility
      material.current.roughness = 0.5;    // Decreased for more shininess
      material.current.transparent = true;
      material.current.opacity = 0.95;     // Increased for better visibility
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#FDE1D3"              // Soft peach/skin tone color
      emissive="#FFECE3"           // Subtle warm skin-like glow
      emissiveIntensity={0.75}     // Increased for more visibility
      transparent
      opacity={0.95}               // Match opacity with useEffect
    />
  );
};

export default BrownMaterial;
