
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FFFFFF" />
      {/* Reduced number of lights for better performance */}
      <pointLight position={[-10, -10, -5]} intensity={1.2} color="#FEF7CD" />
      <pointLight position={[0, 0, 10]} intensity={0.9} color="#FFFFFF" />
    </>
  );
};

export default Lighting;
