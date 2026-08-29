"use client";
import dynamic from "next/dynamic";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";

const SaasLayersMini = dynamic(() => import("@/components/ui/aceternity/logical-3d").then((m) => m.SaasLayersMini), {
  ssr: false,
  loading: () => <div className="h-full min-h-[6rem] w-full animate-pulse rounded-xl border border-[var(--line)] bg-[var(--card)]" />,
});
const AiNetworkMini = dynamic(() => import("@/components/ui/aceternity/logical-3d").then((m) => m.AiNetworkMini), {
  ssr: false,
  loading: () => <div className="h-full min-h-[6rem] w-full animate-pulse rounded-xl border border-[var(--line)] bg-[var(--card)]" />,
});
const ShieldMini = dynamic(() => import("@/components/ui/aceternity/logical-3d").then((m) => m.ShieldMini), {
  ssr: false,
  loading: () => <div className="h-full min-h-[6rem] w-full animate-pulse rounded-xl border border-[var(--line)] bg-[var(--card)]" />,
});
const ScaleBarsMini = dynamic(() => import("@/components/ui/aceternity/logical-3d").then((m) => m.ScaleBarsMini), {
  ssr: false,
  loading: () => <div className="h-full min-h-[6rem] w-full animate-pulse rounded-xl border border-[var(--line)] bg-[var(--card)]" />,
});
const TargetMini = dynamic(() => import("@/components/ui/aceternity/logical-3d").then((m) => m.TargetMini), {
  ssr: false,
  loading: () => <div className="h-full min-h-[6rem] w-full animate-pulse rounded-xl border border-[var(--line)] bg-[var(--card)]" />,
});

import { Cpu, Zap, ShieldCheck, TrendingUp, Boxes } from "lucide-react";

const items = [
  {
    title: "Engineering First",
    description: "Architecture, maintainability, performance, reliability — not just getting something to work. Layers that hold.",
    header: <SaasLayersMini />,
    icon: <Cpu className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "AI Native",
    description: "Where AI genuinely improves software and processes — not where it just looks good in a deck. A reasoning network.",
    header: <AiNetworkMini />,
    icon: <Zap className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "Security Conscious",
    description: "Security is part of engineering from the start, not a checklist at the end. A shield with a lock.",
    header: <ShieldMini />,
    icon: <ShieldCheck className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "Built to Scale",
    description: "Three bars growing — foundations that grow with you, so you don’t rebuild every year.",
    header: <ScaleBarsMini />,
    icon: <TrendingUp className="size-4 text-[var(--fg)]/40" />,
  },
  {
    title: "Product Mindset",
    description: "Beyond features — a target. The actual problem the software needs to solve for real people.",
    header: <TargetMini />,
    icon: <Boxes className="size-4 text-[var(--fg)]/40" />,
  },
];

export default function WhyJiora() {
  return (
    <section id="why" className="bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-[var(--muted)]">WHY JIORA TECH</p>
          <h2 className="mt-3 bg-gradient-to-br from-[var(--fg)] to-[var(--muted)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Small today. Building for what’s next.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            We are at the beginning of our journey — and that’s intentional. Engineering quality and long-term vision over short-term optics.
          </p>
        </div>
        <BentoGrid className="mt-10 md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} icon={item.icon} className={i === 3 || i === 4 ? "md:col-span-1" : ""} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
