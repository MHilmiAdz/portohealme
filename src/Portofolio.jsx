import { Footer }       from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { Projects }     from "./components/Projects";
import { PublishedApp } from "./components/PublishedApp";
import { Certificate }  from "./components/Certificate";
import { Experience }   from "./components/Experience";
import { Navbar }       from "./components/Navbar";
import { Contact }      from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-jade-pale selection:bg-jade-primary selection:text-jade-dark overflow-x-hidden relative">

      {/* Global Ambient Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Jade glow orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-jade-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-jade-primary/5 blur-[120px]" />
        {/*
          Subtle noise overlay — pure CSS, no external network request.
          Uses a repeating radial gradient to approximate a grain/texture effect.
        */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Introduction />

        <div id="published-app">
          <PublishedApp />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="certificates">
          <Certificate />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
