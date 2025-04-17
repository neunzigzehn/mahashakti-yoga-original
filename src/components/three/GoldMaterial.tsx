
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.7;   // Increased for more reflection
      material.current.roughness = 0.3;   // Decreased for more shine
      material.current.transparent = true;
      material.current.opacity = 0.95;    // Increased opacity
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#BFA065"              // Rich gold from website palette
      emissive="#FEF7CD"           // Soft warm glow
      emissiveIntensity={1.3}      // Significantly enhanced glow
      transparent
      opacity={0.95}               // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
