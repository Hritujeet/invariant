import BlogsCard from "./blogs-card";
import DerivationsCard from "./derivations-card";
import SimulationsCard from "./simulations-card";
import TechCard from "./tech-card";

type Props = {
  type: "Simulations" | "Tech" | "Derivations" | "Blogs";
};

const HomeCardsContainer = ({ type }: Props) => {
  return (
    <div className="simulations-container">
      {type == "Simulations" && <SimulationsCard />}
      {type == "Derivations" && <DerivationsCard />}
      {type == "Tech" && <TechCard />}
      {type == "Blogs" && <BlogsCard />}
    </div>
  );
};

export default HomeCardsContainer;
