import { motion, useReducedMotion } from "framer-motion";
import { publishedApps } from "../data/publishedApps";
import { Icon } from "./Icons";

export function PublishedApp() {
  const shouldReduceMotion = useReducedMotion();

  if (!publishedApps || publishedApps.length === 0) return null;

  return (
    <section id="published-app" className="section-padding relative overflow-hidden bg-jade-dark/40 border-b border-jade-primary/5">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-jade-primary/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 right-10 w-[25rem] h-[25rem] bg-jade-secondary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jade-primary/10 border border-jade-primary/25 text-jade-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4">
              <span className="w-2 h-2 rounded-full bg-jade-primary animate-pulse" aria-hidden="true" />
              Production Release
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-jade-pale tracking-tighter">
              Published <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">App</span>
            </h2>
          </div>
          <p className="text-jade-light text-xs md:text-sm max-w-sm font-medium leading-relaxed">
            Standalone mobile applications built, verified, and released for practical everyday use.
          </p>
        </div>

        {/* Apps List / Featured Showcase */}
        <div className="space-y-12">
          {publishedApps.map((app, index) => {
            return (
              <motion.div
                key={app.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="relative rounded-[2.5rem] md:rounded-[3rem] border border-jade-primary/20 bg-gradient-to-b from-jade-deep/60 to-jade-deep/20 backdrop-blur-2xl p-6 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden group"
              >
                {/* Subtle ambient light inside card */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-jade-primary/15 rounded-full blur-3xl group-hover:bg-jade-primary/25 transition-all duration-700 pointer-events-none" aria-hidden="true" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
                  {/* Left Column: App Info & Feature Highlights */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-3.5 mb-6">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-jade-primary/30 shadow-lg shadow-jade-primary/15 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={app.icon}
                            alt={`${app.title} App Icon`}
                            width={64}
                            height={64}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h3 className="text-2xl md:text-4xl font-black text-jade-pale tracking-tight">
                              {app.title}
                            </h3>
                            <span className="px-2.5 py-0.5 rounded-md bg-jade-primary/20 text-jade-primary text-[11px] font-black uppercase tracking-wider border border-jade-primary/30">
                              {app.version}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-jade-pale to-jade-light mb-3">
                        {app.tagline}
                      </p>

                      <p className="text-jade-light text-sm md:text-base leading-relaxed mb-6">
                        {app.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {app.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-jade-dark/60 text-jade-light border border-jade-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Key Highlights with SVG Icons */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                        {app.highlights.map((item, i) => (
                          <div
                            key={i}
                            className="px-3.5 py-2.5 rounded-xl bg-jade-dark/50 border border-jade-primary/15 flex items-center gap-2.5 hover:border-jade-primary/40 transition-colors"
                          >
                            <Icon name={item.icon} className="w-4 h-4 text-jade-primary flex-shrink-0" />
                            <span className="text-xs font-bold text-jade-pale tracking-tight">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions Hub */}
                    <div className="pt-6 border-t border-jade-primary/10 flex flex-wrap items-center gap-4">
                      {app.playStoreUrl && app.playStoreUrl !== "#" && (
                        <a
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-jade inline-flex items-center justify-center gap-2.5 text-xs px-8 py-3.5 min-h-[44px] shadow-lg shadow-jade-primary/20 hover:scale-[1.02] transition-all font-black uppercase tracking-widest w-full sm:w-auto text-center"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M3.609 1.814L13.793 12 3.61 22.186c-.198-.204-.31-.48-.31-.786V2.6c0-.306.112-.582.31-.786zm10.89 10.893l2.302 2.302-11.8 6.743 9.498-9.045zm0-1.414L4.999 2.248l11.802 6.743-2.302 2.302zm1.414 1.414l2.793 1.596c.784.448.784 1.18 0 1.628l-2.793 1.596-2.096-2.096 2.096-2.096z"/>
                          </svg>
                          <span>Get on Google Play</span>
                        </a>
                      )}

                      <a
                        href={app.showcaseUrl}
                        className="px-6 py-3.5 min-h-[44px] rounded-xl bg-jade-dark/60 border border-jade-primary/25 text-jade-pale hover:text-jade-primary hover:border-jade-primary/50 text-xs font-black uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2.5 w-full sm:w-auto text-center shadow-lg"
                      >
                        <span>Explore Showcase</span>
                        <Icon name="arrowRight" className="w-4 h-4" strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Clean Device Showcase Asset */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.02, translateY: -4 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="relative w-full max-w-[280px] md:max-w-[310px] flex items-center justify-center filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] drop-shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                    >
                      <img
                        src={app.previewImage}
                        alt={`${app.title} Showcase`}
                        width={576}
                        height={1024}
                        loading="lazy"
                        className="w-full h-auto object-contain rounded-[2.5rem]"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
