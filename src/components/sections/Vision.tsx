"use client";
import { motion } from "framer-motion";

const PILLARS = ["Software", "AI", "Automation", "Cloud", "Security"];

function VisionOrbitCSS() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] lg:h-[420px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--fg)]/[0.03] to-transparent" />
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="grid size-20 place-items-center rounded-full bg-[var(--fg)] font-mono text-xs font-bold tracking-widest text-[var(--bg)] shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          CORE
        </div>
        <div className="absolute inset-0 -z-10 rounded-full bg-[var(--fg)]/20 blur-xl" />
      </div>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] lg:h-[300px] lg:w-[300px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {PILLARS.map((label, i) => {
          const angle = (i / PILLARS.length) * 360;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)` } as any}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              >
                <span className="size-3 rounded-full border border-[var(--line)] bg-[var(--fg)] shadow" />
                <span className="whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--bg)] px-2 py-0.5 font-mono text-xs text-[var(--fg)]">
                  {label}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--line)] lg:h-[200px] lg:w-[200px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <svg suppressHydrationWarning className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" viewBox="0 0 400 400">
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i / 5) * Math.PI * 2;
          const x = Number((200 + Math.cos(a) * 110).toFixed(2));
          const y = Number((200 + Math.sin(a) * 110).toFixed(2));
          return <line key={i} x1={200} y1={200} x2={x} y2={y} stroke="currentColor" className="text-[var(--fg)]" strokeWidth={0.7} />;
        })}
      </svg>
      <p className="absolute bottom-3 left-0 right-0 text-center font-mono text-xs tracking-widest text-[var(--faint)]">5 PILLARS ORBITING INTELLIGENCE</p>
    </div>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">02 — OUR VISION</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl">A world where software works smarter.</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
              <p>
                Businesses are generating more data, handling more processes, and adopting increasingly complex technology. We believe the
                next generation of software will not simply respond to users — it will <span className="font-medium text-[var(--fg)]">understand, automate, assist, and act.</span>
              </p>
              <p>
                Jiora Tech is being built around that future. Our vision is to create technology that combines <span className="text-[var(--fg)]">Software + AI + Automation + Cloud + Security</span> to build systems that are more intelligent,
                efficient, and accessible.
              </p>
              <div className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4">
                <div className="font-mono text-xs tracking-widest text-[var(--muted)]">THE STACK — ONE COHERENT SYSTEM</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PILLARS.map((s) => (
                    <span key={s} className="rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--fg)]">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[var(--muted)]">Five pillars orbiting one core — intelligence. Pure CSS, no broken asset.</p>
              </div>
              <div className="space-y-2 pt-2">
                <h3 className="text-base font-semibold text-[var(--fg)]">Why this matters now</h3>
                <p className="text-sm text-[var(--muted)]">Teams are stretched thin with manual work that should be automated. Data lives in silos. Products feel static.</p>
              </div>
            </div>
          </div>
          <VisionOrbitCSS />
        </div>
      </div>
    </section>
  );
}
