import DerivationsCard from '@/components/site/derivations-card'
import React from 'react'

const DerivationsPage = () => {
  return (
    <section className='py-10'>
      <div className="text-center mb-10"><h1 className="text-4xl font-bold text-muted-foreground"><span className="text-primary">Derivations</span> from first principles</h1>
        <p className="text-lg text-muted-foreground">
          From expressions to problems, I derive solutions and formulas that make the physics behind things more intuitive.
        </p></div>
      <div className="grid grid-cols-1 max-w-7xl mx-auto gap-6">
        <DerivationsCard />
        <DerivationsCard />
        <DerivationsCard />
        <DerivationsCard />
        <DerivationsCard />
      </div>
    </section>
  )
}

export default DerivationsPage