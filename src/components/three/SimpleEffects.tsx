
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

const SimpleEffects = () => {
  const glowRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const time = clock.getElapsedTime();
      glowRef.current.position.z = Math.sin(time * 0.2) * 0.5 - 8;
      glowRef.current.scale.setScalar(1.5 + Math.sin(time * 0.5) * 0.2);
      
      // Gently rotate the glow mesh for a more dynamic feel
      glowRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh ref={glowRef} position={[0, 0, -8]}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial 
        color="#ffffff" 
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

export default SimpleEffects;
