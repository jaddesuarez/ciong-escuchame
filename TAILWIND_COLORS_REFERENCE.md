# Tailwind v4 Custom Colors Reference

This document lists all the custom Tailwind classes available in your project.

## Configuration

All colors are now configured in `src/styles/global.css` using the Tailwind v4 `@theme` directive.

## Available Custom Colors

### Brand Colors

| Color | Hex Value | Tailwind Class Examples |
|-------|-----------|-------------------------|
| Yellow | `#FDDA59` | `bg-yellow`, `text-yellow`, `border-yellow`, `ring-yellow` |
| Pink | `#E6007E` | `bg-pink`, `text-pink`, `border-pink`, `ring-pink` |
| Blue | `#007BC4` | `bg-blue`, `text-blue`, `border-blue`, `ring-blue` |
| Gray Light | `#F8F8F8` | `bg-gray-light`, `text-gray-light`, `border-gray-light` |

## Usage Examples

### Background Colors
```html
<div class="bg-yellow">Yellow background</div>
<div class="bg-pink">Pink background</div>
<div class="bg-blue">Blue background</div>
<div class="bg-gray-light">Light gray background</div>
```

### Text Colors
```html
<p class="text-yellow">Yellow text</p>
<p class="text-pink">Pink text</p>
<p class="text-blue">Blue text</p>
```

### Border Colors
```html
<div class="border border-yellow">Yellow border</div>
<div class="border-2 border-pink">Pink border</div>
```

### With Opacity
```html
<div class="bg-yellow/50">Yellow background at 50% opacity</div>
<p class="text-pink/75">Pink text at 75% opacity</p>
```

### Hover States
```html
<button class="bg-yellow hover:bg-pink">Hover me</button>
<a class="text-blue hover:text-pink">Hover link</a>
```

## Direct CSS Variable Access

You can also use the CSS variables directly in custom styles:

```css
.custom-element {
  background: var(--color-yellow);
  color: var(--color-pink);
  border-color: var(--color-blue);
}
```

## Migration Complete

All hardcoded hex colors (e.g., `bg-[#FDDA59]`) have been replaced with proper Tailwind classes.

### Files Updated:
- ✅ `src/pages/index.astro`
- ✅ `src/components/BarriersSection.astro`
- ✅ `src/components/ResourceCards.astro`
- ✅ `src/components/ContactSection.astro`
- ✅ `src/layouts/Layout.astro` (cleaned up old conflicting variables)
- ✅ `src/styles/global.css` (configured with @theme directive)

### Old Config Removed:
- `tailwind.config.mjs` is no longer needed and can be deleted

## Font Family

Custom sans-serif font stack is also configured:
```
Inter, system-ui, -apple-system, sans-serif
```

Use with: `font-sans` (this is the default in your project)

