
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface LightingProps {
  lowPerf?: boolean;
}

const Lighting = ({ lowPerf = false }: LightingProps) => {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null!);
  
  // Subtle light movement for high-end devices
  useFrame(({ clock }) => {
    if (!lowPerf && directionalLightRef.current) {
      // Gentle movement of the main light for a more dynamic scene
      directionalLightRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 10;
      directionalLightRef.current.position.y = 10 + Math.sin(clock.getElapsedTime() * 0.05) * 2;
    }
  });

  return (
    <>
      {/* Ambient light - reduced from 0.7 to 0.6 for better material definition */}
      <ambientLight intensity={0.6} />
      
      {/* Main directional light with shadow support for high-end devices */}
      <directionalLight 
        ref={directionalLightRef}
        position={[10, 10, 5]} 
        intensity={1.0} 
        color="#FFFFFF"
        castShadow={!lowPerf}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.001}
      >
        {!lowPerf && (
          <orthographicCamera 
            attach="shadow-camera" 
            args={[-10, 10, 10, -10, 0.1, 50]} 
          />
        )}
      </directionalLight>
      
      {/* Accent lights - conditionally rendered based on device capability */}
      {!lowPerf && (
        <>
          <pointLight position={[-10, -10, -5]} intensity={0.9} color="#FEF7CD" />
          <pointLight position={[0, 0, 10]} intensity={0.7} color="#FFFFFF" />
        </>
      )}
      
      {/* Simplified lighting for low-end devices */}
      {lowPerf && (
        <hemisphereLight 
          intensity={1.0}
          color="#FFFFFF"
          groundColor="#BFA065"
        />
      )}
    </>
  );
};

export default Lighting;
