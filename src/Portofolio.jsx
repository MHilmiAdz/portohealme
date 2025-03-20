import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "./Button";
import { Projects } from "./Projects";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">Hilmi's Portfolio</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </header>

      <section className="text-center py-20">
        <h2 className="text-4xl font-bold">Hello, I'm Hilmi 👋</h2>
        <p className="mt-4 text-lg">Android Developer | Game Developer | Educator</p>
      </section>

      <Projects />

      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p>Email: hilmi@example.com</p>
        <p>LinkedIn | GitHub | Twitter</p>
      </section>
    </div>
  );
}