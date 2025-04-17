
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GoldMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.5;   // Increased for more premium shine
      material.current.roughness = 0.5;   // Balanced for elegant reflection
      material.current.transparent = true;
      material.current.opacity = 0.85;    // Slightly increased
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#BFA065"              // Rich gold from website palette
      emissive="#FEF7CD"           // Soft warm glow
      emissiveIntensity={0.7}      // Enhanced glow
      transparent
      opacity={0.85}               // Match opacity with useEffect
    />
  );
};

export default GoldMaterial;
