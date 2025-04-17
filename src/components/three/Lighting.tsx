
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
    </>
  );
};

export default Lighting;
