"use client";
import { Workflow, Layers, CloudCog, ArrowRight, Check, ShieldCheck, Zap, Boxes } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.2em] text-[var(--muted)]">OUR PRODUCTS</p>
          <h2 className="mt-3 bg-gradient-to-br from-[var(--fg)] to-[var(--muted)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            We’re Building What’s Next.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            No fake launches. These are the three systems we’re actively researching — each solves a real, painful problem we’ve seen with clients.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
          {/* 1 — Intelligent Automation Suite — main, logical pipeline */}
          <div className="group relative col-span-1 flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--fg)]/[0.04] to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex items-start justify-between">
              <div className="grid size-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
                <Workflow className="size-5" />
              </div>
              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 font-mono text-xs font-medium text-amber-600">In Research</span>
            </div>
            <h3 className="relative mt-4 text-xl font-semibold tracking-tight text-[var(--fg)] lg:text-2xl">Intelligent Automation Suite</h3>
            <p className="relative mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">AI agents that turn your inbox, docs and ops into a self-running workflow. Trigger → enrich → act — no manual glue.</p>

            {/* logical mini — pipeline */}
            <div className="relative mt-6 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3">
              <div className="flex items-center justify-between font-mono text-xs text-[var(--muted)]">
                <span>workflow.run</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-white"><span className="size-1.5 rounded-full bg-white" />live</span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[
                  { k: "trigger", icon: Zap },
                  { k: "enrich", icon: Boxes },
                  { k: "notify", icon: ArrowRight },
                  { k: "done", icon: Check, done: true },
                ].map((s) => (
                  <div key={s.k} className={`relative rounded-lg border p-2.5 text-center ${s.done ? "border-emerald-500 bg-emerald-500 text-white" : "border-[var(--line)] bg-[var(--card)] text-[var(--fg)]"}`}>
                    <s.icon className="mx-auto size-4 opacity-70" />
                    <div className="mt-1 font-mono text-xs capitalize">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-[var(--line)]">
                <div className="h-1.5 w-[72%] rounded-full bg-[var(--fg)]" />
              </div>
            </div>

            <div className="relative mt-4 flex items-center gap-2 font-mono text-xs">
              <span className="rounded-full bg-[var(--fg)] px-3 py-1 text-[var(--bg)]">Research → Build → Ship</span>
              <span className="text-[var(--muted)]">Coming soon</span>
            </div>
          </div>

          {/* 2 — SaaS Starter */}
          <div className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6">
            <div className="grid size-10 place-items-center rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
              <Layers className="size-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--fg)]">SaaS Starter Platform</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">Auth, billing, multi-tenant, API — the boring foundation done right, so you ship in weeks.</p>

            <div className="mt-6 space-y-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3">
              <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--muted)]">
                <span className="size-2 rounded-full bg-emerald-500" /> jiora.saas — operational
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { l: "Auth", v: "✓" },
                  { l: "Billing", v: "✓" },
                  { l: "API", v: "✓" },
                ].map((b) => (
                  <div key={b.l} className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-2 text-center">
                    <div className="font-mono text-xs text-[var(--muted)]">{b.l}</div>
                    <div className="mt-1 font-mono text-sm font-bold text-emerald-500">{b.v}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 font-mono text-xs">
                <span className="flex-1 rounded bg-[var(--fg)] py-1 text-center text-[var(--bg)]">Next.js</span>
                <span className="flex-1 rounded border border-[var(--line)] bg-[var(--card)] py-1 text-center text-[var(--muted)]">Stripe</span>
                <span className="flex-1 rounded border border-[var(--line)] bg-[var(--card)] py-1 text-center text-[var(--muted)]">Prisma</span>
              </div>
            </div>
            <p className="mt-3 font-mono text-xs text-[var(--faint)]">3 tenants live · SOC 2 ready</p>
          </div>

          {/* 3 — Secure Cloud Workbench — full width */}
          <div className="group relative col-span-1 flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 lg:col-span-3 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs text-emerald-600">
                <ShieldCheck className="size-3" /> SOC 2 · ISO 27001 track
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--fg)] lg:text-2xl">Secure Cloud Workbench</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">Your infra as code — CI/CD, observability, secrets, and guardrails. One click from commit to compliant prod.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["AWS", "GCP", "Docker", "K8s", "Terraform", "Vault"].map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]">{t}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 w-full flex-1 rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3 lg:mt-0">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[var(--muted)]">prod · us-east-1</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-white"><span className="size-1.5 rounded-full bg-white" />healthy</span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-1.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="relative overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--card)] p-2">
                    <div className="h-1 w-6 rounded-full bg-[var(--line)]" />
                    <div className="mt-2 flex gap-1">
                      <div className="h-1.5 flex-1 rounded-full bg-emerald-500/60" />
                      <div className="h-1.5 w-3 rounded-full bg-[var(--line)]" />
                    </div>
                    <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-emerald-500" />
                  </div>
                ))}
              </div>
              <div className="mt-2.5 flex items-center justify-between border-t border-[var(--line)] pt-2 font-mono text-xs">
                <span className="text-[var(--muted)]">8 pods · 3 zones · mTLS</span>
                <span className="font-medium text-emerald-600">↗ 99.99%</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-xs text-[var(--faint)]">No fake products. Each card shows the real system preview that clients will see.</p>
      </div>
    </section>
  );
}
