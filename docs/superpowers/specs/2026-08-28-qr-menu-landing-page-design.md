# Design Document: Single-File QR Restaurant Menu Landing Page

## Overview
A lightweight, dependency-free, single-file (`index.html`) restaurant menu landing page. Designed for instant loading when customers scan a QR code on a table or wall, even over weak mobile data networks (< 50KB payload).

## Visual Identity: Warm Bistro
- **Color Palette**:
  - Background: Warm Cream (`#FDFBF7`)
  - Primary / Accent: Terracotta (`#C85A32`) & Warm Amber (`#D97706`)
  - Card Background: Pure White (`#FFFFFF`) with subtle soft shadows (`0 2px 8px rgba(0,0,0,0.05)`)
  - Text Primary: Dark Charcoal (`#1C1917`)
  - Text Secondary: Warm Muted Gray (`#78716C`)
  - Focus Ring: High contrast Terracotta outline (`#C85A32`)
- **Typography**: Google Font `Plus Jakarta Sans` loaded with `font-display: swap` + system fallback stack (`system-ui, -apple-system, sans-serif`).
- **Readability**: WCAG AA contrast ratio compliant, optimized for outdoor daylight viewing on mobile devices.

## Architecture & Structure
All code is inlined into `c:\Users\hp\Documents\Projects\qrcode\index.html`:
- Top comment block: Quick guide to editing menu/restaurant data & 3-step free static hosting instructions (GitHub Pages, Netlify, Cloudflare Pages).
- Inline `<style>`: Mobile-first responsive CSS, CSS variables, utility classes, animations, min 44px tap targets.
- Semantic HTML body:
  - `<header>`: Restaurant name, tagline, address, hours, call/WhatsApp CTA buttons, search bar.
  - `<nav class="sticky-nav">`: Horizontal scrolling category pills with active indicators.
  - `<main>`: Grouped category sections (`<section id="category-id">`) with rendered menu item cards.
  - `<aside id="qr-section">`: Self-generated QR code display, current URL text, "Download QR as PNG" button, local vs public URL note.
  - `<footer>`: Restaurant footer and copyright.
- Inline `<script>`:
  - Menu & Restaurant Data Objects (clearly commented with `/* EDIT HERE */`).
  - Menu rendering logic & dynamic section creation.
  - Real-time search filtering logic.
  - IntersectionObserver for sticky category pill highlighting on scroll.
  - QR Code generation (`qrcode.min.js` CDN script with standalone canvas fallback).
  - PNG export logic for QR code download.

## Data Schemas (`EDIT HERE`)
```javascript
const RESTAURANT = {
  name: "La Bella Trattoria",
  tagline: "Authentic Italian Flavors & Handcrafted Pastas",
  phone: "+15550192834",
  whatsapp: "15550192834",
  address: "123 Main Street, Downtown",
  hours: "Mon-Sun: 11:30 AM - 10:00 PM",
  notice: "✨ Chef's Special Menu Available Today",
  currency: "$"
};

const MENU_CATEGORIES = [
  { id: "starters", name: "Starters & Appetizers", icon: "🥗" },
  { id: "mains", name: "Main Dishes", icon: "🍝" },
  { id: "pizzas", name: "Wood-Fired Pizzas", icon: "🍕" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "drinks", name: "Beverages", icon: "🍷" }
];

const MENU_ITEMS = [
  {
    id: "s1",
    categoryId: "starters",
    name: "Truffle Arancini",
    description: "Crispy risotto balls filled with wild mushrooms and mozzarella, truffle aioli.",
    price: 12.50,
    badge: "Popular",
    tags: ["Vegetarian"]
  },
  // ... more items
];
```

## Key Technical Features & Interactions

1. **Sticky Navigation & Active Scroll Tracking**:
   - `position: sticky; top: 0` horizontal container with hide-scrollbar CSS.
   - `IntersectionObserver` observing category `<section>` elements, updating active pill classes with smooth auto-scrolling into view within the pill container.

2. **Real-time Search Filter**:
   - Filter menu items dynamically by name and description matching input term.
   - Show `#no-results` empty state if search query returns 0 matches.

3. **QR Code Generator & PNG Export**:
   - Dependency-light QR generator script (or lightweight CDN loader for `qrcode.js`) rendering into a `<canvas>` element encoding `window.location.href`.
   - "Download QR as PNG" button triggering `canvas.toDataURL("image/png")` download.
   - Text display showing current URL and explicit comment warning about `file://` local preview vs hosted public URL (`https://...`).

4. **Call / WhatsApp Action Buttons**:
   - Wire `tel:${RESTAURANT.phone}` to direct phone dialing.
   - Wire WhatsApp link `https://wa.me/${RESTAURANT.whatsapp}?text=...`.

## Verification & Self-Review
- Checked for placeholders: None.
- Consistency check: Single file requirement met; all components fit within one clean HTML file.
- Outdoor contrast check: Text `#1C1917` on `#FDFBF7` / `#FFFFFF` yields contrast ratio > 12:1.
