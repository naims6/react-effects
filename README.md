# react-effects

Production-ready React component library for reusable visual effects. Lightweight, tree-shakable, and SSR-safe.

## Features

- 🎯 10 Cursor Effects with container control
- 🌈 10 Background Effects with position control
- 📦 Tree-shakable exports
- 🔒 TypeScript support
- ⚡ Lightweight and performant
- 🚀 Next.js compatible (SSR safe)
- 🎨 Fully customizable via props
- 📍 Flexible positioning (absolute/fixed)
- 🎚️ Configurable z-index for layering
- 🎯 Scoped or global cursor effects

## Installation

```bash
npm install react-effects
```

## Quick Start

### Full Page Background + Global Cursor

```tsx
import { CursorFollower, BackgroundMesh } from "react-effects";

function App() {
  return (
    <>
      <CursorFollower />
      <BackgroundMesh position="fixed" zIndex={-1} />
      <YourContent />
    </>
  );
}
```

### Section-Specific Background

```tsx
<section style={{ position: "relative", height: "100vh" }}>
  <BackgroundGrid position="absolute" zIndex={-1} />
  <Content />
</section>
```

### Scoped Cursor Effect

```tsx
const ref = useRef<HTMLDivElement>(null);

<div ref={ref} style={{ position: "relative" }}>
  <CursorGlow container={ref.current} />
  <Content />
</div>;
```

## Background Effects (10 Total)

All backgrounds support:

- `position?: "absolute" | "fixed"` - Default: `"absolute"`
- `zIndex?: number` - Default: `-1`
- `className?: string`

### 1. BackgroundGrid

CSS grid pattern background.

```tsx
<BackgroundGrid
  cellSize={40}
  lineColor="#333333"
  opacity={0.5}
  position="fixed"
  zIndex={-1}
/>
```

### 2. BackgroundGradient

Animated gradient background.

```tsx
<BackgroundGradient
  colors={["#667eea", "#764ba2", "#f093fb"]}
  speed={10}
  angle={-45}
  position="absolute"
  zIndex={-1}
/>
```

### 3. BackgroundParticles

Canvas-based floating particles.

```tsx
<BackgroundParticles
  density={50}
  color="#ffffff"
  speed={0.5}
  position="fixed"
  zIndex={-1}
/>
```

### 4. BackgroundStars

Twinkling stars effect.

```tsx
<BackgroundStars
  starCount={100}
  starColor="#ffffff"
  twinkleSpeed={0.02}
  position="fixed"
  zIndex={-1}
/>
```

### 5. BackgroundDots

Dot pattern background.

```tsx
<BackgroundDots
  dotSize={2}
  dotColor="#888888"
  gap={30}
  opacity={0.5}
  position="absolute"
  zIndex={-1}
/>
```

### 6. BackgroundMatrix

Matrix-style falling characters.

```tsx
<BackgroundMatrix
  color="#00ff00"
  fontSize={16}
  speed={50}
  position="fixed"
  zIndex={-1}
/>
```

### 7. BackgroundWaves

Animated wave effect.

```tsx
<BackgroundWaves
  waveColor="#667eea"
  waveOpacity={0.3}
  waveCount={3}
  position="absolute"
  zIndex={-1}
/>
```

### 8. BackgroundRipple

Expanding ripple circles from center.

```tsx
<BackgroundRipple
  color="#667eea"
  rippleCount={3}
  duration={4}
  position="absolute"
  zIndex={-1}
/>
```

### 9. BackgroundHexagons ⭐ NEW

Animated hexagonal pattern with pulsing effect.

```tsx
<BackgroundHexagons
  hexColor="#667eea"
  hexSize={50}
  animationSpeed={3}
  position="absolute"
  zIndex={-1}
/>
```

### 10. BackgroundMesh ⭐ NEW

Smooth animated mesh gradient with flowing colors.

```tsx
<BackgroundMesh
  colors={["#667eea", "#764ba2", "#f093fb", "#4facfe"]}
  speed={0.5}
  complexity={3}
  position="fixed"
  zIndex={-1}
/>
```

## Cursor Effects (10 Total)

All cursors support:

- `container?: HTMLElement | null` - Default: `null` (global)

### 1. CursorGlow

Smooth glowing circle that follows the cursor.

```tsx
<CursorGlow
  color="#00ffff"
  size={20}
  smoothness={0.15}
  container={null} // Global
/>
```

### 2. CursorTrail

Trailing dots following cursor movement.

