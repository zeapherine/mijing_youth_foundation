# Design System Strategy: The Curated Collective



## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Digital Curator."**



We are moving away from the rigid, "app-like" structures of the past decade toward a high-end editorial experience. This system treats the screen like a premium physical publication—think heavy matte paper, layered translucent vellum, and intentional whitespace.



By utilizing a combination of high-contrast typography and a "No-Line" philosophy, we break the "template" look. We favor intentional asymmetry, where elements overlap and breathe, creating a sense of organic growth rather than a mechanical grid. This is a space that feels quiet, confident, and premium.



---



## 2. Colors & Surface Architecture

Our palette transitions from neon digital noise to a sophisticated, earth-toned spectrum.



### The Palette

* **Primary (Vibrant Coral - `#ac332a` / `#ff6f61`):** Used for calls to action and signature moments. It provides the "pulse" of the brand.

* **Secondary (Soft Sage - `#576342`):** A grounding, organic neutral used for secondary actions and environmental accents.

* **Tertiary (Dusty Lavender - `#635882`):** Adds intellectual depth and sophisticated contrast without the aggression of neon.

* **Neutral (Soft Sand / Deep Charcoal):** The foundation. `#f1fcf7` (Surface) provides a warm, inviting canvas against the `#141e1b` (On-Surface) type.



### The "No-Line" Rule

**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional dividers make a layout feel "boxed in." Boundaries must be defined solely through:

1. **Background Shifts:** Transitioning from `surface` to `surface-container-low`.

2. **Tonal Transitions:** Using the `surface-container` tiers to create logical groupings.



### The "Glass & Gradient" Rule

To elevate the UI beyond "flat" design:

* **Glassmorphism:** Floating elements (modals, navigation bars) should use `surface-container-lowest` with a 60% opacity and a `20px` to `40px` backdrop-blur.

* **Signature Textures:** For Hero CTAs, use a subtle linear gradient from `primary` (#ac332a) to `primary-container` (#ff6f61) at a 135-degree angle. This adds "soul" and a tactile, three-dimensional quality.



---



## 3. Typography: Editorial Authority

We pair the architectural strength of **Clash Display** with the modern utility of **Satoshi**.



* **Display & Headlines (Clash Display):** Use `display-lg` (3.5rem) and `headline-lg` (2rem) to create a clear hierarchy. Clash Display’s unique terminals give the brand a custom, high-fashion editorial feel.

* **Body & Titles (Satoshi):** Satoshi provides extreme legibility at smaller scales. Use `body-lg` (1rem) for long-form reading to maintain a premium, airy feel.

* **The Contrast Principle:** Always pair a `display-lg` headline with a `title-sm` or `body-md` sub-headline. The dramatic difference in scale is what creates the "Editorial" look.



---



## 4. Elevation & Depth: Tonal Layering

We reject the standard "Drop Shadow" in favor of **Tonal Layering**.



* **The Layering Principle:** Depth is achieved by "stacking" the surface-container tiers.

* *Base:* `surface` (#f1fcf7)

* *Mid-Layer:* `surface-container-low` (#ebf6f1)

* *Top-Layer (Cards):* `surface-container-lowest` (#ffffff)

* **Ambient Shadows:** If a card must float, use an "Ambient Shadow": `Y: 20px, Blur: 40px, Color: on-surface (4% opacity)`. It should look like a soft glow, not a hard shadow.

* **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` at **15% opacity**. Never use a 100% opaque border.



---



## 5. Components: Soft & Architectural



### Buttons

* **Primary:** Large radii (`xl` - 3rem). Background: `primary` gradient. Text: `on-primary`.

* **Secondary:** Glassmorphic effect. Background: `surface-container-high` (50% opacity) with backdrop-blur.

* **Interaction:** On hover, a subtle scale-up (1.02x) is preferred over a color flash.



### Cards & Lists

* **Container:** `md` to `lg` border radius (24px - 32px).

* **Separation:** Forbid divider lines. Use `spacing-8` (2.75rem) of vertical whitespace or a shift to `surface-container-highest` for the card background to separate it from the page.



### Chips & Tags

* **Selection Chips:** Use `secondary-container` with `on-secondary-container` text. Keep corners `full` (9999px) for a softer, organic feel.



### Input Fields

* **Style:** Minimalist. No bottom line. Use a `surface-container-low` fill with an `xl` border radius.

* **State:** Focused state uses a 1px "Ghost Border" of the `primary` color at 40% opacity.



---



## 6. Do’s and Don’ts



### Do:

* **Embrace Asymmetry:** Let images bleed off the edge of a container while text remains inset.

* **Use Massive Radii:** Stick to the `xl` (3rem) and `lg` (2rem) tokens for a soft, premium feel.

* **Prioritize White Space:** If you think there is enough space, add 20% more. Editorial design lives or dies by its margins.



### Don’t:

* **No "Toxic" Colors:** Absolutely no neons or #C5FF4A. If a highlight is needed, use `secondary-fixed` (Sage) or `tertiary-fixed` (Lavender).

* **No Hard Dividers:** Never use a 1px solid line to separate content. Use whitespace or color blocking.

* **No Default Shadows:** Avoid the "Material Design" standard shadow. Use Tonal Layering or Ambient Shadows only.