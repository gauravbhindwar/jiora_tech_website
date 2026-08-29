"use client";
import React from "react";
import { Timeline } from "@/components/ui/aceternity/timeline";

export default function Process() {
  const data = [
    {
      title: "01 — Understand",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-[var(--fg)]">We start with problems, not technology.</p>
          <p className="text-sm text-[var(--muted)]">Understand the business, users, workflows, and challenges before writing a single line of code. The outcome drives the stack, not the other way around.</p>
          <div className="mt-4 flex gap-2">
            {["Discovery", "User interviews", "Workflow mapping"].map((t) => (
              <span key={t} className="rounded-full bg-[var(--card)] border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "02 — Design",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-[var(--fg)]">Design the product, architecture, and experience around the problem.</p>
          <p className="text-sm text-[var(--muted)]">Information architecture, API design, data models, and UX come together. We prototype quickly and refine with feedback.</p>
        </div>
      ),
    },
    {
      title: "03 — Build",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-[var(--fg)]">Turn the idea into reliable, maintainable software.</p>
          <p className="text-sm text-[var(--muted)]">Clean code, tests, and deployment pipelines. We ship iteratively and keep you in the loop.</p>
        </div>
      ),
    },
    {
      title: "04 — Automate",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-[var(--fg)]">Identify opportunities where AI and automation eliminate unnecessary work.</p>
          <p className="text-sm text-[var(--muted)]">From AI agents and RAG to workflow integrations — only where it genuinely moves the metric.</p>
        </div>
      ),
    },
    {
      title: "05 — Secure",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-[var(--fg)]">Build security into the product and infrastructure from the beginning.</p>
          <p className="text-sm text-[var(--muted)]">Threat modeling, least privilege, secrets management, and secure SDLC. Security isn’t a checklist at the end.</p>
        </div>
      ),
    },
    {
      title: "06 — Scale",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-[var(--fg)]">Create foundations that can grow with the business.</p>
          <p className="text-sm text-[var(--muted)]">Observability, performance budgets, and architecture that scales with users and data — not just launch day.</p>
          <div className="mt-4 rounded-lg bg-[var(--fg)] p-3 font-mono text-xs font-medium text-[var(--bg)]">Services → Solutions → Products → Platforms</div>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="w-full bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <p className="text-xs tracking-[0.2em] text-[var(--muted)]">HOW WE THINK</p>
        <h2 className="mt-3 max-w-xl bg-gradient-to-br from-[var(--fg)] to-[var(--muted)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          How we turn problems into products.
        </h2>
      </div>
      <Timeline data={data} />
    </section>
  );
}
