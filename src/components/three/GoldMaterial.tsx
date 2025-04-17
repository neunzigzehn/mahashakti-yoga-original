
import { useMemo } from 'react';
import * as THREE from 'three';

interface GoldMaterialProps {
  lowPerf?: boolean;
}

const GoldMaterial = ({ lowPerf = false }: GoldMaterialProps) => {
  // Memoize material creation to avoid recreation on every render
  const material = useMemo(() => {
    // Use simpler material for low performance devices
    if (lowPerf) {
      return new THREE.MeshBasicMaterial({
        color: new THREE.Color('#BFA065'),
        transparent: true,
        opacity: 0.8,
      });
    }
    
    // Full quality material for higher-end devices
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#BFA065'),
      metalness: 0.7,
      roughness: 0.25,
      reflectivity: 0.9,
      clearcoat: 0.3,
      clearcoatRoughness: 0.3,
      transmission: 0.0,
      transparent: true,
      opacity: 0.8,
      envMapIntensity: 1.0,
    });
  }, [lowPerf]);

  return <primitive object={material} attach="material" />;
};

export default GoldMaterial;
