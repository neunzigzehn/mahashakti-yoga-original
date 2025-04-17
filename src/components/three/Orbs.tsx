
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import GoldMaterial from './GoldMaterial';
import BrownMaterial from './BrownMaterial';

interface OrbsProps {
  mousePosition: { x: number; y: number };
  lowPerf?: boolean;
}

const Orbs = ({ mousePosition, lowPerf = false }: OrbsProps) => {
  const goldOrbRef = useRef<THREE.Mesh>(null!);
  const brownOrbRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  // Optimize geometry for low-performance devices
  const goldGeometry = useMemo(() => {
    const segments = lowPerf ? 24 : 48;
    return new THREE.SphereGeometry(6.5, segments, segments);
  }, [lowPerf]);
  
  const brownGeometry = useMemo(() => {
    const segments = lowPerf ? 24 : 48;
    return new THREE.SphereGeometry(8, segments, segments);
  }, [lowPerf]);
  
  // More efficient update using useFrame with performance optimizations
  useFrame(() => {
    if (goldOrbRef.current && brownOrbRef.current) {
      // Move gold orb with optimized smooth movement - less frequent updates on low-perf
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 1.2,
        lowPerf ? 0.005 : 0.01
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 1.2,
        lowPerf ? 0.005 : 0.01
      );

      // Move brown orb with optimized smooth movement
      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 1.4,
        lowPerf ? 0.004 : 0.008
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 1.4,
        lowPerf ? 0.004 : 0.008
      );

      // Gentle rotation with performance optimized values - slower on low-perf
      const rotationFactor = lowPerf ? 0.5 : 1;
      goldOrbRef.current.rotation.x += 0.0004 * rotationFactor;
      goldOrbRef.current.rotation.y += 0.0005 * rotationFactor;
      brownOrbRef.current.rotation.x += 0.0005 * rotationFactor;
      brownOrbRef.current.rotation.y += 0.0006 * rotationFactor;
    }
  });

  return (
    <>
      {/* Gold orb with optimized size and position for visibility */}
      <mesh ref={goldOrbRef} position={[-4, 2.5, -8]}>
        <primitive object={goldGeometry} />
        <GoldMaterial lowPerf={lowPerf} />
      </mesh>
      
      {/* Brown orb with optimized size and position for visibility */}
      <mesh ref={brownOrbRef} position={[4.5, -2.5, -10]}>
        <primitive object={brownGeometry} />
        <BrownMaterial lowPerf={lowPerf} />
      </mesh>
    </>
  );
};

export default Orbs;
