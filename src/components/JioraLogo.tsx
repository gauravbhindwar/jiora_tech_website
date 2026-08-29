"use client";
export function JioraLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Mark */}
      <svg viewBox="0 0 100 64" className="h-full w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="22" y="2" width="78" height="10" rx="1" fill="#C5A059" />
        <path d="M42 12 H66 V62 H56 V22 H42 C42 22 14 22 14 42 C14 52 22 58 30 58 L28 64 C14 64 2 54 2 42 C2 18 22 12 42 12 Z" fill="#0B1C33" />
        <rect x="66" y="12" width="10" height="50" rx="1" fill="#C5A059" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-[var(--fg)]">
          JI<span className="font-light">O</span>RA
        </span>
        <span className="font-mono text-[7.5px] tracking-[0.28em] text-[#C5A059]">TECHNOLOGIES</span>
      </div>
    </div>
  );
}
