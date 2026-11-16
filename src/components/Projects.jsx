import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "./Card";
import { projects } from "../data/projects";
import { Icon } from "./Icons";

const CATEGORIES = ["All", "Mobile", "Game", "Cloud"];
const EASE_OUT = [0.23, 1, 0.32, 1];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const counts = useMemo(() => {
    const map = { All: projects.length, Mobile: 0, Game: 0, Cloud: 0 };
    for (const p of projects) {
      if (map[p.category] !== undefined) map[p.category] += 1;
    }
    return map;
  }, []);

  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="section-padding relative border-b border-white/[0.06]">
      <div className="container-max">
        {/* Section Header + Filter Segmented Control */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-jade-primary mb-3">
              03 / Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-jade-pale">
              Featured <span className="text-jade-primary">Projects</span>
            </h2>
            <p className="text-jade-light text-sm max-w-lg mt-3 leading-relaxed">
              Mobile applications, 2D interactive games, and cloud inference APIs. Select any project for architecture notes and collaborators.
            </p>
          </div>

          {/* Segmented Category Filter */}
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-jade-deep border border-white/[0.08] self-start lg:self-auto"
            role="group"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={isSelected}
                  className={`relative px-4 min-h-[40px] rounded-lg text-xs font-display font-semibold inline-flex items-center gap-2 transition-colors duration-150 cursor-pointer ${
                    isSelected ? "text-jade-dark" : "text-jade-light hover:text-jade-pale"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="projects-filter-pill"
                      transition={{ type: "spring", stiffness: 450, damping: 34 }}
                      className="absolute inset-0 rounded-lg bg-jade-primary"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span
                    className={`relative z-10 font-mono text-[10px] ${
                      isSelected ? "text-jade-dark/75" : "text-jade-light/70"
                    }`}
                  >
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fast, Non-Staggered Project Grid */}
        <motion.div
          key={filter}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredProjects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </motion.div>

        {/* Grounded GitHub Strip */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-jade-light">
            Want to inspect repositories, experiments, and older prototypes?
          </p>
          <a
            href="https://github.com/MHilmiAdz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <span>Explore GitHub (@MHilmiAdz)</span>
            <Icon name="arrowUpRight" className="w-4 h-4 text-jade-primary" strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
