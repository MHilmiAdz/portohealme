import { useState, useRef, useEffect } from "react";
import { Icon } from "./Icons";

const CONTACT_INFO = {
  email:     "projectshealme@gmail.com",
  linkedin:  "https://id.linkedin.com/in/m-hilmi-adzkia",
  github:    "https://github.com/MHilmiAdz",
  kofi:      "https://ko-fi.com/frosthealme",
  trakteer:  "https://trakteer.id/projectshealme/tip?open=true",
  instagram: "https://www.instagram.com/m_hilmi_a/",
  status:    "Open for Opportunities",
};

const SOCIAL_CHANNELS = [
  {
    name: "LinkedIn",
    handle: "Professional Profile",
    href: CONTACT_INFO.linkedin,
    action: "Connect",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "@MHilmiAdz",
    href: CONTACT_INFO.github,
    action: "Follow",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "Ko-fi",
    handle: "ko-fi.com/frosthealme",
    href: CONTACT_INFO.kofi,
    action: "Support",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.881 8.948c-.02-.275-.246-.484-.523-.484h-4.321V6.26c0-.868-.707-1.574-1.574-1.574H2.037A2.04 2.04 0 0 0 0 6.723v10.554c0 1.124.913 2.037 2.037 2.037h10.875c3.084 0 5.61-2.26 6.068-5.216h4.378c1.782 0 3.226-1.444 3.226-3.226 0-1.127-.58-2.12-1.46-2.684l-.243-.24zM16.945 16.03H2.037a.64.64 0 0 1-.64-.64V6.723c0-.352.288-.64.64-.64h14.908c.352 0 .64.288.64.64v8.667c0 .352-.288.64-.64.64zm4.378-3.957h-4.378V9.86h4.378c.954 0 1.729.775 1.729 1.729 0 .954-.775 1.729-1.729 1.729zm-9.35-4.475a2.533 2.533 0 0 0-3.582 0l-.367.368-.368-.368a2.533 2.533 0 0 0-3.582 3.582l3.95 3.95 3.95-3.95a2.533 2.533 0 0 0 0-3.582z" />
      </svg>
    ),
  },
  {
    name: "Trakteer",
    handle: "trakteer.id/projectshealme",
    href: CONTACT_INFO.trakteer,
    action: "Tip",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.4 6.8h-3.9v8.4h-3v-8.4H6.6V6.4h10.8v2.4z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@m_hilmi_a",
    href: CONTACT_INFO.instagram,
    action: "View",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopyEmail = () => {
    if (!navigator.clipboard?.writeText) {
      window.prompt("Copy email address:", CONTACT_INFO.email);
      return;
    }
    navigator.clipboard
      .writeText(CONTACT_INFO.email)
      .then(() => {
        setCopied(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        window.prompt("Copy email address:", CONTACT_INFO.email);
      });
  };

  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-jade-primary mb-3">
              <span className="w-2 h-2 rounded-full bg-jade-primary" aria-hidden="true" />
              <span>06 / {CONTACT_INFO.status}</span>
            </div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-jade-pale"
            >
              Let&apos;s <span className="text-jade-primary">Connect</span>
            </h2>
          </div>
          <p className="text-jade-light text-sm max-w-md leading-relaxed">
            Have an Android build, educational initiative, or product collaboration in mind? Reach out anytime.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Direct Inbox Card */}
          <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-jade-surface border border-white/10 flex items-center justify-center text-jade-primary">
                  <Icon name="mail" className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-jade-mint bg-jade-primary/10 border border-jade-primary/25 px-3 py-1 rounded-full">
                  Direct Inbox
                </span>
              </div>

              <p className="font-mono text-xs uppercase tracking-wider text-jade-light mb-2">
                Email Address
              </p>
              <p
                className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-jade-pale tracking-tight break-words mb-3"
                style={{ overflowWrap: "anywhere" }}
              >
                {CONTACT_INFO.email}
              </p>
              <p className="text-sm text-jade-light leading-relaxed max-w-md mb-6">
                Fastest path for project inquiries, Android engineering work, or collaboration ideas.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-jade cursor-pointer"
                  aria-label="Copy email address"
                >
                  <Icon name={copied ? "check" : "copy"} className="w-4 h-4" strokeWidth={2.2} />
                  <span>{copied ? "Copied to clipboard" : "Copy Email"}</span>
                </button>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="btn-ghost"
                >
                  <span>Compose Mail</span>
                  <Icon name="arrowUpRight" className="w-4 h-4 text-jade-primary" strokeWidth={2.2} />
                </a>

                <span className="sr-only" aria-live="polite">
                  {copied ? `Email address ${CONTACT_INFO.email} copied to clipboard.` : ""}
                </span>
              </div>
            </div>

            {/* Creator Support Callout */}
            <div className="pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-sm text-jade-pale inline-flex items-center gap-2 mb-1">
                  <Icon name="coffee" className="w-4 h-4 text-jade-primary" />
                  <span>Support Independent Releases</span>
                </h3>
                <p className="text-xs text-jade-light leading-relaxed">
                  Enjoying NotesPack? Tip on Ko-fi or Trakteer to support ad-free updates.
                </p>
              </div>
              <div className="flex items-center gap-2.5 flex-shrink-0">
                <a
                  href={CONTACT_INFO.kofi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 min-h-[44px] rounded-xl bg-[#FF5E5B] text-[#07090d] font-display font-bold text-xs inline-flex items-center gap-1.5 active:scale-[0.97] transition-[transform,filter] duration-150 ease-[var(--ease-out)] hover:brightness-105"
                >
                  <span>Ko-fi</span>
                  <Icon name="arrowUpRight" className="w-3.5 h-3.5" strokeWidth={2.2} />
                </a>
                <a
                  href={CONTACT_INFO.trakteer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 min-h-[44px] rounded-xl bg-[#BE1E2D] text-white font-display font-bold text-xs inline-flex items-center gap-1.5 active:scale-[0.97] transition-[transform,filter] duration-150 ease-[var(--ease-out)] hover:brightness-110"
                >
                  <span>Trakteer</span>
                  <Icon name="arrowUpRight" className="w-3.5 h-3.5" strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </div>

          {/* Stacked Social Links Column */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {SOCIAL_CHANNELS.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Hilmi's ${channel.name} profile`}
                className="surface-card p-4 min-h-[68px] rounded-2xl flex items-center justify-between gap-3 group active:scale-[0.99] transition-[transform,border-color,background-color] duration-150 ease-[var(--ease-out)] hover:border-jade-primary/40 hover:bg-jade-surface/80"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-jade-dark border border-white/10 flex items-center justify-center text-jade-primary group-hover:bg-jade-primary group-hover:text-jade-dark transition-colors duration-150 flex-shrink-0">
                    {channel.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-sm text-jade-pale group-hover:text-jade-mint transition-colors">
                      {channel.name}
                    </h3>
                    <p className="font-mono text-xs text-jade-light truncate">
                      {channel.handle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-[11px] text-jade-light group-hover:text-jade-pale hidden sm:inline">
                    {channel.action}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-jade-dark border border-white/[0.08] flex items-center justify-center text-jade-light group-hover:text-jade-primary group-hover:border-jade-primary/40 transition-colors duration-150">
                    <Icon name="arrowUpRight" className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
