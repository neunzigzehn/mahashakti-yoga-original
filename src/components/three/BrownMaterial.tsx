
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.35;  // Slight increase for premium feel
      material.current.roughness = 0.65;  // Balanced for elegant reflection
      material.current.transparent = true;
      material.current.opacity = 0.85;    // Increased for better visibility
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#3F3628"              // Darker brown from website palette
      emissive="#E5D1B8"           // Warm tan glow
      emissiveIntensity={0.6}      // Increased glow
      transparent
      opacity={0.85}               // Match opacity with useEffect
    />
  );
};

export default BrownMaterial;
