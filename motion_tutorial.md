# Motion for React — From Zero to This Site

> **Package:** `motion` (not `framer-motion`). Import from `motion/react`.  
> **Docs:** [motion.dev](https://motion.dev)

---

## 1. The Core Mental Model

Motion gives you animated versions of every HTML/SVG element.  
You swap a plain element for its `motion.*` counterpart and describe three states:

| Prop | Meaning |
|---|---|
| `initial` | How it looks **before** the animation |
| `animate` | How it looks **after** the animation |
| `exit` | How it looks as it **leaves** the DOM |

```tsx
import { motion } from "motion/react";

// Plain div → animated div. That's all it takes.
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>
```

Any CSS property you know works: `opacity`, `x`, `y`, `scale`, `rotate`, `filter`, `backgroundColor`, etc.

---

## 2. The `transition` Prop — Controlling the Feel

`transition` is where the personality of an animation lives.

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,          // seconds
    delay: 0.1,             // wait before starting
    ease: "easeOut",        // named curve
    // OR a custom cubic-bezier:
    ease: [0.21, 0.47, 0.32, 0.98],
  }}
/>
```

### Common easing names
- `"linear"` — constant speed, robotic
- `"easeOut"` — fast start, gentle stop ✅ most natural for entrances
- `"easeInOut"` — smooth on both ends
- `"spring"` — physics-based bounce (no duration needed, use `stiffness`/`damping`)

```tsx
// Spring example — feels physical
transition={{ type: "spring", stiffness: 300, damping: 25 }}
```

> **What this site uses:** `ease: [0.21, 0.47, 0.32, 0.98]` — a custom cubic-bezier.  
> It's a fast-start, smooth-settle curve that feels snappy without being harsh.

---

## 3. Scroll-Triggered Animations — `whileInView`

Instead of `animate` (which fires immediately), use `whileInView` to trigger when the element enters the viewport.

```tsx
<motion.div
  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-10%" }}
  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }}
/>
```

### `viewport` options

| Option | What it does |
|---|---|
| `once: true` | Animates only the **first** time it enters view (don't replay on scroll up) |
| `margin: "-10%"` | Shrinks the trigger area — element must be 10% into view before firing |

---

## 4. `animate` vs `whileInView` — Which to Use

> **This is one of the most common mistakes in Motion.**

- `animate` → fires **immediately on mount**. Use for **above-the-fold** elements (hero, navbar).
- `whileInView` → fires **when the element scrolls into view**. Use for everything else.

If you use `whileInView` on the hero, it may fire late, flicker, or not fire at all — because the element is *already* in the viewport when the page loads.

```tsx
// ❌ Wrong — hero is already visible; whileInView is unreliable here
<motion.div whileInView={{ opacity: 1 }} />

// ✅ Correct — fires reliably on mount
<motion.div animate={{ opacity: 1 }} />
```

In this site, [scroll-reveal.tsx](file:///e:/Coding/invariant/src/components/ui/scroll-reveal.tsx) exposes a `mode` prop for exactly this:

```tsx
// Below the fold — scroll triggered
<ScrollReveal mode="scroll">...</ScrollReveal>

