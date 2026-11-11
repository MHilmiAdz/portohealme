import { useState, useCallback, useId } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "./Skeleton";
import { Modal } from "./Modal";
import { Icon } from "./Icons";

export function Card({ title, description, details, image, author, downloadLink, projectLink, tags = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const titleId = useId();

  const openModal  = useCallback(() => setIsOpen(true),  []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* ── Card ────────────────────────────────────────────────────────────── */}
      <motion.article
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, translateY: -5 }}
        className="relative rounded-2xl border border-jade-primary/15 bg-jade-deep/20 backdrop-blur-sm transition-all hover:border-jade-primary/40 flex flex-col h-full group overflow-hidden shadow-lg hover:shadow-jade-primary/5"
      >
        {/* Native full-card button trigger keeps headings semantically valid */}
        <button
          type="button"
          onClick={openModal}
          aria-label={`View details for ${title}`}
          className="absolute inset-0 z-20 rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-primary focus-visible:ring-inset"
        />

        {/* Thumbnail — shows proportional image shimmer until image loads */}
        {image && (
          <div className="w-full h-48 bg-jade-dark/50 p-6 flex items-center justify-center border-b border-jade-primary/10 overflow-hidden relative pointer-events-none">
            <div className="absolute inset-0 bg-jade-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {!imgLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
            <img
              src={image}
              alt={title}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-lg ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow text-center pointer-events-none">
          <h3 className="text-xl font-bold text-jade-pale group-hover:text-jade-primary transition-colors">{title}</h3>
          <p className="text-jade-light mt-3 text-sm leading-relaxed flex-grow">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-jade-dark/60 text-jade-light border border-jade-primary/15 group-hover:border-jade-primary/35 group-hover:text-jade-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.article>

      {/* ── Detail Modal ─────────────────────────────────────────────────────── */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        labelledBy={titleId}
        panelClassName="bg-jade-deep p-6 md:p-10 rounded-3xl max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          className="absolute top-5 right-5 text-jade-light hover:text-jade-primary transition-colors z-10 bg-jade-dark/70 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-jade-primary/20 cursor-pointer"
          onClick={closeModal}
          aria-label="Close project details"
        >
          <Icon name="close" className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <div className="flex flex-col gap-8 mt-4">
          {/* Large Image Showcase */}
          {image && (
            <div className="w-full flex items-center justify-center bg-jade-dark/40 rounded-2xl p-6 md:p-10 border border-jade-primary/10 relative group">
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
            <h2
              id={titleId}
              className="text-3xl md:text-4xl font-black text-jade-pale mb-2"
            >
              {title}
            </h2>
            <p className="text-jade-primary font-bold tracking-widest uppercase text-xs mb-6">{description}</p>

            {tags.length > 0 && (
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                {tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-jade-primary/10 text-jade-primary border border-jade-primary/25">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="prose prose-invert max-w-none text-center md:text-left">
              <p className="text-jade-light leading-loose text-base">{details}</p>
            </div>

            {author && (
              <div className="mt-8 pt-6 border-t border-jade-primary/10 w-full text-center md:text-left">
                <p className="text-sm text-jade-light/85 font-medium italic">{author}</p>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4 w-full justify-center md:justify-start">
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 min-h-[44px] bg-jade-primary text-jade-dark font-black rounded-xl hover:bg-jade-pale hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95 text-xs uppercase tracking-widest"
                  aria-label={`View ${title} project`}
                >
                  <span>View Project</span>
                  <Icon name="external" className="w-4 h-4" strokeWidth={2.5} />
                </a>
              )}

              {downloadLink && downloadLink !== "#" && (
                <a
                  href={downloadLink}
                  download
                  className="inline-flex items-center px-8 py-3.5 min-h-[44px] bg-jade-dark border border-jade-primary/25 text-jade-pale font-black rounded-xl hover:bg-jade-deep transition-all active:scale-95 text-xs uppercase tracking-widest"
                  aria-label={`Download ${title} project file`}
                >
                  Download
                </a>
              )}

              <button
                type="button"
                className="px-8 py-3.5 min-h-[44px] bg-jade-dark text-jade-pale font-black rounded-xl hover:bg-jade-deep border border-jade-primary/25 transition-all active:scale-95 text-xs uppercase tracking-widest cursor-pointer"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
