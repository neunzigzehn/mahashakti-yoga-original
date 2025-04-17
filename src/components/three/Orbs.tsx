
import { useRef, useMemo } from 'react';
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
  
  // Create more complex geometries for premium look
  const goldGeometry = useMemo(() => new THREE.SphereGeometry(7, 64, 64), []);
  const brownGeometry = useMemo(() => new THREE.SphereGeometry(8, 64, 64), []);
  
  // Use a more sophisticated animation approach
  useFrame(({ clock }) => {
    if (goldOrbRef.current && brownOrbRef.current) {
      const time = clock.getElapsedTime();
      
      // Smooth interactive movement with damping effect
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 0.65 + Math.sin(time * 0.2) * 1.5,
        0.02
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 0.65 + Math.cos(time * 0.3) * 1.2,
        0.02
      );
      goldOrbRef.current.position.z = -12 + Math.sin(time * 0.1) * 2;

      // Move brown orb in the opposite direction with smooth movement
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 0.75 + Math.cos(time * 0.25) * 1.8,
        0.018
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 0.75 + Math.sin(time * 0.35) * 1.5,
        0.018
      );
      brownOrbRef.current.position.z = -15 + Math.cos(time * 0.15) * 2;

      // Gentle rotation for ethereal effect
      goldOrbRef.current.rotation.x = time * 0.05;
      goldOrbRef.current.rotation.y = time * 0.08;
      brownOrbRef.current.rotation.x = time * 0.07;
      brownOrbRef.current.rotation.y = time * 0.04;
    }
  });

  return (
    <>
      {/* Premium gold orb */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -12]} castShadow receiveShadow>
        <primitive object={goldGeometry} />
        <GoldMaterial />
      </mesh>
      
      {/* Premium brown orb */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -15]} castShadow receiveShadow>
        <primitive object={brownGeometry} />
        <BrownMaterial />
      </mesh>
    </>
  );
};

export default Orbs;
