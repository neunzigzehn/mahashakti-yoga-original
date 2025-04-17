
const Lighting = () => {
  return (
    <>
      {/* Increased ambient light for better overall visibility */}
      <ambientLight intensity={0.7} />
      
      {/* Main directional light positioned for optimal illumination */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.0} 
        color="#FFFFFF"
        castShadow 
      />
      
      {/* Accent lights for depth and atmosphere */}
      <pointLight position={[-10, -10, -5]} intensity={0.9} color="#FEF7CD" />
      <pointLight position={[0, 0, 10]} intensity={0.7} color="#FFFFFF" />
    </>
  );
};

export default Lighting;
