import { useEffect, useRef } from "react";

/**
 * Native <dialog> modal rendered via showModal() on the browser top layer.
 * Browser manages inert outside content, Esc/back-gesture dismissal, and focus return.
 * Includes bounding-rect pointerdown/pointerup fallback when `closedby` is unsupported.
 */
export function Modal({
  isOpen,
  onClose,
  labelledBy,
  panelClassName = "max-w-md rounded-2xl p-6 md:p-8",
  children,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = "";
      onClose();
    };

    dialog.addEventListener("close", handleClose);

    // Progressive enhancement fallback for browsers lacking <dialog closedby="any">
    let removeBackdropFallback = () => {};
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      let pressedOutside = false;
      const isOutside = (e) => {
        const r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      const onPointerDown = (e) => {
        pressedOutside = isOutside(e);
      };
      const onPointerUp = (e) => {
        if (pressedOutside && isOutside(e) && dialog.open) {
          dialog.close();
        }
        pressedOutside = false;
      };
      dialog.addEventListener("pointerdown", onPointerDown);
      dialog.addEventListener("pointerup", onPointerUp);
      removeBackdropFallback = () => {
        dialog.removeEventListener("pointerdown", onPointerDown);
        dialog.removeEventListener("pointerup", onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener("close", handleClose);
      removeBackdropFallback();
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby={labelledBy}
      className={`editorial-dialog w-[calc(100vw-2rem)] max-h-[90dvh] overflow-y-auto ${panelClassName}`}
    >
      {children}
    </dialog>
  );
}
