
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.8} /> {/* Increased for better base illumination */}
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FFFFFF" /> {/* Increased intensity */}
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#FEF7CD" /> {/* Increased warm light */}
      <pointLight position={[8, 5, 15]} intensity={1.0} color="#E5D1B8" /> {/* Increased tan color light */}
      <pointLight position={[0, 0, 10]} intensity={0.9} color="#FFFFFF" /> {/* Increased center lighting */}
      <pointLight position={[-5, 3, 0]} intensity={0.7} color="#BFA065" /> {/* Increased gold accent light */}
    </>
  );
};

export default Lighting;
