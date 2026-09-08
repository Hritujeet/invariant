import fg_img from "@/images/physics-handwritten-1.jpeg"
import bg_img from "@/images/physics-handwritten-bg-1.jpeg"
import Image from "next/image"
import Link from "next/link"

const PhysicsSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-24">

        {/* Image column — strictly contained, never overflows */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div
            className="group relative cursor-pointer"
            style={{ width: "min(300px, 78vw)", aspectRatio: "3/4" }}
          >
            {/* Background card */}
            <div
              className="
                absolute inset-0 rounded-2xl overflow-hidden
                shadow-xl border border-border/60
                rotate-6
                transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                group-hover:rotate-3 group-hover:translate-x-2 group-hover:-translate-y-2
              "
            >
              <Image
                src={bg_img}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 300px"
                className="object-cover"
                alt="Handwritten physics derivation background"
              />
            </div>

            {/* Foreground card */}
            <div
              className="
                absolute inset-0 rounded-2xl overflow-hidden
                shadow-2xl border border-border/40
                -rotate-6
                transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                group-hover:-rotate-2 group-hover:-translate-x-2 group-hover:translate-y-2
              "
            >
              <Image
                src={fg_img}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 40vw, 300px"
                className="object-cover object-top"
                alt="Handwritten physics derivation"
              />
            </div>

            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [background:radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12)_0%,transparent_70%)]" />
          </div>
        </div>

        {/* Text column */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-left">
          <span className="inline-block text-[10px] font-mono uppercase tracking-[0.18em] text-primary/80 font-semibold">
            Physics
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.6rem] lg:text-5xl font-bold tracking-tight leading-[1.15]">
            Expressions and solutions derived from{" "}
            <span className="text-primary">first principles</span>
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md mx-auto md:mx-0">
            This is my notebook on the internet where I derive solutions and
            expressions from scratch, followed by detailed explanations and key
            notes. And guess what — they are handwritten. A derivation may even
            be linked to an interactive simulation.
          </p>

          <span className="text-xs text-muted-foreground/60 italic">
            PS: I am not a big fan of my handwriting.
          </span>

          <div className="flex gap-3 justify-center md:justify-start mt-2">
            <Link
              href="/derivations"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/85 hover:scale-[1.03] active:scale-[0.98]"
            >
              Read derivations
            </Link>
            <Link
              href="/simulations"
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-secondary/80 hover:scale-[1.03] active:scale-[0.98]"
            >
              Simulations
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PhysicsSection
