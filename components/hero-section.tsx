"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 font-medium"
              >
                Hello, I&apos;m
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Abdalla{' '}
                <span className="accent-gradient">Eldoumani</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200"
            >
              I&apos;m a{' '}
              <span className="text-gradient">
                <Typewriter
                  words={[
                    'Full Stack Developer',
                    'AI/ML Enthusiast',
                    'Problem Solver'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Computer Science student passionate about building scalable web applications 
              and exploring the intersection of AI, cybersecurity, and modern development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              
              <Link target="_blank" href="https://github.com/Abdalla-Eldoumani">
                <button className="glass-effect hover-lift px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 focus-visible">
                  View My Work
                </button>
              </Link>
              <Link target="_blank" href="mailto:aamsdoumani@gmail.com">
                <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus-visible">
                  Get In Touch
                </button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex space-x-6 pt-4"
            >
              <a target="_blank" href="https://github.com/Abdalla-Eldoumani" className="text-gray-400 hover:text-white transition-colors duration-300 hover-lift">
                <Github size={28} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/abdallaeldoumani/" className="text-gray-400 hover:text-white transition-colors duration-300 hover-lift">
                <Linkedin size={28} />
              </a>
              <a target="_blank" href="mailto:aamsdoumani@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover-lift">
                <Mail size={28} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="glass-effect p-2 rounded-full">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image
                    src="/images/abdalla.jpg"
                    alt="Abdalla Eldoumani"
                    fill
                    className="rounded-full object-cover"
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-effect p-3 rounded-full">
                <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-tertiary)' }}></div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-effect p-2 rounded-lg">
                <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>👋 Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};