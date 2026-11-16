import { useState, useEffect, useCallback, useId } from "react";
import { motion } from "framer-motion";
import { Icon } from "./Icons";
import { Modal } from "./Modal";

const NAV_LINKS = [
  { id: "home",          name: "Home",        num: "01", href: "#home"          },
  { id: "published-app", name: "NotesPack",   num: "02", href: "#published-app" },
  { id: "projects",      name: "Projects",    num: "03", href: "#projects"      },
  { id: "certificates",  name: "Credentials", num: "04", href: "#certificates"  },
  { id: "experience",    name: "Journey",     num: "05", href: "#experience"    },
  { id: "contact",       name: "Contact",     num: "06", href: "#contact"       },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileHeadingId = useId();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Track scroll depth, hairline progress, and active section deterministically
  useEffect(() => {
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const y = window.scrollY;
      setIsScrolled(y > 32);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, Math.max(0, y / maxScroll)) : 0);

      if (y < 40) {
        setActiveId("home");
        return;
      }
      if (maxScroll > 0 && y >= maxScroll - 24) {
        setActiveId(NAV_LINKS[NAV_LINKS.length - 1].id);
        return;
      }

      const probeY = window.innerHeight * 0.35;
      let current = "home";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= probeY) {
          current = link.id;
        }
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,border-color,backdrop-filter] duration-200 ease-[var(--ease-out)] border-b ${
          isScrolled
            ? "bg-[#07090d]/85 backdrop-blur-xl border-white/[0.08]"
            : "bg-[#07090d]/40 backdrop-blur-md border-transparent"
        }`}
      >
        <div className="container-max px-5 sm:px-6 h-16 md:h-[4.25rem] flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="inline-flex items-center gap-2.5 min-h-[44px] pr-2 rounded-lg text-jade-pale hover:text-white transition-colors duration-150"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-jade-primary ring-4 ring-jade-primary/15" aria-hidden="true" />
            <span className="font-display font-bold tracking-tight text-base">
              Hilmi
            </span>
            <span className="hidden sm:inline font-mono text-xs text-jade-light">
              / portohealme
            </span>
          </a>

          {/* Desktop Navigation Pill */}
          <nav aria-label="Primary" className="hidden md:flex items-center">
            <ul className="flex items-center gap-1 p-1 rounded-full bg-jade-deep/90 border border-white/[0.08]">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative px-3.5 py-2 min-h-[36px] rounded-full text-xs font-medium inline-flex items-center transition-colors duration-150 ${
                        isActive ? "text-jade-dark font-semibold" : "text-jade-light hover:text-jade-pale"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                          className="absolute inset-0 rounded-full bg-jade-primary"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action + Mobile Trigger */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-xl bg-jade-surface border border-white/10 text-xs font-display font-semibold text-jade-pale hover:border-jade-primary/40 hover:text-jade-mint active:scale-[0.97] transition-[transform,border-color,color] duration-150 ease-[var(--ease-out)]"
            >
              <span>Let&apos;s Talk</span>
              <Icon name="arrowUpRight" className="w-3.5 h-3.5 text-jade-primary" strokeWidth={2.2} />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="md:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-xl bg-jade-surface border border-white/10 text-jade-pale active:scale-[0.97] transition-[transform,border-color] duration-150 ease-[var(--ease-out)] cursor-pointer"
            >
              <Icon name="menu" className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Hairline Scroll Progress */}
        <div
          className="h-[1.5px] w-full bg-transparent overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="h-full bg-gradient-to-r from-jade-primary/70 to-jade-mint origin-left"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </header>

      {/* Native <dialog> Mobile Sheet via shared Modal */}
      <Modal
        isOpen={isMenuOpen}
        onClose={closeMenu}
        labelledBy={mobileHeadingId}
        panelClassName="max-w-sm rounded-2xl p-6"
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-jade-primary">Navigation</p>
            <h2 id={mobileHeadingId} className="text-lg font-display font-bold text-jade-pale">
              Explore Portfolio
            </h2>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-xl bg-jade-surface border border-white/10 text-jade-light hover:text-jade-pale active:scale-[0.96] transition-[transform,color] duration-150 ease-[var(--ease-out)] cursor-pointer"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>

        <nav aria-label="Mobile sections">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center justify-between px-4 min-h-[48px] rounded-xl font-display font-semibold text-base active:scale-[0.98] transition-[transform,background-color,color] duration-150 ease-[var(--ease-out)] ${
                      isActive
                        ? "bg-jade-primary/15 text-jade-mint border border-jade-primary/30"
                        : "text-jade-pale hover:bg-jade-surface"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-jade-light">{link.num}</span>
                      <span>{link.name}</span>
                    </span>
                    <Icon name="arrowRight" className="w-4 h-4 text-jade-primary" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Modal>
    </>
  );
}
