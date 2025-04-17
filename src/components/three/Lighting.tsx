
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lighting = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);
  
  useFrame(({ clock }) => {
    if (pointLightRef.current) {
      // Subtle intensity variations
      const time = clock.getElapsedTime();
      pointLightRef.current.intensity = 0.3 + Math.sin(time * 0.2) * 0.05;
    }
  });
  
  return (
    <>
      {/* Very minimal lighting to not interfere with glowing orbs */}
      <ambientLight intensity={0.2} />
      
      {/* Subtle point light */}
      <pointLight 
        ref={pointLightRef} 
        position={[0, 0, 10]} 
        intensity={0.3} 
        color="#ffffff" 
        distance={50}
        decay={2}
      />
    </>
  );
};

export default Lighting;
