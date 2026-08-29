"use client";
import { motion } from "framer-motion";

const PILLARS = ["Software", "AI", "Automation", "Cloud", "Security"];

function VisionOrbitCSS() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] lg:h-[420px]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      {/* central core */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="grid size-20 place-items-center rounded-full bg-white font-mono text-xs font-bold tracking-widest text-black shadow-[0_0_40px_rgba(255,255,255,0.3)]">
          CORE
        </div>
        <div className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-xl" />
      </div>

      {/* orbiting ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] lg:h-[300px] lg:w-[300px]"
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
              <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
                <span className="size-3 rounded-full border border-white/20 bg-white shadow" />
                <span className="whitespace-nowrap rounded-full border border-white/10 bg-black px-2 py-0.5 font-mono text-xs text-white">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
      {/* counter-rotating inner ring for depth */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.06] lg:h-[200px] lg:w-[200px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* subtle connecting lines (SVG) */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" viewBox="0 0 400 400">
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i / 5) * Math.PI * 2;
          const x = 200 + Math.cos(a) * 110;
          const y = 200 + Math.sin(a) * 110;
          return <line key={i} x1={200} y1={200} x2={x} y2={y} stroke="white" strokeWidth={0.7} />;
        })}
      </svg>

      <p className="absolute bottom-3 left-0 right-0 text-center font-mono text-xs tracking-widest text-neutral-600">5 PILLARS ORBITING INTELLIGENCE</p>
    </div>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500">02 — OUR VISION</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">A world where software works smarter.</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
              <p>
                Businesses are generating more data, handling more processes, and adopting increasingly complex technology. We believe the
                next generation of software will not simply respond to users — it will <span className="font-medium text-white">understand, automate, assist, and act.</span>
              </p>
              <p>
                Jiora Tech is being built around that future. Our vision is to create technology that combines <span className="text-white">Software + AI + Automation + Cloud + Security</span> to build systems that are more intelligent,
                efficient, and accessible.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="font-mono text-xs tracking-widest text-neutral-500">THE STACK — ONE COHERENT SYSTEM</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PILLARS.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-neutral-500">Five pillars orbiting one core — intelligence. Pure CSS, no broken asset.</p>
              </div>
              <div className="space-y-2 pt-2">
                <h3 className="text-base font-semibold text-white">Why this matters now</h3>
                <p className="text-sm text-neutral-400">Teams are stretched thin with manual work that should be automated. Data lives in silos. Products feel static.</p>
              </div>
            </div>
          </div>
          <VisionOrbitCSS />
        </div>
      </div>
    </section>
  );
}
