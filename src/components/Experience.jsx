import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section className="section-padding relative overflow-hidden bg-jade-dark/30">
      {/* 2026 Trend: Organic Ambient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-jade-primary/5 rounded-full blur-[100px] animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-jade-primary/5 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      <div className="container-max relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24 gap-6 text-center md:text-left">
          <div className="">
            <h3 className="text-[10px] md:text-sm font-black text-jade-primary uppercase tracking-[0.4em] mb-2 md:mb-4">Milestones</h3>
            <h2 className="text-3xl md:text-6xl font-black text-jade-pale tracking-tighter">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Journey</span>
            </h2>
          </div>
          <p className="text-jade-light text-xs md:text-sm max-w-sm md:text-right font-medium leading-relaxed">
            A chronological timeline of my evolution in software engineering and technical mentorship.
          </p>
        </div>

        <div className="relative">
          {/* Refined Vertical Line with Gradient - Positioned left on mobile */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-jade-primary/20 to-transparent" />

          <div className="space-y-16 md:space-y-32">
            {experience.map((item, index) => (
              <ExperienceItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 md:mt-48 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-jade-primary/20 to-transparent" />
            <p className="text-jade-light/40 text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em]">
                Evolution in progress
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, index }) {
    const itemRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
        >
            {/* 2026 Trend: Magnetic Timeline Node - Positioned left on mobile */}
            <motion.div 
                whileHover={{ scale: 1.5 }}
                className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-jade-primary shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"
            >
                <div className="absolute inset-[-4px] rounded-full border border-jade-primary/20 animate-ping opacity-20" />
            </motion.div>

            {/* Content Card: Glassmorphism 2.0 */}
            <div className="w-full md:w-[42%] pl-12 md:pl-0">
                <motion.div 
                whileHover={{ y: -5 }}
                className={`p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-jade-deep/20 border border-jade-primary/5 backdrop-blur-xl hover:border-jade-primary/20 transition-all duration-500 shadow-2xl relative group ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
                >
                <div className={`absolute top-6 md:top-10 ${index % 2 === 0 ? "right-6 md:right-10" : "left-6 md:left-10"} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}>
                    <img src={item.image} alt="" className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale" />
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-jade-primary/10 text-jade-primary text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
                    {item.period}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-jade-pale mb-1 md:mb-2 group-hover:text-jade-primary transition-colors tracking-tight">
                    {item.title}
                </h3>
                <h4 className="text-xs md:text-sm font-bold text-jade-light/60 mb-4 md:mb-6 uppercase tracking-widest">
                    {item.company}
                </h4>
                <p className="text-jade-light/80 text-[13px] md:text-sm leading-relaxed mb-6 md:mb-8 font-medium">
                    {item.details}
                </p>
                
                <div className={`flex flex-wrap gap-2 md:gap-3 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}>
                    {item.tags?.map((tag) => (
                    <span key={tag} className="text-[8px] md:text-[9px] font-black text-jade-primary/40 px-2 py-0.5 md:px-3 md:py-1 rounded-lg bg-jade-dark/50 border border-jade-primary/5 uppercase tracking-widest">
                        {tag}
                    </span>
                    ))}
                </div>

                {/* Mobile/Small Image Visual */}
                <div className="mt-8 flex justify-center md:hidden">
                    <img src={item.image} alt={item.company} className="h-24 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" />
                </div>
                </motion.div>
            </div>

            {/* Desktop Visual Side - Big & Parallax */}
            <div className="hidden md:flex w-[45%] justify-center items-center">
                <motion.div style={{ y: yImg }} className="relative group">
                    <div className="absolute inset-[-20%] bg-jade-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <motion.img 
                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                        src={item.image} 
                        alt={item.company} 
                        className="max-h-64 max-w-full object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" 
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
