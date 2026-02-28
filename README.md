# react-effects

Production-ready React component library for reusable visual effects. Lightweight, tree-shakable, and SSR-safe.

## Features

- 🎯 10 Cursor Effects
- 🌈 10 Background Effects
- 📦 Tree-shakable exports
- 🔒 TypeScript support
- ⚡ Lightweight and performant
- 🚀 Next.js compatible (SSR safe)
- 🎨 Fully customizable via props
- 📍 Absolute positioning for flexible placement
- 🎚️ Configurable z-index for layering

## Installation

```bash
npm install react-effects
```

## Usage

### Cursor Effects

```tsx
import { CursorGlow, CursorFollower, CursorNeon } from "react-effects";

function App() {
  return (
    <>
      <CursorGlow color="#00ffff" size={20} smoothness={0.15} />
      {/* or */}
      <CursorFollower dotColor="#fff" circleColor="#00ffff" />
      {/* or */}
      <CursorNeon color="#ff00ff" glowIntensity={30} />
    </>
  );
}
```

### Background Effects (Absolute Positioning)

All background effects use `position: absolute` with configurable z-index, allowing you to place them anywhere in your layout.

```tsx
import { BackgroundGrid, BackgroundMesh } from "react-effects";

function App() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <BackgroundGrid cellSize={40} opacity={0.5} zIndex={-1} />
      <h1>Your content here</h1>
    </div>
  );
}
```

## API Reference

### Cursor Effects (10 Total)

#### CursorGlow

Smooth glowing circle that follows the cursor.

- `color?: string` - Glow color (default: `"#00ffff"`)
- `size?: number` - Size in pixels (default: `20`)
- `smoothness?: number` - Smoothness 0-1 (default: `0.15`)

#### CursorTrail

Trailing dots following cursor movement.

- `color?: string` - Trail color (default: `"#ff00ff"`)
- `size?: number` - Dot size (default: `8`)
- `trailLength?: number` - Number of dots (default: `8`)

#### CursorDotRing

Center dot with lagging outer ring.

- `dotSize?: number` - Center dot size (default: `8`)
- `ringSize?: number` - Outer ring size (default: `32`)
- `color?: string` - Color (default: `"#ffffff"`)

#### CursorSpotlight

Large spotlight effect following cursor.

- `size?: number` - Spotlight size (default: `200`)
- `color?: string` - Spotlight color (default: `"#ffffff"`)
- `blur?: number` - Blur amount (default: `100`)
- `opacity?: number` - Opacity 0-1 (default: `0.3`)

#### CursorRipple

Ripple effect on click.

- `color?: string` - Ripple color (default: `"#ff00ff"`)
- `size?: number` - Max ripple size (default: `100`)
- `duration?: number` - Animation duration ms (default: `800`)

#### CursorBubble

Bubbles appear on mouse movement.

- `color?: string` - Bubble color (default: `"#00ffff"`)
- `minSize?: number` - Min bubble size (default: `10`)
- `maxSize?: number` - Max bubble size (default: `30`)
- `lifetime?: number` - Bubble lifetime ms (default: `1000`)
- `frequency?: number` - Spawn frequency ms (default: `50`)

#### CursorMagnetic

Cursor attracted to magnetic elements.

- `size?: number` - Cursor size (default: `40`)
- `color?: string` - Cursor color (default: `"#ff6b6b"`)
- `strength?: number` - Magnetic strength 0-1 (default: `0.3`)

Add `data-magnetic` attribute to elements to make them magnetic.

#### CursorParticles

Particle trail following cursor.

- `color?: string` - Particle color (default: `"#ffff00"`)
- `particleCount?: number` - Particles per frame (default: `5`)
- `particleSize?: number` - Particle size (default: `4`)
- `spread?: number` - Spread amount (default: `2`)
- `lifetime?: number` - Particle lifetime frames (default: `60`)

#### CursorFollower ⭐ NEW

Professional dot and circle follower.

- `dotColor?: string` - Dot color (default: `"#ffffff"`)
- `circleColor?: string` - Circle color (default: `"#ffffff"`)
- `dotSize?: number` - Dot size (default: `6`)
- `circleSize?: number` - Circle size (default: `40`)
- `circleDelay?: number` - Circle lag amount (default: `0.08`)

#### CursorNeon ⭐ NEW

Neon glow cursor with screen blend mode.

