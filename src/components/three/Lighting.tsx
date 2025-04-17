
const Lighting = () => {
  return (
    <>
      {/* Minimal lighting setup to avoid compatibility issues */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
    </>
  );
};

export default Lighting;
