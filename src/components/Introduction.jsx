import { useState, useId, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import heroimg from "../assets/images/pphero.webp";
import skill1 from "../assets/images/androidskill.png";
import skill5 from "../assets/images/teachingskill.png";
import { Modal } from "./Modal";
import { Icon } from "./Icons";

const EASE_OUT = [0.23, 1, 0.32, 1];

const DISCIPLINES = [
  {
    index: "01",
    title: "Android Engineering",
    summary: "Local-first utility apps shipped cleanly with Kotlin, Jetpack Compose, Room DB, OCR Camera, and Material 3.",
    stack: ["Kotlin", "Compose", "Room", "Play Billing"],
    image: skill1,
  },
  {
    index: "02",
    title: "Technical Education",
    summary: "University practicum mentoring and vocational IT teaching bridging fundamentals with real software.",
    stack: ["Algorithms", "Android Lab", "VR Research"],
    image: skill5,
  },
  {
    index: "03",
    title: "Games & Cloud Backends",
    summary: "Interactive 2D educational games alongside Python Flask inference APIs deployed on Google Cloud.",
    stack: ["Unity C#", "Construct 3", "GCP", "Flask"],
    iconName: "cloud",
  },
];

export function Introduction() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const supportTitleId = useId();
  const shouldReduceMotion = useReducedMotion();

  const closeSupportModal = useCallback(() => setIsSupportModalOpen(false), []);

  // Subtle decorative pointer tilt for portrait card on desktop fine pointers
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-4, 4]), { stiffness: 180, damping: 22 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 22 });

  const handleStageMove = (e) => {
    if (shouldReduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleStageLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-x-clip border-b border-white/[0.06]"
    >
      {/* Static masked architectural grid — zero runtime paint overhead */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, #000 30%, transparent 100%)",
        }}
      />

      {/* Focused radial emerald illumination behind stage */}
      <div
        className="absolute top-20 right-[8%] w-[36rem] h-[36rem] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.09) 0%, rgba(16,185,129,0) 68%)",
        }}
      />

      <div className="container-max px-5 sm:px-6 relative z-10 w-full">
        {/* Hero Grid: Lead Narrative + Crafted Visual Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 md:mb-20">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Decoration: fade only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-jade-deep border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-jade-primary" aria-hidden="true" />
              <span className="font-mono text-xs text-jade-light tracking-tight">
                East Java, Indonesia <span className="text-white/25 mx-1">/</span> Open for Projects
              </span>
            </motion.div>

            {/* Lead Element */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: EASE_OUT }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-display font-bold tracking-[-0.03em] leading-[1.06] text-jade-pale mb-6"
            >
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary via-jade-mint to-jade-pale">
                Digital
              </span>{" "}
              Experiences.
            </motion.h1>

            {/* Support Copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.06, ease: EASE_OUT }}
              className="text-base sm:text-lg text-jade-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Hi, I&apos;m <strong className="text-jade-pale font-semibold">Hilmi</strong> — an Android developer, game builder, and IT educator focused on crisp mobile tools, practical cloud backends, and clear interactive craft.
            </motion.p>

            {/* Support CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.11, ease: EASE_OUT }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a href="#published-app" className="btn-jade">
                <span>Explore NotesPack</span>
                <Icon name="arrowRight" className="w-4 h-4" strokeWidth={2.2} />
              </a>

              <button
                type="button"
                onClick={() => setIsSupportModalOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isSupportModalOpen}
                className="btn-ghost cursor-pointer"
              >
                <Icon name="coffee" className="w-4 h-4 text-jade-primary" />
                <span>Support Work</span>
              </button>

              <a
                href="mailto:projectshealme@gmail.com"
                className="btn-ghost"
                aria-label="Email Hilmi directly (projectshealme@gmail.com)"
              >
                <Icon name="mail" className="w-4 h-4 text-jade-light" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Portrait Stage Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.04, ease: EASE_OUT }}
              onPointerMove={handleStageMove}
              onPointerLeave={handleStageLeave}
              style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
              className="surface-card relative w-full max-w-[360px] rounded-2xl p-6 sm:p-7 overflow-hidden"
            >
              {/* Top Coordinate Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <span className="font-mono text-[11px] text-jade-light uppercase tracking-wider">
                  Profile.Studio
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-jade-mint bg-jade-primary/10 border border-jade-primary/25 px-2.5 py-0.5 rounded-full">
                  v2026
                </span>
              </div>

              {/* Portrait Canvas */}
              <div className="relative flex items-center justify-center rounded-xl bg-jade-dark/70 border border-white/[0.05] py-5 px-4 mb-5 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background: "radial-gradient(circle at 50% 45%, rgba(16,185,129,0.16), transparent 68%)",
                  }}
                />
                <img
                  src={heroimg}
                  alt="Hilmi's illustrated developer portrait"
                  width={320}
                  height={344}
                  fetchPriority="high"
                  loading="eager"
                  className="w-44 sm:w-52 h-auto relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)]"
                />
              </div>

              {/* Compact Role Signature Strip */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <div>
                  <p className="font-display font-bold text-jade-pale">Hilmi</p>
                  <p className="text-jade-light text-xs">Android &amp; Cloud Engineer</p>
                </div>
                <span className="font-mono text-[11px] text-jade-light px-2.5 py-1 rounded-lg bg-jade-surface border border-white/[0.07]">
                  Kotlin · C# · GCP
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Disciplines Strip — Structured 3-column Bento */}
        <div>
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-jade-primary">
              Core Disciplines
            </h2>
            <span className="font-mono text-xs text-jade-light hidden sm:inline">
              Engineering · Teaching · Media
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DISCIPLINES.map((item) => (
              <div
                key={item.index}
                className="surface-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between gap-5 transition-colors duration-150 hover:border-jade-primary/30"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-jade-surface border border-white/[0.08] flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt=""
                          aria-hidden="true"
                          width={22}
                          height={22}
                          loading="eager"
                          className="w-5 h-5 object-contain"
                        />
                      ) : (
                        <Icon name={item.iconName} className="w-5 h-5 text-jade-primary" />
                      )}
                    </div>
                    <span className="font-mono text-xs text-jade-light">{item.index}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-jade-pale mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-jade-light leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {item.stack.map((chip) => (
                    <span
                      key={chip}
                      className="font-mono text-[11px] text-jade-light px-2.5 py-1 rounded-md bg-jade-surface border border-white/[0.06]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Modal */}
      <Modal
        isOpen={isSupportModalOpen}
        onClose={closeSupportModal}
        labelledBy={supportTitleId}
        panelClassName="max-w-sm rounded-2xl p-6 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-jade-primary mb-1">
              Creator Support
            </p>
            <h2 id={supportTitleId} className="text-xl font-display font-bold text-jade-pale">
              Support My Work
            </h2>
          </div>
          <button
            type="button"
            onClick={closeSupportModal}
            aria-label="Close support dialog"
            className="min-w-[44px] min-h-[44px] -mt-1 -mr-1 inline-flex items-center justify-center rounded-xl bg-jade-surface border border-white/10 text-jade-light hover:text-jade-pale active:scale-[0.96] transition-[transform,color] duration-150 ease-[var(--ease-out)] cursor-pointer"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-jade-light leading-relaxed mb-6">
          Your support keeps independent tools like NotesPack local-first and completely ad-free.
        </p>

        <div className="space-y-3">
          <a
            href="https://ko-fi.com/frosthealme"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] px-5 rounded-xl bg-[#FF5E5B] text-[#07090d] font-display font-bold text-sm inline-flex items-center justify-center gap-2.5 active:scale-[0.98] transition-[transform,filter] duration-150 ease-[var(--ease-out)] hover:brightness-105"
            aria-label="Support on Ko-fi (opens in new tab)"
          >
            <Icon name="coffee" className="w-4 h-4" />
            <span>Support on Ko-fi</span>
          </a>

          <a
            href="https://trakteer.id/projectshealme/tip?open=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] px-5 rounded-xl bg-[#BE1E2D] text-white font-display font-bold text-sm inline-flex items-center justify-center gap-2.5 active:scale-[0.98] transition-[transform,filter] duration-150 ease-[var(--ease-out)] hover:brightness-110"
            aria-label="Tip on Trakteer (opens in new tab)"
          >
            <Icon name="heart" className="w-4 h-4" />
            <span>Tip on Trakteer</span>
          </a>
        </div>
      </Modal>
    </section>
  );
}
