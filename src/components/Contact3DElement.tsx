import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function FloatingEmailIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-1.5, 0, 0]}>
      <RoundedBox args={[0.8, 0.5, 0.1]} radius={0.05}>
        <meshStandardMaterial color="#14b8a6" metalness={0.7} roughness={0.3} />
      </RoundedBox>
      <RoundedBox args={[0.8, 0.02, 0.02]} position={[0, 0, 0.05]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#5eead4" metalness={0.8} roughness={0.2} />
      </RoundedBox>
    </group>
  );
}

function FloatingPhoneIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8 + 1) * 0.25;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      <RoundedBox args={[0.35, 0.7, 0.08]} radius={0.08}>
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </RoundedBox>
      <RoundedBox args={[0.25, 0.5, 0.02]} position={[0, 0, 0.05]}>
        <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
      </RoundedBox>
    </group>
  );
}

function FloatingLocationIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6 + 2) * 0.28;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[1.5, -0.3, 0]}>
      <Sphere args={[0.15, 32, 32]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </Sphere>
      <RoundedBox args={[0.1, 0.4, 0.1]} position={[0, 0, 0]} radius={0.05}>
        <meshStandardMaterial color="#a78bfa" metalness={0.7} roughness={0.3} />
      </RoundedBox>
    </group>
  );
}

function FloatingConnectIcon() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.9 + 3) * 0.2;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      <Torus args={[0.25, 0.05, 16, 32]}>
        <meshStandardMaterial color="#ec4899" metalness={0.8} roughness={0.2} />
      </Torus>
      <Sphere args={[0.1, 32, 32]} position={[0.25, 0, 0]}>
        <meshStandardMaterial color="#f472b6" metalness={0.8} roughness={0.2} />
      </Sphere>
      <Sphere args={[0.1, 32, 32]} position={[-0.25, 0, 0]}>
        <meshStandardMaterial color="#f472b6" metalness={0.8} roughness={0.2} />
      </Sphere>
    </group>
  );
}

export default function Contact3DElement() {
  return (
    <div className="w-full h-64 relative">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
        <spotLight position={[0, 5, 5]} intensity={1} angle={0.3} penumbra={1} />

        <FloatingEmailIcon />
        <FloatingPhoneIcon />
        <FloatingLocationIcon />
        <FloatingConnectIcon />
      </Canvas>
    </div>
  );
}
