import BlogsCard from "./blogs-card";
import DerivationsCard from "./derivations-card";
import SimulationsCard from "./simulations-card";
import TechCard from "./tech-card";

type CardType = "Simulations" | "Tech" | "Derivations" | "Blogs";

type Props = {
  type: CardType;
};

const typeMeta: Record<CardType, { label: string; description: string }> = {
  Simulations: {
    label: "lab_01 // models",
    description:
      "Interactive numerical models of classical mechanics. Constraints, forces, and energy conservation turned into something you can run, pause, and poke.",
  },
  Derivations: {
    label: "lab_02 // notebook",
    description:
      "Handwritten derivations and solutions from first principles — the long threads of mechanics, shown one step at a time with the reasoning intact.",
  },
  Tech: {
    label: "lab_03 // systems",
    description:
      "Full-stack and other projects that take an idea off the page and into production. Build notes from the other half of the workbench.",
  },
  Blogs: {
    label: "lab_04 // thoughts",
    description:
      "Blogs at the seam of physics and software: why a simulation is just a derivation with a timestep, what that means for how we build things, and what my thinking and opinions look like.",
  },
};

const HomeCardsContainer = ({ type }: Props) => {
  const meta = typeMeta[type];

  return (
    <section className="simulations-container mx-auto mt-20 md:mt-28">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          {meta.label}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
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
        {type == "Derivations" && <DerivationsCard />}
        {type == "Tech" && <TechCard />}
        {type == "Blogs" && <BlogsCard />}
      </div>
    </section>
  );
};

export default HomeCardsContainer;
