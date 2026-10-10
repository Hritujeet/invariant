export default function HeavyPulleyDerivation() {
  return (
    <article className="space-y-5 text-sm leading-7 text-muted-foreground">
      <p>
        Two masses m₁ and m₂ (take m₂ &gt; m₁) hang from a light, inextensible
        string over a pulley of radius R and moment of inertia I. Unlike an
        ideal pulley, the two string tensions need not be equal.
      </p>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">1. Equations for the masses</h2>
        <p>
          Let m₂ accelerate down and m₁ accelerate up with magnitude a. Applying
          Newton&apos;s second law separately:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          T₁ − m₁g = m₁a, &nbsp; m₂g − T₂ = m₂a
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">2. Rotation of the pulley</h2>
        <p>
          The net torque is (T₂ − T₁)R. With no slipping, angular acceleration
          α = a/R, hence:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          (T₂ − T₁)R = Iα &nbsp;⟹&nbsp; T₂ − T₁ = Ia/R²
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">3. Acceleration and tensions</h2>
        <p>
          Add the mass equations and substitute the torque relation. Solving
          gives the acceleration; substituting back gives each tension:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          a = (m₂ − m₁)g / (m₁ + m₂ + I/R²)
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          T₁ = m₁(g + a), &nbsp; T₂ = m₂(g − a)
        </p>
        <p>
          For a uniform solid-disk pulley of mass M, I = ½MR², so its
          rotational inertia contributes an effective mass M/2. In the limit
          I → 0, this reduces to the ordinary Atwood machine.
        </p>
      </section>
    </article>
  );
}
