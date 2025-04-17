
import { useEffect } from 'react';
import { useThree, extend } from '@react-three/fiber';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import * as THREE from 'three';

// Register the postprocessing passes
extend({ EffectComposer, RenderPass, UnrealBloomPass });

const BlurEffect = () => {
  const { gl, scene, camera, size } = useThree();
  
  useEffect(() => {
    // Set high resolution rendering
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create effect composer
    const composer = new EffectComposer(gl);
    composer.addPass(new RenderPass(scene, camera));
    
    // Add bloom pass for soft glow effect
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.width, size.height),
      0.75,  // strength: subtle bloom
      0.5,   // radius: larger for more diffuse effect
      0.2    // threshold: start bloom at brighter values
    );
    composer.addPass(bloomPass);
    
    // Override the default render function to use our composer
    const originalRender = gl.render;
    gl.render = () => {
      composer.render();
    };
    
    return () => {
      gl.render = originalRender;
    };
  }, [gl, scene, camera, size]);

  return null;
};

export default BlurEffect;
