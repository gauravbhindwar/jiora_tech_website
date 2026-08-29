"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const groups = [
  { title: "AI & Data", items: ["Python", "LLMs", "RAG", "AI Agents", "Vector Databases"] },
  { title: "Application Development", items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Python"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs"] },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"] },
  { title: "Architecture", items: ["REST APIs", "Microservices", "Event-Driven", "Distributed Systems"] },
  { title: "Security", items: ["IAM", "API Security", "Secrets", "Secure SDLC"] },
];

const ORBIT_LABELS = ["AI", "API", "DB", "Cloud", "Secure", "Scale"];

function TechOrbitCSS() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="grid size-16 place-items-center rounded-full bg-white font-mono text-xs font-bold tracking-widest text-black shadow-[0_0_30px_rgba(255,255,255,0.25)]">
          CORE
        </div>
        <div className="absolute inset-0 -z-10 rounded-full bg-white/15 blur-xl" />
      </div>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_LABELS.map((label, i) => {
          const angle = (i / ORBIT_LABELS.length) * 360;
          return (
            <div key={label} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${angle}deg) translate(105px) rotate(-${angle}deg)` } as any}>
              <span className="flex -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white px-2.5 py-1 font-mono text-xs font-medium text-black shadow">
                {label}
              </span>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.06]"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" viewBox="0 0 340 340">
        {ORBIT_LABELS.map((_, i) => {
          const a = (i / ORBIT_LABELS.length) * Math.PI * 2;
          const x = 170 + Math.cos(a) * 105;
          const y = 170 + Math.sin(a) * 105;
          return <line key={i} x1={170} y1={170} x2={x} y2={y} stroke="white" strokeWidth={0.6} />;
        })}
      </svg>
      <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-xs tracking-widest text-neutral-600">6 DOMAINS — CSS ONLY, NO WEBGL</p>
    </div>
  );
}

export default function Technology() {
  return (
    <section id="technology" className="relative w-full overflow-hidden bg-black py-16">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-neutral-500">TECHNOLOGY</p>
          <h2 className="mt-3 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Modern technology. Thoughtfully applied.
          </h2>
          <p className="mt-3 text-sm text-neutral-400">Technologies We Work With — chosen for the problem, not the pitch deck.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((g) => (
              <div
                key={g.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur transition hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-0 transition group-hover:opacity-100" />
                <h3 className="relative text-sm font-semibold tracking-wide text-white">{g.title}</h3>
                <div className="relative mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className={cn(
                        "rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300",
                        "group-hover:border-white/15 group-hover:bg-white/10"
                      )}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur">
            <TechOrbitCSS />
            <p className="pb-3 pt-2 text-center font-mono text-xs tracking-widest text-neutral-500">LOGICAL ORBIT — 6 tech domains orbiting core</p>
          </div>
        </div>
      </div>
    </section>
  );
}
