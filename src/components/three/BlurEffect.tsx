
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Safe check before setting pixel ratio
    if (gl && window) {
      // Set pixel ratio once on mount, with fallback
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      gl.setPixelRatio(ratio);
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [gl]);

  return null;
};

export default BlurEffect;
