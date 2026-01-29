import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function RotatingIcon({ iconType }: { iconType: string }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }
  });

  const getIconGeometry = () => {
    switch (iconType) {
      case 'search':
        return (
          <>
            <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
            </Sphere>
            <RoundedBox args={[0.1, 0.4, 0.1]} position={[0.25, -0.25, 0]} rotation={[0, 0, Math.PI / 4]}>
              <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
            </RoundedBox>
          </>
        );
      case 'chart':
        return (
          <>
            {[0.3, 0.6, 0.4, 0.7].map((height, i) => (
              <RoundedBox key={i} args={[0.12, height, 0.12]} position={[i * 0.2 - 0.3, 0, 0]} radius={0.03}>
                <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
              </RoundedBox>
            ))}
          </>
        );
      case 'target':
        return (
          <>
            <Sphere args={[0.4, 32, 32]}>
              <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
            </Sphere>
            <Sphere args={[0.25, 32, 32]}>
              <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.2} />
            </Sphere>
            <Sphere args={[0.1, 32, 32]}>
              <meshStandardMaterial color="#c4b5fd" metalness={0.8} roughness={0.2} />
            </Sphere>
          </>
        );
      default:
        return (
          <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.1}>
            <meshStandardMaterial color="#06b6d4" metalness={0.7} roughness={0.3} />
          </RoundedBox>
        );
    }
  };

  return <group ref={meshRef}>{getIconGeometry()}</group>;
}

interface SkillCard3DProps {
  iconType: string;
  title: string;
  category: string;
  level: number;
  index: number;
}

export default function SkillCard3D({ iconType, title, category, level, index }: SkillCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div className="h-32 mb-4">
            <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
              <RotatingIcon iconType={iconType} />
            </Canvas>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 text-center">{title}</h3>
          <div className="text-xs sm:text-sm text-gray-600 mb-4 text-center">{category}</div>

          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </motion.div>
            </div>
            <span className="absolute -top-7 right-0 text-sm font-semibold text-gray-700">{level}%</span>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(20,184,166,0.1) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
