"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  ];

  return (
    <div className={cn("absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-black", className)}>
      <svg className="pointer-events-none absolute z-0 h-full w-full opacity-30" width="1440" height="890" viewBox="0 0 1440 890" xmlns="http://www.w3.org/2000/svg">
        {paths.map((path, idx) => (
          <motion.path
            key={`path-${idx}`}
            d={path}
            stroke={`url(#linearGradient-${idx})`}
            strokeOpacity="0.35"
            strokeWidth="0.7"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: "loop", ease: "linear", delay: Math.random() * 5, repeatDelay: Math.random() * 5 + 5 }}
          />
        ))}
        <defs>
          {paths.map((_, idx) => (
            <linearGradient key={`grad-${idx}`} id={`linearGradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0" />
              <stop offset="32.5%" stopColor="#fff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};
