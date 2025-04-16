
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Full resolution rendering for maximum orb visibility
    gl.setPixelRatio(window.devicePixelRatio);
    
    // Set renderer to handle alpha correctly
    gl.setClearColor(0xffffff, 0);
  }, [gl]);

  return null;
};

export default BlurEffect;
