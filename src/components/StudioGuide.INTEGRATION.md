# Studio Guide integration

## Files

- `public/assets/3d/studio-guide.glb.gz` — gzip-compressed GLB with four embedded animation clips. The component decompresses it in the browser before parsing.
- `public/assets/3d/studio-guide-fallback.png` — transparent static fallback.
- `src/components/StudioGuide.tsx` — lazy Three.js React viewer.
- `public/assets/3d/studio-guide-animation-manifest.json` — clip names and durations.

## Dependency

`three` is declared in `package.json` and `bun.lock`. Install with `bun install` (or `npm install` if using npm) before building.

## Example

```tsx
import { StudioGuide } from '../components/StudioGuide';

<StudioGuide
  animation="Wave - Welcome"
  className="h-[520px] w-full"
/>
```

Supported clips: `Idle - Gentle Breathing`, `Wave - Welcome`, `Present - Showcase`, and `Think - Reflect`.

Keep page headings and CTAs as HTML, with the canvas behind or beside them. Retain the PNG for reduced-motion, unsupported WebGL, mobile/performance fallback and loading states. The GLB is an articulated transform-node rig, not a Mixamo-ready skinned humanoid.
