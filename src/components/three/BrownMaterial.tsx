
import { useMemo } from 'react';
import * as THREE from 'three';

interface BrownMaterialProps {
  lowPerf?: boolean;
}

const BrownMaterial = ({ lowPerf = false }: BrownMaterialProps) => {
  // Memoize material creation to avoid recreation on every render
  const material = useMemo(() => {
    // Use simpler material for low performance devices
    if (lowPerf) {
      return new THREE.MeshBasicMaterial({
        color: new THREE.Color('#3F3628'),
        transparent: true,
        opacity: 0.7,
      });
    }
    
    // Full quality material for higher-end devices
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#3F3628'),
      metalness: 0.1,
      roughness: 0.6,
      reflectivity: 0.4,
      clearcoat: 0.1,
      clearcoatRoughness: 0.6,
      transmission: 0.0,
      transparent: true,
      opacity: 0.7,
      envMapIntensity: 0.6,
    });
  }, [lowPerf]);

  return <primitive object={material} attach="material" />;
};

export default BrownMaterial;
