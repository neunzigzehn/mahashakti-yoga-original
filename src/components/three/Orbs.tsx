
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

  // Update orb positions based on mouse movement with gentler, slower transitions
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with much slower, gentle lerp factor
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.5,
        0.008 // Much slower transition
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.5,
        0.008 // Much slower transition
      );

      // Move brown orb in the opposite direction with slower transitions
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.8,
        0.005 // Very slow and calm movement
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.8,
        0.005 // Very slow and calm movement
      );

      // Very gentle rotation for both orbs - extremely subtle
      goldOrbRef.current.rotation.x += 0.0005;
      goldOrbRef.current.rotation.y += 0.0005;
      brownOrbRef.current.rotation.x += 0.0008;
      brownOrbRef.current.rotation.y += 0.0007;
    }
  });

  return (
    <>
      {/* Gold orb - much larger size and further position for wider movement range */}
      <mesh ref={goldOrbRef} position={[-6, 4, -20]}>
        <sphereGeometry args={[6, 64, 64]} /> {/* Increased size from 3 to 6 */}
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - much larger size and further position for wider movement range */}
      <mesh ref={brownOrbRef} position={[6, -4, -25]}>
        <sphereGeometry args={[8, 64, 64]} /> {/* Increased size from 4 to 8 */}
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
