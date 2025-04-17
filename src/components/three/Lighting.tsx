
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lighting = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  
  useFrame(({ clock }) => {
    if (pointLightRef.current) {
      // Enhanced intensity variations for better visibility
      const time = clock.getElapsedTime();
      pointLightRef.current.intensity = 1.0 + Math.sin(time * 0.2) * 0.1;
    }
  });
  
  return (
    <>
      {/* Increased ambient light for better baseline illumination */}
      <ambientLight intensity={0.7} />
      
      {/* Enhanced point light with better positioning for orb visibility */}
      <pointLight 
        ref={pointLightRef} 
        position={[0, 0, 10]} 
        intensity={1.0} 
        color="#ffffff" 
        distance={40}
        decay={1.5}
      />
    </>
  );
};

export default Lighting;
