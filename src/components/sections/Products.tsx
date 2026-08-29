"use client";
import { WobbleCard } from "@/components/ui/aceternity/wobble-card";

export default function Products() {
  return (
    <section id="products" className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-neutral-500">OUR PRODUCTS</p>
          <h2 className="mt-3 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            We&apos;re Building What&apos;s Next.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Since we don&apos;t have public products yet, we don&apos;t create fake cards. This is where we&apos;re heading — honestly.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-zinc-900 min-h-[300px] border border-white/10" className="flex flex-col justify-between">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">Intelligent Automation Suite</h2>
              <p className="mt-4 text-left text-base/6 text-neutral-300">AI agents and workflow automation that turn repetitive processes into self-running systems. From inbox to ops.</p>
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-2xl border border-white/10 bg-white px-4 py-3 text-black shadow-xl lg:-right-[2%]">
              <div className="font-mono text-xs text-neutral-500">COMING SOON</div>
              <div className="font-semibold">Research → Build → Ship</div>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-neutral-900 border border-white/10">
            <h2 className="max-w-80 text-left text-balance text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">SaaS Starter Platform</h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-300">A production-ready SaaS foundation — auth, billing, multi-tenant, API — so you ship in weeks, not months.</p>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black border border-white/10 min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm text-left text-balance text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">Secure Cloud Workbench</h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-300">Cloud architecture, CI/CD, observability and secrets — engineered for reliability and scale from day one.</p>
            </div>
          </WobbleCard>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-neutral-500">No fake product cards. Only directions we&apos;re actively exploring: AI + Automation + SaaS + Cloud + Security.</p>
      </div>
    </section>
  );
}
