
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lighting = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  
  useFrame(({ clock }) => {
    if (pointLightRef.current) {
      // Subtle intensity variations for organic feel
      const time = clock.getElapsedTime();
      pointLightRef.current.intensity = 0.55 + Math.sin(time * 0.2) * 0.05;
    }
  });
  
  return (
    <>
      {/* Balanced ambient light for baseline illumination */}
      <ambientLight intensity={0.45} />
      
      {/* Optimized point light with better positioning */}
      <pointLight 
        ref={pointLightRef} 
        position={[0, 0, 4.5]} 
        intensity={0.55} 
        color="#ffffff" 
        distance={25}
        decay={2}
      />
    </>
  );
};

export default Lighting;
