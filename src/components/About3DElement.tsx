import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingEducationIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Box args={[0.6, 0.4, 0.1]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </Box>
      <Box args={[0.8, 0.05, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.3} />
      </Box>
      <Sphere args={[0.08, 32, 32]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  );
}

function FloatingAwardIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6 + 1) * 0.25;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-1, 0, 0]}>
      <Torus args={[0.3, 0.05, 16, 32]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.15, 32, 32]}>
        <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  );
}

function FloatingTargetIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7 + 2) * 0.22;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[1, 0, 0]}>
      <Torus args={[0.35, 0.04, 16, 32]}>
        <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
      </Torus>
      <Torus args={[0.22, 0.04, 16, 32]}>
        <meshStandardMaterial color="#5eead4" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.08, 32, 32]}>
        <meshStandardMaterial color="#99f6e4" metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  );
}

export default function About3DElement() {
  return (
    <div className="w-full h-48 relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#3b82f6" />

        <FloatingEducationIcon />
        <FloatingAwardIcon />
        <FloatingTargetIcon />
      </Canvas>
    </div>
  );
}
