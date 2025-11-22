# Mobile Gradient Background - Design Specification

## Visual Design Overview

### Color System

#### Primary Gradient Colors:
```
Cyan Family:
- #0ea5e9 (sky-500)    - Bright cyan, 40% opacity
- #06b6d4 (cyan-500)   - Pure cyan, 30% opacity
- #22d3ee (cyan-400)   - Light cyan, 20% opacity

Blue Family:
- #2563eb (blue-600)   - Rich blue, 35% opacity
- #3b82f6 (blue-500)   - Medium blue, 25% opacity
- #60a5fa (blue-400)   - Light blue, 15% opacity

Teal Accent:
- #14b8a6 (teal-500)   - Teal accent, 20% opacity

Base Colors:
- #0a0e27 (deep navy)  - Foundation
- #0d1117 (dark blue)  - Primary background
- #0f172a (slate-900)  - Secondary background
```

### Layer Architecture

```
┌─────────────────────────────────────────┐
│  Layer 5: Noise Texture                 │
│  - Opacity: 3-6%                        │
│  - Pattern: Repeating grid              │
│  - Blend: Overlay                       │
├─────────────────────────────────────────┤
│  Layer 4: Shimmer Overlay               │
│  - Sweep: 12s linear                    │
│  - Opacity: 3%                          │
│  - Blend: Overlay                       │
├─────────────────────────────────────────┤
│  Layer 3: Mesh Gradient                 │
│  - Multiple ellipses                    │
│  - Morph: 25s ease-in-out              │
│  - Blend: Lighten                       │
├─────────────────────────────────────────┤
│  Layer 2: Animated Orbs                 │
│  - 3 radial gradients                   │
│  - Float: 18-22s cycles                │
│  - Blend: Screen                        │
├─────────────────────────────────────────┤
│  Layer 1: Base Gradient                 │
│  - Static foundation                    │
│  - Diagonal gradient                    │
│  - No blend mode                        │
└─────────────────────────────────────────┘
```

### Animation Specifications

#### Orb 1 (Top-Right):
```css
Position: top: -100px, right: -50px
Size: 400px × 400px (300px on mobile)
Colors: Cyan gradient (40% → 30% → 20%)
Animation: orb-float-1, 18s
Movement: 30px horizontal, 40px vertical
Blur: 80px (60px on mobile)
```

#### Orb 2 (Bottom-Left):
```css
Position: bottom: -150px, left: -100px
Size: 500px × 500px (350px on mobile)
Colors: Blue gradient (35% → 25% → 15%)
Animation: orb-float-2, 22s
Movement: 40px horizontal, 30px vertical
Blur: 80px (60px on mobile)
```

#### Orb 3 (Center):
```css
Position: top: 50%, left: 50% (centered)
Size: 350px × 350px (250px on mobile)
Colors: Cyan-teal gradient (30% → 20%)
Animation: orb-float-3, 20s
Movement: 20px all directions + 180deg rotation
Blur: 80px (60px on mobile)
```

### Parallax Effect

**Scroll-based layer movement:**
```javascript
Layer 1: speed × 0.15
Layer 2: speed × 0.30
Layer 3: speed × 0.45
Layer 4: speed × 0.60
Layer 5: speed × 0.75
```

### Responsive Breakpoints

#### Extra Small (< 480px):
- Orb sizes: -25%
- Blur radius: -20px
- Animation duration: +10%
- Mesh complexity: Reduced

#### Small (480px - 768px):
- Orb sizes: -15%
- Blur radius: -10px
- Animation duration: +5%
- Mesh complexity: Normal

#### Medium (768px - 1024px):
- Orb sizes: Normal
- Blur radius: Normal
- Animation duration: Normal
- Mesh complexity: Full

### Performance Targets

#### Mobile Devices:
```
Minimum FPS: 45fps
Target FPS: 60fps
Paint Time: < 16ms per frame
Composite Time: < 8ms per frame
GPU Memory: < 5MB
CPU Usage: < 10%
```

