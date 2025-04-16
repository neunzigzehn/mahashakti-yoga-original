
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={1.0} /> {/* Increased for better overall illumination */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" /> {/* Increased intensity */}
      <pointLight position={[-10, -10, -5]} intensity={1.8} color="#FFF9E0" /> {/* Increased for blonde hair highlight */}
      <pointLight position={[8, 5, 10]} intensity={1.5} color="#FFECE3" /> {/* Increased for skin tone highlight */}
      <pointLight position={[0, 0, 10]} intensity={1.3} color="#FFFFFF" /> {/* Increased for better center lighting */}
      <pointLight position={[-5, 3, 0]} intensity={1.1} color="#FDE1D3" /> {/* Increased for skin tone accent light */}
    </>
  );
};

export default Lighting;
