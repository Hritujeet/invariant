"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  blur?: string;
  duration?: number;
  /** "scroll" (default) triggers when element enters the viewport.
   *  "mount" triggers immediately on component mount — use this for
   *  above-the-fold elements like the hero that are already visible. */
  mode?: "scroll" | "mount";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 10,
  blur = "5px",
  duration = 0.5,
  mode = "scroll",
}: ScrollRevealProps) {
  const initial = { opacity: 0, y: yOffset, filter: `blur(${blur})` };
  const target  = { opacity: 1, y: 0,       filter: "blur(0px)"      };

  const transition = {
    duration,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  };

  if (mode === "mount") {
    return (
      <motion.div
        initial={initial}
        animate={target}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{ once: true, margin: "-10%" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
