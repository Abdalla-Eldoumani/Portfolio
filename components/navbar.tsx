// components/navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-slate-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
              AE
            </div>
          </div>
          <div className="hidden md:block">
            <div className="mr-30 flex items-center space-x-24">
              <Link href="/">
                <span className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Home</span>
              </Link>
              <Link href="#about">
                <span className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">About</span>
              </Link>
              <Link href="#skills">
                <span className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Skills</span>
              </Link>
              <Link href="#experience">
                <span className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Experience</span>
              </Link>
              <Link href="#projects">
                <span className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Projects</span>
              </Link>
              <Link href="#contact">
                <span className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Contact</span>
              </Link>
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

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#home">
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Home</span>
          </Link>
          <Link href="#about">
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">About</span>
          </Link>
          <Link href="#skills">
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Skills</span>
          </Link>
          <Link href="#experience">
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Experience</span>
          </Link>
          <Link href="#projects">
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Projects</span>
          </Link>
          <Link href="#contact">
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white cursor-pointer transition duration-300">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};