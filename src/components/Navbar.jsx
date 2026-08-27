import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress for the top bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
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
      {/* 2026 Trend: Floating Island Navigation */}
      <nav
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled 
          ? "w-[90%] md:w-auto px-10 py-4 bg-jade-dark/60 backdrop-blur-2xl rounded-[2.5rem] border border-jade-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-100" 
          : "w-full md:w-auto px-12 py-6 bg-transparent border-transparent scale-105"
        }`}
      >
        {/* Progress Line - Contained properly */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] px-10 overflow-hidden pointer-events-none">
            <motion.div
                className="h-full bg-jade-primary/40 rounded-full"
                style={{ scaleX, originX: 0 }}
            />
        </div>

        <div className="flex justify-center items-center gap-12 relative">
          {/* Desktop Links - Minimalist & Magnetic */}
          <ul className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <a
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-jade-light hover:text-jade-primary transition-all duration-300 relative group flex flex-col items-center"
                >
                  <span className="mb-1">{link.name}</span>
                  <span className="w-1 h-1 rounded-full bg-jade-primary opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-jade-pale p-3 rounded-2xl bg-jade-deep/40 border border-jade-primary/10 relative overflow-hidden group"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-jade-dark/95 backdrop-blur-3xl z-[60] flex flex-col items-center justify-center p-12 md:hidden"
          >
            <button 
              className="absolute top-10 right-10 text-jade-pale p-4 rounded-full bg-jade-deep/50 border border-jade-primary/10"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center space-y-10">
                <span className="text-[10px] font-black text-jade-primary uppercase tracking-[0.5em] mb-4">Navigation</span>
                {navLinks.map((link, i) => (
                <motion.a
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    className="text-5xl font-black text-jade-pale hover:text-jade-primary transition-all active:scale-90 tracking-tighter"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {link.name}
                </motion.a>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
