import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section className="section-padding relative overflow-hidden bg-jade-dark/30">
      {/* Organic Ambient Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-jade-primary/5 rounded-full blur-[100px] animate-blob" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-jade-primary/5 rounded-full blur-[100px] animate-blob animation-delay-4000" aria-hidden="true" />

      <div className="container-max relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24 gap-6 text-center md:text-left">
          <div>
            <p className="text-xs md:text-sm font-black text-jade-primary uppercase tracking-[0.4em] mb-2 md:mb-4">Milestones</p>
            <h2 className="text-3xl md:text-6xl font-black text-jade-pale tracking-tighter">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Journey</span>
            </h2>
          </div>
          <p className="text-jade-light text-xs md:text-sm max-w-sm md:text-right font-medium leading-relaxed">
            A chronological timeline of my evolution in software engineering and technical mentorship.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-jade-primary/25 to-transparent" aria-hidden="true" />

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
          className="mt-28 md:mt-40 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-jade-primary/30 to-transparent" aria-hidden="true" />
            <p className="text-jade-light/85 text-xs font-black uppercase tracking-[0.4em]">
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
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const yImgTransform = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yImg = shouldReduceMotion ? 0 : yImgTransform;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
      className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Node */}
      <motion.div
        whileHover={shouldReduceMotion ? undefined : { scale: 1.5 }}
        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-jade-primary shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-[-4px] rounded-full border border-jade-primary/25 animate-ping opacity-20" />
      </motion.div>

      {/* Content Card */}
      <div className="w-full md:w-[42%] pl-12 md:pl-0">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          className={`p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-jade-deep/25 border border-jade-primary/15 backdrop-blur-xl hover:border-jade-primary/35 transition-all duration-500 shadow-2xl relative group ${
            index % 2 === 0 ? "md:text-right" : "md:text-left"
          }`}
        >
          <div className={`absolute top-6 md:top-10 ${index % 2 === 0 ? "right-6 md:right-10" : "left-6 md:left-10"} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} aria-hidden="true">
            <img src={item.image} alt="" loading="lazy" className="w-16 h-16 md:w-20 md:h-20 object-contain grayscale" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-jade-primary/15 text-jade-primary text-[11px] font-black uppercase tracking-[0.18em] mb-4 md:mb-6">
            {item.period}
          </span>
          <h3 className="text-xl md:text-2xl font-black text-jade-pale mb-1 md:mb-2 group-hover:text-jade-primary transition-colors tracking-tight">
            {item.title}
          </h3>
          <p className="text-xs font-bold text-jade-light mb-4 md:mb-6 uppercase tracking-widest">
            {item.company}
          </p>
          <p className="text-jade-light text-sm leading-relaxed mb-6 md:mb-8 font-medium">
            {item.details}
          </p>

          <div
            className={`flex flex-wrap gap-2 md:gap-2.5 ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold text-jade-primary/90 px-2.5 py-1 rounded-lg bg-jade-dark/60 border border-jade-primary/20 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile Image Visual */}
          <div className="mt-8 flex justify-center md:hidden">
            <img
              src={item.image}
              alt={item.company}
              loading="lazy"
              className="h-24 object-contain opacity-75 grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </motion.div>
      </div>

      {/* Desktop Visual Side */}
      <div className="hidden md:flex w-[45%] justify-center items-center">
        <motion.div style={{ y: yImg }} className="relative group">
          <div className="absolute inset-[-20%] bg-jade-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" aria-hidden="true" />
          <motion.img
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            src={item.image}
            alt={item.company}
            loading="lazy"
            className="max-h-64 max-w-full object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
