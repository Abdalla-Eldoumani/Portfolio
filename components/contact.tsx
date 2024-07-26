"use client";

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <motion.div
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
        Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello. I'm always open to discussing new projects, sharing insights, and exploring how we can work together to create innovative solutions. Whether you have a question about my work, a project proposal, or simply want to connect, don't hesitate to reach out. I look forward to hearing from you!
      </p>
      <div className="flex justify-center space-x-8 mb-6">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition duration-300">
          <FaLinkedin className="text-2xl text-white" />
        </a>
        <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition duration-300">
          <FaEnvelope className="text-2xl text-white" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition duration-300">
          <FaGithub className="text-2xl text-white" />
        </a>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4">
        &copy; Abdalla Eldoumani {new Date().getFullYear()}
      </div>
    </motion.div>
  );
};
