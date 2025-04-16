
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

  // Update orb positions based on mouse movement with gentle transitions
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with gentle lerp factor
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.5,
        0.01 // Moderate transition speed
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.5,
        0.01 // Moderate transition speed
      );

      // Move brown orb in the opposite direction
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.8,
        0.008 // Slightly slower movement
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.8,
        0.008 // Slightly slower movement
      );

      // Subtle rotation for both orbs
      goldOrbRef.current.rotation.x += 0.0005;
      goldOrbRef.current.rotation.y += 0.0005;
      brownOrbRef.current.rotation.x += 0.0007;
      brownOrbRef.current.rotation.y += 0.0007;
    }
  });

  return (
    <>
      {/* Gold orb - positioned closer to camera */}
      <mesh ref={goldOrbRef} position={[-5, 3, -15]}>
        <sphereGeometry args={[8, 64, 64]} />
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - positioned closer to camera */}
      <mesh ref={brownOrbRef} position={[5, -3, -18]}>
        <sphereGeometry args={[10, 64, 64]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
