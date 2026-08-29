"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

const easing = [0.21, 0.6, 0.35, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}
