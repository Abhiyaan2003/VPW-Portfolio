import { Canvas } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';

export default function BackgroundSystem() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.2} color="#1B4332" />
        </Float>
      </Canvas>
    </div>
  );
}
