"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";
import { BrainCircuit, Layers, Workflow, CloudCog, ShieldCheck } from "lucide-react";

function SkeletonOne() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-white/[0.08] bg-black p-4">
      <div className="w-full space-y-2">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs text-neutral-500">AI AGENT · ACTIVE</span>
        </div>
        <div className="rounded-md bg-white/[0.06] p-2 text-xs text-neutral-300">Summarize Q3 pipeline and draft follow-ups →</div>
        <div className="flex gap-1">
          <span className="rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-black">RAG</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-neutral-300">LLM</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-neutral-300">Tools</span>
        </div>
      </div>
    </div>
  );
}
function SkeletonTwo() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-white/[0.08] bg-black p-4">
      <div className="w-full">
        <div className="mb-2 flex gap-1">
          <span className="h-2 w-16 rounded-full bg-white" />
          <span className="h-2 w-8 rounded-full bg-white/20" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded bg-white/[0.06] p-2">
            <div className="h-6 w-6 rounded bg-white" />
            <div className="mt-2 h-2 w-10 rounded bg-white/20" />
          </div>
          <div className="rounded bg-white/[0.06] p-2">
            <div className="h-6 w-6 rounded bg-white" />
            <div className="mt-2 h-2 w-10 rounded bg-white/20" />
          </div>
          <div className="rounded bg-white/[0.06] p-2">
            <div className="h-6 w-6 rounded bg-white" />
            <div className="mt-2 h-2 w-10 rounded bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
function SkeletonThree() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-white/[0.08] bg-black p-4">
      <div className="w-full space-y-2 font-mono text-xs">
        <div className="flex justify-between text-neutral-500">
          <span>workflow.run</span>
          <span className="text-emerald-400">● live</span>
        </div>
        <div className="rounded bg-white/[0.06] p-2 text-neutral-300">trigger → enrich → notify → done</div>
        <div className="h-1.5 w-full rounded-full bg-white/10">
          <div className="h-1.5 w-[68%] rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
function SkeletonFour() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-white/[0.08] bg-black p-4">
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-neutral-500">us-east-1</span>
          <span className="rounded bg-emerald-500 px-1.5 py-0.5 text-white">healthy</span>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-6 rounded bg-white/[0.06]" style={{ opacity: 0.4 + (i % 3) * 0.3 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
function SkeletonFive() {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-white/[0.08] bg-black p-4">
      <div className="w-full space-y-2 font-mono text-xs">
        <div className="flex items-center gap-2 text-neutral-300">
          <ShieldCheck className="size-3.5 text-emerald-500" />
          <span>api.jiora.tech — TLS 1.3 · mTLS</span>
        </div>
        <div className="rounded bg-white/[0.06] p-2 text-neutral-400">audited · least-privilege · rotated</div>
      </div>
    </div>
  );
}

const items = [
  {
    title: "AI & Intelligent Systems",
    description: "Practical AI that automates processes, works with your data, and creates intelligent product experiences.",
    header: <SkeletonOne />,
    icon: <BrainCircuit className="size-4 text-white/40" />,
  },
  {
    title: "SaaS & Digital Products",
    description: "Scalable platforms engineered to evolve with your business and your users.",
    header: <SkeletonTwo />,
    icon: <Layers className="size-4 text-white/40" />,
  },
  {
    title: "Business Automation",
    description: "Turn repetitive processes into intelligent, automated workflows.",
    header: <SkeletonThree />,
    icon: <Workflow className="size-4 text-white/40" />,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Reliable, observable cloud foundations for production workloads.",
    header: <SkeletonFour />,
    icon: <CloudCog className="size-4 text-white/40" />,
  },
  {
    title: "Security",
    description: "Security considered from the first line of code — not bolted on later.",
    header: <SkeletonFive />,
    icon: <ShieldCheck className="size-4 text-white/40" />,
  },
];

export default function WhatWeBuild() {
  return (
    <section id="build" className="w-full bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-neutral-500">01 — WHAT WE BUILD</p>
          <h2 className="mt-3 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            From ideas to intelligent systems.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            We work across the technology stack to create software that is built for the real world — not demos.
          </p>
        </div>
        <BentoGrid className="mt-10 md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} icon={item.icon} className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
          ))}
        </BentoGrid>
        <p className="mt-4 text-center font-mono text-xs text-neutral-600">CSS mockups — no WebGL overhead, instant load.</p>
      </div>
    </section>
  );
}
