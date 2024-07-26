import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";

export default function Home() {
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
      {/* Other sections */}
      <div id="contact">
        {/* Contact Section Content */}
      </div>
    </>
  );
}
