"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function TiltCard({
  children,
  className = "",
  glow = true,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" } as any}
      className={`relative ${className}`}
    >
      {glow && (
        <motion.div
          style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], ["-8%", "8%"]), y: useTransform(mouseYSpring, [-0.5, 0.5], ["-8%", "8%"]) } as any}
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--fg)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
        />
      )}
      <div style={{ transform: "translateZ(24px)" } as any}>{children}</div>
    </motion.div>
  );
}
