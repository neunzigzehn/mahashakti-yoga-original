
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
    timeRef.current += 0.005; // Slow time increment for gentle pulsing
    
    if (goldOrbRef.current && brownOrbRef.current) {
      // Gentle size pulsing based on time
      const goldPulse = Math.sin(timeRef.current * 0.5) * 0.05 + 1;
      const brownPulse = Math.sin(timeRef.current * 0.3 + 1) * 0.07 + 1;
      
      goldOrbRef.current.scale.set(goldPulse, goldPulse, goldPulse);
      brownOrbRef.current.scale.set(brownPulse, brownPulse, brownPulse);
      
      // Move gold orb with gentler lerp factor
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.2,
        0.01 // Slightly increased responsiveness
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.2,
        0.01
      );

      // Move brown orb in the opposite direction
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.5,
        0.008 // Slightly increased responsiveness
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.5,
        0.008
      );

      // More subtle rotation for premium feel
      goldOrbRef.current.rotation.x += 0.0003;
      goldOrbRef.current.rotation.y += 0.0004;
      brownOrbRef.current.rotation.x += 0.0004;
      brownOrbRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      {/* Gold orb - moved closer to camera */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -6]}>
        <sphereGeometry args={[7.5, 64, 64]} />
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - moved closer to camera */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -8]}>
        <sphereGeometry args={[9, 64, 64]} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
