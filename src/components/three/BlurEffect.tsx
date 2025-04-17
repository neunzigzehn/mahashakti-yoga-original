
import { useRef, useEffect } from 'react';
import { useThree, extend } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';

// We'll use @react-three/postprocessing instead of direct Three.js imports
const BlurEffect = () => {
  const { gl, scene, camera } = useThree();
  
  useEffect(() => {
    // Set high resolution rendering for better quality
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, [gl]);

  return (
    <EffectComposer>
      <Bloom 
        intensity={0.75} // subtle bloom
        luminanceThreshold={0.2} // start bloom at brighter values
        luminanceSmoothing={0.9} // smooth transition
        kernelSize={KernelSize.LARGE} // larger for more diffuse effect
        mipmapBlur={true} // enable mipmap blur for better quality
      />
    </EffectComposer>
  );
};

export default BlurEffect;
