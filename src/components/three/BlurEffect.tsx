
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Extreme blur simulation with very low resolution rendering
    gl.setPixelRatio(window.devicePixelRatio * 0.25);
  }, [gl]);

  return null;
};

export default BlurEffect;
