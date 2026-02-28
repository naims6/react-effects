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
- 🎨 **Tailwind CSS support** - All components support `className` prop

## Installation

```bash
npm install react-effects
```

## Quick Start

### Basic Usage

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

### With Tailwind CSS

```tsx
import { CursorFollower, BackgroundMesh } from "react-effects";

function App() {
  return (
    <>
      <CursorFollower className="mix-blend-difference" />
      <BackgroundMesh
        className="opacity-80 dark:opacity-50"
        position="fixed"
        zIndex={-1}
      />
      <YourContent />
    </>
  );
}
```

## Tailwind CSS Integration

All 20 components support the `className` prop for seamless Tailwind CSS integration!

### Examples

#### Responsive Visibility

```tsx
<CursorFollower className="hidden md:block" />
<BackgroundMesh className="block md:hidden" position="fixed" />
```

#### Dark Mode

```tsx
<BackgroundGrid
  className="opacity-50 dark:opacity-30"
  position="absolute"
  zIndex={-1}
/>
```

#### Hover Effects

```tsx
<div className="group relative">
  <BackgroundGradient
    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    position="absolute"
    zIndex={-1}
  />
  <Content />
</div>
```

#### Animations

```tsx
<CursorGlow className="animate-pulse" />
<BackgroundParticles className="animate-fade-in" position="fixed" />
```

#### Blur & Opacity

```tsx
<BackgroundMesh
  className="opacity-80 blur-sm"
  position="absolute"
  zIndex={-1}
/>
```

See **TAILWIND_GUIDE.md** for complete Tailwind CSS integration examples.

## Background Effects (10 Total)

All backgrounds support:

- `position?: "absolute" | "fixed"` - Default: `"absolute"`
- `zIndex?: number` - Default: `-1`
- `className?: string` - For Tailwind CSS

### 1. BackgroundGrid

```tsx
<BackgroundGrid
  cellSize={40}
  lineColor="#333333"
  opacity={0.5}
  position="fixed"
  zIndex={-1}
  className="dark:opacity-30"
/>
```

### 2. BackgroundGradient

```tsx
<BackgroundGradient
  colors={["#667eea", "#764ba2", "#f093fb"]}
  speed={10}
  angle={-45}
  position="absolute"
  zIndex={-1}
  className="opacity-80"
/>
```

### 3. BackgroundParticles

```tsx
<BackgroundParticles
  density={50}
  color="#ffffff"
  speed={0.5}
  position="fixed"
  zIndex={-1}
  className="hidden md:block"
/>
```

### 4. BackgroundStars

```tsx
<BackgroundStars
  starCount={100}
  starColor="#ffffff"
  twinkleSpeed={0.02}
  position="fixed"
  zIndex={-1}
  className="opacity-70"
/>
```

### 5. BackgroundDots

```tsx
<BackgroundDots
  dotSize={2}
  dotColor="#888888"
  gap={30}
  opacity={0.5}
  position="absolute"
  zIndex={-1}
  className="dark:opacity-20"
/>
```

### 6. BackgroundMatrix

```tsx
<BackgroundMatrix
  color="#00ff00"
  fontSize={16}
  speed={50}
  position="fixed"
  zIndex={-1}
  className="opacity-60"
/>
```

### 7. BackgroundWaves

```tsx
<BackgroundWaves
  waveColor="#667eea"
  waveOpacity={0.3}
  waveCount={3}
  position="absolute"
  zIndex={-1}
  className="blur-sm"
/>
```

### 8. BackgroundRipple

```tsx
<BackgroundRipple
  color="#667eea"
  rippleCount={3}
  duration={4}
  position="absolute"
  zIndex={-1}
  className="opacity-50"
/>
```

### 9. BackgroundHexagons ⭐ NEW

```tsx
<BackgroundHexagons
  hexColor="#667eea"
  hexSize={50}
  animationSpeed={3}
  position="absolute"
  zIndex={-1}
  className="opacity-60 dark:opacity-40"
/>
```

### 10. BackgroundMesh ⭐ NEW

```tsx
<BackgroundMesh
  colors={["#667eea", "#764ba2", "#f093fb", "#4facfe"]}
  speed={0.5}
  complexity={3}
  position="fixed"
  zIndex={-1}
  className="opacity-90 dark:opacity-70"
/>
```

## Cursor Effects (10 Total)

All cursors support:

- `container?: HTMLElement | null` - Default: `null` (global)
- `className?: string` - For Tailwind CSS

### 1. CursorGlow

