import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { CommandPalette } from "@/components/command-palette";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <CommandPalette />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
