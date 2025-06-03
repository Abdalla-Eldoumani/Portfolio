"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-slate-950 text-white flex items-center justify-center"
      data-aos="fade-in"
    >
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
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
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>
      </div>
    </div>
  );
};