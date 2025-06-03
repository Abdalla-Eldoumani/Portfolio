"use client";

import { motion } from 'framer-motion';
import { useTilt } from '@/lib/useTilt';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaPython, FaJava, FaCss3Alt, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiGnubash , SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJunit5 , SiAssemblyscript, SiPytest, SiSupabase, SiFirebase, SiVercel } from 'react-icons/si';
import { TbBrandDjango } from "react-icons/tb";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "C/C++", icon: SiCplusplus },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "ARMv8 Assembly", icon: SiAssemblyscript  },
      { name: "Bash", icon: SiGnubash },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Django", icon: TbBrandDjango },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Supabase", icon: SiSupabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "JUnit", icon: SiJunit5 },
      { name: "unittest", icon: SiPytest },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Shell", icon: SiGnubash },
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "npm", icon: FaNpm },
    ],
  },
];

const SkillCard = ({ category }: { category: (typeof skillsData)[number] }) => {
  const tilt = useTilt(3);
  return (
    <motion.div
      ref={tilt.ref}
      whileHover={{ boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 p-4 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-semibold mb-4 text-green-400 ">{category.category}</h3>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-center space-x-2">
            <skill.icon className="text-xl" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-8 bg-slate-950 text-white"
    >
      <h2 className="text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <SkillCard key={category.category} category={category} />
        ))}
      </div>
    </motion.div>
  );
};