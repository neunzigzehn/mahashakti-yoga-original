
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
    const size = 1024; // Higher resolution texture for production quality
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
      
      // Optimized movement calculations with better performance
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 0.1 + Math.sin(time * 0.05) * 2,
        0.01 // Slightly increased for smoother movement
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 0.1 + Math.cos(time * 0.07) * 1,
        0.01
      );
      // Optimal z-position for visibility
      goldOrbRef.current.position.z = -0.5;

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
      // Optimal z-position for visibility and layering
      brownOrbRef.current.position.z = -3;
    }
  });

  return (
    <>
      {/* Gold hue orb - optimized for visibility and performance */}
      <mesh ref={goldOrbRef} position={[-2, 2, -0.5]} renderOrder={1}>
        <planeGeometry args={[14, 14]} />
        <meshBasicMaterial 
          map={gradientTexture}
          color="#FEF7CD"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      
      {/* Brown/peach hue orb - optimized for visibility and performance */}
      <mesh ref={brownOrbRef} position={[2, -2, -3]} renderOrder={2}>
        <planeGeometry args={[16, 16]} />
        <meshBasicMaterial 
          map={gradientTexture}
          color="#FDE1D3"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
    </>
  );
};

export default Orbs;
