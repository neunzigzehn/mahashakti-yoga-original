
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface OrbsProps {
  mousePosition: { x: number; y: number };
}

const Orbs = ({ mousePosition }: OrbsProps) => {
  const goldOrbRef = useRef<THREE.Mesh>(null!);
  const brownOrbRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();
  
  // Create a high-quality radial gradient texture for orbs (cached via useMemo)
  const gradientTexture = useMemo(() => {
    const size = 1024; // Higher resolution texture for better quality
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create radial gradient with smoother transitions
      const gradient = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
      );
      
      // Enhanced glow effect with better color transitions
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.15, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
    
  useFrame(({ clock }) => {
    if (goldOrbRef.current && brownOrbRef.current) {
      const time = clock.getElapsedTime();
      
      // Fixed positioning to ensure visibility
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 0.1 + Math.sin(time * 0.05) * 2,
        0.01
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 0.1 + Math.cos(time * 0.07) * 1,
        0.01
      );
      // Fixed z position to ensure visibility
      goldOrbRef.current.position.z = 0;

      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 0.12 + Math.cos(time * 0.06) * 1.5,
        0.008
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 0.12 + Math.sin(time * 0.08) * 1.2,
        0.008
      );
      // Fixed z position to ensure visibility but maintain layering
      brownOrbRef.current.position.z = -1;
    }
  });

  return (
    <>
      {/* Gold hue orb with increased size and opacity */}
      <mesh ref={goldOrbRef} position={[0, 0, 0]} renderOrder={10}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial 
          map={gradientTexture}
          color="#FEF7CD"
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      
      {/* Brown/peach hue orb with increased size and opacity */}
      <mesh ref={brownOrbRef} position={[0, 0, -1]} renderOrder={9}>
        <planeGeometry args={[22, 22]} />
        <meshBasicMaterial 
          map={gradientTexture}
          color="#FDE1D3"
          transparent
          opacity={1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
    </>
  );
};

export default Orbs;
