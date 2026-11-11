import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Card } from "./Card";
import { projects } from "../data/projects";
import { Icon } from "./Icons";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();
  const categories = ["All", "Mobile", "Game", "Cloud"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-jade-primary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container-max text-center relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <p className="text-sm font-black text-jade-primary uppercase tracking-[0.4em] mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black text-jade-pale tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Projects</span>
            </h2>
          </div>
          <p className="text-jade-light text-xs md:text-sm max-w-sm font-medium leading-relaxed">
            A selection of mobile applications, games, and backend services built with modern tech stacks.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-16" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-7 py-3 min-h-[44px] rounded-2xl text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-300 border cursor-pointer ${
                filter === cat
                  ? "bg-jade-primary text-jade-dark border-jade-primary shadow-[0_0_25px_rgba(16,185,129,0.3)] scale-105"
                  : "bg-jade-deep/30 text-jade-light border-jade-primary/15 hover:border-jade-primary/40 hover:bg-jade-deep/50 hover:text-jade-pale"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  type: "spring",
                  bounce: 0.25,
                }}
              >
                <Card {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 pt-16 border-t border-jade-primary/10 flex flex-col items-center"
        >
          <p className="text-jade-light text-sm mb-8 font-bold uppercase tracking-[0.25em]">
            Deep dive into the source
          </p>
          <motion.a
            whileHover={shouldReduceMotion ? undefined : { scale: 1.04, boxShadow: "0 0 30px rgba(16,185,129,0.25)" }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
            className="btn-jade group inline-flex items-center gap-4 px-10 py-4 min-h-[48px] rounded-2xl"
            href="https://github.com/MHilmiAdz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Explore GitHub</span>
            <Icon name="arrowRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
