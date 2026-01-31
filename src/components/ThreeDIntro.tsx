import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function RotatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial
        color="#14b8a6"
        emissive="#0d9488"
        shininess={100}
      />
    </mesh>
  );
}

function OrbitingSpheres() {
  const groupRef = useRef<any>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[4, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#06b6d4" />
      </mesh>
      <mesh position={[0, 4, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#0ea5e9" />
      </mesh>
      <mesh position={[-4, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0, -4, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color="#6366f1" />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
    </>
  );
}

export function ThreeDIntro() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Lights />
        <RotatingCube />
        <OrbitingSpheres />
      </Canvas>
    </div>
  );
}
