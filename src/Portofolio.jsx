import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Certificate } from "./components/Certificate";
import { Experience } from "./components/Experience";
import { Navbar } from "./components/Navbar";
import { Designs } from "./components/Designs";
import { motion, useScroll } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-jade-pale selection:bg-jade-primary selection:text-jade-dark overflow-x-hidden relative">
      
      {/* Global Ambient Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-jade-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-jade-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Introduction />
        
        <div id="projects">
            <Projects />
        </div>

        <div id="certificates">
          <Certificate />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="designs">
          <Designs />
        </div>
      </main>

      <Footer />
    </div>
  );
}
