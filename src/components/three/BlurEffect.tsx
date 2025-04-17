
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Full resolution rendering for better visibility
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit to 2x for performance
  }, [gl]);

  return null;
};

export default BlurEffect;
