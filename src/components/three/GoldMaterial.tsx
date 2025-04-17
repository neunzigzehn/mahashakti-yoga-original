
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.25;  // Reduced metalness for softer look
      material.current.roughness = 0.65;  // Increased roughness for less shine
      material.current.transparent = true;
      material.current.opacity = 0.55;    // More transparency for subtle effect
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#BFA065"              // Keep the gold color but it will be more subtle
      emissive="#A38046"           // Keep emissive but reduce intensity
      emissiveIntensity={0.4}      // Significantly reduced for subtle glow
      transparent
      opacity={0.55}               // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
