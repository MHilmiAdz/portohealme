/**
 * Skeleton loading components
 * Pure CSS shimmer — no extra dependencies.
 */

/** Generic shimmer block */
export function Skeleton({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-jade-deep/40 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-jade-primary/5 before:to-transparent ${className}`}
      aria-hidden="true"
    />
  );
}

/** Matches the Card component layout */
export function CardSkeleton() {
  return (
    <div
      className="rounded-2xl border border-jade-primary/10 bg-jade-deep/20 flex flex-col h-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Thumbnail placeholder */}
      <Skeleton className="w-full h-48" />
      {/* Body placeholder */}
      <div className="p-6 flex flex-col gap-3 flex-grow">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2 mt-4">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/** Matches the ImageCard component layout */
export function ImageCardSkeleton() {
  return (
    <div
      className="rounded-2xl border border-jade-primary/10 bg-jade-deep/20 overflow-hidden"
      aria-hidden="true"
    >
      <Skeleton className="aspect-video w-full" />
    </div>
  );
}
