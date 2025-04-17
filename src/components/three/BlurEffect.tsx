
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Full resolution rendering for better visibility
    gl.setPixelRatio(window.devicePixelRatio);
  }, [gl]);

  return null;
};

export default BlurEffect;
