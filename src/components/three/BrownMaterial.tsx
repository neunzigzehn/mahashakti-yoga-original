
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.65;  // Slightly increased metalness
      material.current.roughness = 0.35;  // Decreased for more shine
      material.current.transparent = true;
      material.current.opacity = 0.98;    // Increased opacity
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#3F3628"              // Darker brown from website palette
      emissive="#251F17"           // Dark brown emissive
      emissiveIntensity={1.5}      // Significantly increased glow
      transparent
      opacity={0.98}               // Match opacity with useEffect
    />
  );
};

export default BrownMaterial;
