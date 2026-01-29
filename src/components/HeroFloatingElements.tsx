import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLaptop() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[-2, 0, 0]}>
      <Box args={[1.8, 0.05, 1.2]} position={[0, -0.3, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Box>
      <Box args={[1.8, 1.2, 0.05]} position={[0, 0.3, -0.6]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.3} />
      </Box>
      <Box args={[1.4, 0.9, 0.02]} position={[0, 0.35, -0.57]} rotation={[0.3, 0, 0]}>
        <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={0.5} />
      </Box>
    </group>
  );
}

function FloatingSEOIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6 + 1) * 0.4;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[2, 1.5, 0]}>
      <Torus args={[0.4, 0.08, 16, 32]}>
        <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.15, 32, 32]} position={[0.3, 0, 0]}>
        <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  );
}

function FloatingAnalyticsChart() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7 + 2) * 0.35;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[2, -1.5, -0.5]}>
      {[0.3, 0.6, 0.4, 0.8, 0.5].map((height, i) => (
        <Box key={i} args={[0.15, height, 0.15]} position={[i * 0.2 - 0.4, height / 2 - 0.4, 0]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.3} />
        </Box>
      ))}
    </group>
  );
}

function FloatingSocialIcons() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + 3) * 0.4;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[-2.5, -1, 0.5]}>
      <Sphere args={[0.25, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </Sphere>
      <Sphere args={[0.25, 32, 32]} position={[0.6, 0, 0]}>
        <meshStandardMaterial color="#f43f5e" metalness={0.8} roughness={0.2} />
      </Sphere>
      <Sphere args={[0.25, 32, 32]} position={[0.3, 0.5, 0]}>
        <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  );
}

function FloatingTargetIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9 + 4) * 0.3;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[-2, 1.5, -0.5]}>
      <Torus args={[0.4, 0.05, 16, 32]}>
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
      </Torus>
      <Torus args={[0.25, 0.05, 16, 32]}>
        <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.08, 32, 32]}>
        <meshStandardMaterial color="#fde047" metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  );
}

export default function HeroFloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#3b82f6" />
        <spotLight position={[0, 5, 5]} intensity={1} angle={0.3} penumbra={1} />

        <FloatingLaptop />
        <FloatingSEOIcon />
        <FloatingAnalyticsChart />
        <FloatingSocialIcons />
        <FloatingTargetIcon />
      </Canvas>
    </div>
  );
}
