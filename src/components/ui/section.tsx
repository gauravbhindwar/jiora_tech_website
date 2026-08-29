import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
 * Section scaffold — an anchored, ruled block with consistent vertical rhythm.
 * Every section is a full-bleed band separated by a hairline rule.
 */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("border-t border-[var(--line)]", className)}>
      <div className="mx-auto w-full max-w-[68rem] px-6 py-20 sm:px-8 sm:py-28">
        {children}
      </div>
    </section>
  );
}

/* A numbered/tagged heading header block */
export function SectionHead({
  index,
  label,
  title,
  className,
}: {
  index?: string;
  label?: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-16 max-w-2xl", className)}>
      {(index || label) && (
        <div className="mb-5 flex items-center gap-3">
          {index && <span className="font-mono text-sm text-[var(--faint)]">{index}</span>}
          {label && (
            <>
              {index && <span className="h-px w-6 bg-[var(--line-strong)]" />}
              <span className="eyebrow">{label}</span>
            </>
          )}
        </div>
      )}
      <h2 className="text-balance text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
        {title}
      </h2>
    </header>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-2xl text-[var(--ink)]">{value}</span>
      <span className="text-sm text-[var(--muted)]">{label}</span>
    </div>
  );
}
