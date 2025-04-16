
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.7;    // Increased for better visibility
      material.current.roughness = 0.3;    // Decreased for more shininess
      material.current.transparent = true;
      material.current.opacity = 1.0;      // Full opacity for maximum visibility
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#E5B195"              // More saturated skin tone color
      emissive="#FFECE3"           // Subtle warm skin-like glow
      emissiveIntensity={0.9}      // Increased for more visibility
      transparent
      opacity={1.0}                // Match opacity with useEffect
    />
  );
};

export default BrownMaterial;
