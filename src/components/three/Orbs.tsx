
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import GoldMaterial from './GoldMaterial';
import BrownMaterial from './BrownMaterial';

interface OrbsProps {
  mousePosition: { x: number; y: number };
}

const Orbs = ({ mousePosition }: OrbsProps) => {
  const goldOrbRef = useRef<THREE.Mesh>(null!);
  const brownOrbRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  // Ultra-minimal animation approach
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Basic position updates with minimal calculations
      goldOrbRef.current.position.x = mousePosition.x * viewport.width * 0.3;
      goldOrbRef.current.position.y = -mousePosition.y * viewport.height * 0.3;

      brownOrbRef.current.position.x = -mousePosition.x * viewport.width * 0.3;
      brownOrbRef.current.position.y = mousePosition.y * viewport.height * 0.3;
    }
  });

  return (
    <>
      {/* Basic geometry for gold orb */}
      <mesh ref={goldOrbRef} position={[-2, 1, -5]}>
        <sphereGeometry args={[3, 8, 8]} /> {/* Further reduced geometry complexity */}
        <GoldMaterial />
      </mesh>
      
      {/* Basic geometry for brown orb */}
      <mesh ref={brownOrbRef} position={[2, -1, -7]}>
        <sphereGeometry args={[4, 8, 8]} /> {/* Further reduced geometry complexity */}
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
