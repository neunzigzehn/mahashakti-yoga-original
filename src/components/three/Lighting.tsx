
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Lighting = () => {
  // Add refs for animated lights
  const pointLightRef = useRef<THREE.PointLight>(null);
  
  // Optional: Simple animation for the point light
  useFrame(() => {
    if (pointLightRef.current) {
      // Very subtle movement to add some life without performance impact
      pointLightRef.current.intensity = 1.2 + Math.sin(Date.now() * 0.001) * 0.1;
    }
  });
  
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.0} color="#FFFFFF" />
      <pointLight ref={pointLightRef} position={[-10, -10, -5]} intensity={1.0} color="#FEF7CD" />
    </>
  );
};

export default Lighting;
