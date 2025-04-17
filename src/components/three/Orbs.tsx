
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
  
  // Create a radial gradient texture for our orbs
  const gradientTexture = useMemo(() => {
    const size = 512; // Larger texture for better quality
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create radial gradient
      const gradient = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
      );
      
      // More pronounced white center
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
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
      
      // Move orbs closer to camera for better visibility
      goldOrbRef.current.position.x = THREE.MathUtils.lerp(
        goldOrbRef.current.position.x,
        (mousePosition.x * viewport.width) * 0.1 + Math.sin(time * 0.05) * 2,
        0.005
      );
      goldOrbRef.current.position.y = THREE.MathUtils.lerp(
        goldOrbRef.current.position.y,
        (-mousePosition.y * viewport.height) * 0.1 + Math.cos(time * 0.07) * 1,
        0.005
      );
      // Bring the orb closer to the camera (was -5)
      goldOrbRef.current.position.z = 0;

      brownOrbRef.current.position.x = THREE.MathUtils.lerp(
        brownOrbRef.current.position.x,
        (-mousePosition.x * viewport.width) * 0.12 + Math.cos(time * 0.06) * 1.5,
        0.004
      );
      brownOrbRef.current.position.y = THREE.MathUtils.lerp(
        brownOrbRef.current.position.y,
        (mousePosition.y * viewport.height) * 0.12 + Math.sin(time * 0.08) * 1.2,
        0.004
      );
      // Bring the orb closer to the camera (was -8)
      brownOrbRef.current.position.z = -2;
    }
  });

  return (
    <>
      {/* Gold hue orb */}
      <mesh ref={goldOrbRef} position={[-2, 2, 0]} renderOrder={1}>
        <planeGeometry args={[15, 15]} />
        <meshBasicMaterial 
          map={gradientTexture}
          color="#FEF7CD"
          transparent
          opacity={0.9} // Increased opacity
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      
      {/* Brown/peach hue orb */}
      <mesh ref={brownOrbRef} position={[2, -2, -2]} renderOrder={2}>
        <planeGeometry args={[18, 18]} />
        <meshBasicMaterial 
          map={gradientTexture}
          color="#FDE1D3"
          transparent
          opacity={0.85} // Increased opacity
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
    </>
  );
};

export default Orbs;
