
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} /> {/* Slightly reduced for more contrast */}
      <directionalLight position={[10, 10, 5]} intensity={0.9} color="#FFFFFF" /> {/* Increased intensity, whiter light */}
      <pointLight position={[-10, -10, -5]} intensity={0.9} color="#FEF7CD" /> {/* Increased warm light */}
      <pointLight position={[8, 5, 15]} intensity={0.7} color="#E5D1B8" /> {/* Changed to website tan color */}
      <pointLight position={[0, 0, 10]} intensity={0.6} color="#FFFFFF" /> {/* Increased for better center lighting */}
      <pointLight position={[-5, 3, 0]} intensity={0.4} color="#BFA065" /> {/* New gold accent light */}
    </>
  );
};

export default Lighting;
