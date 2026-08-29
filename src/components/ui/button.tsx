import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-normal transition-colors duration-200 cursor-pointer select-none whitespace-nowrap";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[var(--ink)] text-[var(--bg)] hover:bg-white active:bg-white/90",
    ghost: "text-[var(--muted)] hover:text-[var(--ink)]",
    outline:
      "border border-[var(--line-strong)] text-[var(--ink)] hover:border-[var(--ink)] hover:text-[var(--ink)]",
  };

  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
