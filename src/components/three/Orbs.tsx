
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
  
  // Track time for pulsing effect
  const timeRef = useRef(0);

  // Update orb positions and add premium pulsing effect
  useFrame((state) => {
    timeRef.current += 0.008; // Slightly faster time increment for more noticeable pulsing
    
    if (goldOrbRef.current && brownOrbRef.current) {
      // Enhanced size pulsing based on time
      const goldPulse = Math.sin(timeRef.current * 0.7) * 0.09 + 1;
      const brownPulse = Math.sin(timeRef.current * 0.5 + 1) * 0.1 + 1;
      
      goldOrbRef.current.scale.set(goldPulse, goldPulse, goldPulse);
      brownOrbRef.current.scale.set(brownPulse, brownPulse, brownPulse);
      
      // Move gold orb with improved response
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.4,
        0.014 // Slightly faster for better responsiveness
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.4,
        0.014
      );

      // Move brown orb in the opposite direction
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.7,
        0.012 // Slightly faster
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.7,
        0.012
      );

      // Enhanced rotation for more dynamic movement
      goldOrbRef.current.rotation.x += 0.0005;
      goldOrbRef.current.rotation.y += 0.0006;
      brownOrbRef.current.rotation.x += 0.0006;
      brownOrbRef.current.rotation.y += 0.0007;
    }
  });

  return (
    <>
      {/* Gold orb - positioned closer to camera */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -8]}>
        <sphereGeometry args={[7.5, 64, 64]} />
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - positioned closer to camera */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -9]}>
        <sphereGeometry args={[9, 64, 64]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
