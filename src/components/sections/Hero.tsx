"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/aceternity/spotlight";

const HeroGlobe3D = dynamic(() => import("@/components/ui/aceternity/globe-3d").then((m) => m.HeroGlobe3D), { ssr: false });

function useIsLight() {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    const check = () => setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return isLight;
}

export default function Hero() {
  const isLight = useIsLight();
  return (
    <section id="top" className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden bg-[var(--bg)] antialiased md:min-h-[92vh]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--bg)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <HeroGlobe3D className="pointer-events-none absolute inset-0 opacity-[0.45]" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill={isLight ? "black" : "white"} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-10 sm:px-8 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-1 text-xs tracking-widest text-[var(--muted)] backdrop-blur"
          >
            <Sparkles className="size-3 text-[var(--fg)]" />
            JIORA TECH PRIVATE LIMITED
          </motion.div>

          <h1 className="bg-gradient-to-b from-[var(--fg)] to-[var(--muted)] bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Building Intelligent
            <br />
            Software for the Future.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-center text-base font-normal leading-relaxed text-[var(--muted)] sm:text-lg"
          >
            We build <span className="font-medium text-[var(--fg)]">AI-powered software, SaaS platforms, intelligent automations</span> and{" "}
            <span className="font-medium text-[var(--fg)]">secure cloud solutions</span> that help businesses solve complex problems and turn ideas into
            scalable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-7 py-3 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
            >
              Start a Conversation
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#build" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-7 py-3 text-sm font-medium text-[var(--fg)] backdrop-blur transition hover:bg-[var(--card-hover)]">
              What We Build
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-[var(--line)] pt-6 text-xs tracking-[0.18em] text-[var(--muted)]"
          >
            <span>SOFTWARE ENGINEERING</span>
            <span className="hidden sm:inline text-[var(--faint)]">•</span>
            <span>AI</span>
            <span className="hidden sm:inline text-[var(--faint)]">•</span>
            <span>SAAS</span>
            <span className="hidden sm:inline text-[var(--faint)]">•</span>
            <span>AUTOMATION</span>
            <span className="hidden sm:inline text-[var(--faint)]">•</span>
            <span>CLOUD</span>
            <span className="hidden sm:inline text-[var(--faint)]">•</span>
            <span>SECURITY</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mx-auto mt-12 hidden max-w-4xl rounded-2xl border border-[var(--line)] bg-[var(--card)] p-2 backdrop-blur md:block"
        >
          <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80" />
              <span className="size-2.5 rounded-full bg-yellow-500/80" />
              <span className="size-2.5 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-[var(--muted)]">jiora.tech — intelligent systems</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
                <div className="font-mono text-xs text-[var(--muted)]">AI AGENTS</div>
                <div className="mt-1 text-sm font-medium text-[var(--fg)]">LLM · RAG · Automation</div>
                <div className="mt-2 h-1.5 rounded-full bg-[var(--line)]">
                  <div className="h-1.5 w-[78%] rounded-full bg-[var(--fg)]" />
                </div>
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
                <div className="font-mono text-xs text-[var(--muted)]">SAAS PLATFORMS</div>
                <div className="mt-1 text-sm font-medium text-[var(--fg)]">APIs · Dashboards · Scale</div>
                <div className="mt-2 flex gap-1.5">
                  <span className="h-1.5 w-8 rounded-full bg-[var(--fg)]" />
                  <span className="h-1.5 w-8 rounded-full bg-[var(--line)]" />
                  <span className="h-1.5 w-8 rounded-full bg-[var(--line)]" />
                </div>
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
                <div className="font-mono text-xs text-[var(--muted)]">CLOUD & SECURITY</div>
                <div className="mt-1 text-sm font-medium text-[var(--fg)]">Secure · Observable · Reliable</div>
                <div className="mt-2 font-mono text-xs text-emerald-500">● All systems operational</div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-[var(--faint)]">Free 3D globe — drag to rotate, auto-spins. Built with Three.js + react-three-fiber (no paid asset).</p>
      </div>
    </section>
  );
}
