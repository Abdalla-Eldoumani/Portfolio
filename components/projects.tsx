/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    name: "Matrix Calculator",
    description: "The Matrix Calculator Project is a user-friendly online tool designed to perform basic matrix calculations with ease. Users can input two matrices, specify their dimensions, and execute various operations, with results displayed in a formatted matrix structure. The project features a modern, interactive design with a gradient background, clear typography, and responsive layout that adapts to both desktop and mobile devices. The sidebar provides easy navigation, while the main content area focuses on matrix input forms, action buttons, and result display.",
    image: "/images/matrix-calculator.png",
    github: "https://github.com/zpicy69/Matrix-Calculator",
    live: "https://matrix-calculator.vercel.app/",
  },
  {
    name: "Interactive Cybersecurity Site",
    description: "The Interactive Cybersecurity Site is an educational platform designed to enhance cybersecurity knowledge through an engaging and interactive learning experience. It targets a diverse audience, including students, professionals, and cybersecurity enthusiasts, combining theoretical lectures with practical quizzes to provide a comprehensive understanding of key cybersecurity concepts. The platform covers a wide range of topics, such as cryptography, hashing, malware, and privacy, through detailed lectures and interactive quizzes. Developed using HTML, CSS, and JavaScript, the site ensures a responsive and user-friendly interface, making complex cybersecurity topics accessible and understandable. This project serves as an invaluable resource for anyone looking to deepen their understanding of cybersecurity.",
    image: "/images/cybersecurity-site.png",
    github: "https://github.com/zpicy69/Interactive-Cybersecurity-Site",
    live: "https://interactive-cybersecurity-site.vercel.app/",
  },
  {
    name: "Spotify Clone",
    description: "The Spotify Clone project is a robust music streaming application designed using TypeScript and React, structured around the Next.js framework. This project offers users a seamless music experience with high-quality streaming, secure user authentication for registration and login, and an intuitive search functionality for easy song discovery. The platform also incorporates real-time event handling through integrated webhooks, enhancing user interaction. Key features include a user-friendly music player, components for account management, and various APIs to handle tasks like retrieving songs and managing checkout sessions. Utilizing a sophisticated technology stack that includes Next.js, React, TailwindCSS, TypeScript, and Supabase, this project effectively replicates the core functionalities of Spotify.",
    image: "/images/spotify-clone.png",
    github: "https://github.com/zpicy69/Spotify-clone",
    live: "https://spotify-clone-virid-eight.vercel.app/",
  },
  {
    name: "AI Platform",
    description: "The AI-Platform project is a comprehensive tool designed to provide users with an array of AI-driven services through a user-friendly interface. The platform features a secure authentication system for sign-in and sign-up functionalities, ensuring user trust and safety. The heart of the project is a dashboard that showcases various AI tools, such as conversation generation, image and video generation, music creation, and code generation, each presented in an accessible card format. By enhancing user engagement by 20% and reducing response times by 25% through efficient API routes, the AI-Platform seamlessly integrates frontend and backend operations. Utilizing a robust technology stack that includes Next.js, React, TailwindCSS, TypeScript, Prisma, MySQL, Axios, OpenAI, Replicate, and Stripe, this platform stands out as a versatile and powerful resource for AI applications.",
    image: "/images/ai-platform.png",
    github: "https://github.com/zpicy69/AI-Platform",
    live: "https://ai-platform-1ye02usg8-zpicy69.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto p-8 bg-slate-950 text-white"
    >
      <h2 className="text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-slate-800 p-4 rounded-lg shadow-md">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg mb-4"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover cursor-pointer"
              />
            </motion.div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl cursor-pointer hover:text-gray-400" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-2xl cursor-pointer hover:text-gray-400" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};