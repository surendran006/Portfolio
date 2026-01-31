import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface ThreeDCardProps {
  children?: React.ReactNode;
}

function FloatingCard() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <boxGeometry args={[3, 3.5, 0.2]} />
      <meshPhongMaterial
        color={hovered ? '#0ea5e9' : '#14b8a6'}
        emissive={hovered ? '#0369a1' : '#0d9488'}
        shininess={100}
      />
    </mesh>
  );
}

function CardLights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#06b6d4" />
    </>
  );
}

export function ThreeDCard({ children }: ThreeDCardProps) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      >
        <CardLights />
        <FloatingCard />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {children && <div className="relative z-10">{children}</div>}
      </div>
    </div>
  );
}
