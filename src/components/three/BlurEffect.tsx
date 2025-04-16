
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Higher resolution rendering for clearer orbs
    gl.setPixelRatio(window.devicePixelRatio * 0.85); // Increased from 0.65 for better quality
  }, [gl]);

  return null;
};

export default BlurEffect;
