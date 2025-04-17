
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
  
  // Use a simpler animation approach to avoid compatibility issues
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with simplified movement
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 0.7,
        0.005
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 0.7,
        0.005
      );

      // Move brown orb in the opposite direction with simplified movement
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 0.8,
        0.004
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 0.8,
        0.004
      );

      // Very gentle rotation to avoid issues
      goldOrbRef.current.rotation.x += 0.0001;
      goldOrbRef.current.rotation.y += 0.0002;
      brownOrbRef.current.rotation.x += 0.0002;
      brownOrbRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <>
      {/* Simplified geometry for gold orb */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -12]}>
        <sphereGeometry args={[7, 16, 16]} />
        <GoldMaterial />
      </mesh>
      
      {/* Simplified geometry for brown orb */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -15]}>
        <sphereGeometry args={[8, 16, 16]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
