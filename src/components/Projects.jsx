import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./Card";
import { projects } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Mobile", "Game", "Cloud"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  // 2026 Trend: Proof of Work / Activity Data (Dummy)
  const activityData = Array.from({ length: 52 }, () => Math.floor(Math.random() * 5));

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-jade-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max text-center relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="text-left">
                <h3 className="text-sm font-black text-jade-primary uppercase tracking-[0.4em] mb-4">Portfolio</h3>
                <h2 className="text-5xl md:text-6xl font-black text-jade-pale tracking-tighter">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Projects</span>
                </h2>
            </div>
            
            {/* 2026 Trend: Proof of Work Visualization */}
            <div className="bg-jade-deep/30 border border-jade-primary/10 p-6 rounded-3xl backdrop-blur-xl hidden lg:block">
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-jade-light/50 mb-2">Development Activity</span>
                    <div className="flex gap-1">
                        {activityData.map((val, i) => (
                            <div 
                                key={i} 
                                className={`w-2 h-8 rounded-full transition-all duration-500 ${
                                    val === 0 ? "bg-jade-primary/5" : 
                                    val === 1 ? "bg-jade-primary/20" :
                                    val === 2 ? "bg-jade-primary/40" :
                                    val === 3 ? "bg-jade-primary/60" : "bg-jade-primary"
                                }`} 
                                style={{ height: `${10 + val * 8}px` }}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-[8px] font-bold text-jade-light/30">Jan 2026</span>
                        <span className="text-[8px] font-bold text-jade-light/30">Mar 2026</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Filter Buttons: 2026 Sleek Style */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                filter === cat 
                ? "bg-jade-primary text-jade-dark border-jade-primary shadow-[0_0_25px_rgba(16,185,129,0.3)] scale-105" 
                : "bg-jade-deep/20 text-jade-light border-jade-primary/10 hover:border-jade-primary/30 hover:bg-jade-deep/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid with Staggered Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.3
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
          transition={{ delay: 0.5 }}
          className="mt-32 pt-16 border-t border-jade-primary/10 flex flex-col items-center"
        >
          <p className="text-jade-light/60 text-sm mb-10 font-bold uppercase tracking-[0.3em]">Deep dive into the source</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-jade group flex items-center gap-4 px-10 py-5 rounded-2xl"
            onClick={() => window.open("https://github.com/MHilmiAdz", "_blank")}
          >
            <span>Explore GitHub</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
