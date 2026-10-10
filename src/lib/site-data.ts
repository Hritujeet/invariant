// Shared site-facing data for derivations and simulations

export const derivations = [
  {
    id: 1,
    slug: "lagrangian-atwood",
    title: "Lagrangian Mechanics: Atwood System",
    expressionDisplay: "L = T − V = ½(m₁+m₂)ẋ² − (m₂−m₁)gx",
    description:
      "Full Lagrangian derivation of the Atwood machine. Covers generalized coordinates, Euler-Lagrange equations, and constraint forces.",
    pages: 4,
    topic: "Lagrangian Mechanics",
    simulationSlug: "atwood",
    createdAt: "2024-01-10",
  },
  {
    id: 2,
    slug: "noethers-theorem",
    title: "Noether's Theorem",
    expressionDisplay: "(∂L/∂q̇)·δq − H·δt = const",
    description:
      "Derivation of conservation laws from continuous symmetries using the Lagrangian formalism. Connects symmetry to conserved quantities.",
    pages: 5,
    topic: "Analytical Mechanics",
    simulationSlug: null,
    createdAt: "2024-02-14",
  },
  {
    id: 3,
    slug: "euler-lagrange",
    title: "Euler-Lagrange Equation",
    expressionDisplay: "d/dt(∂L/∂q̇) − ∂L/∂q = 0",
    description:
      "Derived from Hamilton's principle of stationary action. Shows why this single equation encodes all classical equations of motion.",
    pages: 3,
    topic: "Variational Calculus",
    simulationSlug: null,
    createdAt: "2024-03-05",
  },
  {
    id: 4,
    slug: "hamiltonian-mechanics",
    title: "Hamiltonian Mechanics",
    expressionDisplay: "H = Σ pq̇ − L",
    description:
      "Legendre transform of the Lagrangian into phase space. Derives canonical coordinates and Hamilton's equations of motion.",
    pages: 6,
    topic: "Analytical Mechanics",
    simulationSlug: null,
    createdAt: "2024-04-20",
  },
  {
    id: 5,
    slug: "central-force-motion",
    title: "Central Force Motion",
    expressionDisplay: "L = ½m(ṙ² + r²θ̇²) − V(r)",
    description:
      "Effective potential, orbit equation, and Kepler's laws all derived from the Lagrangian. Reduces the two-body problem to one dimension.",
    pages: 7,
    topic: "Classical Mechanics",
    simulationSlug: "orbital",
    createdAt: "2024-05-12",
  },
  {
    id: 6,
    slug: "rotating-frame",
    title: "Rotating Frame & Fictitious Forces",
    expressionDisplay: "F_rot = F_in − mω×(ω×r) − 2mω×v",
    description:
      "Derivation of Coriolis and centrifugal forces in a non-inertial rotating reference frame. Explains why weather systems spin.",
    pages: 5,
    topic: "Non-Inertial Frames",
    simulationSlug: null,
    createdAt: "2024-06-18",
  },
  {
    id: 7,
    slug: "hamiltons-equations",
    title: "Hamilton's Equations via Legendre Transform",
    expressionDisplay: "q̇ = ∂H/∂p,  ṗ = −∂H/∂q",
    description:
      "Step-by-step construction of Hamiltonian phase space from the Lagrangian. Reveals the deep symmetry between position and momentum.",
    pages: 4,
    topic: "Analytical Mechanics",
    simulationSlug: null,
    createdAt: "2024-07-22",
  },
  {
    id: 8,
    slug: "small-oscillations",
    title: "Small Oscillations & Normal Modes",
    expressionDisplay: "det|V − ω²T| = 0",
    description:
      "Eigenvalue problem for coupled oscillators. Finds normal mode frequencies and coordinates for any small-amplitude vibration.",
    pages: 6,
    topic: "Oscillations",
    simulationSlug: "spring-mass",
    createdAt: "2024-08-30",
  },
  {
    id: 9,
    slug: "dalembert-principle",
    title: "D'Alembert's Principle",
    expressionDisplay: "Σ(Fᵢ − mᵢaᵢ)·δrᵢ = 0",
    description:
      "Virtual work formulation that bypasses constraint forces entirely and leads directly to the Lagrangian equations of motion.",
    pages: 3,
    topic: "Classical Mechanics",
    simulationSlug: null,
    createdAt: "2024-10-05",
  },
  {
    id: 10,
    slug: "poisson-brackets",
    title: "Poisson Brackets & Constants of Motion",
    expressionDisplay: "{f, H} = 0 ⟹ f is conserved",
    description:
      "Poisson bracket algebra and its relationship to conserved quantities in Hamiltonian mechanics. The bridge between classical and quantum.",
    pages: 4,
    topic: "Analytical Mechanics",
    simulationSlug: null,
    createdAt: "2024-09-10",
  },
  {
    id: 11,
    slug: "double-pendulum",
    title: "The Double Pendulum",
    expressionDisplay: "L = ½(m₁+m₂)l₁²θ̇₁² + ½m₂l₂²θ̇₂² + m₂l₁l₂θ̇₁θ̇₂cos(θ₁−θ₂) − V",
    description:
      "A system with two degrees of freedom that exhibits chaotic behaviour. Full Lagrangian derivation and sensitivity to initial conditions.",
    pages: 8,
    topic: "Chaos Theory",
    simulationSlug: "double-pendulum",
    createdAt: "2024-11-15",
  },
  {
    id: 12,
    slug: "rigid-body-rotation",
    title: "Rigid Body Rotation & Euler's Equations",
    expressionDisplay: "I₁ω̇₁ − (I₂ − I₃)ω₂ω₃ = N₁",
    description:
      "Euler's equations for a rotating rigid body derived from angular momentum. Explains precession, nutation, and the tennis racket theorem.",
    pages: 6,
    topic: "Rigid Body Dynamics",
    simulationSlug: null,
    createdAt: "2024-12-02",
  },
  {
    id: 13,
    slug: "brachistochrone",
    title: "The Brachistochrone Problem",
    expressionDisplay: "T = ∫₀ˣ¹ √[(1 + y'²) / (2gy)] dx",
    description:
      "The curve of fastest descent under gravity. Solved via the calculus of variations — the answer is a cycloid, not a straight line.",
    pages: 5,
    topic: "Variational Calculus",
    simulationSlug: null,
    createdAt: "2025-01-10",
  },
  {
    id: 14,
    slug: "coupled-oscillators",
    title: "Coupled Oscillators & Beat Frequencies",
    expressionDisplay: "ω± = √[(k ± κ) / m]",
    description:
      "Two masses connected by springs. Normal mode decomposition reveals superposition of frequencies and the emergence of beat patterns.",
    pages: 4,
    topic: "Oscillations",
    simulationSlug: "coupled-oscillators",
    createdAt: "2025-02-18",
  },
  {
    id: 15,
    slug: "magnetic-force-lagrangian",
    title: "Magnetic Force in the Lagrangian",
    expressionDisplay: "L = ½mv² + qv⃗·A⃗ − qφ",
    description:
      "Deriving the Lorentz force law from a velocity-dependent potential. Shows how the vector potential enters the Lagrangian naturally.",
    pages: 5,
    topic: "Electrodynamics",
    simulationSlug: null,
    createdAt: "2025-03-22",
  },
  {
    id: 16,
    slug: "inclined-plane-crtm",
    title: "Inclined Plane: Constrained Motion",
    expressionDisplay: "a = g(sin θ − μₖ cos θ)",
    description:
      "Resolve gravity and the normal force along a rough incline, then apply the static-friction threshold to determine whether the block moves.",
    pages: 4,
    isDigital: true,
    topic: "Newtonian Mechanics",
    simulationSlug: "inclined-plane",
    createdAt: "2026-10-10",
  },
  {
    id: 17,
    slug: "ground-to-ground-projectile",
    title: "Ground-to-Ground Projectile",
    expressionDisplay: "R = (u² sin 2θ) / g",
    description:
      "Derive flight time, maximum height, and range for a projectile launched and landing at the same elevation.",
    pages: 3,
    isDigital: true,
    topic: "Kinematics",
    simulationSlug: "ground-to-ground-projectile",
    createdAt: "2026-10-10",
  },
  {
    id: 18,
    slug: "heavy-pulley",
    title: "The Heavy Pulley",
    expressionDisplay: "a = (m₂ − m₁)g / (m₁ + m₂ + I/R²)",
    description:
      "Account for a pulley’s rotational inertia to derive the unequal tensions and acceleration of a two-mass system.",
    pages: 4,
    isDigital: true,
    topic: "Rotational Dynamics",
    simulationSlug: "heavy-pulley",
    createdAt: "2026-10-10",
  },
  {
    id: 19,
    slug: "particle-based-collision",
    title: "Particle-Based Collision",
    expressionDisplay: "v₁ = [(m₁−m₂)u₁ + 2m₂u₂] / (m₁+m₂)",
    description:
      "Use conservation of momentum and kinetic energy to derive the outgoing velocities in a one-dimensional elastic collision.",
    pages: 4,
    isDigital: true,
    topic: "Conservation Laws",
    simulationSlug: "particle-collision",
    createdAt: "2026-10-10",
  },
];

