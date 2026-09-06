import fg_img from "@/images/physics-handwritten-1.jpeg"
import bg_img from "@/images/physics-handwritten-bg-1.jpeg"
import Image from "next/image"

const PhysicsSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12 md:flex-row md:items-center md:gap-16">

      <div className="left-sec w-full md:w-1/2 flex items-center justify-center py-6">
        <div className="group relative w-[320px] h-100 sm:w-95 sm:h-115 cursor-pointer">
          <div className="absolute inset-0 rotate-12 group-hover:rotate-6 group-hover:translate-x-4 group-hover:-translate-y-12 rounded-2xl overflow-hidden shadow-2xl border border-accent transition-all duration-300 ease-out">
            <Image
              src={bg_img}
              fill
              className="object-cover"
              alt="Handwritten physics derivation background"
            />
          </div>

          <div className="absolute inset-0 -rotate-12 group-hover:-rotate-3 group-hover:-translate-x-4 group-hover:translate-y-12 rounded-2xl overflow-hidden shadow-xl border border-accent transition-all duration-300 ease-out">
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
      <div className="right-sec w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-semibold md:font-bold">
          <span className="text-primary">Expressions</span> and{" "}
          <span className="text-primary">Solutions</span> derived from first principles
        </h2>
        <p className="text-muted-foreground leading-relaxed">
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
    </section>
  )
}
export default PhysicsSection
