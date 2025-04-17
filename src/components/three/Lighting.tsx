
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lighting = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  
  useFrame(({ clock }) => {
    if (pointLightRef.current) {
      // Subtle intensity variations
      const time = clock.getElapsedTime();
      pointLightRef.current.intensity = 0.5 + Math.sin(time * 0.2) * 0.05;
    }
  });
  
  return (
    <>
      {/* Increased ambient light */}
      <ambientLight intensity={0.4} />
      
      {/* Enhanced point light */}
      <pointLight 
        ref={pointLightRef} 
        position={[0, 0, 5]} 
        intensity={0.5} 
        color="#ffffff" 
        distance={30}
        decay={2}
      />
    </>
  );
};

export default Lighting;
