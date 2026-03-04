# react-effects

Production-ready React component library for reusable visual effects. Lightweight, tree-shakable, and SSR-safe with built-in Next.js support.

## Features

- 🎯 10 Cursor Effects with container control
- 🌈 10 Background Effects with position control
- 📦 Tree-shakable exports
- 🔒 TypeScript support
- ⚡ Lightweight and performant
- 🚀 **Next.js App Router ready** - `"use client"` included
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

### Next.js (App Router 13+)

```tsx
// app/page.tsx - No "use client" needed!
import { CursorFollower, BackgroundMesh } from "react-effects";

export default function Page() {
  return (
    <>
      <CursorFollower />
      <BackgroundMesh position="fixed" zIndex={-1} />
      <YourContent />
    </>
  );
}
```

### React / Vite / CRA

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
<CursorFollower className="hidden md:block mix-blend-difference" />

<BackgroundMesh
  className="opacity-80 dark:opacity-50"
  position="fixed"
  zIndex={-1}
/>
```

## Why It Works with Next.js

All components include `"use client"` directive, so they work seamlessly with Next.js App Router:

```tsx
"use client"; // ✅ Built into every component

import { useEffect, useRef } from "react";

export const CursorFollower = () => {
  // Your component code...
};
```

**No need to wrap components yourself!** Just import and use.

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

### 9. BackgroundHexagons ⭐

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

### 10. BackgroundMesh ⭐

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

### 6. CursorBubble

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

### 9. CursorFollower ⭐

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

### 10. CursorNeon ⭐

```tsx
<CursorNeon
  color="#00ffff"
  size={30}
  glowIntensity={20}
  smoothness={0.12}
  className="mix-blend-screen"
/>
```

## Next.js Examples

### App Router Layout

```tsx
// app/layout.tsx
import { CursorFollower } from "react-effects";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorFollower className="hidden md:block" />
        {children}
      </body>
    </html>
  );
}
```

### Multi-Section Page

```tsx
// app/page.tsx
import { BackgroundMesh, BackgroundGrid } from "react-effects";

export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <BackgroundMesh position="absolute" zIndex={-1} />
        <Hero />
      </section>

      <section className="relative h-screen">
        <BackgroundGrid position="absolute" zIndex={-1} />
        <Features />
      </section>
    </>
  );
}
```

## Advanced Usage

### Position Control

```tsx
// Fixed - covers entire viewport
<BackgroundMesh position="fixed" zIndex={-1} />

// Absolute - contained within parent
<section className="relative h-screen">
  <BackgroundGrid position="absolute" zIndex={-1} />
</section>
```

### Container Control

```tsx
// Global cursor
<CursorFollower />;

// Scoped cursor
const ref = useRef<HTMLDivElement>(null);
<div ref={ref} className="relative">
  <CursorGlow container={ref.current} />
</div>;
```

### Tailwind CSS

```tsx
// Responsive
<CursorFollower className="hidden md:block" />

// Dark mode
<BackgroundGrid className="opacity-50 dark:opacity-30" />

// Hover effects
<div className="group">
  <BackgroundGradient
    className="opacity-0 group-hover:opacity-100 transition-opacity"
  />
</div>
```

## Tree-shaking

```tsx
import { CursorFollower } from "react-effects/cursor";
import { BackgroundMesh } from "react-effects/background";
```

## Documentation

- **README.md** - This file
- **NEXTJS_GUIDE.md** - Complete Next.js integration guide
- **TAILWIND_GUIDE.md** - Tailwind CSS integration
- **USAGE_GUIDE.md** - Usage examples
- **POSITION_CONTAINER_GUIDE.md** - Position & container control

## License

MIT
