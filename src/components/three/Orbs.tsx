
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GoldMaterial from './GoldMaterial';
import BrownMaterial from './BrownMaterial';

interface OrbsProps {
  mousePosition: { x: number; y: number };
}

const Orbs = ({ mousePosition }: OrbsProps) => {
  const goldOrbRef = useRef<THREE.Mesh>(null!);
  const brownOrbRef = useRef<THREE.Mesh>(null!);
  
  // Simplified animation approach
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Minimal position updates
      goldOrbRef.current.position.x = mousePosition.x * 0.3;
      goldOrbRef.current.position.y = -mousePosition.y * 0.3;

      brownOrbRef.current.position.x = -mousePosition.x * 0.3;
      brownOrbRef.current.position.y = mousePosition.y * 0.3;
    }
  });

  return (
    <>
      <mesh ref={goldOrbRef} position={[-2, 1, -5]}>
        <sphereGeometry args={[3, 6, 6]} /> {/* Reduced geometry complexity */}
        <GoldMaterial />
      </mesh>
      
      <mesh ref={brownOrbRef} position={[2, -1, -7]}>
        <sphereGeometry args={[4, 6, 6]} /> {/* Reduced geometry complexity */}
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
