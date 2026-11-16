import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "./Card";
import { certificates } from "../data/certificates";

const ISSUERS = ["All", "Dicoding", "HackerRank"];
const EASE_OUT = [0.23, 1, 0.32, 1];

export function Certificate() {
  const [issuerFilter, setIssuerFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const counts = useMemo(() => {
    const dicodingCount = certificates.filter((c) => c.issuer.includes("Dicoding")).length;
    const hackerRankCount = certificates.filter((c) => c.issuer.includes("HackerRank")).length;
    return { All: certificates.length, Dicoding: dicodingCount, HackerRank: hackerRankCount };
  }, []);

  const visibleCerts = useMemo(() => {
    if (issuerFilter === "All") return certificates;
    return certificates.filter((c) => c.issuer.includes(issuerFilter));
  }, [issuerFilter]);

  const featuredCert = visibleCerts.find((c) => c.featured);
  const gridCerts = featuredCert
    ? visibleCerts.filter((c) => c.title !== featuredCert.title)
    : visibleCerts;

  return (
    <section id="certificates" className="section-padding relative border-b border-white/[0.06]">
      <div className="container-max">
        {/* Section Header + Issuer Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-jade-primary mb-3">
              04 / Credentials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-jade-pale">
              Verified <span className="text-jade-primary">Certifications</span>
            </h2>
            <p className="text-jade-light text-sm max-w-lg mt-3 leading-relaxed">
              Industry credentials from Dicoding (Google Developers Authorized Training Partner) and HackerRank. Click any certificate for full details and verification.
            </p>
          </div>

          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-jade-deep border border-white/[0.08] self-start lg:self-auto"
            role="group"
            aria-label="Filter certifications by issuer"
          >
            {ISSUERS.map((issuer) => {
              const isSelected = issuerFilter === issuer;
              return (
                <button
                  key={issuer}
                  type="button"
                  onClick={() => setIssuerFilter(issuer)}
                  aria-pressed={isSelected}
                  className={`relative px-4 min-h-[40px] rounded-lg text-xs font-display font-semibold inline-flex items-center gap-2 transition-colors duration-150 cursor-pointer ${
                    isSelected ? "text-jade-dark" : "text-jade-light hover:text-jade-pale"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="cert-filter-pill"
                      transition={{ type: "spring", stiffness: 450, damping: 34 }}
                      className="absolute inset-0 rounded-lg bg-jade-primary"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{issuer}</span>
                  <span
                    className={`relative z-10 font-mono text-[10px] ${
                      isSelected ? "text-jade-dark/75" : "text-jade-light/70"
                    }`}
                  >
                    {counts[issuer]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fast Switchable Credentials Grid */}
        <motion.div
          key={issuerFilter}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="space-y-5"
        >
          {/* Flagship Spotlight Card when present (makes remaining 6 or 4 grid perfectly symmetrical) */}
          {featuredCert && (
            <Card
              category={featuredCert.issuer}
              featured
              framePadding="p-3 sm:p-4"
              {...featuredCert}
            />
          )}

          {/* Symmetrical Credential Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              gridCerts.length >= 5 ? "lg:grid-cols-3" : ""
            } gap-5`}
          >
            {gridCerts.map((cert) => (
              <Card
                key={cert.title}
                category={cert.issuer}
                aspectClass="aspect-[1.42/1]"
                framePadding="p-3"
                {...cert}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
