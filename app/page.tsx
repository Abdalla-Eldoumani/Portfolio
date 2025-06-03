"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about" className="bg-slate-950 text-white">
        <About />
      </div>
      <div id="skills" className="bg-slate-950 text-white">
        <Skills />
      </div>
      <div id="experience" className="bg-slate-950 text-white">
        <Experience />
      </div>
      <div id="projects" className="bg-slate-950 text-white">
        <Projects />
      </div>
      <div id="contact" className="bg-slate-950 text-white">
        <Contact />
      </div>
    </>
  );
}
