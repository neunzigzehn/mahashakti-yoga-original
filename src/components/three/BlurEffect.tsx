
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // More aggressive blur simulation with lower resolution rendering
    gl.setPixelRatio(window.devicePixelRatio * 0.4);
  }, [gl]);

  return null;
};

export default BlurEffect;
