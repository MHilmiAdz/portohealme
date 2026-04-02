import { motion } from "framer-motion";

export function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://id.linkedin.com/in/m-hilmi-adzkia", color: "hover:text-[#0077b5]" },
    { name: "GitHub", href: "https://github.com/MHilmiAdz", color: "hover:text-jade-pale" },
    { name: "Instagram", href: "https://www.instagram.com/m_hilmi_a/", color: "hover:text-[#e4405f]" },
  ];

  return (
    <footer className="bg-jade-dark text-jade-light py-20 border-t border-jade-primary/5">
      <div className="container-max px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-jade-pale mb-3 tracking-tighter">Let's <span className="text-jade-primary">Connect</span></h3>
          <p className="max-w-md mx-auto mb-10 text-jade-light leading-relaxed">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${link.color} relative group p-2`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jade-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="pt-10 border-t border-jade-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-medium tracking-wide">
              © 2026 <span className="text-jade-primary font-black">Hilmi</span>. Built with React & Tailwind.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
              <a href="#home" className="text-jade-light hover:text-jade-primary transition-colors">Back to Top</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
