"use client";
import { HoverEffect } from "@/components/ui/aceternity/card-hover-effect";
import { Cpu, Zap, ShieldCheck, TrendingUp, Boxes } from "lucide-react";

const items = [
  {
    title: "Engineering First",
    description: "We care about architecture, maintainability, performance, and reliability — not just getting something to work.",
    link: "#",
    icon: <Cpu className="size-5" />,
  },
  {
    title: "AI Native",
    description: "We explore where AI can genuinely improve software and business processes — not where it just looks good in a deck.",
    link: "#",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Security Conscious",
    description: "Security is part of the engineering process rather than something added at the end.",
    link: "#",
    icon: <ShieldCheck className="size-5" />,
  },
  {
    title: "Built to Scale",
    description: "We design systems with future growth and changing requirements in mind, so you dont rebuild every year.",
    link: "#",
    icon: <TrendingUp className="size-5" />,
  },
  {
    title: "Product Mindset",
    description: "We think beyond features and focus on the actual problem the software needs to solve for real people.",
    link: "#",
    icon: <Boxes className="size-5" />,
  },
];

export default function WhyJiora() {
  return (
    <section id="why" className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-neutral-500">WHY JIORA TECH</p>
          <h2 className="mt-3 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Small today. Building for what&apos;s next.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            We are at the beginning of our journey — and that&apos;s intentional. Engineering quality and long-term vision over short-term optics.
          </p>
        </div>
        <div className="mt-8">
          <HoverEffect items={items} />
        </div>
      </div>
    </section>
  );
}
