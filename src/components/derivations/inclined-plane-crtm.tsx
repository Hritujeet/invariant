export default function InclinedPlaneDerivation() {
  return (
    <article className="space-y-5 text-sm leading-7 text-muted-foreground">
      <p>
        Consider a block of mass <i>m</i> on a plane inclined at angle{" "}
        <i>θ</i>. Choose the positive x-axis down the plane and the y-axis
        perpendicular to it. Resolve gravity into components parallel and
        perpendicular to the surface.
      </p>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">1. Normal reaction</h2>
        <p>
          There is no acceleration through the surface, so ΣFᵧ = 0. The
          normal reaction balances the perpendicular component of weight:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          N − mg cos θ = 0 &nbsp;⟹&nbsp; N = mg cos θ
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">2. Static friction check</h2>
        <p>
          To keep the block at rest, friction must balance mg sin θ. Static
          friction can be at most μₛN, therefore rest is possible when:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          mg sin θ ≤ μₛmg cos θ &nbsp;⟹&nbsp; tan θ ≤ μₛ
        </p>
        <p>
          At equality the block is at the threshold of slipping. Above this
          angle, it starts moving down the plane.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold text-foreground">3. Acceleration while sliding</h2>
        <p>
          Once sliding, kinetic friction μₖN acts up the plane. Newton&apos;s
          second law along the slope gives:
        </p>
        <p className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-foreground">
          ma = mg sin θ − μₖN = mg(sin θ − μₖ cos θ)
        </p>
        <p>
          Dividing by mass yields a = g(sin θ − μₖ cos θ). The mass cancels:
          for the same surface and angle, ideal sliding acceleration does not
          depend on the block&apos;s mass.
        </p>
      </section>
    </article>
  );
}
