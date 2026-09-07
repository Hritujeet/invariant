import { BlogsCard } from "./blogs-card";
import { DerivationsCard } from "./derivations-card";
import SimulationsCard from "./simulations-card";
import TechCard from "./tech-card";

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

const CardContainer = ({ type }: Props) => {
  const meta = typeMeta[type];

  return (
    <section className="simulations-container mx-auto mt-20 md:mt-28">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          {meta.label}
        </p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-[-0.02em] leading-tight md:text-4xl">
          Explore <span className="text-primary">{type}</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {meta.description}
        </p>
      </div>
      <div className="grid max-w-6xl grid-cols-1 gap-3 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
        {type == "Simulations" && (
          <>
            <SimulationsCard />
            <SimulationsCard />
            <SimulationsCard />
          </>
        )}
        {type == "Derivations" && (
          <>
            <div className="col-span-full"><DerivationsCard /></div>
            <div className="col-span-full"><DerivationsCard /></div>
            <div className="col-span-full"><DerivationsCard /></div>
          </>
        )}
        {type == "Tech" && (
          <>
            <TechCard />
            <TechCard />
            <TechCard />
          </>
        )}
      </div>
    </section>
  );
};

export default CardContainer;
