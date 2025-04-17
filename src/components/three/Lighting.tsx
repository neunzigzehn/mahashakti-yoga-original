
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} /> {/* Reduced for more subtle base illumination */}
      <directionalLight position={[10, 10, 5]} intensity={0.7} color="#FFFFFF" /> {/* Reduced intensity */}
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#FEF7CD" /> {/* Reduced warm light */}
      <pointLight position={[8, 5, 15]} intensity={0.5} color="#E5D1B8" /> {/* Reduced tan color light */}
      <pointLight position={[0, 0, 10]} intensity={0.4} color="#FFFFFF" /> {/* Reduced center lighting */}
      <pointLight position={[-5, 3, 0]} intensity={0.3} color="#BFA065" /> {/* Reduced gold accent light */}
    </>
  );
};

export default Lighting;
