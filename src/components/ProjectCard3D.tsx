import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TrendingUp, Users } from 'lucide-react';

function FloatingCard3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[2, 1.5, 0.2]} radius={0.1}>
      <meshStandardMaterial
        color="#14b8a6"
        metalness={0.6}
        roughness={0.4}
        transparent
        opacity={0.8}
      />
    </RoundedBox>
  );
}

interface ProjectCard3DProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    results: string;
    impact: string;
    category: string;
  };
  index: number;
}

export default function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02, z: 50 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 relative"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="h-full w-full">
            <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <FloatingCard3D />
            </Canvas>
          </div>
        </div>

        <div className="relative z-10 p-6 sm:p-8 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <motion.div
              style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)' }}
              className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
            <motion.span
              style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}
              className="px-3 py-1 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
            >
              {project.category}
            </motion.span>
          </div>

          <motion.h3
            style={{ transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)' }}
            className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300"
          >
            {project.title}
          </motion.h3>

          <motion.p
            style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}
            className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div
            style={{ transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)' }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Impact:</p>
                  <p className="font-bold text-lg text-green-600">{project.impact}</p>
                </div>
                <div className="text-right">
                  <Users className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(20,184,166,0.15) 0%, transparent 70%)',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateZ(5px)' : 'translateZ(0px)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
