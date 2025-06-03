"use client";

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <motion.div
      data-aos="fade-up"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto p-8 bg-slate-950 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow">
        Contact
      </h2>
      <p className="text-lg mb-6">
        Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello. I&apos;m always open to discussing new projects, sharing insights, and exploring how we can work together to create innovative solutions. Whether you have a question about my work, a project proposal, or simply want to connect, don&apos;t hesitate to reach out. I look forward to hearing from you!
      </p>
      <div className="flex justify-center space-x-8 mb-6">
        <motion.a
          href="https://www.linkedin.com/in/abdallaeldoumani/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-4 rounded-full focus:outline-none"
        >
          <FaLinkedin className="text-2xl text-white" />
        </motion.a>
        <motion.a
          href="mailto:aamsdoumani@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-4 rounded-full focus:outline-none"
        >
          <FaEnvelope className="text-2xl text-white" />
        </motion.a>
        <motion.a
          href="https://github.com/Abdalla-Eldoumani"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-4 rounded-full focus:outline-none"
        >
          <FaGithub className="text-2xl text-white" />
        </motion.a>
      </div>
      <motion.div
        className="border-t border-gray-700 mt-8 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &copy; Abdalla Eldoumani {new Date().getFullYear()}
      </motion.div>
    </motion.div>
  );
};
