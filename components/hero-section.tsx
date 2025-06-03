"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="relative h-screen bg-slate-950 text-white flex items-center justify-center"
      data-aos="fade-in"
    >
      <motion.video style={{ y }} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="/videos/background.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 gradient-shift bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60" />
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-bold"
        >
          Hey, I&apos;m <p className="inline bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 animate-rainbow">Abdalla Eldoumani</p>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8"
        >
          <Image
            src="/images/abdalla.jpg"
            alt="Abdalla Eldoumani"
            width={256}
            height={256}
            className="rounded-full border-4 border-white"
            quality={100}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl sm:text-6xl mt-4 typewriter"
        >
          and I&apos;m a{" "}
          <Typewriter
            words={[
              'Full Stack Developer👨',
              'AI/ML Enthusiast🤖🧠',
              'Cybersecurity Enthusiast🔐',
              'Problem Solver💡🧐'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={800}
          />
        </motion.div>
        <motion.div
          className="mt-10 cursor-pointer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollDown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};