
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lighting = () => {
  const spotLightRef = useRef<THREE.SpotLight>(null!);
  
  useFrame(({ clock }) => {
    if (spotLightRef.current) {
      // Subtle movement to create dynamic lighting
      const time = clock.getElapsedTime();
      spotLightRef.current.position.x = Math.sin(time * 0.2) * 15;
      spotLightRef.current.position.z = Math.cos(time * 0.2) * 15;
    }
  });
  
  return (
    <>
      {/* Enhanced lighting setup for premium look */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 3]} intensity={0.8} color="#ffffff" />
      <spotLight 
        ref={spotLightRef}
        position={[15, 20, 15]} 
        angle={0.3} 
        penumbra={0.8} 
        intensity={1.2} 
        castShadow 
        color="#f8f0e3"
      />
      <hemisphereLight args={["#ffffff", "#999999", 0.6]} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#e0d8ca" />
    </>
  );
};

export default Lighting;
