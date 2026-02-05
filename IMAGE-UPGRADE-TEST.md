# Next.js 13 Image Upgrade Test

This document explains how to verify pixel-perfect image rendering when upgrading to Next.js 13.

## What Will Change

- After upgrading to Next.js 13, we'll update `components/cover-image.js` to use `next/legacy/image`
- This ensures images render identically after upgrading to Next.js 13

## Testing Instructions

### Step 1: Save Baseline (BEFORE Upgrading)

**You are here** - Next.js 12 with regular `next/image`

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open the test page:
   ```
   http://localhost:3000/test-images
   ```

3. Wait for images to load (about 1-2 seconds)

4. Click **"Save Baseline"** - this saves measurements to localStorage

5. Click **"Download Baseline"** - this downloads a backup JSON file
   - Save this file somewhere safe (e.g., `image-baseline-before-upgrade.json`)

### Step 2: Upgrade Next.js

```bash
npm install next@13
```

Update `next.config.js` as needed (see main upgrade instructions).

### Step 3: Switch to Legacy Image Component

Update `components/cover-image.js`:

```javascript
import Image from 'next/legacy/image'  // Changed from 'next/image'
```

### Step 4: Verify Pixel-Perfect Match

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open the test page again:
   ```
   http://localhost:3000/test-images
   ```

3. Click **"Load Baseline"** to load the pre-upgrade measurements

4. Click **"Compare to Baseline"** to verify the images match

5. You should see: **✅ All images match baseline perfectly!**

   If you see ❌, check the browser console for details about differences.

## What the Test Measures

For each test image, it captures:
- **Container dimensions**: The outer wrapper size
- **Image dimensions**: The actual `<img>` element size
- **Aspect ratio**: Should be 2:1 (2000×1000)
- **Natural dimensions**: The source image file dimensions
- **Span dimensions**: The Next.js Image wrapper span

All measurements must match exactly for a pixel-perfect result.

## Manual Visual Check

In addition to the automated test, visually inspect:

1. **Homepage**: Check hero post images
   ```
   http://localhost:3000/
   ```

2. **Individual post page**: Check cover images
   ```
   http://localhost:3000/posts/[any-post-slug]
   ```

3. **Archive pages**: Check multiple images
   ```
   http://localhost:3000/archive/issue-one
   ```

Look for:
- No distortion or stretching
- No unexpected whitespace
- Consistent aspect ratios
- Proper object-fit behavior

## Troubleshooting

### Images look different after upgrade

- Verify you completed Step 3: changed to `next/legacy/image` in `components/cover-image.js`
- Make sure you're on Next.js 13+ (run `npm list next` to check)
- Check browser console for warnings
- Clear browser cache and hard reload (Cmd+Shift+R)

### Test shows differences

Check the console output to see which measurements differ:
```javascript
// Open browser console and run:
console.table(measurements)
```

Common issues:
- Browser window size changed between tests
- Images still loading when test ran
- Responsive layout differences due to viewport size

### Reset test

To start fresh:
```javascript
// In browser console:
localStorage.removeItem('image-baseline')
```

Then reload and start from Step 1.

## Cleanup

After successful upgrade verification, you can optionally delete:
- `pages/test-images.js` (the test page)
- `IMAGE-UPGRADE-TEST.md` (this file)

Keep them if you plan future Next.js upgrades.
