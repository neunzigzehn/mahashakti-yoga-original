
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Moderate blur simulation with better resolution rendering
    gl.setPixelRatio(window.devicePixelRatio * 0.5); // Increased from 0.25 to 0.5
  }, [gl]);

  return null;
};

export default BlurEffect;
