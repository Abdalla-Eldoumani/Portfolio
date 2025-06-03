// components/navbar.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './theme-context';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const { toggleTheme, theme } = useTheme();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        controls.start('scrolled');
      } else {
        controls.start('top');
      }
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const variants = {
    top: { backgroundColor: 'rgba(15,23,42,0)', transition: { duration: 0.3 } },
    scrolled: { backgroundColor: 'rgba(15,23,42,0.9)', transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={variants}
      animate={controls}
      className="fixed w-full z-50 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="mr-50 flex items-center space-x-32">
              <Link href="/">
                <span className="px-3 py-2 rounded-md text-lg text-gray-400 font-medium hover:rainbow-glow cursor-pointer transition duration-300">Home</span>
              </Link>
              <Link href="#about">
                <span className="px-3 py-2 rounded-md text-lg text-gray-400 font-medium hover:rainbow-glow cursor-pointer transition duration-300">About</span>
              </Link>
              <Link href="#skills">
                <span className="px-3 py-2 rounded-md text-lg text-gray-400 font-medium hover:rainbow-glow cursor-pointer transition duration-300">Skills</span>
              </Link>
              <Link href="#experience">
                <span className="px-3 py-2 rounded-md text-lg text-gray-400 font-medium hover:rainbow-glow cursor-pointer transition duration-300">Experience</span>
              </Link>
              <Link href="#projects">
                <span className="px-3 py-2 rounded-md text-lg text-gray-400 font-medium hover:rainbow-glow cursor-pointer transition duration-300">Projects</span>
              </Link>
              <Link href="#contact">
                <span className="px-3 py-2 rounded-md text-lg text-gray-400 font-medium hover:rainbow-glow cursor-pointer transition duration-300">Contact</span>
              </Link>
              <motion.button
                onClick={toggleTheme}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="p-2 text-xl text-gray-400 transition-colors duration-500 focus:outline-none"
              >
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
              </motion.button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${isOpen ? 'inline-flex' : 'hidden'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#home">
                <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:rainbow-glow cursor-pointer transition duration-300">Home</span>
              </Link>
          <Link href="#about">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:rainbow-glow cursor-pointer transition duration-300">About</span>
          </Link>
          <Link href="#skills">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:rainbow-glow cursor-pointer transition duration-300">Skills</span>
          </Link>
          <Link href="#experience">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:rainbow-glow cursor-pointer transition duration-300">Experience</span>
          </Link>
          <Link href="#projects">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:rainbow-glow cursor-pointer transition duration-300">Projects</span>
          </Link>
              <Link href="#contact">
                <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:rainbow-glow cursor-pointer transition duration-300">Contact</span>
              </Link>
              <motion.button
                onClick={toggleTheme}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="mt-2 p-2 text-xl text-gray-400 transition-colors duration-500 focus:outline-none"
              >
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};