import { motion, useReducedMotion } from "framer-motion";
import { publishedApps } from "../data/publishedApps";
import { Icon } from "./Icons";

const EASE_OUT = [0.23, 1, 0.32, 1];

export function PublishedApp() {
  const shouldReduceMotion = useReducedMotion();

  if (!publishedApps || publishedApps.length === 0) return null;

  return (
    <section
      id="published-app"
      className="section-padding relative border-b border-white/[0.06]"
    >
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-jade-primary mb-3">
              <span className="w-2 h-2 rounded-full bg-jade-primary" aria-hidden="true" />
              <span>02 / Shipped Product</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-jade-pale">
              Published <span className="text-jade-primary">Application</span>
            </h2>
          </div>
          <p className="text-jade-light text-sm max-w-md leading-relaxed">
            Production Android software engineered end-to-end, verified for privacy compliance, and live on Google Play.
          </p>
        </div>

        {/* Flagship App Showcase */}
        <div className="space-y-8">
          {publishedApps.map((app, index) => (
            <motion.article
              key={app.id || index}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="surface-card rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Subtle top emerald accent */}
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-jade-primary/50 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Product Architecture & Feature Grid */}
                <div className="lg:col-span-7 flex flex-col">
                  {/* Identity Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-white/10 bg-jade-dark flex-shrink-0">
                      <img
                        src={app.icon}
                        alt={`${app.title} app icon`}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-jade-pale tracking-tight">
                          {app.title}
                        </h3>
                        <span className="font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-jade-primary/15 text-jade-mint border border-jade-primary/30">
                          {app.version}
                        </span>
                        <span className="font-mono text-[11px] text-jade-light px-2.5 py-0.5 rounded-full bg-jade-surface border border-white/[0.08]">
                          {app.status}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-jade-mint mt-1">
                        {app.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="text-jade-light text-sm sm:text-base leading-relaxed mb-6">
                    {app.description}
                  </p>

                  {/* 9-Module Capabilities Matrix */}
                  <div className="mb-6">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-jade-light mb-3">
                      Included Modules
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {app.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="px-3 py-2.5 rounded-xl bg-jade-surface/75 border border-white/[0.06] flex items-center gap-2.5"
                        >
                          <Icon name={item.icon} className="w-4 h-4 text-jade-primary flex-shrink-0" />
                          <span className="text-xs font-medium text-jade-pale leading-snug">
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack Metadata */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-jade-dark border border-white/[0.08] text-jade-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-white/[0.07] flex flex-wrap items-center gap-3">
                    {app.playStoreUrl && app.playStoreUrl !== "#" && (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-jade w-full sm:w-auto"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M3.609 1.814L13.793 12 3.61 22.186c-.198-.204-.31-.48-.31-.786V2.6c0-.306.112-.582.31-.786zm10.89 10.893l2.302 2.302-11.8 6.743 9.498-9.045zm0-1.414L4.999 2.248l11.802 6.743-2.302 2.302zm1.414 1.414l2.793 1.596c.784.448.784 1.18 0 1.628l-2.793 1.596-2.096-2.096 2.096-2.096z" />
                        </svg>
                        <span>Get on Google Play</span>
                      </a>
                    )}

                    <a
                      href={app.showcaseUrl}
                      className="btn-ghost w-full sm:w-auto"
                    >
                      <span>Explore Full Showcase</span>
                      <Icon name="arrowRight" className="w-4 h-4 text-jade-primary" strokeWidth={2.2} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Clean Device Stage */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[300px] sm:max-w-[320px] rounded-3xl bg-jade-dark border border-white/[0.08] p-4 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      aria-hidden="true"
                      style={{
                        background: "radial-gradient(circle at 50% 45%, rgba(16,185,129,0.12), transparent 72%)",
                      }}
                    />
                    <img
                      src={app.previewImage}
                      alt={`${app.title} mobile interface showcase`}
                      width={576}
                      height={1024}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-2xl relative z-10 shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
