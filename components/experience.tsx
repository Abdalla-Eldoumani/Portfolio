"use client";

import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-8 bg-slate-950 text-white"
    >
      <h2 className="text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow text-center">
        Work Experience
      </h2>
      <motion.div
        whileHover={{ scale: 1.02, zIndex: 1, boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
        transition={{ duration: 0.2 }}
        className="bg-slate-800 p-6 rounded-lg shadow-md"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-green-400">Headstarter AI</h3>
            <p className="text-sm text-gray-400">Software Engineering Fellow</p>
          </div>
          <div className="text-center md:text-right text-gray-400">
            <p>July 2024 – September 2024</p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Developed and implemented five AI projects utilizing frameworks like Python and Docker, enhancing machine learning and deployment skills.
          </li>
          <li>
            Participated in five weekend hackathons, solving real-world problems through innovative solutions and effective teamwork.
          </li>
          <li>
            Completed a final project serving over 1,000 users, employing React.js, Angular, HTML, CSS, and TypeScript for robust development and scalability.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};