import TechCard from "@/components/site/tech-card"

const Tech = () => {
  return (
    <section className='py-10'>
      <div className="text-center mb-10"><h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Code that bridges ideas to reality</h1>
        <p className="text-lg text-muted-foreground">
          From casual scripts to full-stack applications, I explore how code can make ideas tangible.
        </p></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-6">
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
    </section>
  )
}

export default Tech