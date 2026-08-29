"use client";

export function SplineFrame({ url, className }: { url: string; className?: string }) {
  return (
    <div className={className ?? "relative h-[420px] w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg)]"}>
      <iframe src={url} frameBorder="0" width="100%" height="100%" className="absolute inset-0 h-full w-full" allow="autoplay; fullscreen" />
      {/* subtle vignette so it blends with dark */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
    </div>
  );
}
