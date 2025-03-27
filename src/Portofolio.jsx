import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Certificate } from "./components/Certificate";
import { Experience } from "./components/Experience";
import { Navbar } from "./components/Navbar";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Introduction />
      <Projects />
      <Certificate />
      <Experience />
      <Footer />
    </div>
  );
}