```tsx
<CursorGlow
  color="#00ffff"
  size={20}
  smoothness={0.15}
  container={null}
  className="mix-blend-screen"
/>
```

### 2. CursorTrail

```tsx
<CursorTrail color="#ff00ff" size={8} trailLength={8} className="opacity-80" />
```

### 3. CursorDotRing

```tsx
<CursorDotRing
  dotSize={8}
  ringSize={32}
  color="#ffffff"
  className="mix-blend-difference"
/>
```

### 4. CursorSpotlight

```tsx
<CursorSpotlight
  size={200}
  color="#ffffff"
  blur={100}
  opacity={0.3}
  className="hidden lg:block"
/>
```

### 5. CursorRipple

```tsx
<CursorRipple
  color="#ff00ff"
  size={100}
  duration={800}
  className="opacity-70"
/>
```

### 6. CursorBubble ✅ FIXED

```tsx
<CursorBubble
  color="#00ffff"
  minSize={10}
  maxSize={30}
  lifetime={1000}
  frequency={50}
  className="opacity-80"
/>
```

### 7. CursorMagnetic

```tsx
<CursorMagnetic
  size={40}
  color="#ff6b6b"
  strength={0.3}
  className="mix-blend-difference"
/>
```

### 8. CursorParticles

```tsx
<CursorParticles
  color="#ffff00"
  particleCount={5}
  spread={2}
  lifetime={60}
  className="opacity-90"
/>
```

### 9. CursorFollower ⭐ NEW

```tsx
<CursorFollower
  dotColor="#ffffff"
  circleColor="#00ffff"
  dotSize={6}
  circleSize={40}
  circleDelay={0.08}
  className="mix-blend-difference"
/>
```

### 10. CursorNeon ⭐ NEW

```tsx
<CursorNeon
  color="#00ffff"
  size={30}
  glowIntensity={20}
  smoothness={0.12}
  className="mix-blend-screen"
/>
```

## Advanced Usage

### Position Control for Backgrounds

#### Fixed Position (Full Page)

```tsx
<BackgroundMesh position="fixed" zIndex={-1} className="opacity-80" />
```

#### Absolute Position (Section-Specific)

```tsx
<section className="relative h-screen">
  <BackgroundGrid
    position="absolute"
    zIndex={-1}
    className="opacity-50 dark:opacity-30"
  />
  <Content />
</section>
```

### Container Control for Cursors

#### Global Cursor (Default)

```tsx
<CursorFollower className="hidden md:block" />
```

#### Scoped Cursor

```tsx
const ref = useRef<HTMLDivElement>(null);

<div ref={ref} className="relative">
  <CursorGlow container={ref.current} className="mix-blend-difference" />
  <Content />
</div>;
```

### Tailwind CSS Examples

#### Responsive Design

```tsx
<>
  {/* Simple on mobile */}
  <BackgroundGrid className="block md:hidden opacity-30" position="fixed" />

  {/* Complex on desktop */}
  <BackgroundMesh className="hidden md:block opacity-80" position="fixed" />

  {/* No cursor on mobile */}
  <CursorFollower className="hidden md:block" />
</>
```

#### Dark Mode

```tsx
<BackgroundGrid
  className="opacity-50 dark:opacity-30"
  lineColor="#333"
  position="absolute"
  zIndex={-1}
/>
```

#### Hover Effects

```tsx
<div className="group relative">
  <BackgroundGradient
    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    position="absolute"
    zIndex={-1}
  />
  <Content />
</div>
```

#### Layered with Tailwind

```tsx
<div className="relative h-screen">
  <BackgroundMesh className="opacity-80 z-[-3]" position="absolute" />
  <BackgroundGrid className="opacity-30 z-[-2]" position="absolute" />
  <BackgroundDots className="opacity-20 z-[-1]" position="absolute" />
  <Content />
</div>
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
      <CursorNeon className="hidden md:block" />
      <div className="relative min-h-screen">
        <BackgroundMesh
          className="opacity-80 dark:opacity-60"
          position="absolute"
          zIndex={-1}
        />
        <main>Your content</main>
      </div>
    </>
  );
}
```

## Documentation

- **README.md** - This file
- **TAILWIND_GUIDE.md** - Complete Tailwind CSS integration guide
- **USAGE_GUIDE.md** - Complete usage examples
- **POSITION_CONTAINER_GUIDE.md** - Position & container control
- **FEATURES.md** - All features with examples
- **QUICKSTART.md** - Quick start guide

## License

MIT
