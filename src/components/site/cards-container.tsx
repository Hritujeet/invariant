"use client";

import { motion } from "motion/react";
import { DerivationsCard } from "./derivations-card";
import SimulationsCard from "./simulations-card";
import TechCard from "./tech-card";
import { ScrollReveal } from "../ui/scroll-reveal";

type CardType = "Simulations" | "Tech" | "Derivations";

type Props = {
  type: CardType;
};

const typeMeta: Record<CardType, { label: string; description: string }> = {
  Simulations: {
    label: "lab_01 // models",
    description:
      "Run the models. Change a mass. Check whether energy stays put.",
  },
  Derivations: {
    label: "lab_02 // notebook",
    description:
      "Writeups of problems I actually worked — scans, algebra, the messy bits.",
  },
  Tech: {
    label: "lab_03 // systems",
    description:
      "Projects I built. What the stack was, what broke, and the repo when there is one.",
  },
};

// Cards stagger in one by one
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      scale:   { type: "spring" as const, stiffness: 260, damping: 22 },
      opacity: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
      y:       { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
      filter:  { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  },
};

const CardContainer = ({ type }: Props) => {
  const meta = typeMeta[type];

  return (
    <section className="simulations-container mx-auto">
      {/* Header — simple scroll reveal */}
      {/* Only show header if it's NOT simulations, so we don't duplicate headers */}
      {type !== "Simulations" && (
        <ScrollReveal>
          <div className="mx-auto max-w-2xl px-4 text-center mt-20 md:mt-28">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              {meta.label}
            </p>
            <h1 className="font-heading mt-3 text-3xl font-black tracking-tight leading-tight md:text-4xl">
              Explore {type}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {meta.description}
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* Cards — stagger each card individually */}
      <motion.div
        className="grid max-w-6xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto auto-rows-fr"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
      >
        {type === "Simulations" && (
          <>
            <motion.div variants={itemVariants} className="h-full"><SimulationsCard /></motion.div>
            <motion.div variants={itemVariants} className="h-full"><SimulationsCard /></motion.div>
            <motion.div variants={itemVariants} className="h-full"><SimulationsCard /></motion.div>
          </>
        )}
        {type === "Derivations" && (
          <>
            <motion.div variants={itemVariants} className="col-span-full h-full"><DerivationsCard /></motion.div>
            <motion.div variants={itemVariants} className="col-span-full h-full"><DerivationsCard /></motion.div>
            <motion.div variants={itemVariants} className="col-span-full h-full"><DerivationsCard /></motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default CardContainer;
