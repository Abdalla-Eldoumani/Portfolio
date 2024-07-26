// components/about.tsx
"use client";

import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto p-8 bg-slate-950 text-white"
    >
      <h2 className="text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow text-center">
        About Me
      </h2>
      <p className="text-2xl mb-4">
        I am Abdalla Eldoumani, a proficient fullstack developer with a keen interest in AI/ML and Cybersecurity. As a Computer Science student at the University of Calgary, I am committed to staying at the forefront of technology, continually updating my skills to include the latest advancements. My expertise spans a wide array of technologies including Next.js, React, TypeScript, Prisma, MySQL, MongoDB, and Supabase. I excel in creating scalable, high-performance web applications and have a proven track record of delivering secure, user-centric solutions. Fluent in both Arabic and English, I bring strong communication and problem-solving skills to every project, always ready to tackle new challenges with efficiency and excellence.
      </p>
    </motion.div>
  );
};
