import { Footer } from "./Footer";
import { Introduction } from "./Introduction";
import { Projects } from "./Projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Introduction />
      <Projects />
      <Footer />
    </div>
  );
}