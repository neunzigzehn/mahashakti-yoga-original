
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
  
  // Track time for pulsing effect - use ref to prevent re-renders
  const timeRef = useRef(0);

  // Update orb positions and add premium pulsing effect
  useFrame((state, delta) => {
    // Safety check for undefined refs
    if (!goldOrbRef.current || !brownOrbRef.current) return;
    
    // Use delta time to maintain consistent animation speed
    timeRef.current += delta * 0.5; // Reduced animation speed for better stability
    
    // Enhanced size pulsing based on time
    const goldPulse = Math.sin(timeRef.current * 0.4) * 0.05 + 1; // Reduced pulse magnitude
    const brownPulse = Math.sin(timeRef.current * 0.3 + 1) * 0.05 + 1;
    
    goldOrbRef.current.scale.set(goldPulse, goldPulse, goldPulse);
    brownOrbRef.current.scale.set(brownPulse, brownPulse, brownPulse);
    
    // Move gold orb with improved response
    goldOrbRef.current.position.x = THREE.MathUtils.lerp(
      goldOrbRef.current.position.x,
      (mousePosition.x * viewport.width) * 0.8, // Reduced movement
      0.01
    );
    goldOrbRef.current.position.y = THREE.MathUtils.lerp(
      goldOrbRef.current.position.y,
      (-mousePosition.y * viewport.height) * 0.8,
      0.01
    );

    // Move brown orb in the opposite direction
    brownOrbRef.current.position.x = THREE.MathUtils.lerp(
      brownOrbRef.current.position.x,
      (-mousePosition.x * viewport.width) * 0.9,
      0.008
    );
    brownOrbRef.current.position.y = THREE.MathUtils.lerp(
      brownOrbRef.current.position.y,
      (mousePosition.y * viewport.height) * 0.9,
      0.008
    );

    // Simpler rotation that won't cause performance issues
    goldOrbRef.current.rotation.x += delta * 0.02;
    goldOrbRef.current.rotation.y += delta * 0.03;
    brownOrbRef.current.rotation.x += delta * 0.03;
    brownOrbRef.current.rotation.y += delta * 0.02;
  });

  return (
    <>
      {/* Gold orb - simplified geometry */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -9]}>
        <sphereGeometry args={[7.5, 24, 24]} /> {/* Further reduced geometry complexity */}
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - simplified geometry */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -10]}>
        <sphereGeometry args={[9, 24, 24]} /> {/* Further reduced geometry complexity */}
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
