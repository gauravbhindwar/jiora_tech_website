"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";
import { BrainCircuit, Layers, Workflow, CloudCog, ShieldCheck } from "lucide-react";

function SkeletonOne() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4">
      <div className="w-full space-y-2">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs text-[var(--muted)]">AI AGENT · ACTIVE</span>
        </div>
        <div className="rounded-md bg-[var(--card)] p-2 text-xs text-[var(--muted)]">Summarize Q3 pipeline and draft follow-ups →</div>
        <div className="flex gap-1">
          <span className="rounded bg-[var(--fg)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--bg)]">RAG</span>
          <span className="rounded bg-[var(--card)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]">LLM</span>
          <span className="rounded bg-[var(--card)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]">Tools</span>
        </div>
      </div>
    </div>
  );
}
function SkeletonTwo() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4">
      <div className="w-full">
        <div className="mb-2 flex gap-1">
          <span className="h-2 w-16 rounded-full bg-[var(--fg)]" />
          <span className="h-2 w-8 rounded-full bg-[var(--line)]" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded bg-[var(--card)] p-2">
            <div className="h-6 w-6 rounded bg-[var(--fg)]" />
            <div className="mt-2 h-2 w-10 rounded bg-[var(--line)]" />
          </div>
          <div className="rounded bg-[var(--card)] p-2">
            <div className="h-6 w-6 rounded bg-[var(--fg)]" />
            <div className="mt-2 h-2 w-10 rounded bg-[var(--line)]" />
          </div>
          <div className="rounded bg-[var(--card)] p-2">
            <div className="h-6 w-6 rounded bg-[var(--fg)]" />
            <div className="mt-2 h-2 w-10 rounded bg-[var(--line)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
function SkeletonThree() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4">
      <div className="w-full space-y-2 font-mono text-xs">
        <div className="flex justify-between text-[var(--muted)]">
          <span>workflow.run</span>
          <span className="text-emerald-500">● live</span>
        </div>
        <div className="rounded bg-[var(--card)] p-2 text-[var(--muted)]">trigger → enrich → notify → done</div>
        <div className="h-1.5 w-full rounded-full bg-[var(--line)]">
          <div className="h-1.5 w-[68%] rounded-full bg-[var(--fg)]" />
        </div>
      </div>
    </div>
  );
}
function SkeletonFour() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 flex-col rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--muted)]">us-east-1</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-medium text-white">
          <span className="size-1.5 rounded-full bg-white" />
          healthy
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--card)] p-1.5"
          >
            <div className="h-1 w-7 rounded-full bg-[var(--line)]" />
            <div className="mt-2 flex items-center gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-emerald-500/60" />
              <div className="h-1.5 w-3 rounded-full bg-[var(--line)]" />
            </div>
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-emerald-500 shadow-sm" />
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-between border-t border-[var(--line)] pt-2 font-mono text-xs">
        <span className="text-[var(--muted)]">8 pods · 3 zones</span>
        <span className="font-medium text-emerald-600">↗ 99.99%</span>
      </div>
    </div>
  );
}
function SkeletonFive() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4">
      <div className="w-full space-y-2 font-mono text-xs">
        <div className="flex items-center gap-2 text-[var(--muted)]">
          <ShieldCheck className="size-3.5 text-emerald-500" />
          <span>api.jiora.tech — TLS 1.3 · mTLS</span>
        </div>
        <div className="rounded bg-[var(--card)] p-2 text-[var(--muted)]">audited · least-privilege · rotated</div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "AI & Intelligent Systems",
    description: "Practical AI that automates processes, works with your data, and creates intelligent product experiences.",
    header: <SkeletonOne />,
    icon: <BrainCircuit className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "SaaS & Digital Products",
    description: "Scalable platforms engineered to evolve with your business and your users.",
    header: <SkeletonTwo />,
    icon: <Layers className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "Business Automation",
    description: "Turn repetitive processes into intelligent, automated workflows.",
    header: <SkeletonThree />,
    icon: <Workflow className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Reliable, observable cloud foundations for production workloads.",
    header: <SkeletonFour />,
    icon: <CloudCog className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "Security",
    description: "Security considered from the first line of code — not bolted on later.",
    header: <SkeletonFive />,
    icon: <ShieldCheck className="size-4 text-[var(--fg)]/40" />,
  },
];

export default function WhatWeBuild() {
  return (
    <section id="build" className="w-full bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-[var(--muted)]">01 — WHAT WE BUILD</p>
          <h2 className="mt-3 bg-gradient-to-br from-[var(--fg)] to-[var(--muted)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            From ideas to intelligent systems.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            We work across the technology stack to create software that is built for the real world — not demos.
          </p>
        </div>
        <BentoGrid className="mt-10 md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} icon={item.icon} className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
          ))}
        </BentoGrid>
        <p className="mt-4 text-center font-mono text-xs text-[var(--faint)]">CSS mockups — theme-aware, instant load.</p>
      </div>
    </section>
  );
}
