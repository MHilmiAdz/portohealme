import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useAccessibleOverlay } from "./Modal";
import { Icon } from "./Icons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useAccessibleOverlay(isMenuOpen, closeMenu, drawerRef);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",         href: "#home"          },
    { name: "Published",    href: "#published-app" },
    { name: "Projects",     href: "#projects"      },
    { name: "Certificates", href: "#certificates"  },
    { name: "Journey",      href: "#experience"    },
    { name: "Contact",      href: "#contact"       },
  ];

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled
            ? "w-[90%] md:w-auto px-6 md:px-10 py-3 bg-jade-dark/75 backdrop-blur-2xl rounded-[2.5rem] border border-jade-primary/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : "w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-transparent border-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] px-10 overflow-hidden pointer-events-none">
          <motion.div
            className="h-full bg-jade-primary/50 rounded-full"
            style={{ scaleX, originX: 0 }}
          />
        </div>

        <div className="flex justify-center items-center gap-12 relative">
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <a
                  href={link.href}
                  className="min-h-[44px] px-2 inline-flex flex-col items-center justify-center text-[11px] font-extrabold uppercase tracking-[0.22em] text-jade-light hover:text-jade-primary transition-colors duration-300 relative group rounded-lg"
                >
                  <span className="mb-1">{link.name}</span>
                  <span className="w-1 h-1 rounded-full bg-jade-primary opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-jade-pale min-w-[44px] min-h-[44px] p-3 rounded-2xl bg-jade-deep/60 border border-jade-primary/20 relative overflow-hidden group cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <div className="absolute inset-0 bg-jade-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay — Portal keeps #root cleanly inert while open */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={drawerRef}
                id="mobile-nav"
                role="dialog"
                aria-label="Navigation menu"
                aria-modal="true"
                tabIndex={-1}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ type: "spring", damping: 30, stiffness: 240 }}
                className="fixed inset-0 bg-jade-dark/95 backdrop-blur-3xl z-[110] flex flex-col items-center justify-center p-12 md:hidden focus:outline-none"
              >
                <button
                  type="button"
                  className="absolute top-8 right-8 text-jade-pale min-w-[44px] min-h-[44px] p-3 rounded-full bg-jade-deep/60 border border-jade-primary/20 hover:text-jade-primary transition-colors cursor-pointer"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                >
                  <Icon name="close" className="w-7 h-7" strokeWidth={2.5} />
                </button>

                <div className="flex flex-col items-center space-y-6">
                  <p className="text-xs font-extrabold text-jade-primary uppercase tracking-[0.4em] mb-2">
                    Navigation
                  </p>
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      href={link.href}
                      className="text-4xl font-black text-jade-pale hover:text-jade-primary transition-colors active:scale-95 tracking-tighter py-1"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
