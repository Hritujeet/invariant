"use client";

import { motion } from "motion/react";
import { DerivationsCard } from "./derivations-card";
import SimulationsCard from "./simulations-card";
import { ScrollReveal } from "../ui/scroll-reveal";
import { derivations, simulations } from "@/lib/site-data";

type CardType = "Simulations" | "Derivations";

type Props = {
  type: CardType;
  /** Max items to show. Defaults to 3 for homepage previews. */
  limit?: number;
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
};

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

const CardContainer = ({ type, limit = 3 }: Props) => {
  const meta = typeMeta[type];
  const derivationItems = derivations.slice(0, limit);
  const simulationItems = simulations.slice(0, limit);

  return (
    <section className="simulations-container mx-auto">
      {/* Header — skip for Simulations (SimulationsSection already provides it) */}
      {type !== "Simulations" && (
        <ScrollReveal>
          <div className="mx-auto max-w-2xl px-4 text-center mt-20 md:mt-28">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              {meta.label}
            </p>
            <h2 className="font-heading mt-3 text-3xl font-black tracking-tight leading-tight md:text-4xl">
              Explore {type}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {meta.description}
            </p>
          </div>
        </ScrollReveal>
      )}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-4 px-4 py-10 mx-auto auto-rows-fr"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8%" }}
      >
        {type === "Simulations" &&
          simulationItems.map((sim) => (
            <motion.div key={sim.id} variants={itemVariants} className="h-full">
              <SimulationsCard simulation={sim} />
            </motion.div>
          ))}

        {type === "Derivations" &&
          derivationItems.map((d) => (
            <motion.div key={d.id} variants={itemVariants} className="h-full">
              <DerivationsCard derivation={d} />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default CardContainer;
