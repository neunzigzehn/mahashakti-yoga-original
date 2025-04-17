
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Set pixel ratio once on mount
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit to prevent performance issues
    
    return () => {
      // Cleanup if needed
    };
  }, [gl]);

  return null;
};

export default BlurEffect;
