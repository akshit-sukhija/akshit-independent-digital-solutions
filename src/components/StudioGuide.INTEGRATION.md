# Studio Guide integration

## Files

- `public/assets/3d/studio-guide.glb` — web-ready GLB with four embedded animation clips.
- `public/assets/3d/studio-guide-fallback.png` — transparent static fallback.
- `src/components/StudioGuide.tsx` — lazy Three.js React viewer.
- `public/assets/3d/studio-guide-animation-manifest.json` — clip names and durations.

## Dependency

Run `bun add three` (or `npm install three`) before importing and rendering the component. This updates the package manifest and lockfile using the repo's package manager.

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
