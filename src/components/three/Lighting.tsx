
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.65} /> {/* Slightly increased for warmer overall atmosphere */}
      <directionalLight position={[10, 10, 5]} intensity={0.85} color="#FFFFFF" /> {/* Slightly reduced for softer look */}
      <pointLight position={[-10, -10, -5]} intensity={0.95} color="#FFF9E0" /> {/* Changed to match blonde hair color */}
      <pointLight position={[8, 5, 15]} intensity={0.75} color="#FFECE3" /> {/* Changed to match skin tone */}
      <pointLight position={[0, 0, 10]} intensity={0.65} color="#FFFFFF" /> {/* Increased for better center lighting */}
      <pointLight position={[-5, 3, 0]} intensity={0.45} color="#FDE1D3" /> {/* Changed to skin tone for accent light */}
    </>
  );
};

export default Lighting;
