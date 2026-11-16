import { useState, useEffect } from "react";
import { Icon } from "./Icons";

const SOCIAL_LINKS = [
  { name: "LinkedIn",  href: "https://id.linkedin.com/in/m-hilmi-adzkia" },
  { name: "GitHub",    href: "https://github.com/MHilmiAdz" },
  { name: "Ko-fi",     href: "https://ko-fi.com/frosthealme" },
  { name: "Trakteer",  href: "https://trakteer.id/projectshealme/tip?open=true" },
  { name: "Instagram", href: "https://www.instagram.com/m_hilmi_a/" },
];

// Set VITE_GOATCOUNTER_CODE (e.g. "portohealme") to enable zero-backend analytics + live visitor counter
const GOATCOUNTER_CODE = import.meta.env.VITE_GOATCOUNTER_CODE || "";

export function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    if (!GOATCOUNTER_CODE) return;

    const scriptId = "goatcounter-analytics";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://gc.zgo.at/count.js";
      script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
      document.body.appendChild(script);
    }

    const controller = new AbortController();
    fetch(`https://${GOATCOUNTER_CODE}.goatcounter.com/counter/TOTAL.json`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.count) setVisitorCount(data.count);
      })
      .catch(() => {
        // Silently ignore if blocked by privacy extensions or not yet enabled
      });

    return () => controller.abort();
  }, []);

  return (
    <footer className="bg-jade-dark text-jade-light py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] border-t border-white/[0.06]">
      <div className="container-max px-5 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 order-2 md:order-1">
          <p className="text-xs font-mono text-jade-light">
            © 2026 <span className="text-jade-pale font-semibold">Hilmi</span> · East Java, ID
          </p>
          {visitorCount && (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-jade-deep border border-white/[0.08] font-mono text-[11px] text-jade-mint"
              title="Total portfolio visits"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-jade-primary" aria-hidden="true" />
              <span>{visitorCount} views</span>
            </span>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 order-1 md:order-2">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Hilmi's ${link.name} profile`}
              className="px-3 min-h-[44px] inline-flex items-center rounded-lg text-xs font-medium text-jade-light hover:text-jade-mint hover:bg-jade-surface/60 transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="order-3 min-h-[44px] px-3 inline-flex items-center gap-1.5 rounded-lg font-mono text-xs text-jade-light hover:text-jade-mint transition-colors duration-150"
        >
          <span>Back to Top</span>
          <Icon name="arrowUpRight" className="w-3.5 h-3.5 -rotate-45" strokeWidth={2} />
        </a>
      </div>
    </footer>
  );
}
