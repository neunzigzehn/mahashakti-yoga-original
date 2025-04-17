
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BrownMaterial = () => {
  const material = useRef<THREE.MeshStandardMaterial>(null!);
  
  useEffect(() => {
    if (material.current) {
      material.current.metalness = 0.2;   // Reduced metalness for softer look
      material.current.roughness = 0.7;   // Increased for less shine, more diffusion
      material.current.transparent = true;
      material.current.opacity = 0.45;    // More transparency for subtle effect
    }
  }, []);

  return (
    <meshStandardMaterial 
      ref={material} 
      color="#3F3628"              // Keep darker brown
      emissive="#251F17"           // Keep dark brown emissive
      emissiveIntensity={0.3}      // Significantly reduced for subtle glow
      transparent
      opacity={0.45}               // Match opacity with useEffect
    />
  );
};

export default BrownMaterial;
