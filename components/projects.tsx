/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowUpRight, Code, Globe, Star } from 'lucide-react';

const projectsData = [
  {
    name: "Matrix Calculator",
    description: "A user-friendly online tool for matrix calculations with modern UI design. Features interactive forms, real-time calculations, and responsive layout optimized for both desktop and mobile devices.",
    fullDescription: "The Matrix Calculator Project is a user-friendly online tool designed to perform basic matrix calculations with ease. Users can input two matrices, specify their dimensions, and execute various operations, with results displayed in a formatted matrix structure. The project features a modern, interactive design with a gradient background, clear typography, and responsive layout that adapts to both desktop and mobile devices.",
    image: "/images/matrix-calculator.png",
    github: "https://github.com/zpicy69/Matrix-Calculator",
    live: "https://matrix-calculator.vercel.app/",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    featured: false,
  },
  {
    name: "Interactive Cybersecurity Site",
    description: "Educational platform combining theoretical lectures with interactive quizzes to enhance cybersecurity knowledge. Covers cryptography, hashing, malware, and privacy through detailed content.",
    fullDescription: "The Interactive Cybersecurity Site is an educational platform designed to enhance cybersecurity knowledge through an engaging and interactive learning experience. It targets a diverse audience, including students, professionals, and cybersecurity enthusiasts, combining theoretical lectures with practical quizzes to provide comprehensive understanding of key cybersecurity concepts.",
    image: "/images/cybersecurity-site.png",
    github: "https://github.com/zpicy69/Interactive-Cybersecurity-Site",
    live: "https://interactive-cybersecurity-site.vercel.app/",
    tech: ["HTML5", "CSS3", "JavaScript", "Interactive Design"],
    featured: true,
  },
  {
    name: "Spotify Clone",
    description: "Full-featured music streaming application built with TypeScript and React. Includes secure authentication, real-time streaming, search functionality, and integrated payment processing.",
    fullDescription: "The Spotify Clone project is a robust music streaming application designed using TypeScript and React, structured around the Next.js framework. This project offers users a seamless music experience with high-quality streaming, secure user authentication for registration and login, and an intuitive search functionality for easy song discovery.",
    image: "/images/spotify-clone.png",
    github: "https://github.com/zpicy69/Spotify-clone",
    live: "https://spotify-clone-virid-eight.vercel.app/",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Stripe"],
    featured: true,
  },
  {
    name: "AI Platform",
    description: "Comprehensive AI-driven service platform featuring conversation generation, image/video creation, music composition, and code generation. Enhanced user engagement by 20% with optimized API routes.",
    fullDescription: "The AI-Platform project is a comprehensive tool designed to provide users with an array of AI-driven services through a user-friendly interface. The platform features a secure authentication system and showcases various AI tools including conversation generation, image and video generation, music creation, and code generation.",
    image: "/images/ai-platform.png",
    github: "https://github.com/zpicy69/AI-Platform",
    live: "https://ai-platform-1ye02usg8-zpicy69.vercel.app/",
    tech: ["Next.js", "TypeScript", "OpenAI", "Prisma", "MySQL", "Stripe"],
    featured: true,
  },
];

export const Projects = () => {
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                project.featured && index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${
                  project.featured && index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="glass-effect p-4 rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Floating Status Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 glass-effect p-2 rounded-full">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                )}
              </motion.div>

              {/* Project Content */}
              <div className={`space-y-6 ${
                project.featured && index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-gray-300 bg-gray-800/50 rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 glass-effect hover-lift px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 group"
                  >
                    <Globe size={20} />
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/5 group"
                  >
                    <Code size={20} />
                    <span>Source Code</span>
                    <FaGithub className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always open to discussing new opportunities and interesting projects. 
              Let&apos;s build something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};