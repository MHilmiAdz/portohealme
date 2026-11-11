import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn",  href: "https://id.linkedin.com/in/m-hilmi-adzkia", color: "hover:text-[#38bdf8]" },
  { name: "GitHub",    href: "https://github.com/MHilmiAdz",               color: "hover:text-jade-pale" },
  { name: "Ko-fi",     href: "https://ko-fi.com/frosthealme",             color: "hover:text-[#FF5E5B]" },
  { name: "Trakteer",  href: "https://trakteer.id/projectshealme/tip?open=true", color: "hover:text-[#f87171]" },
  { name: "Instagram", href: "https://www.instagram.com/m_hilmi_a/",       color: "hover:text-[#f472b6]" },
];

export function Footer() {
  return (
    <footer className="bg-jade-dark text-jade-light py-12 border-t border-jade-primary/10">
      <div className="container-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-xs font-medium tracking-wide order-2 md:order-1">
            © 2026 <span className="text-jade-primary font-black">Hilmi</span>. Built with React & Tailwind.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-black uppercase tracking-[0.18em] transition-all duration-300 ${link.color} relative group px-2.5 py-2.5 min-h-[44px] inline-flex items-center rounded-lg`}
                aria-label={`Visit Hilmi's ${link.name} profile`}
              >
                {link.name}
                <span className="absolute bottom-1.5 left-2.5 right-2.5 h-0.5 bg-jade-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="order-3">
            <a
              href="#home"
              className="text-xs font-black uppercase tracking-[0.25em] text-jade-light hover:text-jade-primary transition-colors min-h-[44px] inline-flex items-center px-3 rounded-lg"
            >
              Back to Top ↑
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
