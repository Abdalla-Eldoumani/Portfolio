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

interface TooltipPosition {
  showAbove: boolean;
  horizontalAlign: 'left' | 'center' | 'right';
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
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

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

  // Scroll prevention during interaction
  useEffect(() => {
    if (isInteracting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isInteracting]);

  // Zoom with mouse wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          const delta = -e.deltaY * 0.001;
          setZoomLevel((prev) => Math.min(Math.max(0.5, prev + delta), 2.0));
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      setPanOffset({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

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

  const getTooltipPosition = (nodeX: number, nodeY: number): TooltipPosition => {
    const viewportHeight = dimensions.height;
    const showAbove = nodeY > viewportHeight * 0.6;

    let horizontalAlign: 'left' | 'center' | 'right' = 'center';
    if (nodeX < 100) horizontalAlign = 'left';
    else if (nodeX > dimensions.width - 100) horizontalAlign = 'right';

    return { showAbove, horizontalAlign };
  };

  const projectConnections: Record<string, string[]> = {
    'Next.js': ['TypeScript', 'React.js', 'TailwindCSS', 'Prisma', 'Vercel', 'Framer Motion'],
    'TypeScript': ['Next.js', 'React.js', 'Angular', 'Node.js', 'TailwindCSS'],
    'React.js': ['Next.js', 'TypeScript', 'Angular', 'TailwindCSS'],
    'TailwindCSS': ['Next.js', 'TypeScript', 'React.js', 'Framer Motion'],
    'Rust': ['SQLite', 'JWT', 'WebSocket'],
    'C++': ['Python', 'OpenMP'],
    'Python': ['Docker', 'TensorFlow', 'PyTorch', 'C++', 'TypeScript'],
    'Docker': ['Python', 'AWS'],
    'TensorFlow': ['Python', 'PyTorch'],
    'PyTorch': ['Python', 'TensorFlow'],
    'Angular': ['TypeScript', 'React.js'],
    'Node.js': ['TypeScript', 'Express.js', 'PostgreSQL', 'MongoDB'],
    'Express.js': ['Node.js'],
    'PostgreSQL': ['Node.js'],
    'MongoDB': ['Node.js'],
    'MySQL': ['Prisma'],
    'Prisma': ['Next.js', 'MySQL'],
    'Java': ['JUnit'],
    'JUnit': ['Java'],
    'AWS': ['Docker'],
    'Vercel': ['Next.js'],
    'Framer Motion': ['Next.js', 'TailwindCSS'],
    'Git': ['TypeScript', 'Python', 'JavaScript', 'Java', 'Rust', 'C++'],
    'JavaScript': ['HTML5', 'CSS3', 'Git'],
    'HTML5': ['CSS3', 'JavaScript'],
    'CSS3': ['HTML5', 'JavaScript'],
    'SQLite': ['Rust'],
    'JWT': ['Rust'],
    'WebSocket': ['Rust'],
    'OpenMP': ['C++'],
  };

  const shouldConnect = (skill1: Skill, skill2: Skill) => {
    return (
      projectConnections[skill1.name]?.includes(skill2.name) ||
      projectConnections[skill2.name]?.includes(skill1.name)
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] lg:h-[700px] overflow-hidden rounded-2xl"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      {/* Zoom controls */}
      <div className="absolute top-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={() => setZoomLevel((prev) => Math.min(prev + 0.2, 2.0))}
          className="glass-effect w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Zoom in"
        >
          <span className="text-xl font-bold">+</span>
        </button>
        <button
          onClick={() => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5))}
          className="glass-effect w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          aria-label="Zoom out"
        >
          <span className="text-xl font-bold">−</span>
        </button>
        <div className="glass-effect px-2 py-1 rounded-lg border border-white/10 text-xs text-white text-center">
          {Math.round(zoomLevel * 100)}%
        </div>
      </div>

      {/* Zoomable/Pannable container */}
      <div
        style={{
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
          transformOrigin: 'center center',
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          width: '100%',
          height: '100%',
          position: 'relative',
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
          const tooltipPos = getTooltipPosition(position.x, position.y);

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

              {/* Smart Tooltip */}
              <motion.div
                className="absolute whitespace-nowrap pointer-events-none"
                style={{
                  top: tooltipPos.showAbove ? 'auto' : '100%',
                  bottom: tooltipPos.showAbove ? '100%' : 'auto',
                  left: tooltipPos.horizontalAlign === 'left' ? '0' : tooltipPos.horizontalAlign === 'right' ? 'auto' : '50%',
                  right: tooltipPos.horizontalAlign === 'right' ? '0' : 'auto',
                  transform: tooltipPos.horizontalAlign === 'center' ? 'translateX(-50%)' : 'none',
                  marginTop: tooltipPos.showAbove ? '0' : '8px',
                  marginBottom: tooltipPos.showAbove ? '8px' : '0',
                }}
                initial={{ opacity: 0, y: tooltipPos.showAbove ? 10 : -10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : tooltipPos.showAbove ? 10 : -10 }}
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
    </div>
  );
};
