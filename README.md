# react-effects

Production-ready React component library for reusable visual effects. Lightweight, tree-shakable, and SSR-safe.

## Features

- 🎯 3 Cursor Effects (Glow, Trail, Dot Ring)
- 🌈 3 Background Effects (Grid, Gradient, Particles)
- 📦 Tree-shakable exports
- 🔒 TypeScript support
- ⚡ Lightweight and performant
- 🚀 Next.js compatible (SSR safe)
- 🎨 Fully customizable via props

## Installation

```bash
npm install react-effects
```

## Usage

### Cursor Effects

```tsx
import { CursorGlow, CursorTrail, CursorDotRing } from "react-effects";

function App() {
  return (
    <>
      <CursorGlow color="#00ffff" size={20} smoothness={0.15} />
      {/* or */}
      <CursorTrail color="#ff00ff" size={8} trailLength={8} />
      {/* or */}
      <CursorDotRing dotSize={8} ringSize={32} color="#ffffff" />
    </>
  );
}
```

### Background Effects

```tsx
import {
  BackgroundGrid,
  BackgroundGradient,
  BackgroundParticles,
} from "react-effects";

function App() {
  return (
    <>
      <BackgroundGrid cellSize={40} lineColor="#333333" opacity={0.5} />
      {/* or */}
      <BackgroundGradient
        colors={["#667eea", "#764ba2", "#f093fb"]}
        speed={10}
      />
      {/* or */}
      <BackgroundParticles density={50} color="#ffffff" speed={0.5} />
    </>
  );
}
```

### Combined Example

```tsx
import { CursorGlow, BackgroundGrid } from "react-effects";

function App() {
  return (
    <div>
      <BackgroundGrid />
      <CursorGlow />
      <h1>Your content here</h1>
    </div>
  );
}
```

## API Reference

### CursorGlow

| Prop         | Type     | Default     | Description      |
| ------------ | -------- | ----------- | ---------------- |
| `color`      | `string` | `"#00ffff"` | Glow color       |
| `size`       | `number` | `20`        | Size in pixels   |
| `smoothness` | `number` | `0.15`      | Smoothness (0-1) |

### CursorTrail

| Prop          | Type     | Default     | Description          |
| ------------- | -------- | ----------- | -------------------- |
| `color`       | `string` | `"#ff00ff"` | Trail color          |
| `size`        | `number` | `8`         | Dot size in pixels   |
| `trailLength` | `number` | `8`         | Number of trail dots |

### CursorDotRing

| Prop       | Type     | Default     | Description     |
| ---------- | -------- | ----------- | --------------- |
| `dotSize`  | `number` | `8`         | Center dot size |
| `ringSize` | `number` | `32`        | Outer ring size |
| `color`    | `string` | `"#ffffff"` | Color           |

### BackgroundGrid

| Prop        | Type     | Default     | Description     |
| ----------- | -------- | ----------- | --------------- |
| `cellSize`  | `number` | `40`        | Grid cell size  |
| `lineColor` | `string` | `"#333333"` | Grid line color |
| `opacity`   | `number` | `0.5`       | Grid opacity    |

### BackgroundGradient

| Prop     | Type       | Default                             | Description                  |
| -------- | ---------- | ----------------------------------- | ---------------------------- |
| `colors` | `string[]` | `["#667eea", "#764ba2", "#f093fb"]` | Gradient colors              |
| `speed`  | `number`   | `10`                                | Animation duration (seconds) |

### BackgroundParticles

| Prop      | Type     | Default     | Description         |
| --------- | -------- | ----------- | ------------------- |
| `density` | `number` | `50`        | Number of particles |
| `color`   | `string` | `"#ffffff"` | Particle color      |
| `speed`   | `number` | `0.5`       | Movement speed      |

## Tree-shaking

Import only what you need:

```tsx
import { CursorGlow } from "react-effects/cursor";
import { BackgroundGrid } from "react-effects/background";
```

## License

MIT
