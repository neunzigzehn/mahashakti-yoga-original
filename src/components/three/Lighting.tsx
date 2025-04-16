
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.8} /> {/* Increased from 0.6 */}
      <directionalLight position={[10, 10, 5]} intensity={0.8} /> {/* Increased from 0.6 */}
      <pointLight position={[-10, -10, -5]} intensity={1.0} color="#FEF7CD" /> {/* Increased intensity and changed color */}
      <pointLight position={[8, 5, 15]} intensity={0.6} color="#FDE1D3" /> {/* Increased from 0.4 */}
      <pointLight position={[0, 0, 10]} intensity={0.5} color="#FFFFFF" /> {/* Added a center light */}
    </>
  );
};

export default Lighting;
