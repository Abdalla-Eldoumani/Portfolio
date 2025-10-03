"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  proficiency: number;
  color: string;
  category: string;
}

interface SkillConstellationProps {
  skills: Skill[];
}

/**
 * Interactive skill constellation - signature feature
 * Visualizes skills as an interconnected knowledge graph
 * Proficiency determines node size, hover reveals connections
 */
export const SkillConstellation = ({ skills }: SkillConstellationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Generate positions using force-directed layout approximation
  const getSkillPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.35;
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  // Determine if skills should be connected (same category or high proficiency)
  const shouldConnect = (skill1: Skill, skill2: Skill) => {
    return (
      skill1.category === skill2.category ||
      (skill1.proficiency > 75 && skill2.proficiency > 75)
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] lg:h-[700px] overflow-hidden rounded-2xl"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
      }}
    >
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--accent-secondary)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {skills.map((skill1, i) =>
          skills.slice(i + 1).map((skill2, j) => {
            if (!shouldConnect(skill1, skill2)) return null;

            const pos1 = getSkillPosition(i, skills.length);
            const pos2 = getSkillPosition(i + j + 1, skills.length);

            const isHighlighted =
              hoveredSkill === skill1.name || hoveredSkill === skill2.name;

            return (
              <motion.line
                key={`${skill1.name}-${skill2.name}`}
                x1={pos1.x}
                y1={pos1.y}
                x2={pos2.x}
                y2={pos2.y}
                stroke="url(#connectionGradient)"
                strokeWidth={isHighlighted ? 2 : 1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: isHighlighted ? 0.6 : 0.15,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.05,
                  opacity: { duration: 0.3 },
                }}
              />
            );
          })
        )}
      </svg>

      {/* Skill nodes */}
      {skills.map((skill, index) => {
        const position = getSkillPosition(index, skills.length);
        const size = 40 + (skill.proficiency / 100) * 40; // 40-80px based on proficiency
        const Icon = skill.icon;
        const isHovered = hoveredSkill === skill.name;

        return (
          <motion.div
            key={skill.name}
            className="absolute cursor-pointer group"
            style={{
              left: position.x,
              top: position.y,
              width: size,
              height: size,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            whileHover={{ scale: 1.2, zIndex: 50 }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background: skill.color.replace('text-', 'bg-'),
                opacity: 0,
              }}
              animate={{ opacity: isHovered ? 0.4 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Node */}
            <div
              className="relative w-full h-full flex items-center justify-center rounded-full border-2 transition-all duration-300"
              style={{
                background: 'var(--secondary-bg)',
                borderColor: isHovered
                  ? 'var(--accent-primary)'
                  : 'var(--border-primary)',
                boxShadow: isHovered
                  ? '0 8px 32px rgba(6, 182, 212, 0.3)'
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Icon
                className={`${skill.color} transition-transform duration-300 ${
                  isHovered ? 'scale-110' : ''
                }`}
                size={size * 0.5}
              />
            </div>

            {/* Tooltip */}
            <motion.div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-effect px-3 py-2 rounded-lg border border-white/10">
                <p className="text-sm font-semibold text-white">{skill.name}</p>
                <p className="text-xs text-gray-400">
                  Proficiency: {skill.proficiency}%
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h3
            className="text-2xl font-bold text-gradient opacity-20"
            style={{ letterSpacing: '-0.02em' }}
          >
            Skills Ecosystem
          </h3>
        </div>
      </div>
    </div>
  );
};
