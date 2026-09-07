import SimulationsCard from '@/components/site/simulations-card'

const SimulationsPage = () => {
  return (
    <section className='py-10'>
      <div className="text-center mb-10"><h1 className="text-4xl font-bold text-muted-foreground"><span className="text-primary">Simulations</span> that speak</h1>
        <p className="text-lg text-muted-foreground">
          I translate the physics on paper into interactive simulations that make them easier to grasp.
        </p></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-6">
        <SimulationsCard />
        <SimulationsCard />
        <SimulationsCard />
        <SimulationsCard />
        <SimulationsCard />
      </div>
    </section>
  )
}

export default SimulationsPage