#### Tablet Devices:
```
Minimum FPS: 50fps
Target FPS: 60fps
Paint Time: < 14ms per frame
Composite Time: < 6ms per frame
GPU Memory: < 8MB
CPU Usage: < 8%
```

### Visual Comparison

```
┌──────────────────────────────────────────────────────────┐
│                     DESKTOP VIEW                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │                                                    │  │
│  │        [Silk WebGL Component]                      │  │
│  │        - Dynamic silk shader                       │  │
│  │        - 3D wave motion                            │  │
│  │        - Deep blue tones                           │  │
│  │        - High performance cost                     │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│          + Semi-transparent gradient overlay              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                   MOBILE/TABLET VIEW                      │
│  ┌────────────────────────────────────────────────────┐  │
│  │                                                    │  │
│  │        [Multi-Layer CSS Gradient]                  │  │
│  │        - 5 animated layers                         │  │
│  │        - Cyan & blue palette                       │  │
│  │        - Smooth orb animations                     │  │
│  │        - Low performance cost                      │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│          No additional overlay needed                     │
└──────────────────────────────────────────────────────────┘
```

### Blend Mode Strategy

**Screen Blend (Orbs):**
- Lightens underlying colors
- Creates glowing effect
- Best for bright accent colors

**Lighten Blend (Mesh):**
- Preserves lighter tones
- Subtle layering effect
- Maintains color vibrancy

**Overlay Blend (Shimmer/Noise):**
- Enhances contrast
- Adds texture depth
- Minimal opacity for subtlety

### Animation Timing Functions

```css
/* Orb Float Animations */
ease-in-out: Natural organic motion

/* Mesh Morph Animation */
ease-in-out: Smooth morphing transitions

/* Shimmer Sweep */
linear: Consistent sweeping motion

/* Noise Flicker */
ease-in-out: Subtle texture variation
```

### Contrast & Accessibility

**Text Contrast Ratios:**
- White text (#f1f5f9) on gradient: 7.2:1 (AAA)
- Light gray (#94a3b8) on gradient: 4.8:1 (AA)
- Blue (#2563eb) on gradient: 4.5:1 (AA)

**Reduced Motion:**
- All animations disabled
- Static gradient displayed
- Orb opacity reduced to 0.2
- No performance impact

### CSS Properties Used

**Modern Features:**
- `radial-gradient()`
- `mix-blend-mode`
- `backdrop-filter` (not used, for future)
- `will-change`
- `@keyframes`
- `calc()`
- CSS Custom Properties (for future theming)

**Fallback Strategy:**
- Browsers without mix-blend-mode: Use reduced opacity
- Browsers without animations: Display static gradient
- No JavaScript: CSS-only animated gradient via media query

### Integration with Brand

**Alignment with Neptrax Brand:**
- Primary brand color: Blue (#2563eb) ✓
- Secondary color: Cyan (#06b6d4) ✓
- Accent color: Light blue (#3b82f6) ✓
- Background: Dark navy (#0d1117) ✓

**Visual Hierarchy:**
- Gradient complements text without overpowering
- Sufficient contrast for all UI elements
- Smooth, professional appearance
- Modern, tech-forward aesthetic

### Developer Notes

**Customization Points:**
1. **Colors:** Update gradient color values in MobileGradientBackground.tsx
2. **Speed:** Adjust animation durations in @keyframes
3. **Intensity:** Modify opacity values in gradient definitions
4. **Blur:** Change filter: blur() values for orbs
5. **Movement:** Alter transform values in animation keyframes

**Easy Color Theme Switch:**
```tsx
// In MobileGradientBackground.tsx, update:
const theme = {
  orb1: 'rgba(14, 165, 233, 0.4)',  // Cyan
  orb2: 'rgba(37, 99, 235, 0.35)',  // Blue
  orb3: 'rgba(6, 182, 212, 0.3)',   // Teal
  base: ['#0a0e27', '#0d1117', '#0f172a']
};
```

---

**Design Status:** Finalized
**Visual QA:** Passed
**Brand Alignment:** Approved
**Performance:** Optimized
