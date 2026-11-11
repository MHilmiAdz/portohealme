import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Shared accessible modal behavior:
 * - Marks #root inert while open
 * - Moves focus into the panel on open & traps Tab
 * - Closes on Escape and restores focus to the opener element
 */
export function useAccessibleOverlay(isOpen, onClose, panelRef) {
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const previousFocus = document.activeElement;
    const rootEl = document.getElementById("root");
    const prevInert = rootEl ? rootEl.inert : false;

    if (rootEl && "inert" in rootEl) {
      rootEl.inert = true;
    }

    const firstFocusable = panelRef.current.querySelector(FOCUSABLE_SELECTOR);
    if (firstFocusable instanceof HTMLElement) {
      firstFocusable.focus();
    } else {
      panelRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(panelRef.current.querySelectorAll(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first || document.activeElement === panelRef.current) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (rootEl && "inert" in rootEl) {
        rootEl.inert = prevInert;
      }
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [isOpen, onClose, panelRef]);
}

/**
 * Portal-rendered accessible modal dialog with Framer Motion transitions.
 */
export function Modal({
  isOpen,
  onClose,
  labelledBy,
  panelClassName = "max-w-md",
  children,
}) {
  const panelRef = useRef(null);
  useAccessibleOverlay(isOpen, onClose, panelRef);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-jade-dark/95 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full shadow-2xl border border-jade-primary/20 overscroll-contain focus:outline-none ${panelClassName}`}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
