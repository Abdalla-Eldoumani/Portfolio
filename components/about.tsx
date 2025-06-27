// components/about.tsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, MapPin, GraduationCap, Briefcase, Languages, Award } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    subtitle: "University of Calgary",
    color: "text-blue-400"
  },
  {
    icon: Briefcase,
    title: "Full-Stack Developer",
    subtitle: "Specializing in Modern Web Technologies",
    color: "text-green-400"
  },
  {
    icon: Award,
    title: "AI/ML & Cybersecurity",
    subtitle: "Passionate About Emerging Technologies",
    color: "text-purple-400"
  },
  {
    icon: Languages,
    title: "Multilingual",
    subtitle: "Fluent in Arabic & English",
    color: "text-orange-400"
  }
];

export const About = () => {
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
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer committed to creating innovative solutions at the intersection of technology and human experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={20} />
                <span>Calgary, Alberta, Canada</span>
              </div>
              
              <div className="prose prose-lg prose-invert">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I&apos;m <strong className="text-white">Abdalla Eldoumani</strong>, a dedicated Computer Science student at the University of Calgary with a deep passion for full-stack development, artificial intelligence, and cybersecurity.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  My expertise spans modern web technologies including <strong className="text-gradient">Next.js</strong>, <strong className="text-gradient">React</strong>, <strong className="text-gradient">TypeScript</strong>, and various database systems. I excel at creating scalable, high-performance applications that deliver exceptional user experiences.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  With strong problem-solving skills and a commitment to staying current with emerging technologies, I&apos;m always ready to tackle new challenges and contribute to innovative projects.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/resume" className="inline-flex items-center justify-center space-x-2 glass-effect hover-lift px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                  <Download size={20} />
                  <span>Download Resume</span>
                </Link>
              </motion.div>
              
              <Link href="https://www.linkedin.com/in/abdallaeldoumani/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-2 border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/5"
              >
                <span>Let&apos;s Connect</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="bento-card hover-lift group"
                  >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gray-800/50 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20"
        >
          <div className="glass-effect p-8 rounded-2xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">My Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe technology should enhance human potential while remaining accessible and secure. 
              Every line of code I write is driven by the goal of creating meaningful, impactful solutions 
              that make a difference in people&apos;s lives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
