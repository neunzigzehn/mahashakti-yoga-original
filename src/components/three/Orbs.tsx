
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

  // Update orb positions based on mouse movement with extremely gentle, slower transitions
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with extremely slow, gentle lerp factor
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 2.5,
        0.004 // Extremely slow transition
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 2.5,
        0.004 // Extremely slow transition
      );

      // Move brown orb in the opposite direction with slower transitions
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 3,
        0.003 // Very slow and calm movement
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 3,
        0.003 // Very slow and calm movement
      );

      // Extremely subtle rotation for both orbs
      goldOrbRef.current.rotation.x += 0.0002;
      goldOrbRef.current.rotation.y += 0.0002;
      brownOrbRef.current.rotation.x += 0.0003;
      brownOrbRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <>
      {/* Gold orb - much larger size and further position for wider movement range */}
      <mesh ref={goldOrbRef} position={[-10, 6, -30]}>
        <sphereGeometry args={[12, 64, 64]} /> {/* Much larger size */}
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - much larger size and further position for wider movement range */}
      <mesh ref={brownOrbRef} position={[10, -6, -35]}>
        <sphereGeometry args={[16, 64, 64]} /> {/* Much larger size */}
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
