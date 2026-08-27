import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import heroimg from "../assets/images/pphero2.svg";

// ─── RESUME FILES ────────────────────────────────────────────────────────────
import fullresume    from "../assets/files/CV ATS - Muhammad Hilmi Adzkia.pdf";
import resumeAndroid from "../assets/files/Resume - Android Hilmi.pdf";
import resumeTeacher from "../assets/files/Resume - Teacher Hilmi.pdf";

// Skill images
import skill1 from "../assets/images/androidskill.png";
import skill5 from "../assets/images/teachingskill.png";

// Specialty track definitions
const SPECIALTIES = [
  { label: "Android Developer",  resume: resumeAndroid,  filename: "Resume - Android Hilmi.pdf"  },
  { label: "Educator",           resume: resumeTeacher,  filename: "Resume - Teacher Hilmi.pdf" },
];

export function Introduction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Kinetic Typography Effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // ── Accessibility: focus trap inside modal ──────────────────────────────────
  useEffect(() => {
    if (!isModalOpen || !modalRef.current) return;

    // Move focus into modal on open
    const firstFocusable = modalRef.current.querySelector(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") { setIsModalOpen(false); return; }
      if (e.key !== "Tab") return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

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
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-jade-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-jade-secondary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />

      <div className="container-max px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20 md:mb-32">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-jade-primary/10 rounded-full blur-2xl group-hover:bg-jade-primary/20 transition-all duration-500" />
            <motion.img
              src={heroimg}
              alt="Hilmi's profile illustration"
              className="w-48 h-48 md:w-80 md:h-80 relative z-10 drop-shadow-2xl"
              whileHover={{ rotate: 5, scale: 1.05 }}
            />
          </motion.div>

          {/* Text Section with Kinetic Motion */}
          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="text-center md:text-left flex-1"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl font-medium text-jade-light mb-2"
            >
              Hi, I'm <span className="text-jade-primary font-bold">Hilmi</span>
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter text-jade-pale"
            >
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Digital</span> <br />
              Experiences.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-xl text-jade-light/80 mb-8 md:mb-10 max-w-xl leading-relaxed"
            >
              Specializing in{" "}
              <span className="text-jade-pale font-semibold">Android Development</span>,{" "}
              <span className="text-jade-pale font-semibold"> Multimedia</span>, and{" "}
              <span className="text-jade-pale font-semibold"> Technical Education</span>.
            </motion.p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={fullresume}
                download="CV ATS - Muhammad Hilmi Adzkia.pdf"
                className="btn-jade text-sm px-8 py-4"
                aria-label="Download Hilmi's general resume PDF"
              >
                Get Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isModalOpen}
                className="px-6 md:px-8 py-4 bg-jade-deep/30 border border-jade-primary/20 text-jade-primary rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-jade-primary/10 transition-all shadow-lg"
              >
                Specialties
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid for Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-20"
        >
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 md:mb-12 gap-4 text-center md:text-left">
            <div>
              <h3 className="text-[10px] md:text-sm font-black text-jade-primary uppercase tracking-[0.4em] mb-2 md:mb-4">Specialization</h3>
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
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-jade-deep/20 border border-jade-primary/10 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] backdrop-blur-xl relative group overflow-hidden flex flex-col justify-between min-h-[190px] transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <img src={skill.image} alt="" aria-hidden="true" className="w-20 h-20 md:w-24 md:h-24 object-contain grayscale" />
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 bg-jade-dark rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 border border-jade-primary/20 group-hover:bg-jade-primary group-hover:text-jade-dark transition-colors duration-500">
                  <img src={skill.image} alt={skill.name} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-lg md:text-xl font-black text-jade-pale mb-1">{skill.name}</h4>
                  <p className="text-jade-light/60 text-[11px] md:text-xs font-medium leading-relaxed">{skill.detail}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-jade-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Specialties Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="specialties-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-jade-dark/95 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Panel */}
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-jade-deep/40 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] max-w-sm w-full shadow-2xl border border-jade-primary/20 text-center backdrop-blur-2xl"
            >
              <h3
                id="specialties-title"
                className="text-xl md:text-2xl font-black text-jade-pale mb-6 md:mb-8 uppercase tracking-widest"
              >
                Select <span className="text-jade-primary">Track</span>
              </h3>

              <div className="space-y-3 md:space-y-4">
                {SPECIALTIES.map(({ label, resume, filename }) => (
                  <a
                    key={label}
                    href={resume}
                    download={filename}
                    className="block w-full py-4 md:py-5 px-6 bg-jade-dark/50 hover:bg-jade-primary text-jade-pale hover:text-jade-dark rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 border border-jade-primary/10 shadow-lg"
                    aria-label={`Download ${label} resume`}
                  >
                    {label} Resume
                  </a>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close specialties modal"
                className="mt-8 md:mt-10 text-jade-light/50 hover:text-jade-pale font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-colors"
              >
                [ Back ]
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
