"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "auto";

function getSystem(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function apply(theme: Theme) {
  const resolved = theme === "auto" ? getSystem() : theme;
  document.documentElement.setAttribute("data-theme", resolved);
  // keep .dark class for any legacy dark: variants
  document.documentElement.classList.toggle("dark", resolved === "dark");
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("auto");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("jioratech-theme") as Theme) || "auto";
    setTheme(saved);
    apply(saved);
    setMounted(true);
    // auto -> follow system changes
    const mqlLight = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      const cur = (localStorage.getItem("jioratech-theme") as Theme) || "auto";
      if (cur === "auto") apply("auto");
    };
    mqlLight.addEventListener("change", onChange);
    return () => mqlLight.removeEventListener("change", onChange);
  }, []);

  const set = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("jioratech-theme", t);
    apply(t);
  };

  if (!mounted) {
    return <div className={cn("h-9 w-[148px] rounded-full border border-[var(--line)] bg-[var(--card)]", className)} />;
  }

  const btn = (value: Theme, Icon: any, label: string) => (
    <button
      key={value}
      onClick={() => set(value)}
      aria-label={`Switch to ${label} theme`}
      title={label}
      className={cn(
        "grid size-8 place-items-center rounded-full text-xs transition-all",
        theme === value ? "bg-[var(--fg)] text-[var(--bg)] shadow" : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card-hover)]"
      )}
    >
      <Icon className="size-3.5" />
    </button>
  );

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--card)] p-1 backdrop-blur",
        className
      )}
      role="group"
      aria-label="Theme toggle"
    >
      {btn("light", Sun, "Light")}
      {btn("auto", Monitor, "Auto")}
      {btn("dark", Moon, "Dark")}
    </div>
  );
}

// run before hydration to avoid flash
export const themeScript = `try{var t=localStorage.getItem('jioratech-theme')||'auto';var s=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var r=t==='auto'?s:t;document.documentElement.setAttribute('data-theme',r);document.documentElement.classList.toggle('dark',r==='dark')}catch(e){}`;
