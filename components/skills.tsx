"use client";

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaPython, FaJava, FaCss3Alt, FaNpm, FaAws } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiGnubash, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJunit5, SiAssemblyscript, SiPytest, SiSupabase, SiFirebase, SiVercel, SiSpring, SiFlask, SiDjango, SiKubernetes, SiMysql, SiOracle, SiPhp, SiCsharp, SiJupyter, SiPowerbi, SiMicrosoftazure, SiOpenai, SiTensorflow, SiPytorch, SiPostman, SiJira, SiKotlin, SiGo, SiApachekafka, SiJenkins, SiLinux, SiRust } from 'react-icons/si';
import { TbBrandDjango } from "react-icons/tb";
import { SkillConstellation } from '@/components/ui/skill-constellation';

const featuredSkills = [
  { name: "C/C++", icon: SiCplusplus, level: "Proficient", proficiency: 85, color: "text-blue-600", category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, level: "Proficient", proficiency: 80, color: "text-blue-400", category: "Languages" },
  { name: "Python", icon: FaPython, level: "Proficient", proficiency: 82, color: "text-yellow-400", category: "Languages" },
  { name: "Java", icon: FaJava, level: "Proficient", proficiency: 75, color: "text-red-500", category: "Languages" },
  { name: "Rust", icon: SiRust, level: "Advanced", proficiency: 78, color: "text-orange-500", category: "Languages" },
  { name: "React.js", icon: FaReact, level: "Proficient", proficiency: 83, color: "text-cyan-400", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, level: "Proficient", proficiency: 81, color: "text-white", category: "Frontend" },
  { name: "Node.js", icon: FaNodeJs, level: "Proficient", proficiency: 79, color: "text-green-500", category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, level: "Proficient", proficiency: 77, color: "text-blue-600", category: "Database" },
  { name: "Docker", icon: FaDocker, level: "Intermediate", proficiency: 72, color: "text-blue-500", category: "DevOps" },
  { name: "AWS", icon: FaAws, level: "Intermediate", proficiency: 70, color: "text-orange-400", category: "Cloud" },
  { name: "TensorFlow", icon: SiTensorflow, level: "Intermediate", proficiency: 68, color: "text-orange-500", category: "AI/ML" },
];

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C/C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Rust", icon: SiRust, color: "text-orange-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Assembly", icon: SiAssemblyscript, color: "text-gray-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
      { name: "Bash", icon: SiGnubash, color: "text-green-400" },
      { name: "Go", icon: SiGo, color: "text-cyan-400" },
      { name: "Kotlin", icon: SiKotlin, color: "text-orange-500" },
    ],
  },
  {
    category: "Frontend & Frameworks",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Spring Boot", icon: SiSpring, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Django", icon: TbBrandDjango, color: "text-green-600" },
      { name: "Flask", icon: SiFlask, color: "text-gray-300" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
      { name: "Oracle", icon: SiOracle, color: "text-red-500" },
    ],
  },
  {
    category: "Data Science & AI/ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
      { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
      { name: "Jupyter", icon: SiJupyter, color: "text-orange-400" },
      { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500" },
      { name: "OpenAI API", icon: SiOpenai, color: "text-green-400" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws, color: "text-orange-400" },
      { name: "Azure", icon: SiMicrosoftazure, color: "text-blue-500" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
    ],
  },
  {
    category: "Testing & Tools",
    skills: [
      { name: "JUnit", icon: SiJunit5, color: "text-red-500" },
      { name: "pytest", icon: SiPytest, color: "text-yellow-400" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Jira", icon: SiJira, color: "text-blue-500" },
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
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning low-level optimization, full-stack development, 
            AI/ML, cybersecurity, and cloud technologies.
          </p>
        </motion.div>

        {/* Interactive Skill Constellation - Signature Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--text-secondary)', letterSpacing: '-0.02em' }}>
              Interactive Skills Ecosystem
            </h3>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Hover over skills to explore connections. Size reflects proficiency level.
            </p>
          </div>
          <SkillConstellation skills={featuredSkills} />
        </motion.div>

        {/* Skills Categories - Bento Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bento-grid"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className={`bento-card hover-lift ${
                category.category === 'Languages' ? 'lg:col-span-2' : 
                category.category === 'Backend & Databases' ? 'lg:col-span-2' : ''
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
                    transition={{ duration: 0.4, delay: skillIndex * 0.05, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: false, amount: 0.3 }}
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
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 glass-effect p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Performance & Innovation Focus</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Specialized in high-performance computing, low-level optimization, and cutting-edge AI/ML technologies. 
            Experienced in building scalable systems from embedded firmware to cloud-native microservices, 
            with a strong foundation in cybersecurity and data engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};