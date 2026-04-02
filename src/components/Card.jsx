import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Card({ title, description, details, image, author, downloadLink, tags = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, translateY: -5 }}
        className="rounded-2xl border border-jade-primary/10 bg-jade-deep/20 backdrop-blur-sm transition-all cursor-pointer hover:border-jade-primary/30 flex flex-col h-full group overflow-hidden shadow-lg hover:shadow-jade-primary/5"
        onClick={() => setIsOpen(true)}
      >
        {/* Thumbnail Image */}
        {image && (
          <div className="w-full h-48 bg-jade-dark/50 p-6 flex items-center justify-center border-b border-jade-primary/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-jade-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
                src={image} 
                alt={title} 
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-lg" 
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow text-center">
          <h3 className="text-xl font-bold text-jade-pale group-hover:text-jade-primary transition-colors">{title}</h3>
          <p className="text-jade-light/80 mt-3 text-sm leading-relaxed flex-grow">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full bg-jade-dark/50 text-jade-light border border-jade-primary/10 group-hover:border-jade-primary/30 group-hover:text-jade-primary transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-jade-dark/95 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-jade-deep p-6 md:p-10 rounded-3xl max-w-3xl w-full shadow-2xl border border-jade-primary/20 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                className="absolute top-6 right-6 text-jade-light hover:text-jade-primary transition-colors z-10 bg-jade-dark/50 p-2 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-10 mt-4">
                {/* Large Image Showcase */}
                {image && (
                  <div className="w-full flex items-center justify-center bg-jade-dark/40 rounded-2xl p-6 md:p-12 border border-jade-primary/5 relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-jade-dark/20 rounded-2xl pointer-events-none" />
                    <img
                      src={image}
                      alt={title}
                      className="max-w-full max-h-[45vh] object-contain rounded-lg shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <div className="w-full flex flex-col items-center md:items-start">
                  <h3 className="text-3xl md:text-4xl font-black text-jade-pale mb-2">{title}</h3>
                  <p className="text-jade-primary font-bold tracking-widest uppercase text-xs mb-6">{description}</p>
                  
                  {tags.length > 0 && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                      {tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full bg-jade-primary/10 text-jade-primary border border-jade-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="prose prose-invert max-w-none text-center md:text-left">
                    <p className="text-jade-light leading-loose text-base">
                      {details}
                    </p>
                  </div>

                  {author && (
                    <div className="mt-10 pt-6 border-t border-jade-primary/10 w-full text-center md:text-left">
                      <p className="text-sm text-jade-light/70 font-medium italic">
                        {author}
                      </p>
                    </div>
                  )}

                  <div className="mt-12 flex flex-wrap gap-4 w-full justify-center md:justify-start">
                    {downloadLink && downloadLink !== "#" && (
                      <a
                        href={downloadLink}
                        download
                        className="px-8 py-4 bg-jade-primary text-jade-dark font-black rounded-xl hover:bg-jade-pale hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95 text-xs uppercase tracking-widest"
                      >
                        Download Project
                      </a>
                    )}
                    <button
                      className="px-8 py-4 bg-jade-dark text-jade-pale font-black rounded-xl hover:bg-jade-deep border border-jade-primary/20 transition-all active:scale-95 text-xs uppercase tracking-widest"
                      onClick={() => setIsOpen(false)}
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
