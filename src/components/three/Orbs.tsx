
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
  
  // More efficient update using useFrame with performance optimizations
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with optimized smooth movement
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.2,
        0.01
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.2,
        0.01
      );

      // Move brown orb with optimized smooth movement
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.4,
        0.008
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.4,
        0.008
      );

      // Gentle rotation with performance optimized values
      goldOrbRef.current.rotation.x += 0.0004;
      goldOrbRef.current.rotation.y += 0.0005;
      brownOrbRef.current.rotation.x += 0.0005;
      brownOrbRef.current.rotation.y += 0.0006;
    }
  });

  return (
    <>
      {/* Gold orb with optimized size and position for visibility */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -8]}>
        <sphereGeometry args={[6.5, 48, 48]} />
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb with optimized size and position for visibility */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -10]}>
        <sphereGeometry args={[8, 48, 48]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
