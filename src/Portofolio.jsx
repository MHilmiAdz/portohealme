import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { PublishedApp } from "./components/PublishedApp";
import { Certificate } from "./components/Certificate";
import { Experience } from "./components/Experience";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-[100dvh] bg-jade-dark text-jade-pale selection:bg-jade-primary selection:text-jade-dark overflow-x-clip relative">
      {/* Skip to Main Content for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:px-5 focus:py-3 focus:rounded-xl focus:bg-jade-primary focus:text-jade-dark focus:font-bold focus:text-sm focus:shadow-2xl"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
        <Introduction />
        <PublishedApp />
        <Projects />
        <Certificate />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