- `color?: string` - Neon color (default: `"#00ffff"`)
- `size?: number` - Cursor size (default: `30`)
- `glowIntensity?: number` - Glow strength (default: `20`)
- `smoothness?: number` - Movement smoothness (default: `0.12`)

### Background Effects (10 Total)

All backgrounds support `zIndex` prop (default: `-1`) for layering control.

#### BackgroundGrid

CSS grid pattern background.

- `cellSize?: number` - Grid cell size (default: `40`)
- `lineColor?: string` - Grid line color (default: `"#333333"`)
- `opacity?: number` - Grid opacity (default: `0.5`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundGradient

Animated gradient background.

- `colors?: string[]` - Gradient colors (default: `["#667eea", "#764ba2", "#f093fb"]`)
- `speed?: number` - Animation speed seconds (default: `10`)
- `angle?: number` - Gradient angle (default: `-45`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundParticles

Canvas-based floating particles.

- `density?: number` - Number of particles (default: `50`)
- `color?: string` - Particle color (default: `"#ffffff"`)
- `speed?: number` - Movement speed (default: `0.5`)
- `minSize?: number` - Min particle size (default: `1`)
- `maxSize?: number` - Max particle size (default: `3`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundStars

Twinkling stars effect.

- `starCount?: number` - Number of stars (default: `100`)
- `starColor?: string` - Star color (default: `"#ffffff"`)
- `twinkleSpeed?: number` - Twinkle speed (default: `0.02`)
- `minSize?: number` - Min star size (default: `1`)
- `maxSize?: number` - Max star size (default: `3`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundDots

Dot pattern background.

- `dotSize?: number` - Dot size (default: `2`)
- `dotColor?: string` - Dot color (default: `"#888888"`)
- `gap?: number` - Gap between dots (default: `30`)
- `opacity?: number` - Dot opacity (default: `0.5`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundMatrix

Matrix-style falling characters.

- `color?: string` - Character color (default: `"#00ff00"`)
- `fontSize?: number` - Font size (default: `16`)
- `speed?: number` - Fall speed ms (default: `50`)
- `density?: number` - Character density 0-1 (default: `0.95`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundWaves

Animated wave effect.

- `waveColor?: string` - Wave color (default: `"#667eea"`)
- `waveOpacity?: number` - Wave opacity (default: `0.3`)
- `waveCount?: number` - Number of waves (default: `3`)
- `speed?: number` - Animation speed seconds (default: `5`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundRipple

Expanding ripple circles from center.

- `color?: string` - Ripple color (default: `"#667eea"`)
- `rippleCount?: number` - Number of ripples (default: `3`)
- `duration?: number` - Animation duration seconds (default: `4`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundHexagons ⭐ NEW

Animated hexagonal pattern with pulsing effect.

- `hexColor?: string` - Hexagon color (default: `"#667eea"`)
- `hexSize?: number` - Hexagon size (default: `50`)
- `gap?: number` - Gap between hexagons (default: `10`)
- `opacity?: number` - Opacity (default: `0.3`)
- `animationSpeed?: number` - Pulse speed (default: `3`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

#### BackgroundMesh ⭐ NEW

Smooth animated mesh gradient with flowing colors.

- `colors?: string[]` - Mesh colors (default: `["#667eea", "#764ba2", "#f093fb", "#4facfe"]`)
- `speed?: number` - Animation speed (default: `0.5`)
- `complexity?: number` - Mesh complexity (default: `3`)
- `zIndex?: number` - Z-index (default: `-1`)
- `className?: string` - Additional CSS class

## Advanced Usage

### Layering with z-index

```tsx
<div style={{ position: "relative", height: "100vh" }}>
  <BackgroundMesh zIndex={-3} />
  <BackgroundGrid zIndex={-2} opacity={0.3} />
  <BackgroundDots zIndex={-1} opacity={0.2} />
  <YourContent />
</div>
```

### Tree-shaking

Import only what you need:

```tsx
import { CursorGlow } from "react-effects/cursor";
import { BackgroundGrid } from "react-effects/background";
```

### Next.js Usage

```tsx
"use client"; // For Next.js 13+ App Router

import { CursorFollower, BackgroundMesh } from "react-effects";

export default function Page() {
  return (
    <>
      <CursorFollower />
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <BackgroundMesh />
        <main>Your content</main>
      </div>
    </>
  );
}
```

## License

MIT
