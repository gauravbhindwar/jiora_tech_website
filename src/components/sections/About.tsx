"use client";
import { motion } from "framer-motion";

const journey = [
  { k: "01", label: "Services", desc: "Solve real problems today" },
  { k: "02", label: "Solutions", desc: "Reusable, scalable offerings" },
  { k: "03", label: "Products", desc: "Our own software products" },
  { k: "04", label: "Platforms", desc: "The long-term vision" },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-[var(--muted)]">ABOUT JIORA TECH</p>
            <h2 className="mt-3 bg-gradient-to-br from-[var(--fg)] to-[var(--muted)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              We’re building more than software.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              <span className="font-medium text-[var(--fg)]">Jiora Tech Private Limited</span> is an India-based technology company focused on
              software engineering, artificial intelligence, SaaS, automation, cloud computing, and security.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              We are building the company with a long-term perspective — starting by solving real problems for businesses and gradually
              developing our own products.
            </p>
            <blockquote className="mt-6 border-l-2 border-[var(--line)] pl-4 text-sm font-medium italic text-[var(--fg)]">
              Build useful technology. Make it intelligent. Make it secure. Make it scale.
            </blockquote>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 backdrop-blur">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--muted)]">FUTURE VISION</p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--fg)]">Today, We Build Solutions. Tomorrow, We Build Products.</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Starting with services and engineering — learning from real-world problems — then shaping our own platforms.
            </p>
            <div className="mt-6 flex items-end gap-2">
              {journey.map((j, i) => (
                <motion.div
                  key={j.k}
                  initial={{ opacity: 0, y: 10, height: 60 }}
                  whileInView={{ opacity: 1, y: 0, height: 60 + i * 18 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-1 flex-col justify-end rounded-lg border border-[var(--line)] bg-[var(--bg)] p-2 text-center"
                  style={{ height: 64 + i * 18 }}
                >
                  <div className="font-mono text-xs text-[var(--muted)]">{j.k}</div>
                  <div className="mt-1 text-xs font-semibold leading-tight text-[var(--fg)]">{j.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {journey.map((j, i) => (
                <motion.div
                  key={j.k + "-b"}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-3 text-center"
                >
                  <div className="font-mono text-xs text-[var(--muted)]">{j.k}</div>
                  <div className="mt-1 text-sm font-semibold text-[var(--fg)]">{j.label}</div>
                  <div className="mt-1 text-xs text-[var(--muted)]">{j.desc}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
              <span>Services</span>
              <span>→</span>
              <span>Solutions</span>
              <span>→</span>
              <span className="text-[var(--fg)]">Products</span>
              <span>→</span>
              <span className="text-[var(--fg)]">Platforms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
