
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.75} /> {/* Increased for better overall illumination */}
      <directionalLight position={[10, 10, 5]} intensity={1.0} color="#FFFFFF" /> {/* Increased intensity */}
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#FFF9E0" /> {/* Increased for blonde hair highlight */}
      <pointLight position={[8, 5, 15]} intensity={0.9} color="#FFECE3" /> {/* Increased for skin tone highlight */}
      <pointLight position={[0, 0, 10]} intensity={0.85} color="#FFFFFF" /> {/* Increased for better center lighting */}
      <pointLight position={[-5, 3, 0]} intensity={0.7} color="#FDE1D3" /> {/* Increased for skin tone accent light */}
    </>
  );
};

export default Lighting;