```tsx
<CursorTrail color="#ff00ff" size={8} trailLength={8} />
```

### 3. CursorDotRing

Center dot with lagging outer ring.

```tsx
<CursorDotRing dotSize={8} ringSize={32} color="#ffffff" />
```

### 4. CursorSpotlight

Large spotlight effect following cursor.

```tsx
<CursorSpotlight size={200} color="#ffffff" blur={100} opacity={0.3} />
```

### 5. CursorRipple

Ripple effect on click.

```tsx
<CursorRipple color="#ff00ff" size={100} duration={800} />
```

### 6. CursorBubble ✅ FIXED

Bubbles appear on mouse movement.

```tsx
<CursorBubble
  color="#00ffff"
  minSize={10}
  maxSize={30}
  lifetime={1000}
  frequency={50}
/>
```

### 7. CursorMagnetic

Cursor attracted to magnetic elements.

```tsx
<CursorMagnetic size={40} color="#ff6b6b" strength={0.3} />
```

Add `data-magnetic` attribute to elements to make them magnetic.

### 8. CursorParticles

Particle trail following cursor.

```tsx
<CursorParticles color="#ffff00" particleCount={5} spread={2} lifetime={60} />
```

### 9. CursorFollower ⭐ NEW

Professional dot and circle follower.

```tsx
<CursorFollower
  dotColor="#ffffff"
  circleColor="#00ffff"
  dotSize={6}
  circleSize={40}
  circleDelay={0.08}
/>
```

### 10. CursorNeon ⭐ NEW

Neon glow cursor with screen blend mode.

```tsx
<CursorNeon color="#00ffff" size={30} glowIntensity={20} smoothness={0.12} />
```

## Advanced Usage

### Position Control for Backgrounds

#### Fixed Position (Full Page)

```tsx
<BackgroundMesh position="fixed" zIndex={-1} />
```

- Covers entire viewport
- Stays in place when scrolling
- No parent positioning required

#### Absolute Position (Section-Specific)

```tsx
<section style={{ position: "relative", height: "100vh" }}>
  <BackgroundGrid position="absolute" zIndex={-1} />
  <Content />
</section>
```

- Contained within parent element
- Requires `position: relative` on parent
- Different backgrounds per section

### Container Control for Cursors

#### Global Cursor (Default)

```tsx
<CursorFollower />
```

- Works across entire website
- Follows cursor everywhere

#### Scoped Cursor

```tsx
const ref = useRef<HTMLDivElement>(null);

<div ref={ref} style={{ position: "relative" }}>
  <CursorGlow container={ref.current} />
  <Content />
</div>;
```

- Limited to specific section
- Different cursors per section
- Requires ref and `position: relative`

### Layering Multiple Backgrounds

```tsx
<div style={{ position: "relative", height: "100vh" }}>
  <BackgroundMesh position="absolute" zIndex={-3} />
  <BackgroundGrid position="absolute" zIndex={-2} opacity={0.3} />
  <BackgroundDots position="absolute" zIndex={-1} opacity={0.2} />
  <Content />
</div>
```

### Different Effects per Section

```tsx
function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero section */}
      <section ref={heroRef} style={{ position: "relative", height: "100vh" }}>
        <CursorNeon container={heroRef.current} />
        <BackgroundMesh position="absolute" zIndex={-1} />
        <Hero />
      </section>

      {/* Gallery section */}
      <section
        ref={galleryRef}
        style={{ position: "relative", height: "100vh" }}
      >
        <CursorMagnetic container={galleryRef.current} />
        <BackgroundHexagons position="absolute" zIndex={-1} />
        <Gallery />
      </section>
    </>
  );
}
```

## Tree-shaking

Import only what you need:

```tsx
import { CursorFollower } from "react-effects/cursor";
import { BackgroundMesh } from "react-effects/background";
```

## Next.js Usage

```tsx
"use client"; // For Next.js 13+ App Router

import { CursorNeon, BackgroundMesh } from "react-effects";

export default function Page() {
  return (
    <>
      <CursorNeon />
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <BackgroundMesh position="absolute" zIndex={-1} />
        <main>Your content</main>
      </div>
    </>
  );
}
```

## Documentation

- **USAGE_GUIDE.md** - Complete usage examples
- **POSITION_CONTAINER_GUIDE.md** - Position & container control
- **FEATURES.md** - All features with examples
- **QUICKSTART.md** - Quick start guide

## License

MIT
