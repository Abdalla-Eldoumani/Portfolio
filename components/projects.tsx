"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowUpRight, Code, Globe, Star, Zap, Shield, Calculator, ShoppingCart, Server } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
  {
    name: "Rust HTTP Server",
    description: "Production-ready HTTP server handling 10,000+ concurrent requests with <10ms response time using Rust and Axum framework. Features comprehensive JWT authentication, role-based access control, and intelligent caching achieving 60% reduction in database queries.",
    fullDescription: "Enterprise-grade HTTP server architected for high-performance concurrent processing with advanced search engine featuring full-text indexing and fuzzy matching. Includes asynchronous background job processing with retry mechanisms, WebSocket notifications, and comprehensive security features including rate limiting, CORS protection, and SQL injection prevention. Built with modular architecture featuring 15+ middleware components and real-time monitoring dashboards.",
    image: "/images/rust-server.svg",
    github: "https://github.com/Abdalla-Eldoumani/rust-http-server",
    live: "#",
    tech: ["Rust", "Axum", "SQLite", "WebSocket", "JWT", "RESTful API", "Caching", "Rate Limiting"],
    featured: true,
    icon: Server,
    metrics: "10,000+ concurrent requests, <10ms response time"
  },
  {
    name: "FastMathExt",
    description: "High-performance C++ matrix multiplication library achieving 25-41% performance gains over NumPy through advanced optimization techniques including multi-level cache blocking, AVX2 SIMD instructions, and OpenMP parallelization.",
    fullDescription: "FastMathExt is a cutting-edge mathematical computation library that demonstrates mastery of low-level optimization. The project implements Strassen's algorithm with task-based concurrency, reducing computational complexity from O(n³) to O(n^2.807) for large-scale operations. Features comprehensive benchmarking framework with statistical analysis across 10,000+ iterations.",
    image: "/images/matrix.png",
    github: "https://github.com/Abdalla-Eldoumani/FastMathExt",
    live: "#",
    tech: ["C++", "Python", "OpenMP", "AVX2 SIMD", "Strassen's Algorithm", "Performance Optimization"],
    featured: true,
    icon: Zap,
    metrics: "25-41% faster than NumPy"
  },
  {
    name: "Budget Buddy",
    description: "Full-stack financial management platform empowering young Canadians to make informed investment decisions. Features real-time stock data, projection tools, and comprehensive budget tracking with modern authentication.",
    fullDescription: "Budget Buddy addresses the critical issue that 70% of young Canadians avoid stock market investing. Built during CalgaryHacks24, this platform provides up-to-date financial information, real-time stock data across various sectors, and projection tools for investment planning.",
    image: "/images/budgetbuddy.png",
    github: "https://github.com/Abdalla-Eldoumani/CalgaryHacks24",
    live: "https://calgary-hacks24-budget-buddy.vercel.app",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Clerk Auth", "Vercel", "Financial APIs"],
    featured: true,
    icon: Calculator,
    metrics: "Hackathon Winner"
  },
  {
    name: "Interactive Cybersecurity Site",
    description: "Educational platform combining theoretical cybersecurity lectures with interactive quizzes. Covers cryptography, hashing, malware, and privacy through detailed content and hands-on learning experiences.",
    fullDescription: "Comprehensive cybersecurity education platform targeting students, professionals, and enthusiasts. Features interactive quizzes on cryptography, hashing, malware, and privacy, complemented by detailed lectures on encryption methods, virus detection, and digital privacy protection.",
    image: "/images/cybersecurity-site.png",
    github: "https://github.com/Abdalla-Eldoumani/Interactive-Cybersecurity-Site",
    live: "https://interactive-cybersecurity-site.vercel.app",
    tech: ["HTML5", "CSS3", "JavaScript", "Interactive Design", "Educational Content"],
    featured: true,
    icon: Shield,
    metrics: "91 commits, 3 contributors"
  },
  {
    name: "AI-Platform",
    description: "Comprehensive AI-driven service platform featuring conversation generation, image/video creation, music composition, and code generation. Built with modern tech stack including OpenAI API integration.",
    fullDescription: "Full-featured AI platform offering multiple AI tools from a centralized dashboard. Includes conversation AI, image/video generation, music creation, and code generation capabilities. Features secure authentication, API limit monitoring, and subscription management with Stripe integration.",
    image: "/images/ai-platform.png",
    github: "https://github.com/Abdalla-Eldoumani/AI-Platform",
    live: "#",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Prisma", "MySQL", "Stripe"],
    featured: true,
    icon: Star,
    metrics: "Multiple AI tools integrated"
  },
  {
    name: "Self-Checkout Station Software",
    description: "Enterprise-grade software simulation for retail self-checkout systems built with Java. Developed in a 20-member team using object-oriented programming and comprehensive testing with JUnit.",
    fullDescription: "Large-scale software engineering project simulating a complete self-checkout station system. Features responsive touchscreen interface using Java's GUI libraries, comprehensive error handling, and robust testing suite achieving 100% usability. Demonstrates strong collaboration and version control practices.",
    image: "/images/selfcheckout.png",
    github: "#",
    live: "#",
    tech: ["Java", "JUnit", "GUI Libraries", "Git", "Object-Oriented Programming", "Team Collaboration"],
    featured: false,
    icon: ShoppingCart,
    metrics: "20-member team, 100% usability"
  },
];

export const Projects = () => {
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
            Featured <span className="text-gradient">Projects</span>
      </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating expertise in performance optimization, 
            AI integration, cybersecurity, and full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
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
                    <div className="relative overflow-hidden rounded-xl h-64 lg:h-80">
              <Image
                src={project.image}
                alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
                  
                  {/* Floating Status Badge */}
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 glass-effect p-2 rounded-full">
                      <IconComponent className="w-5 h-5 text-emerald-400" />
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

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm font-semibold text-emerald-400">
                          {project.metrics}
                        </span>
                      </div>
                    )}
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
                    {project.live !== "#" && (
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
                    )}
                    
                    {project.github !== "#" && (
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
                    )}
                  </div>
      </div>
    </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};