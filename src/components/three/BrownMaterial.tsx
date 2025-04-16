
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.6;   // Increased for more reflection
      material.current.roughness = 0.4;   // Decreased for more shine
      material.current.transparent = true;
      material.current.opacity = 0.95;    // Increased opacity
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#3F3628"              // Darker brown from website palette
      emissive="#E5D1B8"           // Warm tan glow
      emissiveIntensity={1.2}      // Significantly increased glow
      transparent
      opacity={0.95}               // Match opacity with useEffect
    />
  );
};

export default BrownMaterial;
