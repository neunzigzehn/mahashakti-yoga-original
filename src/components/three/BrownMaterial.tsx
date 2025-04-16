
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.3;   // Reduced for softer skin glow
      material.current.roughness = 0.7;   // Increased for more natural skin-like appearance
      material.current.transparent = true;
      material.current.opacity = 0.85;    // Keep the same opacity
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#FDE1D3"              // Soft peach/skin tone color
      emissive="#FFECE3"           // Subtle warm skin-like glow
      emissiveIntensity={0.55}     // Reduced for more natural skin-like appearance
      transparent
      opacity={0.85}               // Match opacity with useEffect
    />
  );
};

export default BrownMaterial;
