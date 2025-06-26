"use client";

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaPython, FaJava, FaCss3Alt, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiGnubash , SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJunit5 , SiAssemblyscript, SiPytest, SiSupabase, SiFirebase, SiVercel } from 'react-icons/si';
import { TbBrandDjango } from "react-icons/tb";

const featuredSkills = [
  { name: "TypeScript", icon: SiTypescript, level: "Expert", color: "text-blue-400" },
  { name: "React.js", icon: FaReact, level: "Expert", color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, level: "Expert", color: "text-white" },
  { name: "Python", icon: FaPython, level: "Advanced", color: "text-yellow-400" },
];

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "C/C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "ARMv8 Assembly", icon: SiAssemblyscript, color: "text-gray-400" },
      { name: "Bash", icon: SiGnubash, color: "text-green-400" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Django", icon: TbBrandDjango, color: "text-green-600" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "SQL", icon: FaDatabase, color: "text-blue-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "JUnit", icon: SiJunit5, color: "text-red-500" },
      { name: "unittest", icon: SiPytest, color: "text-yellow-400" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Shell", icon: SiGnubash, color: "text-green-400" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "npm", icon: FaNpm, color: "text-red-600" },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Featured Skills - Bento Grid Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">Core Technologies</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl text-center hover-lift group"
              >
                <div className="mb-4 flex justify-center">
                  <skill.icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                <span className="text-sm text-gray-400 px-3 py-1 rounded-full bg-gray-800/50">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories - Bento Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bento-grid"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`bento-card hover-lift ${
                category.category === 'Languages' ? 'lg:col-span-2' : 
                category.category === 'Frameworks' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <skill.icon className={`text-3xl ${skill.color} mb-2 group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Continuous Learning</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            I&apos;m always exploring new technologies and expanding my skill set. Currently diving deeper into 
            machine learning frameworks, cloud architecture, and advanced cybersecurity practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};