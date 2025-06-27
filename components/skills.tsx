"use client";

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaDatabase, FaPython, FaJava, FaCss3Alt, FaNpm, FaAws } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiGnubash, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJunit5, SiAssemblyscript, SiPytest, SiSupabase, SiFirebase, SiVercel, SiSpring, SiFlask, SiDjango, SiKubernetes, SiMysql, SiOracle, SiPhp, SiCsharp, SiJupyter, SiPowerbi, SiMicrosoftazure, SiOpenai, SiTensorflow, SiPytorch, SiPostman, SiJira, SiKotlin, SiGo, SiApachekafka, SiJenkins, SiLinux } from 'react-icons/si';
import { TbBrandDjango } from "react-icons/tb";

const featuredSkills = [
  { name: "C/C++", icon: SiCplusplus, level: "Expert", color: "text-blue-600" },
  { name: "TypeScript", icon: SiTypescript, level: "Expert", color: "text-blue-400" },
  { name: "Python", icon: FaPython, level: "Expert", color: "text-yellow-400" },
  { name: "Java", icon: FaJava, level: "Advanced", color: "text-red-500" },
];

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C/C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "C#", icon: SiCsharp, color: "text-purple-500" },
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
      { name: "Oracle", icon: SiOracle, color: "text-red-600" },
      { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
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
      { name: "Jenkins", icon: SiJenkins, color: "text-blue-400" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
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
      { name: "Kafka", icon: SiApachekafka, color: "text-gray-300" },
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
            A comprehensive toolkit spanning low-level optimization, full-stack development, 
            AI/ML, cybersecurity, and cloud technologies.
          </p>
        </motion.div>

        {/* Featured Skills - Core Technologies */}
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