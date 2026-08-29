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
    <section id="about" className="bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500">ABOUT JIORA TECH</p>
            <h2 className="mt-3 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              We&apos;re building more than software.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              <span className="font-medium text-white">Jiora Tech Private Limited</span> is an India-based technology company focused on
              software engineering, artificial intelligence, SaaS, automation, cloud computing, and security.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              We are building the company with a long-term perspective — starting by solving real problems for businesses and gradually
              developing our own products.
            </p>
            <blockquote className="mt-6 border-l-2 border-white/20 pl-4 text-sm font-medium italic text-white">
              Build useful technology. Make it intelligent. Make it secure. Make it scale.
            </blockquote>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <p className="font-mono text-xs tracking-[0.2em] text-neutral-500">FUTURE VISION</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Today, We Build Solutions. Tomorrow, We Build Products.</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Starting with services and engineering — learning from real-world problems — then shaping our own platforms.
            </p>
            {/* CSS-only logical staircase — no WebGL */}
            <div className="mt-6 flex items-end gap-2">
              {journey.map((j, i) => (
                <motion.div
                  key={j.k}
                  initial={{ opacity: 0, y: 10, height: 60 }}
                  whileInView={{ opacity: 1, y: 0, height: 60 + i * 18 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-1 flex-col justify-end rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center"
                  style={{ height: 64 + i * 18 }}
                >
                  <div className="font-mono text-xs text-neutral-500">{j.k}</div>
                  <div className="mt-1 text-xs font-semibold leading-tight text-white">{j.label}</div>
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
                  className="rounded-xl border border-white/10 bg-black p-3 text-center"
                >
                  <div className="font-mono text-xs text-neutral-500">{j.k}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{j.label}</div>
                  <div className="mt-1 text-xs text-neutral-500">{j.desc}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-neutral-500">
              <span>Services</span>
              <span>→</span>
              <span>Solutions</span>
              <span>→</span>
              <span className="text-white">Products</span>
              <span>→</span>
              <span className="text-white">Platforms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
