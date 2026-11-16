import { useState, useCallback, useId } from "react";
import { Skeleton } from "./Skeleton";
import { Modal } from "./Modal";
import { Icon } from "./Icons";

export function Card({
  title,
  category,
  year,
  credentialId,
  description,
  details,
  image,
  author,
  downloadLink,
  projectLink,
  verifyUrl,
  tags = [],
  aspectClass = "aspect-[16/10]",
  framePadding = "p-5",
  featured = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const titleId = useId();

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const externalHref = verifyUrl || projectLink;
  const externalLabel = verifyUrl ? "Verify Certificate" : "View Project";

  return (
    <>
      <article
        className={`surface-card relative rounded-2xl flex ${
          featured ? "flex-col lg:flex-row" : "flex-col"
        } h-full group overflow-hidden transition-[transform,border-color] duration-200 ease-[var(--ease-out)] hover:border-jade-primary/40 has-[:active]:scale-[0.988]`}
      >
        {/* Full-card native accessible button overlay */}
        <button
          type="button"
          onClick={openModal}
          aria-label={`View details for ${title}`}
          className="absolute inset-0 z-20 rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-primary focus-visible:ring-inset"
        />

        {/* Framed Thumbnail Stage */}
        {image && (
          <div
            className={`${
              featured
                ? "w-full lg:w-[46%] lg:border-b-0 lg:border-r aspect-[1.42/1]"
                : `w-full ${aspectClass}`
            } bg-jade-dark/90 ${framePadding} flex items-center justify-center border-b border-white/[0.06] overflow-hidden relative pointer-events-none flex-shrink-0`}
          >
            {category && (
              <span className="absolute top-3 left-3 z-20 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-jade-deep/95 border border-white/10 text-jade-pale shadow-sm">
                {category}
              </span>
            )}
            {year && (
              <span className="absolute top-3 right-3 z-20 font-mono text-[10px] px-2.5 py-1 rounded-md bg-jade-dark/90 border border-white/10 text-jade-mint shadow-sm">
                {year}
              </span>
            )}

            {!imgLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
            <img
              src={image}
              alt={title}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`max-h-full max-w-full object-contain rounded-lg transition-[opacity,transform] duration-300 ease-[var(--ease-out)] group-hover:scale-[1.03] relative z-10 drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)] ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}

        {/* Editorial Card Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow text-left pointer-events-none">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              {featured && (
                <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-jade-primary mb-1.5">
                  Highest Distinction · 90 Hours
                </span>
              )}
              <h3
                className={`${
                  featured ? "text-xl sm:text-2xl" : "text-lg"
                } font-display font-bold text-jade-pale group-hover:text-jade-mint transition-colors duration-150 leading-snug`}
              >
                {title}
              </h3>
            </div>
            <Icon
              name="arrowUpRight"
              className="w-4 h-4 text-jade-light group-hover:text-jade-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[transform,color] duration-150 ease-[var(--ease-out)] flex-shrink-0 mt-1"
              strokeWidth={2}
            />
          </div>

          <p className={`text-jade-light text-sm leading-relaxed ${featured ? "line-clamp-3 mb-5" : "line-clamp-2 mb-5"}`}>
            {description}
          </p>

          {credentialId && featured && (
            <p className="font-mono text-xs text-jade-mint mb-4">
              Credential ID: {credentialId}
            </p>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/[0.06]">
              {tags.slice(0, featured ? 4 : 3).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-jade-surface text-jade-light border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
              {tags.length > (featured ? 4 : 3) && (
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-md text-jade-light/80">
                  +{tags.length - (featured ? 4 : 3)}
                </span>
              )}
            </div>
          )}
        </div>
      </article>

      {/* Widescreen 2-Column <dialog> Detail Showcase */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        labelledBy={titleId}
        panelClassName="max-w-4xl rounded-2xl p-5 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-white/[0.08]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {category && (
                <span className="font-mono text-[11px] uppercase tracking-widest text-jade-primary">
                  {category}
                </span>
              )}
              {year && (
                <span className="font-mono text-[11px] text-jade-light">
                  · {year}
                </span>
              )}
              {credentialId && (
                <span className="font-mono text-[11px] text-jade-light">
                  · ID {credentialId}
                </span>
              )}
            </div>
            <h2 id={titleId} className="text-xl sm:text-2xl font-display font-bold text-jade-pale tracking-tight">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close details dialog"
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-xl bg-jade-surface border border-white/10 text-jade-light hover:text-jade-pale active:scale-[0.96] transition-[transform,color] duration-150 ease-[var(--ease-out)] cursor-pointer flex-shrink-0"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        <div className={`grid grid-cols-1 ${image ? "md:grid-cols-12 gap-6 items-start" : ""}`}>
          {/* Left Stage: Crisp Uncropped Media */}
          {image && (
            <div className="md:col-span-7 rounded-xl bg-jade-dark border border-white/[0.08] p-3 sm:p-4 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full max-h-[60dvh] object-contain rounded-lg"
              />
            </div>
          )}

          {/* Right Column: Narrative, Tags & Actions */}
          <div className={`${image ? "md:col-span-5" : ""} flex flex-col justify-between h-full gap-5`}>
            <div>
              {description && (
                <p className="text-sm font-medium text-jade-mint mb-3 leading-relaxed">
                  {description}
                </p>
              )}
              <p className="text-sm text-jade-light leading-relaxed mb-5">
                {details}
              </p>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-jade-surface border border-white/[0.08] text-jade-pale"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {author && (
                <div className="py-2.5 px-3.5 rounded-xl bg-jade-surface/60 border border-white/[0.06]">
                  <p className="font-mono text-xs text-jade-light">{author}</p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.08]">
              {externalHref && (
                <a
                  href={externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-jade flex-1 sm:flex-none"
                  aria-label={`${externalLabel} for ${title}`}
                >
                  <span>{externalLabel}</span>
                  <Icon name="external" className="w-4 h-4" />
                </a>
              )}

              {downloadLink && downloadLink !== "#" && (
                <a
                  href={downloadLink}
                  download
                  className="btn-ghost"
                  aria-label={`Download ${title} file`}
                >
                  Download
                </a>
              )}

              <button
                type="button"
                onClick={closeModal}
                className="btn-ghost cursor-pointer ml-auto"
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
