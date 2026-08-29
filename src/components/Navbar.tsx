"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV = [
  { name: "What We Build", link: "#build" },
  { name: "Vision", link: "#vision" },
  { name: "Process", link: "#process" },
  { name: "Technology", link: "#technology" },
  { name: "About", link: "#about" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollYProgress.getPrevious() ?? 0;
      const direction = current - prev;
      if (current < 0.02) setVisible(true);
      else if (direction < 0) setVisible(true);
      else if (direction > 0 && current > 0.05) setVisible(false);
    }
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-x-0 top-4 z-[5000] mx-auto hidden max-w-fit items-center justify-center md:flex"
      >
        <div
          className={cn(
            "flex items-center gap-1 rounded-full border px-2 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300",
            scrolled ? "border-[var(--line)] bg-[var(--bg)]/70 backdrop-blur-xl" : "border-[var(--line)] bg-[var(--bg)]/40 backdrop-blur-md"
          )}
        >
          <a href="#top" className="flex items-center gap-2 pl-3 pr-2">
            <span className="grid size-7 place-items-center rounded-full bg-[#C5A059] text-xs font-bold tracking-tight text-[var(--bg)]">J</span>
            <span className="font-display text-sm font-semibold tracking-tight text-[var(--fg)]">JIORA</span>
          </a>
          <div className="mx-2 h-4 w-px bg-[var(--card)]" />
          {NAV.map((item) => (
            <a key={item.link} href={item.link} className="rounded-full px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--card)] hover:text-[var(--fg)]">
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 rounded-full bg-[var(--fg)] px-5 py-2 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
          >
            Contact
          </a>
          <ThemeToggle className="ml-2" />
        </div>
      </motion.div>

      {/* Mobile */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg)]/80 px-4 py-3 backdrop-blur-xl md:hidden">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-[#C5A059] text-xs font-bold text-[var(--bg)]">J</span>
          <span className="font-display text-sm font-semibold text-[var(--fg)]">JIORA</span>
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--fg)]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[57px] z-40 bg-[var(--bg)]/95 px-4 py-6 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col">
              {[...NAV, { name: "Contact", link: "#contact" }].map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-[var(--line)] py-4 text-lg font-medium text-[var(--fg)]"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex justify-center">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
