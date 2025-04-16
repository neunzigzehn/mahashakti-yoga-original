
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} /> {/* Reduced intensity for subtlety */}
      <directionalLight position={[10, 10, 5]} intensity={0.6} /> {/* Reduced intensity */}
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#FEF7CD" /> {/* Reduced intensity */}
      <pointLight position={[8, 5, 15]} intensity={0.4} color="#FDE1D3" /> {/* Reduced intensity */}
      <pointLight position={[0, 0, 10]} intensity={0.3} color="#FFFFFF" /> {/* Reduced center light */}
    </>
  );
};

export default Lighting;
