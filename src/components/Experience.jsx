import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/experience";
import { Icon } from "./Icons";

const EASE_OUT = [0.23, 1, 0.32, 1];

/** Shared milestone visual viewer supporting single photos or multi-photo galleries */
function MilestoneGallery({ item, photoIndex, onSelectPhoto, heightClass = "h-64" }) {
  const photos = item.gallery?.length
    ? item.gallery
    : [{ src: item.image, label: item.company, alt: `${item.title} at ${item.company}` }];
  const safeIndex = photoIndex < photos.length ? photoIndex : 0;
  const activePhoto = photos[safeIndex];

  return (
    <div className="mb-5">
      <div
        className={`w-full ${heightClass} rounded-xl bg-jade-dark border border-white/[0.07] p-3 sm:p-4 flex items-center justify-center overflow-hidden relative`}
      >
        <img
          key={activePhoto.src}
          src={activePhoto.src}
          alt={activePhoto.alt}
          loading="lazy"
          className="max-h-full max-w-full object-contain rounded-lg"
        />
        {photos.length > 1 && (
          <span className="absolute bottom-3 right-3 font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-jade-dark/85 border border-white/10 text-jade-pale">
            {safeIndex + 1} / {photos.length}
          </span>
        )}
      </div>

      {photos.length > 1 && (
        <div
          className="flex flex-wrap gap-2 mt-3"
          role="group"
          aria-label={`Photos for ${item.title}`}
        >
          {photos.map((photo, idx) => {
            const isSelected = idx === safeIndex;
            return (
              <button
                key={photo.label}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectPhoto(idx)}
                className={`px-3 min-h-[36px] rounded-lg text-xs font-display font-semibold border active:scale-[0.97] transition-[transform,background-color,border-color,color] duration-150 ease-[var(--ease-out)] cursor-pointer ${
                  isSelected
                    ? "bg-jade-primary text-jade-dark border-jade-primary"
                    : "bg-jade-surface text-jade-light border-white/[0.08] hover:text-jade-pale hover:border-white/20"
                }`}
              >
                {photo.label}
              </button>
            );
          })}
        </div>
      )}

      {(activePhoto.caption || activePhoto.verifyUrl) && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          {activePhoto.caption && (
            <p className="font-mono text-[11px] text-jade-light">{activePhoto.caption}</p>
          )}
          {activePhoto.verifyUrl && (
            <a
              href={activePhoto.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-jade-mint hover:underline inline-flex items-center gap-1"
            >
              <span>{activePhoto.linkLabel || "Verify"}</span>
              <Icon name="arrowUpRight" className="w-3 h-3" strokeWidth={2.2} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeItem = experience[selectedIndex] || experience[0];

  const handleSelectMilestone = (index) => {
    setSelectedIndex(index);
    setPhotoIndex(0);
  };

  return (
    <section id="experience" className="section-padding relative border-b border-white/[0.06]">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-jade-primary mb-3">
              05 / Career &amp; Mentorship
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-jade-pale">
              Professional <span className="text-jade-primary">Journey</span>
            </h2>
          </div>
          <p className="text-jade-light text-sm max-w-md leading-relaxed">
            {experience.length} milestones spanning Android specialization, graduation, Cloud Computing, university practicum teaching, vocational IT education, and multimedia leadership.
          </p>
        </div>

        {/* Master-Detail Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Chronological Selector List */}
          <ul
            className="lg:col-span-5 flex flex-col gap-2"
            aria-label="Career milestones"
          >
            {experience.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <li key={`${item.title}-${item.period}`}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleSelectMilestone(index)}
                    className={`w-full text-left px-4 py-3.5 min-h-[56px] rounded-xl border transition-[background-color,border-color,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.99] cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-jade-deep border-jade-primary/45 shadow-[inset_3px_0_0_#10b981]"
                        : "bg-jade-deep/40 border-white/[0.06] hover:bg-jade-deep/80 hover:border-white/15"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 mb-0.5">
                        <span
                          className={`font-mono text-[11px] ${
                            isSelected ? "text-jade-mint" : "text-jade-light"
                          }`}
                        >
                          {item.period}
                        </span>
                        <span className="text-white/20 text-xs" aria-hidden="true">·</span>
                        <span className="text-xs text-jade-light truncate">{item.company}</span>
                      </div>
                      <p
                        className={`font-display font-bold text-sm sm:text-base truncate ${
                          isSelected ? "text-jade-pale" : "text-jade-pale/85"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>

                    <Icon
                      name="chevronDown"
                      className={`w-4 h-4 flex-shrink-0 transition-transform duration-150 lg:-rotate-90 ${
                        isSelected ? "text-jade-primary rotate-180 lg:-rotate-90" : "text-jade-light"
                      }`}
                    />
                  </button>

                  {/* Mobile inline expanded detail (< lg) */}
                  {isSelected && (
                    <div className="lg:hidden mt-2 surface-card rounded-xl p-4 sm:p-5">
                      <MilestoneGallery
                        item={item}
                        photoIndex={photoIndex}
                        onSelectPhoto={setPhotoIndex}
                        heightClass="h-56 sm:h-64"
                      />
                      <p className="text-sm text-jade-light leading-relaxed mb-4">
                        {item.details}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-jade-surface border border-white/[0.06] text-jade-light"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Detail Inspector (lg+) */}
          <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-24">
            <motion.article
              key={`${activeItem.title}-${activeItem.period}`}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="surface-card rounded-2xl p-7 xl:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.07]">
                <div>
                  <span className="inline-block font-mono text-xs text-jade-mint bg-jade-primary/15 border border-jade-primary/30 px-2.5 py-0.5 rounded-full mb-2">
                    {activeItem.period}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-jade-pale tracking-tight">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm font-medium text-jade-light mt-0.5">
                    {activeItem.company}
                  </p>
                </div>

                <span className="font-mono text-xs text-jade-light">
                  {String(selectedIndex + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}
                </span>
              </div>

              <MilestoneGallery
                item={activeItem}
                photoIndex={photoIndex}
                onSelectPhoto={setPhotoIndex}
                heightClass="h-72"
              />

              <p className="text-base text-jade-light leading-relaxed mb-6">
                {activeItem.details}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
                {activeItem.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-md bg-jade-surface border border-white/[0.08] text-jade-pale"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
