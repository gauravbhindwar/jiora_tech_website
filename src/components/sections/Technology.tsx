"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Code2, Database, CloudCog, Layers, ShieldCheck, ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const GROUPS = [
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI & Data",
    benefit: "Chat with your docs, automate research, build agents that act.",
    items: ["Python", "LLMs", "RAG", "AI Agents", "Vector DBs"],
    accent: "from-violet-500/10 to-fuchsia-500/10",
    use: "For founders who want AI that actually ships, not demos.",
  },
  {
    id: "app",
    icon: Code2,
    title: "Application Development",
    benefit: "Type-safe, fast, maintainable apps your team loves to extend.",
    items: ["TypeScript", "React", "Next.js", "Node.js", "Python"],
    accent: "from-blue-500/10 to-cyan-500/10",
  },
  {
    id: "data",
    icon: Database,
    title: "Data",
    benefit: "Your data, modeled for speed and scale — Postgres to Redis.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Vector DBs"],
    accent: "from-emerald-500/10 to-teal-500/10",
  },
  {
    id: "cloud",
    icon: CloudCog,
    title: "Cloud & DevOps",
    benefit: "99.99% infra that deploys in seconds, observes itself.",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"],
    accent: "from-orange-500/10 to-amber-500/10",
  },
  {
    id: "arch",
    icon: Layers,
    title: "Architecture",
    benefit: "APIs that don't break when you scale to 10x.",
    items: ["REST APIs", "Microservices", "Event-Driven", "Distributed"],
    accent: "from-zinc-500/10 to-neutral-500/10",
  },
  {
    id: "sec",
    icon: ShieldCheck,
    title: "Security",
    benefit: "Least-privilege, audited, secrets-rotated from day one.",
    items: ["IAM", "API Sec", "Secrets", "SDLC"],
    accent: "from-red-500/10 to-rose-500/10",
  },
];

const ORBIT = [
  { label: "AI", sub: "LLMs·RAG" },
  { label: "API", sub: "REST·Graph" },
  { label: "DB", sub: "PG·Redis" },
  { label: "Cloud", sub: "AWS·K8s" },
  { label: "Secure", sub: "IAM·mTLS" },
  { label: "Scale", sub: "Events" },
];

function TechOrbitInteractive({ active }: { active: string | null }) {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--fg)]/[0.03] to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      {/* core */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: active ? 1.05 : 1 }}
          className="grid size-20 place-items-center rounded-2xl border border-[var(--line)] bg-[var(--fg)] font-mono text-xs font-bold tracking-widest text-[var(--bg)] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        >
          <span className="text-center leading-none">JIORA<br/>STACK</span>
        </motion.div>
        <div className="absolute inset-0 -z-10 rounded-2xl bg-[var(--fg)]/10 blur-2xl" />
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] lg:h-[300px] lg:w-[300px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT.map((o, i) => {
          const angle = (i / ORBIT.length) * 360;
          const isActive = active && GROUPS.findIndex(g => g.id === active) === i;
          return (
            <div key={o.label} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${angle}deg) translate(115px) rotate(-${angle}deg)` } as any}>
              <motion.div
                animate={{ rotate: -360, scale: isActive ? 1.12 : 1 }}
                transition={{ rotate: { duration: 48, repeat: Infinity, ease: "linear" }, scale: { duration: 0.2 } }}
                className={cn(
                  "flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border px-3 py-1.5 shadow-sm backdrop-blur",
                  isActive ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]" : "border-[var(--line)] bg-[var(--card)] text-[var(--fg)]"
                )}
              >
                <span className="font-mono text-xs font-bold">{o.label}</span>
                <span className="font-mono text-[9px] opacity-60">{o.sub}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      <svg suppressHydrationWarning className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" viewBox="0 0 340 340">
        {ORBIT.map((_, i) => {
          const a = (i / ORBIT.length) * Math.PI * 2;
          const x = Number((170 + Math.cos(a) * 115).toFixed(2));
          const y = Number((170 + Math.sin(a) * 115).toFixed(2));
          return <line key={i} x1={170} y1={170} x2={x} y2={y} stroke="currentColor" className="text-[var(--fg)]" strokeWidth={0.7} />;
        })}
      </svg>

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--card)]/80 px-3 py-1.5 backdrop-blur">
        <span className="font-mono text-xs text-[var(--muted)]">HOVER A CARD → ORBIT HIGHLIGHTS</span>
        <span className="size-2 rounded-full bg-emerald-500 shadow-sm" />
      </div>
    </div>
  );
}

export default function Technology() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="technology" className="relative w-full overflow-hidden bg-[var(--bg)] py-16">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.2em] text-[var(--muted)]">TECHNOLOGY</p>
          <h2 className="mt-3 bg-gradient-to-br from-[var(--fg)] to-[var(--muted)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Stack that ships. Not just lists.
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            We don&apos;t pitch buzzwords — we pick the boring, reliable stack your problem actually needs. <span className="text-[var(--fg)]">Hover any domain.</span>
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.45fr_0.9fr] lg:items-start">
          <div className="grid gap-3.5 sm:grid-cols-2">
            {GROUPS.map((g) => {
              const isActive = active === g.id;
              return (
                <div
                  key={g.id}
                  onMouseEnter={() => setActive(g.id)}
                  onMouseLeave={() => setActive(null)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300",
                    isActive ? "border-[var(--fg)] bg-[var(--card)] shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : "border-[var(--line)] bg-[var(--card)] hover:border-[var(--line)]"
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition group-hover:opacity-100", g.accent, isActive && "opacity-100")} />
                  <div className="relative flex items-start justify-between">
                    <div className={cn("grid size-9 place-items-center rounded-xl border", isActive ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]" : "border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] group-hover:text-[var(--fg)]")}>
                      <g.icon className="size-4" />
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="grid size-6 place-items-center rounded-full bg-emerald-500 text-white">
                          <Check className="size-3" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <h3 className="relative mt-3 text-sm font-semibold tracking-wide text-[var(--fg)]">{g.title}</h3>
                  <p className="relative mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--muted)]">{g.benefit}</p>
                  <p className="relative mt-1 hidden text-xs font-medium text-[var(--faint)] group-hover:block sm:block">{g.use}</p>
                  <div className="relative mt-3 flex flex-wrap gap-1">
                    {g.items.map((it) => (
                      <span key={it} className={cn("rounded-full border px-2 py-1 text-xs leading-none", isActive ? "border-[var(--fg)] bg-[var(--fg)] text-[var(--bg)]" : "border-[var(--line)] bg-[var(--bg)] text-[var(--muted)]")}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-2">
              <TechOrbitInteractive active={active} />
              <div className="flex items-center justify-between px-1 pb-1 pt-2">
                <p className="font-mono text-xs tracking-widest text-[var(--muted)]">INTERACTIVE — 6 DOMAINS</p>
                <span className="flex items-center gap-1.5 font-mono text-xs text-[var(--muted)]">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> live
                </span>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-[var(--line)] bg-[var(--card)] p-4">
              <p className="font-mono text-xs tracking-widest text-[var(--muted)]">FOR CLIENTS</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                Not sure what you need? Hover a domain or <a href="#contact" className="inline-flex items-center gap-1 font-medium text-[var(--fg)] hover:underline">tell us your problem <ArrowUpRight className="size-3" /></a> — we&apos;ll map it to the smallest stack that works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
