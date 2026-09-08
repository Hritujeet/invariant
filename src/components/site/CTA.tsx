import Link from "next/link";
import { buttonVariants } from "../ui/button";

const CTA = () => {
  return (
    <section className="mx-auto w-full px-4 py-24 mb-12">
      <div className="relative flex flex-col items-center justify-center gap-6 overflow-hidden bg-muted/50 p-12 text-center">

        <h1 className="font-heading text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl">
          Still curious?
        </h1>

        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          You've made it to the end. There's plenty more to explore—read some derivations, play with a simulation, or know about the guy in the chair.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/simulations"
            className={`rounded-full px-6 py-5 ${buttonVariants({ variant: "default" })}`}
          >
            Run a simulation
          </Link>
          <Link
            href="/derivations"
            className={`rounded-full px-6 py-5 ${buttonVariants({ variant: "secondary" })}`}
          >
            Read derivations
          </Link>
          <Link
            href="/profile"
            className={`rounded-full px-6 py-5 ${buttonVariants({ variant: "secondary" })}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;