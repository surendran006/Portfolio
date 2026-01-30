# 3D Spline Setup Guide

## What Was Done

1. **Installed Dependencies**
   - `@splinetool/react-spline` - React component for embedding Spline scenes
   - `@splinetool/runtime` - Runtime library for Spline scenes

2. **Created Hero3D Component** (`src/components/Hero3D.tsx`)
   - Full-screen 3D canvas component
   - Suspense wrapper with loading state
   - Accepts custom scene URL as prop
   - Includes fallback loading animation

3. **Integrated into Hero Section** (`src/App.tsx`)
   - Added as background layer in hero section
   - Applied semi-transparent overlay for text readability
   - Content remains interactive above 3D scene

## Creating Your Custom Spline Scene

### Step 1: Create Spline Account
1. Go to [spline.design](https://spline.design)
2. Sign up for a free account
3. Click "Create New Project"

### Step 2: Design Your Digital Marketing Scene

**Recommended Elements for Digital Marketing:**
- Floating laptop with animated screen
- 3D bar charts and line graphs
- Floating social media icons
- Analytics dashboards
- Abstract geometric shapes representing data flow
- Particles or light effects

**Design Tips:**
- Use camera animations for depth and motion
- Add subtle animations to objects (floating, rotating)
- Use lighting to create atmosphere
- Keep colors aligned with your brand (teal, blue tones)
- Consider performance - avoid too many polygons

**Spline Features to Use:**
- **3D Objects**: Add primitives or import custom models
- **Materials**: Apply gradients and glass effects
- **Animations**: Create loops for continuous motion
- **Camera**: Set up cinematic camera angles
- **Lighting**: Use directional and ambient lights
- **Physics**: Add floating/bouncing effects

### Step 3: Export Your Scene

1. In Spline, click "Export" button (top right)
2. Select "Export for Web"
3. Click "Copy Link" to get your scene URL
4. The URL format will be: `https://prod.spline.design/[YOUR-SCENE-ID]/scene.splinecode`

### Step 4: Update Your Portfolio

Open `src/App.tsx` and find the Hero3D component:

```tsx
<Hero3D sceneUrl="YOUR_SCENE_URL_HERE" />
```

Or update the default URL in `src/components/Hero3D.tsx`:

```tsx
const defaultSceneUrl = 'YOUR_SCENE_URL_HERE';
```

## Performance Optimization

1. **Scene Optimization in Spline:**
   - Limit polygon count (aim for under 100k total)
   - Use low-poly models where possible
   - Optimize textures (1024x1024 or smaller)
   - Limit number of animated objects

2. **Code Optimization:**
   - Scene loads with Suspense boundary
   - Lazy loading built-in
   - Fallback loading state prevents layout shift

## Customization Options

### Adjust Overlay Opacity

In `src/App.tsx`, find this line:
```tsx
<div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
```

Change `/40` to adjust transparency:
- `/30` = More visible 3D scene
- `/50` = More readable text
- `/0` = No overlay (full 3D visibility)

### Change Scene Height

In `src/components/Hero3D.tsx`, modify:
```tsx
<div className="w-full h-screen relative">
```

To:
```tsx
<div className="w-full h-[600px] relative">  // Fixed height
// or
<div className="w-full h-[80vh] relative">    // Percentage of viewport
```

## Troubleshooting

**Scene Not Loading:**
- Verify scene URL is correct
- Check internet connection
- Ensure scene is published in Spline

**Performance Issues:**
- Reduce polygon count in Spline
- Simplify animations
- Remove unnecessary objects

**Text Not Readable:**
- Increase overlay opacity
- Adjust backdrop-blur value
- Ensure proper z-index on text elements

## Alternative: Pre-made Spline Templates

You can also browse Spline's community for pre-made scenes:
1. Go to [spline.design/community](https://spline.design/community)
2. Search for "marketing", "data", "business", or "tech"
3. Click "Remix" on any scene you like
4. Customize it to match your brand
5. Export and use the URL

## Current Setup

The component currently uses a demo Spline scene. Replace it with your custom scene for a unique, branded experience that represents your digital marketing expertise.
