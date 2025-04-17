
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

  // Update orb positions and add subtle pulsing effect
  useFrame((state) => {
    timeRef.current += 0.005; // Slower, more subtle time increment
    
    if (goldOrbRef.current && brownOrbRef.current) {
      // Very subtle size pulsing based on time
      const goldPulse = Math.sin(timeRef.current * 0.5) * 0.05 + 1; // Reduced amplitude for subtlety
      const brownPulse = Math.sin(timeRef.current * 0.3 + 1) * 0.06 + 1; // Reduced amplitude
      
      goldOrbRef.current.scale.set(goldPulse, goldPulse, goldPulse);
      brownOrbRef.current.scale.set(brownPulse, brownPulse, brownPulse);
      
      // Move gold orb with extremely subtle movement
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 0.8, // Reduced movement range
        0.008 // Slower for more subtle response
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 0.8,
        0.008
      );

      // Move brown orb in the opposite direction with subtle movement
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.0,
        0.006 // Even slower
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.0,
        0.006
      );

      // Very subtle rotation
      goldOrbRef.current.rotation.x += 0.0002;
      goldOrbRef.current.rotation.y += 0.0003;
      brownOrbRef.current.rotation.x += 0.0003;
      brownOrbRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <>
      {/* Gold orb - much larger but more transparent for diffuse effect */}
      <mesh ref={goldOrbRef} position={[-2, 1.5, -12]}>
        <sphereGeometry args={[11, 64, 64]} /> {/* Larger size for more diffuse appearance */}
        <GoldMaterial />
      </mesh>
      
      {/* Brown orb - much larger but more transparent for diffuse effect */}
      <mesh ref={brownOrbRef} position={[3, -2, -14]}>
        <sphereGeometry args={[13, 64, 64]} /> {/* Larger size for more diffuse appearance */}
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
