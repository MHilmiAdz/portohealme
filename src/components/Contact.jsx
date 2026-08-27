import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_INFO = {
  email:     "projectshealme@gmail.com",
  linkedin:  "https://id.linkedin.com/in/m-hilmi-adzkia",
  github:    "https://github.com/MHilmiAdz",
  figma:     "https://www.figma.com/design/fKpfDjzoZmF8EntTJfc1zX/ALL-PORTOFOLIO?node-id=66-5&t=piNNHkMtuMpRMngo-1",
  instagram: "https://www.instagram.com/m_hilmi_a/",
  status:    "Open for Opportunities",
};

const socialChannels = [
  {
    name: "LinkedIn",
    handle: "in/m-hilmi-adzkia",
    href: CONTACT_INFO.linkedin,
    desc: "Professional network & career updates",
    badge: "Connect",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "@MHilmiAdz",
    href: CONTACT_INFO.github,
    desc: "Open source code & active repositories",
    badge: "Follow",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    handle: "Figma Workspace",
    href: CONTACT_INFO.figma,
    desc: "UI/UX prototypes & workspace",
    badge: "Workspace",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zm0-8c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4zm8-4h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0zm0 8h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V8z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@m_hilmi_a",
    href: CONTACT_INFO.instagram,
    desc: "Visual updates & creative highlights",
    badge: "View",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-jade-dark/60 border-t border-jade-primary/5"
      aria-labelledby="contact-heading"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-jade-primary/40 to-transparent" />
      <div className="absolute top-1/3 left-[-10%] w-[32rem] h-[32rem] bg-jade-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[32rem] h-[32rem] bg-jade-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jade-primary/10 border border-jade-primary/20 text-jade-primary text-[10px] font-black uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-jade-primary animate-pulse" />
            {CONTACT_INFO.status}
          </div>
          <h2
            id="contact-heading"
            className="text-5xl md:text-7xl font-black text-jade-pale tracking-tighter mb-4"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary via-jade-light to-jade-pale">Connect</span>
          </h2>
          <p className="text-jade-light text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Have a project in mind, want to collaborate on an Android application, or explore design ideas? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* Main Direct Email Bento Card (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-jade-deep/80 via-jade-deep/40 to-jade-dark/60 border border-jade-primary/20 p-8 md:p-12 flex flex-col justify-between backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-jade-primary/10 rounded-full blur-3xl group-hover:bg-jade-primary/20 transition-all duration-700 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-jade-dark border border-jade-primary/30 flex items-center justify-center text-jade-primary shadow-lg shadow-jade-primary/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-jade-primary bg-jade-primary/10 px-3 py-1 rounded-full border border-jade-primary/20">
                  Direct Inbox
                </span>
              </div>

              <h3 className="text-xs font-black uppercase tracking-[0.25em] text-jade-light/60 mb-2">
                Send an Email
              </h3>
              <p className="text-xl md:text-3xl font-black text-jade-pale tracking-tight break-all mb-4">
                {CONTACT_INFO.email}
              </p>
              <p className="text-xs md:text-sm text-jade-light/80 leading-relaxed mb-8 max-w-md">
                Fastest way to get in touch. Click below to copy or start a conversation directly.
              </p>
            </div>

            {/* Email Actions Button Group */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-jade-primary/10">
              <button
                onClick={handleCopyEmail}
                className="btn-jade flex items-center gap-2.5 text-xs px-6 py-3.5 shadow-lg shadow-jade-primary/20 hover:scale-105 transition-all font-black uppercase tracking-widest cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-jade-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-5 py-3.5 rounded-xl bg-jade-dark/60 border border-jade-primary/20 text-jade-light hover:text-jade-primary hover:border-jade-primary/40 text-[11px] font-black uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Compose Mail</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Social Channels & Location Column (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {socialChannels.map((channel, i) => (
              <motion.a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="p-5 rounded-3xl bg-jade-deep/30 border border-jade-primary/15 hover:border-jade-primary/40 hover:bg-jade-deep/50 transition-all duration-300 backdrop-blur-xl flex items-center justify-between group shadow-lg"
                aria-label={`Visit Hilmi's ${channel.name} profile`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-jade-dark border border-jade-primary/20 flex items-center justify-center text-jade-primary group-hover:bg-jade-primary group-hover:text-jade-dark transition-all duration-300 shadow-md">
                    {channel.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-jade-pale group-hover:text-jade-primary transition-colors">
                      {channel.name}
                    </h4>
                    <p className="text-[11px] font-mono text-jade-light/60">
                      {channel.handle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-jade-light/50 group-hover:text-jade-primary transition-colors hidden sm:inline">
                    {channel.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-jade-dark/80 border border-jade-primary/15 flex items-center justify-center text-jade-light group-hover:text-jade-primary group-hover:border-jade-primary/30 transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
