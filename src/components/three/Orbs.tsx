
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
  const { viewport } = useThree();
  
  // Use simpler geometries with lower polygon count for better performance
  // Larger sizes for more diffuse appearance
  const goldGeometry = useMemo(() => new THREE.SphereGeometry(9, 32, 32), []);
  const brownGeometry = useMemo(() => new THREE.SphereGeometry(10, 32, 32), []);
  
  // Multi-layered glow for better ethereal effect
  const goldGlowGeometryInner = useMemo(() => new THREE.SphereGeometry(9.2, 24, 24), []);
  const goldGlowGeometryMiddle = useMemo(() => new THREE.SphereGeometry(10, 20, 20), []);
  const goldGlowGeometryOuter = useMemo(() => new THREE.SphereGeometry(12, 16, 16), []);
  
  const brownGlowGeometryInner = useMemo(() => new THREE.SphereGeometry(10.2, 24, 24), []);
  const brownGlowGeometryMiddle = useMemo(() => new THREE.SphereGeometry(11, 20, 20), []);
  const brownGlowGeometryOuter = useMemo(() => new THREE.SphereGeometry(13, 16, 16), []);
  
  // More subtle, slower animation for ethereal feel
  useFrame(({ clock }) => {
    if (goldOrbRef.current && brownOrbRef.current) {
      const time = clock.getElapsedTime();
      
      // Much slower movement for more subtle effect
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 0.3 + Math.sin(time * 0.1) * 2,
        0.01 // More gradual lerp
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 0.3 + Math.cos(time * 0.15) * 1.5,
        0.01
      );
      goldOrbRef.current.position.z = -20 + Math.sin(time * 0.07) * 3;

      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 0.35 + Math.cos(time * 0.12) * 2.2,
        0.009
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 0.35 + Math.sin(time * 0.17) * 1.8,
        0.009
      );
      brownOrbRef.current.position.z = -25 + Math.cos(time * 0.09) * 3;

      // Very slow rotation for ethereal effect
      goldOrbRef.current.rotation.x = time * 0.02;
      goldOrbRef.current.rotation.y = time * 0.03;
      brownOrbRef.current.rotation.x = time * 0.025;
      brownOrbRef.current.rotation.y = time * 0.02;
      
      // Pulse opacity for glow layers with different frequencies
      const goldPulseInner = 0.3 + Math.sin(time * 0.2) * 0.05;
      const goldPulseMiddle = 0.2 + Math.sin(time * 0.15) * 0.04;
      const goldPulseOuter = 0.1 + Math.sin(time * 0.1) * 0.02;
      
      const brownPulseInner = 0.25 + Math.sin(time * 0.18) * 0.04;
      const brownPulseMiddle = 0.18 + Math.sin(time * 0.13) * 0.03;
      const brownPulseOuter = 0.08 + Math.sin(time * 0.08) * 0.02;
    }
  });

  return (
    <>
      {/* Ethereal gold blob with layered glow effect */}
      <group ref={goldOrbRef} position={[-4, 2.5, -20]}>
        {/* Core sphere with more transparent material */}
        <mesh castShadow receiveShadow>
          <primitive object={goldGeometry} />
          <GoldMaterial />
        </mesh>
        
        {/* Inner glow layer */}
        <mesh>
          <primitive object={goldGlowGeometryInner} />
          <meshBasicMaterial 
            color="#DFC585" 
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Middle glow layer */}
        <mesh>
          <primitive object={goldGlowGeometryMiddle} />
          <meshBasicMaterial 
            color="#DFC585" 
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Outer glow layer - very large and diffuse */}
        <mesh>
          <primitive object={goldGlowGeometryOuter} />
          <meshBasicMaterial 
            color="#E8D7A9" 
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
      
      {/* Ethereal brown blob with layered glow effect */}
      <group ref={brownOrbRef} position={[4.5, -2.5, -25]}>
        {/* Core sphere with more transparent material */}
        <mesh castShadow receiveShadow>
          <primitive object={brownGeometry} />
          <BrownMaterial />
        </mesh>
        
        {/* Inner glow layer */}
        <mesh>
          <primitive object={brownGlowGeometryInner} />
          <meshBasicMaterial 
            color="#6A5A45" 
            transparent
            opacity={0.25}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Middle glow layer */}
        <mesh>
          <primitive object={brownGlowGeometryMiddle} />
          <meshBasicMaterial 
            color="#6A5A45" 
            transparent
            opacity={0.18}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Outer glow layer - very large and diffuse */}
        <mesh>
          <primitive object={brownGlowGeometryOuter} />
          <meshBasicMaterial 
            color="#8F7C61" 
            transparent
            opacity={0.08}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </>
  );
};

export default Orbs;
