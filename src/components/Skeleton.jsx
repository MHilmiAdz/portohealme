/**
 * Skeleton loading component — pure CSS shimmer using compositor-friendly transforms.
 */
export function Skeleton({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-jade-surface/70 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.04] before:to-transparent ${className}`}
      aria-hidden="true"
    />
  );
}
