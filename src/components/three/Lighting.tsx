
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Lighting = () => {
  const spotLightRef = useRef<THREE.SpotLight>(null!);
  const pointLightRef = useRef<THREE.PointLight>(null!);
  
  useFrame(({ clock }) => {
    if (spotLightRef.current && pointLightRef.current) {
      // Subtle light movement
      const time = clock.getElapsedTime();
      spotLightRef.current.position.x = Math.sin(time * 0.1) * 20;
      spotLightRef.current.position.z = Math.cos(time * 0.1) * 20;
      
      // Opposite movement for point light
      pointLightRef.current.position.x = Math.cos(time * 0.12) * 15;
      pointLightRef.current.position.z = Math.sin(time * 0.12) * 15;
      
      // Subtle intensity variations
      pointLightRef.current.intensity = 0.5 + Math.sin(time * 0.2) * 0.1;
    }
  });
  
  return (
    <>
      {/* Reduced ambient light for more contrast */}
      <ambientLight intensity={0.3} />
      
      {/* Soft directional light */}
      <directionalLight position={[10, 15, 5]} intensity={0.6} color="#ffffff" />
      
      {/* Moving spotlights for dynamic lighting */}
      <spotLight 
        ref={spotLightRef}
        position={[20, 25, 20]} 
        angle={0.4} 
        penumbra={1} 
        intensity={0.8} 
        castShadow 
        color="#f8f5e3"
        distance={60}
        decay={1.5}
      />
      
      {/* Hemisphere light for subtle color variation */}
      <hemisphereLight args={["#ffffff", "#d0c8bf", 0.5]} />
      
      {/* Moving point light for additional highlights */}
      <pointLight 
        ref={pointLightRef} 
        position={[-15, -10, -15]} 
        intensity={0.5} 
        color="#e0d8ca" 
        distance={50}
        decay={1.5}
      />
      
      {/* Add a subtle global fog for atmospheric depth */}
      <fog attach="fog" args={['#F5F3EE', 20, 60]} />
    </>
  );
};

export default Lighting;
