import { useState, useRef, useId, useCallback } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import heroimg from "../assets/images/pphero.webp";
import { Modal } from "./Modal";
import { Icon } from "./Icons";

// Skill images
import skill1 from "../assets/images/androidskill.png";
import skill5 from "../assets/images/teachingskill.png";

export function Introduction() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const supportTitleId = useId();
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const closeSupportModal = useCallback(() => setIsSupportModalOpen(false), []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Kinetic Typography Effects (disabled under prefers-reduced-motion)
  const yTextTransform = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityTextTransform = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = shouldReduceMotion ? 0 : yTextTransform;
  const opacityText = shouldReduceMotion ? 1 : opacityTextTransform;

  const skills = [
    { image: skill1, name: "Android Developer", detail: "Kotlin, Java, View Binding, Retrofit, Jetpack" },
    { image: skill5, name: "Educator",          detail: "Information Technology Teacher & Tutor" },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 overflow-hidden"
    >
      {/* Organic Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-jade-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-jade-secondary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="container-max px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20 md:mb-32">
          {/* Hero LCP Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-jade-primary/10 rounded-full blur-2xl group-hover:bg-jade-primary/20 transition-all duration-500" aria-hidden="true" />
            <motion.img
              src={heroimg}
              alt="Hilmi's profile illustration"
              width={320}
              height={344}
              fetchPriority="high"
              className="w-48 h-auto md:w-80 relative z-10 drop-shadow-2xl"
              whileHover={shouldReduceMotion ? undefined : { rotate: 5, scale: 1.05 }}
            />
          </motion.div>

          {/* Text Section with Kinetic Motion */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="text-center md:text-left flex-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-xl md:text-3xl font-medium text-jade-light mb-2"
            >
              Hi, I'm <span className="text-jade-primary font-bold">Hilmi</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter text-jade-pale"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Digital</span> <br />
              Experiences.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="text-base md:text-xl text-jade-light mb-8 md:mb-10 max-w-xl leading-relaxed"
            >
              Specializing in{" "}
              <span className="text-jade-pale font-semibold">Android Development</span>,{" "}
              <span className="text-jade-pale font-semibold"> Multimedia</span>, and{" "}
              <span className="text-jade-pale font-semibold"> Technical Education</span>.
            </motion.p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href="mailto:m.hilmi.adz@gmail.com"
                className="btn-jade text-xs md:text-sm px-6 md:px-8 py-3.5 min-h-[44px] inline-flex items-center gap-2.5 shadow-lg shadow-jade-primary/20 font-black uppercase tracking-wider"
                aria-label="Contact Hilmi via email (m.hilmi.adz@gmail.com)"
              >
                <Icon name="mail" className="w-4 h-4" />
                <span>Contact Person</span>
              </motion.a>

              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                onClick={() => setIsSupportModalOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isSupportModalOpen}
                className="px-6 md:px-8 py-3.5 min-h-[44px] bg-jade-deep/40 border border-jade-primary/25 text-jade-pale hover:text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-jade-primary/10 hover:border-jade-primary/45 transition-all shadow-lg inline-flex items-center gap-2.5 cursor-pointer"
              >
                <Icon name="coffee" className="w-4 h-4 text-jade-primary" />
                <span>Support Me</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid for Skills */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-20"
        >
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 md:mb-12 gap-4 text-center md:text-left">
            <div>
              <p className="text-xs md:text-sm font-black text-jade-primary uppercase tracking-[0.35em] mb-2 md:mb-4">Specialization</p>
              <h2 className="text-3xl md:text-5xl font-black text-jade-pale tracking-tighter">Core <span className="text-jade-primary">Expertise</span></h2>
            </div>
            <p className="text-jade-light text-xs md:text-sm max-w-xs md:text-right">
              Multi-disciplinary approach combining mobile engineering with technical education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
                className="bg-jade-deep/20 border border-jade-primary/15 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] backdrop-blur-xl relative group overflow-hidden flex flex-col justify-between min-h-[190px] transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <img src={skill.image} alt="" aria-hidden="true" width={96} height={96} loading="lazy" className="w-20 h-20 md:w-24 md:h-24 object-contain grayscale" />
                </div>

                <div className="w-11 h-11 md:w-12 md:h-12 bg-jade-dark rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 border border-jade-primary/25 group-hover:bg-jade-primary group-hover:text-jade-dark transition-colors duration-500">
                  <img src={skill.image} alt="" aria-hidden="true" width={24} height={24} loading="lazy" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-black text-jade-pale mb-1">{skill.name}</h3>
                  <p className="text-jade-light text-xs md:text-sm font-medium leading-relaxed">{skill.detail}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-jade-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Support Me Modal ──────────────────────────────────────────────────── */}
      <Modal
        isOpen={isSupportModalOpen}
        onClose={closeSupportModal}
        labelledBy={supportTitleId}
        panelClassName="bg-jade-deep/90 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] max-w-sm text-center backdrop-blur-2xl"
      >
        <h2
          id={supportTitleId}
          className="text-xl md:text-2xl font-black text-jade-pale mb-6 md:mb-8 uppercase tracking-widest"
        >
          Support <span className="text-jade-primary">Me</span>
        </h2>

        <div className="space-y-3 md:space-y-4">
          <a
            href="https://ko-fi.com/frosthealme"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 min-h-[48px] bg-jade-dark/70 hover:bg-[#FF5E5B] text-jade-pale hover:text-[#020617] rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border border-jade-primary/15 hover:border-[#FF5E5B] shadow-lg flex items-center justify-center gap-3 group"
            aria-label="Support on Ko-fi (opens in new tab)"
          >
            <Icon name="coffee" className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Support on Ko-fi</span>
          </a>

          <a
            href="https://trakteer.id/projectshealme/tip?open=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 min-h-[48px] bg-jade-dark/70 hover:bg-[#BE1E2D] text-jade-pale hover:text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border border-jade-primary/15 hover:border-[#BE1E2D] shadow-lg flex items-center justify-center gap-3 group"
            aria-label="Tip on Trakteer (opens in new tab)"
          >
            <Icon name="heart" className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Tip on Trakteer</span>
          </a>
        </div>

        <button
          type="button"
          onClick={closeSupportModal}
          aria-label="Close support modal"
          className="mt-8 md:mt-10 min-h-[44px] px-6 text-jade-light hover:text-jade-pale font-black text-xs uppercase tracking-[0.3em] transition-colors cursor-pointer"
        >
          [ Back ]
        </button>
      </Modal>
    </section>
  );
}