export const simulations = [
  {
    id: 1,
    slug: "atwood",
    title: "Atwood Machine",
    label: "sim_01 // atwood",
    description:
      "Two masses, one pulley, one string. Vary the masses and watch Newton's second law play out in real time.",
    topic: "NLM · Constraints",
    derivationSlug: "lagrangian-atwood",
  },
  {
    id: 2,
    slug: "pendulum",
    title: "Simple Pendulum",
    label: "sim_02 // pendulum",
    description:
      "The exact nonlinear ODE solved numerically. Compare it to the small-angle approximation and see where the linearisation breaks down.",
    topic: "Oscillations",
    derivationSlug: null,
  },
  {
    id: 3,
    slug: "projectile",
    title: "Projectile Motion",
    label: "sim_03 // projectile",
    description:
      "Adjustable launch angle and speed with optional air drag. Visualises the parabolic trajectory and range equation.",
    topic: "Kinematics",
    derivationSlug: null,
  },
  {
    id: 4,
    slug: "spring-mass",
    title: "Spring-Mass System",
    label: "sim_04 // spring",
    description:
      "Hooke's law, damping coefficient, and driving force — all adjustable. Shows resonance when the driving frequency matches ω₀.",
    topic: "SHM · Damping",
    derivationSlug: "small-oscillations",
  },
  {
    id: 5,
    slug: "orbital",
    title: "Orbital Mechanics",
    label: "sim_05 // orbit",
    description:
      "Central force problem under gravity. Elliptical orbits, angular momentum conservation, and Kepler's second law visualised.",
    topic: "Gravitation",
    derivationSlug: "central-force-motion",
  },
  {
    id: 6,
    slug: "double-pendulum",
    title: "Double Pendulum",
    label: "sim_06 // chaos",
    description:
      "Two coupled pendulums that exhibit chaotic motion. Tiny changes in initial angle produce wildly different trajectories.",
    topic: "Chaos · Lagrangian",
    derivationSlug: "double-pendulum",
  },
  {
    id: 7,
    slug: "coupled-oscillators",
    title: "Coupled Oscillators",
    label: "sim_07 // beats",
    description:
      "Two masses connected by three springs. Watch normal modes emerge and observe beat frequencies from superposition.",
    topic: "Oscillations · Modes",
    derivationSlug: "coupled-oscillators",
  },
  {
    id: 8,
    slug: "inclined-plane",
    title: "Inclined Plane CRTM Simulation",
    label: "sim_08 // incline",
    description:
      "Block on a wedge with adjustable friction coefficient and angle. See when static friction breaks and sliding begins.",
    topic: "NLM · Friction",
    derivationSlug: "inclined-plane-crtm",
  },
  {
    id: 9,
    slug: "particle-collision",
    title: "Particle-Based Collision Simulation",
    label: "sim_09 // particles",
    description:
      "Two particles on a line with adjustable masses and velocities. Conservation of momentum and energy shown in real time.",
    topic: "Conservation Laws",
    derivationSlug: "particle-based-collision",
  },
  {
    id: 10,
    slug: "ground-to-ground-projectile",
    title: "Ground-to-Ground Projectile Simulation",
    label: "sim_10 // projectile",
    description:
      "Set the launch speed and angle, then explore the symmetric parabolic path, flight time, maximum height, and range.",
    topic: "Kinematics",
    derivationSlug: "ground-to-ground-projectile",
  },
  {
    id: 11,
    slug: "heavy-pulley",
    title: "The Heavy Pulley Simulation",
    label: "sim_11 // rotation",
    description:
      "Include rotational inertia in an Atwood machine and compare the tensions on either side of the pulley.",
    topic: "Rotational Dynamics",
    derivationSlug: "heavy-pulley",
  },
];

export type Derivation = (typeof derivations)[number];
export type Simulation = (typeof simulations)[number];
