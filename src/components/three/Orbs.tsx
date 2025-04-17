
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import GoldMaterial from './GoldMaterial';
import BrownMaterial from './BrownMaterial';

interface OrbsProps {
  mousePosition: { x: number; y: number };
}

const Orbs = ({ mousePosition }: OrbsProps) => {
  const goldOrbRef = useRef<THREE.Group>(null!);
  const brownOrbRef = useRef<THREE.Group>(null!);
  const goldGlowRef = useRef<THREE.Mesh>(null!);
  const brownGlowRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  // Create more complex geometries for premium look
  const goldGeometry = useMemo(() => new THREE.SphereGeometry(7, 64, 64), []);
  const brownGeometry = useMemo(() => new THREE.SphereGeometry(8, 64, 64), []);
  // Slightly larger geometries for the glow effect
  const goldGlowGeometry = useMemo(() => new THREE.SphereGeometry(7.5, 32, 32), []);
  const brownGlowGeometry = useMemo(() => new THREE.SphereGeometry(8.5, 32, 32), []);
  
  // Use a more sophisticated animation approach
  useFrame(({ clock }) => {
    if (goldOrbRef.current && brownOrbRef.current) {
      const time = clock.getElapsedTime();
      
      // Smooth interactive movement with damping effect for gold orb
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
      
      // Animate glow opacity for subtle pulsing effect
      if (goldGlowRef.current && brownGlowRef.current) {
        const goldGlowOpacity = 0.15 + Math.sin(time * 0.4) * 0.05;
        const brownGlowOpacity = 0.12 + Math.sin(time * 0.3) * 0.04;
        
        (goldGlowRef.current.material as THREE.MeshBasicMaterial).opacity = goldGlowOpacity;
        (brownGlowRef.current.material as THREE.MeshBasicMaterial).opacity = brownGlowOpacity;
      }
    }
  });

  return (
    <>
      {/* Premium gold orb with integrated glow */}
      <group ref={goldOrbRef} position={[-4, 2.5, -12]}>
        <mesh castShadow receiveShadow>
          <primitive object={goldGeometry} />
          <GoldMaterial />
        </mesh>
        <mesh ref={goldGlowRef}>
          <primitive object={goldGlowGeometry} />
          <meshBasicMaterial 
            color="#BFA065" 
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
      
      {/* Premium brown orb with integrated glow */}
      <group ref={brownOrbRef} position={[4.5, -2.5, -15]}>
        <mesh castShadow receiveShadow>
          <primitive object={brownGeometry} />
          <BrownMaterial />
        </mesh>
        <mesh ref={brownGlowRef}>
          <primitive object={brownGlowGeometry} />
          <meshBasicMaterial 
            color="#3F3628" 
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </>
  );
};

export default Orbs;
