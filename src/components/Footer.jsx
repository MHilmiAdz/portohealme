import { motion } from "framer-motion";

const socialLinks = [
  { name: "LinkedIn",  href: "https://id.linkedin.com/in/m-hilmi-adzkia", color: "hover:text-[#0077b5]" },
  { name: "GitHub",    href: "https://github.com/MHilmiAdz",               color: "hover:text-jade-pale" },
  { name: "Figma",     href: "https://www.figma.com/design/fKpfDjzoZmF8EntTJfc1zX/ALL-PORTOFOLIO?node-id=66-5&t=piNNHkMtuMpRMngo-1", color: "hover:text-[#f24e1e]" },
  { name: "Instagram", href: "https://www.instagram.com/m_hilmi_a/",       color: "hover:text-[#e4405f]" },
];

export function Footer() {
  return (
    <footer className="bg-jade-dark text-jade-light py-12 border-t border-jade-primary/5">
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
          <div className="flex gap-8 order-1 md:order-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${link.color} relative group p-2`}
                aria-label={`Visit Hilmi's ${link.name} profile`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jade-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="order-3">
            <a
              href="#home"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-jade-light hover:text-jade-primary transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
