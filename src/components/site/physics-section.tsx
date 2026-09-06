import fg_img from "@/images/physics-handwritten-1.jpeg"
import bg_img from "@/images/physics-handwritten-bg-1.jpeg"
import Image from "next/image"

const PhysicsSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 overflow-hidden">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-12">

        {/* Image column */}
        <div className="w-full min-w-0 md:w-1/2 flex items-center justify-center py-6">
          <div className="group relative w-70 h-90 sm:w-[320px] sm:h-100 cursor-pointer">
            <div className="absolute inset-0 rotate-12 group-hover:rotate-6 group-hover:translate-x-3 group-hover:-translate-y-3 rounded-2xl overflow-hidden shadow-2xl border border-accent transition-all duration-300 ease-out">
              <Image
                src={bg_img}
                fill
                className="object-cover"
                alt="Handwritten physics derivation background"
              />
            </div>

            <div className="absolute inset-0 -rotate-12 group-hover:-rotate-3 group-hover:-translate-x-3 group-hover:translate-y-3 rounded-2xl overflow-hidden shadow-xl border border-accent transition-all duration-300 ease-out">
              <Image
                src={fg_img}
                fill
                className="object-cover object-top"
                alt="Handwritten physics derivation"
              />
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="w-full min-w-0 md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl md:text-4xl font-semibold md:font-bold">
            <span className="text-primary">Expressions</span> and{" "}
            <span className="text-primary">Solutions</span> derived from first principles
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            This is my notebook on the internet where I derive solutions and
            expressions from scratch, followed by detailed explanations and key
            notes. And guess what — they are handwritten. In case you find
            yourself lucky enough, a derivation may be linked to an interactive
            simulation too.
          </p>
          <span className="text-sm text-muted-foreground/50 italic">
            PS: I am not a big fan of my handwriting.
          </span>
        </div>

      </div>
    </section>
  )
}
export default PhysicsSection

