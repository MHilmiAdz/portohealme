import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageCardSkeleton } from "./Skeleton";

export function ImageCard({ image, alt, details, author, title, tags = [], tool }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const modalRef = useRef(null);

  const openModal  = useCallback(() => setIsOpen(true),  []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleCardKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(); }
  };

  // ── Accessibility: focus trap + Escape ────────────────────────────────────
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const firstFocusable = modalRef.current.querySelector(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key !== "Tab") return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  return (
    <>
      {/* ── Card ────────────────────────────────────────────────────────────── */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, translateY: -5 }}
        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-jade-primary/5 border border-jade-primary/10 bg-jade-deep/20 backdrop-blur-sm cursor-pointer transition-all duration-300 group"
        onClick={openModal}
        onKeyDown={handleCardKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View design: ${title}`}
      >
        {/* Image with skeleton */}
        <div className="aspect-video overflow-hidden bg-jade-dark/50 relative p-4">
          {!imgLoaded && <ImageCardSkeleton />}
          <div className="absolute inset-0 bg-jade-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
          <img
            src={image}
            alt={alt || title}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-jade-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <span className="px-6 py-3 bg-jade-primary text-jade-dark font-black uppercase tracking-widest rounded-xl text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg shadow-jade-primary/20">
            View Design
          </span>
        </div>

        {/* Title badge */}
        <div className="absolute bottom-4 left-4 z-30 pointer-events-none flex items-center gap-2">
          <span className="text-jade-pale text-[10px] font-bold bg-jade-dark/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-jade-primary/20 shadow-lg uppercase tracking-wider">
            {title}
          </span>
        </div>
      </motion.div>

      {/* ── Lightbox Modal ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 z-[110]"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`img-title-${title}`}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-jade-dark/95 backdrop-blur-md"
              onClick={closeModal}
            />

            {/* Panel */}
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-jade-deep p-6 md:p-10 rounded-3xl max-w-4xl w-full shadow-2xl border border-jade-primary/20 overflow-hidden max-h-[95vh] flex flex-col"
            >
              <button
                className="absolute top-6 right-6 text-jade-light hover:text-jade-primary transition-colors z-20 bg-jade-dark/80 backdrop-blur-sm p-3 rounded-full border border-jade-primary/20"
                onClick={closeModal}
                aria-label="Close design lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="flex flex-col gap-8">
                  {/* Image */}
                  <div className="flex justify-center items-center bg-jade-dark/60 rounded-2xl p-4 md:p-8 border border-jade-primary/5 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-jade-dark/30 rounded-2xl pointer-events-none" />
                    <img
                      src={image}
                      alt={alt || title}
                      className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl relative z-10"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center md:text-left pb-6">
                    <h3
                      id={`img-title-${title}`}
                      className="text-3xl md:text-4xl font-black text-jade-pale mb-4"
                    >
                      {title}
                    </h3>

                    {/* Tags */}
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                        {tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full bg-jade-primary/10 text-jade-primary border border-jade-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-jade-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto md:mx-0">{details}</p>

                    {author && (
                      <div className="mt-8 border-t border-jade-primary/10 pt-6">
                        <p className="text-sm text-jade-light/70 italic font-medium uppercase tracking-widest">{author}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-jade-primary/10 mt-auto flex justify-center">
                <button
                  className="px-10 py-4 bg-jade-primary text-jade-dark font-black rounded-xl hover:bg-jade-pale hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-jade-primary/20 transition-all duration-300 active:scale-95 uppercase tracking-[0.2em] text-xs w-full md:w-auto"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Grid wrapper */
export function ImageCardGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <ImageCard key={idx} {...card} />
      ))}
    </div>
  );
}
