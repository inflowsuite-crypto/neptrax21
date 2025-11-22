# Mobile Gradient Background - Testing Guide

## Quick Start Testing

### 1. Visual Testing in Browser

**Desktop Testing:**
```bash
npm run dev
# Open: http://localhost:5173
# Browser window > 1024px: Should see Silk WebGL component
```

**Mobile Testing:**
```bash
npm run dev
# Open browser DevTools (F12)
# Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
# Select mobile device
# Refresh page: Should see gradient background
```

### 2. Manual Device Testing

**Recommended Test Devices:**

| Device | Screen Size | Expected Result |
|--------|-------------|-----------------|
| iPhone SE | 375×667 | Gradient |
| iPhone 12 | 390×844 | Gradient |
| iPhone 14 Pro Max | 430×932 | Gradient |
| iPad Mini | 768×1024 | Gradient |
| iPad Pro 11" | 834×1194 | Gradient |
| iPad Pro 12.9" | 1024×1366 | Gradient |
| Samsung Galaxy S21 | 360×800 | Gradient |
| Samsung Galaxy Tab | 800×1280 | Gradient |
| Desktop 1080p | 1920×1080 | Silk |
| Desktop 1440p | 2560×1440 | Silk |

### 3. Browser DevTools Testing

**Chrome DevTools:**
1. Press F12
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Select device from dropdown or set custom dimensions
4. Verify background changes appropriately

**Throttling Test:**
1. Open DevTools → Performance tab
2. Select "4x slowdown"
3. Verify animations remain smooth
4. Target: 45-60 fps

### 4. Automated Testing Checklist

**Visual Regression:**
- [ ] Screenshot at 375px width (mobile)
- [ ] Screenshot at 768px width (tablet)
- [ ] Screenshot at 1024px width (tablet landscape)
- [ ] Screenshot at 1920px width (desktop)
- [ ] Compare against baseline screenshots

**Performance Testing:**
- [ ] FPS counter shows 60fps on mobile
- [ ] CPU usage < 10% on mobile
- [ ] Memory stable (no leaks)
- [ ] Paint flashing shows minimal repaints
- [ ] No layout shifts (CLS = 0)

**Accessibility Testing:**
- [ ] Reduced motion respected
- [ ] ARIA labels present
- [ ] Color contrast ratios pass WCAG AA
- [ ] Keyboard navigation unaffected
- [ ] Screen reader ignores gradient

**Cross-Browser Testing:**
- [ ] Chrome (90+)
- [ ] Firefox (88+)
- [ ] Safari (14+)
- [ ] Edge (90+)
- [ ] Mobile Safari (iOS 14+)
- [ ] Mobile Chrome (Android 11+)

## Detailed Test Scenarios

### Scenario 1: Mobile Portrait View

**Steps:**
1. Open site on mobile device (or DevTools mobile view)
2. Navigate to home page
3. Observe hero section background

**Expected:**
- Multi-layered gradient visible
- Animated orbs floating smoothly
- No Silk WebGL component
- Smooth 60fps animations
- Text clearly readable

**Viewport:** 375×667 (iPhone)

### Scenario 2: Tablet Landscape View

**Steps:**
1. Open site on tablet in landscape mode
2. Rotate device to landscape
3. Observe hero section background

**Expected:**
- Gradient background remains
- Animations continue smoothly
- Layout adjusts properly
- Touch interactions work

**Viewport:** 1024×768 (iPad landscape)

### Scenario 3: Desktop View

**Steps:**
1. Open site on desktop browser
2. Ensure window width > 1024px
3. Observe hero section background

**Expected:**
- Silk WebGL component visible
- Gradient overlay present
- Smooth silk animations
- No mobile gradient component

**Viewport:** 1920×1080 (Desktop)

### Scenario 4: Resize Transition

**Steps:**
1. Open site on desktop
2. Slowly resize browser from 1920px to 320px
3. Observe background transition at 1024px

**Expected:**
- Smooth transition at breakpoint
- No flickering or layout shift
- Background switches appropriately
- Animations remain smooth

### Scenario 5: Reduced Motion Preference

**Steps:**
1. Enable reduced motion in OS settings:
   - **Windows:** Settings → Ease of Access → Display → Show animations
   - **macOS:** System Preferences → Accessibility → Display → Reduce motion
   - **iOS:** Settings → Accessibility → Motion → Reduce Motion
2. Open site on mobile device
3. Observe hero section

**Expected:**
- Gradient still visible
- All animations disabled
- Static gradient display
- Orbs reduced opacity (0.2)
- Text still readable

### Scenario 6: No JavaScript Fallback

**Steps:**
1. Disable JavaScript in browser:
   - Chrome: DevTools → Settings → Debugger → Disable JavaScript
2. Refresh home page
3. Observe hero section

**Expected:**
- CSS-only gradient displays
- Basic animation via CSS
- Content still accessible
- No JavaScript errors

### Scenario 7: Slow Network (3G)

**Steps:**
1. Open DevTools → Network tab
2. Select "Slow 3G" throttling
3. Refresh page

**Expected:**
- Page loads progressively
- Gradient appears immediately (CSS-based)
- No loading delays for gradient
- Smooth experience even on slow network

### Scenario 8: Touch Device Detection

**Steps:**
1. Use touch-enabled device (iPad, Surface)
2. Open site at 1280px width
3. Observe background

**Expected:**
- Gradient displays (touch detection active)
- Touch interactions work
- Animations smooth
- Parallax works with scroll

## Performance Testing

### FPS Measurement

**Using DevTools:**
1. Open Chrome DevTools
2. Press Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
3. Type "Show frames per second"
4. Enable FPS meter
5. Scroll through home page
6. Verify: 60fps maintained

