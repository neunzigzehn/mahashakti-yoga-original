
import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Simplified version without postprocessing that was causing errors
const BlurEffect = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Set high resolution rendering for better quality
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Configure renderer for better quality
    gl.setClearColor(0xffffff, 0); // Transparent background
  }, [gl]);

  return null; // Return null as we're just configuring the renderer
};

export default BlurEffect;
