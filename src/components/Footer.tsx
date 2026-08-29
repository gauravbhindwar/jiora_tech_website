import { ThemeToggle } from "@/components/ThemeToggle";

export default function Footer() {
  const nav = [
    { label: "What We Build", href: "#build" },
    { label: "Vision", href: "#vision" },
    { label: "Process", href: "#process" },
    { label: "Technology", href: "#technology" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-full bg-[var(--fg)] text-xs font-bold text-[var(--bg)]">J</span>
              <span className="font-display text-sm font-semibold text-[var(--fg)]">JioraTech</span>
            </div>
            <div className="mt-4">
              <ThemeToggle />
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">Building Intelligent Software for the Future. Software · AI · SaaS · Automation · Cloud · Security</p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--muted)]">EXPLORE</p>
            <ul className="mt-3 space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-[var(--muted)] hover:text-[var(--fg)]">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--muted)]">COMPANY</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              <li>Jiora Tech Private Limited</li>
              <li>Jaipur, Rajasthan, India</li>
              <li>
                <a href="mailto:info@jioratech.com" className="hover:text-[var(--fg)]">
                  info@jioratech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--line)] pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Jiora Tech Private Limited. All rights reserved.</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
