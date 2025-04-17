
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
  
  // Update orb positions based on mouse movement
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb - smoother movement
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.4,
        0.008
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.4,
        0.008
      );

      // Move brown orb in the opposite direction
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.7,
        0.006
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.7,
        0.006
      );

      // Gentle rotation
      goldOrbRef.current.rotation.x += 0.0003;
      goldOrbRef.current.rotation.y += 0.0004;
      brownOrbRef.current.rotation.x += 0.0004;
      brownOrbRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      {/* Gold orb */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -12]}>
        <sphereGeometry args={[7.5, 32, 32]} />
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -15]}>
        <sphereGeometry args={[9, 32, 32]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