**Target Metrics:**
- Desktop: 60fps consistently
- Mobile: 45-60fps
- Tablet: 50-60fps

### Paint Flashing

**Using Chrome:**
1. DevTools → More tools → Rendering
2. Enable "Paint flashing"
3. Scroll home page
4. Observe: Minimal green flashing (indicates repaints)

**Expected:**
- Only hero section flashes on scroll
- Other sections remain static
- No full-page repaints

### Layout Shift Testing

**Using Lighthouse:**
1. Open DevTools → Lighthouse tab
2. Select "Desktop" or "Mobile"
3. Run audit
4. Check "Cumulative Layout Shift" score

**Expected:**
- CLS: 0 (no layout shift)
- Performance: 90+ on mobile
- Accessibility: 100

## Accessibility Testing

### Screen Reader Testing

**NVDA (Windows) / VoiceOver (Mac):**
1. Enable screen reader
2. Navigate to home page
3. Tab through hero section

**Expected:**
- Gradient not announced (aria-hidden)
- Text content announced correctly
- Buttons accessible
- Navigation clear

### Keyboard Navigation

**Steps:**
1. Use Tab key to navigate
2. Use Enter to activate buttons
3. Use Shift+Tab to reverse

**Expected:**
- Focus visible at all times
- Skip gradient (not focusable)
- All interactive elements reachable
- Logical tab order maintained

### Color Contrast

**Using DevTools:**
1. Inspect text elements
2. Use "Contrast" in Accessibility panel
3. Verify ratios

**Expected Ratios:**
- White text (#f1f5f9): 7.2:1 (AAA)
- Gray text (#94a3b8): 4.8:1 (AA)
- Blue text (#2563eb): 4.5:1 (AA)

## Browser Compatibility Testing

### Chrome/Edge (Chromium)

**Test:**
- Latest version
- Version -2 (two versions back)
- Version -5 (five versions back)

**Focus Areas:**
- Mix blend modes
- CSS animations
- Touch events

### Firefox

**Test:**
- Latest version
- ESR (Extended Support Release)

**Focus Areas:**
- Radial gradients
- Animation performance
- Scroll performance

### Safari (Desktop & iOS)

**Test:**
- Safari 16+ (macOS)
- Safari 15+ (iOS)

**Focus Areas:**
- Backdrop filter fallback
- Touch detection
- Smooth scrolling

### Edge (Legacy)

**Test:**
- Edge 18 (if needed for legacy support)

**Expected:**
- Graceful degradation
- Static gradient
- No animations

## Debug Scenarios

### Issue: Gradient not displaying

**Debug Steps:**
1. Open console (F12)
2. Check for errors
3. Verify `MobileGradientBackground` component loaded
4. Check `isMobile` state value
5. Inspect DOM: Look for `.mobile-gradient-bg` element

**Console Test:**
```javascript
// In browser console
console.log(window.innerWidth);  // Should be ≤1024
console.log('ontouchstart' in window);  // true on touch devices
```

### Issue: Poor performance

**Debug Steps:**
1. Open Performance tab
2. Record 5 seconds of scrolling
3. Analyze flamechart
4. Check for long tasks (>50ms)
5. Check GPU usage

**Solutions:**
- Reduce blur radius
- Disable parallax
- Simplify animations

### Issue: Silk showing on mobile

**Debug Steps:**
1. Check device width: `console.log(window.innerWidth)`
2. Check `isMobile` value in React DevTools
3. Verify conditional rendering logic
4. Check CSS media query fallback

**Console Test:**
```javascript
// Should return true on mobile
const isMobile = window.innerWidth <= 1024 ||
  ('ontouchstart' in window && window.innerWidth <= 1280);
console.log('Is Mobile:', isMobile);
```

## Regression Testing

**Before Each Release:**

1. Visual comparison against baseline
2. Performance benchmark comparison
3. Accessibility audit results
4. Browser compatibility matrix
5. Device testing matrix

**Baseline Screenshots:**
Store screenshots at key breakpoints:
- 375px (mobile)
- 768px (tablet portrait)
- 1024px (tablet landscape)
- 1920px (desktop)

## Automated Testing Scripts

### Playwright Test Example

```javascript
// tests/gradient.spec.js
test('displays gradient on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:5173');

  const gradient = await page.locator('.mobile-gradient-bg');
  await expect(gradient).toBeVisible();

  const silk = await page.locator('canvas');
  await expect(silk).not.toBeVisible();
});

test('displays Silk on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173');

  const silk = await page.locator('canvas');
  await expect(silk).toBeVisible();
});
```

### Performance Test Example

```javascript
// tests/performance.spec.js
test('maintains 60fps on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:5173');

  const fps = await page.evaluate(() => {
    return new Promise((resolve) => {
      let frames = 0;
      const start = performance.now();

      function count() {
        frames++;
        if (performance.now() - start < 1000) {
          requestAnimationFrame(count);
        } else {
          resolve(frames);
        }
      }

      requestAnimationFrame(count);
    });
  });

  expect(fps).toBeGreaterThan(45);  // At least 45fps
});
```

## Sign-Off Checklist

Before marking as production-ready:

- [ ] All test scenarios passed
- [ ] Performance metrics met
- [ ] Accessibility audit passed
- [ ] Cross-browser testing completed
- [ ] Mobile device testing completed
- [ ] No console errors
- [ ] Build successful
- [ ] Documentation complete
- [ ] Code review approved
- [ ] QA sign-off

---

**Last Updated:** 2025-11-22
**Status:** Ready for Testing
**Priority:** High
