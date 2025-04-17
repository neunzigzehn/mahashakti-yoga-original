
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.8;   // Increased for more metallic look
      material.current.roughness = 0.25;  // Decreased for more shine
      material.current.transparent = true;
      material.current.opacity = 0.98;    // Increased opacity
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#BFA065"              // Rich gold from website palette
      emissive="#A38046"           // Darker gold emissive for better visibility
      emissiveIntensity={1.5}      // Enhanced glow
      transparent
      opacity={0.98}               // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
