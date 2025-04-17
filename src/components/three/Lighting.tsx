
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.9} color="#FFFFFF" />
      <pointLight position={[-10, -10, -5]} intensity={0.9} color="#FEF7CD" />
      <pointLight position={[0, 0, 10]} intensity={0.6} color="#FFFFFF" />
    </>
  );
};

export default Lighting;
