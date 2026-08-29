"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";

function GrowthHeader({ level }: { level: number }) {
  const heights = [
    [0.4, 0.6, 0.9, 1.1],
    [0.7, 1.0, 1.3, 1.5],
    [0.9, 1.2, 1.5, 1.8],
    [1.1, 1.4, 1.7, 2.0],
  ][level];
  return (
    <div className="flex h-full min-h-[6rem] w-full items-end justify-center gap-1.5 rounded-xl border border-white/[0.08] bg-black p-4">
      <div className="flex h-full w-full items-end justify-center gap-1.5">
        {heights.map((h, i) => (
          <div key={i} className="w-6 rounded-sm bg-white/80" style={{ height: `${h * 28}px`, opacity: 0.4 + i * 0.18 }} />
        ))}
      </div>
      <span className="absolute bottom-2 right-3 font-mono text-[9px] tracking-widest text-neutral-500">LEVEL {level + 1}</span>
    </div>
  );
}

const items = [
  { title: "Startups", description: "Turn ideas into MVPs and scalable products. Tight loops, fast validation. Level 1 — launch.", header: <GrowthHeader level={0} /> },
  { title: "Growing Businesses", description: "Replace manual processes with software and automation that pays for itself.", header: <GrowthHeader level={1} /> },
  { title: "Technology Companies", description: "Build new capabilities, integrations, and AI-powered features with your team.", header: <GrowthHeader level={2} /> },
  { title: "Enterprises", description: "Modernize systems and explore new technology opportunities without risky rewrites.", header: <GrowthHeader level={3} /> },
];

export default function WhoWeWorkWith() {
  return (
    <section id="clients" className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-neutral-500">WHO WE WORK WITH</p>
          <h2 className="mt-3 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Built for ambitious businesses
          </h2>
          <p className="mt-3 text-sm text-neutral-400">Four growth stages — same logical bars, rising height = rising scale. No text cut.</p>
        </div>
        <BentoGrid className="mt-10 md:auto-rows-[20rem] md:grid-cols-4">
          {items.map((item, i) => (
            <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className="" />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
