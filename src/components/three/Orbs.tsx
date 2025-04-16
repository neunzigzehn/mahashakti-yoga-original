
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
    timeRef.current += 0.01; // Slightly faster time increment for more noticeable pulsing
    
    if (goldOrbRef.current && brownOrbRef.current) {
      // More pronounced size pulsing based on time
      const goldPulse = Math.sin(timeRef.current * 0.6) * 0.08 + 1;
      const brownPulse = Math.sin(timeRef.current * 0.4 + 1) * 0.1 + 1;
      
      goldOrbRef.current.scale.set(goldPulse, goldPulse, goldPulse);
      brownOrbRef.current.scale.set(brownPulse, brownPulse, brownPulse);
      
      // Move gold orb with improved responsiveness
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.5,
        0.03 // Increased responsiveness
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.5,
        0.03
      );

      // Move brown orb in the opposite direction
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.8,
        0.025 // Increased responsiveness
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.8,
        0.025
      );

      // More visible rotation
      goldOrbRef.current.rotation.x += 0.001;
      goldOrbRef.current.rotation.y += 0.0015;
      brownOrbRef.current.rotation.x += 0.0012;
      brownOrbRef.current.rotation.y += 0.0018;
    }
  });

  return (
    <>
      {/* Gold orb - moved much closer to camera */}
      <mesh ref={goldOrbRef} position={[-2, 1.5, 0]}>
        <sphereGeometry args={[7, 64, 64]} />
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - moved much closer to camera */}
      <mesh ref={brownOrbRef} position={[2, -1.5, 1]}>
        <sphereGeometry args={[8.5, 64, 64]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