// Hero (above the fold) — mount triggered
<ScrollReveal mode="mount" delay={0.2}>...</ScrollReveal>
```

---

## 4. The `ScrollReveal` Wrapper — How It Works

```tsx
// scroll-reveal.tsx (simplified)
export function ScrollReveal({ children, delay = 0, yOffset = 10, blur = "5px" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
```

You stagger elements by manually incrementing `delay`:

```tsx
<ScrollReveal delay={0.1}><h1 /></ScrollReveal>
<ScrollReveal delay={0.2}><p /></ScrollReveal>
<ScrollReveal delay={0.3}><Button /></ScrollReveal>
```

This works, but it's manual. For groups of items (like a card grid), there's a smarter way.

---

## 5. Variants + `staggerChildren` — The Right Way for Card Grids

**Variants** let you name your animation states and share them across a parent-child tree.  
The parent can then automatically stagger its children without you managing delays by hand.

```tsx
// 1. Define variants as plain objects
const containerVariants = {
  hidden: {},                   // parent has no visible state of its own
  visible: {
    transition: {
      staggerChildren: 0.08,    // each child fires 80ms after the previous
      delayChildren: 0.05,      // wait 50ms before starting the first child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// 2. Parent declares variants + triggers the animation
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* 3. Children just say which variant to use — stagger is handled by the parent */}
  <motion.div variants={itemVariants}>Card 1</motion.div>
  <motion.div variants={itemVariants}>Card 2</motion.div>
  <motion.div variants={itemVariants}>Card 3</motion.div>
</motion.div>
```

> **This is exactly what** [bento-grid.tsx](file:///e:/Coding/invariant/src/components/site/bento-grid.tsx) **uses now.**  
> No manual delays. Add or remove a card and the stagger adjusts automatically.

---

## 6. Gesture Animations — `whileHover`, `whileTap`

Motion makes interactive states trivial.

```tsx
<motion.button
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}
>
  Click me
</motion.button>
```

These work alongside `animate` — Motion merges all active states automatically.

---

## 7. Per-Property Transitions — Mixing Easings

Sometimes you want different timing for different properties. Scale is more physical with a spring, while opacity looks better with a bezier. You can set a `transition` per-property inside the variant:

```tsx
const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      // Each property gets its own timing
      scale:   { type: "spring", stiffness: 260, damping: 22 },
      opacity: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
      y:       { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  },
};
```

The `scale` spring makes it feel physical and snappy. The bezier on `opacity` and `y` keeps the fade smooth. Mixed together this feels premium — like the element *pops* into existence.

> Used in: [bento-grid.tsx](file:///e:/Coding/invariant/src/components/site/bento-grid.tsx) and [cards-container.tsx](file:///e:/Coding/invariant/src/components/site/cards-container.tsx)

---

## 8. `scale` in Reveal Animations — Depth Effect

Adding a tiny `scale: 0.97 → 1` to your hidden/visible states makes reveals feel 3D — like the element is emerging from the page rather than just sliding up.

```tsx
// Without scale — flat, just slides up
hidden:  { opacity: 0, y: 16 }
visible: { opacity: 1, y: 0  }

// With scale — has depth, feels like it pops into existence
hidden:  { opacity: 0, y: 16, scale: 0.97 }
visible: { opacity: 1, y: 0,  scale: 1    }
```

Keep the scale offset **small** (0.95–0.98). Anything larger feels like a zoom-in, which is heavy.

---

## 7. Quick Reference — Everything on One Card

```tsx
<motion.div
  // ① What it looks like at start
  initial={{ opacity: 0, y: 20, scale: 0.95 }}

  // ② Target state (fires on mount, or controlled by parent variant)
  animate={{ opacity: 1, y: 0, scale: 1 }}

  // ③ Trigger on scroll
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-10%" }}

  // ④ Gesture states
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}

  // ⑤ Timing + easing
  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}

  // ⑥ Named states (variants system)
  variants={itemVariants}
/>
```

---

## 8. Patterns Used on This Site

| Component | Pattern |
|---|---|
| [scroll-reveal.tsx](file:///e:/Coding/invariant/src/components/ui/scroll-reveal.tsx) | `whileInView` + blur fade, manual delay |
| [bento-grid.tsx](file:///e:/Coding/invariant/src/components/site/bento-grid.tsx) | `variants` + `staggerChildren` on a grid |
| [hero.tsx](file:///e:/Coding/invariant/src/components/site/hero.tsx) | Staggered `ScrollReveal` wrappers per element |
| [physics-section.tsx](file:///e:/Coding/invariant/src/components/site/physics-section.tsx) | `ScrollReveal` on image + text block separately |

---

## 9. What to Try Next

- **`AnimatePresence`** — animate components as they **leave** the DOM (modal close, page transitions)
- **`useMotionValue` + `useTransform`** — drive animations from mouse position or scroll progress
- **`layout` prop** — auto-animate when an element changes size or position in the DOM
- **`MotionConfig`** — set default `transition` for your whole app in one place

```tsx
// MotionConfig example — set a global transition
import { MotionConfig } from "motion/react";

<MotionConfig transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}>
  <App />
</MotionConfig>
```
