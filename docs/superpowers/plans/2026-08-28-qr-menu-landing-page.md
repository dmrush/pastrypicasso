# Zero-Budget QR Code Menu Landing Page & Print Studio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a zero-budget, high-performance, vibrant digital restaurant menu landing page with an integrated QR code generator and printable table tent studio.

**Architecture:** Single-page web application using modern HTML5, vanilla CSS (vibrant dark glassmorphism design tokens), and modular vanilla JS with client-side QR generation via QRCode.js.

**Tech Stack:** HTML5, CSS3 (Flexbox/Grid/Glassmorphism/@media print), JavaScript (ES6 Modules/Vanilla), QRCode.js (CDN/local).

## Global Constraints

- **Zero Cost**: Must run on 100% free hosting platforms (GitHub Pages, Netlify, Cloudflare).
- **No Build Tools Required**: Native browser execution without npm/webpack setup required to view.
- **Mobile First**: Fast loading under 1s with low bandwidth consumption.

---

### Task 1: Create Data Structure & Core Design System

**Files:**
- Create: `js/menu-data.js`
- Create: `css/styles.css`

**Interfaces:**
- Produces: `window.menuData` containing restaurant metadata and structured menu items array.
- Produces: CSS CSS variables, reset, layout utility classes, vibrant dark theme tokens.

- [ ] **Step 1: Create `js/menu-data.js` with restaurant details and sample items**

```javascript
const menuData = {
  restaurant: {
    name: "BURGER & BITE",
    tagline: "Flame-Grilled Perfection & Craft Shakes",
    tableNotice: "Scan table code for instant ordering or staff assistance",
    phone: "+1 (555) 019-2834",
    whatsapp: "15550192834",
    address: "42 Street Food Avenue, Downtown",
    hours: "Mon-Sun: 11:00 AM - 11:00 PM"
  },
  categories: [
    { id: "all", label: "All Items", icon: "✨" },
    { id: "burgers", label: "Gourmet Burgers", icon: "🍔" },
    { id: "sides", label: "Crispy Sides", icon: "🍟" },
    { id: "drinks", label: "Craft Drinks & Shakes", icon: "🥤" },
    { id: "desserts", label: "Desserts", icon: "🍦" }
  ],
  items: [
    {
      id: "b1",
      categoryId: "burgers",
      name: "Smoky Bacon & Cheddar Smash",
      price: "$14.99",
      description: "Double Angus smash patty, aged cheddar, crispy smoked bacon, caramelized onions, and signature house sauce on toasted brioche.",
      badges: ["Popular 🔥", "Chef Special ⭐"],
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b2",
      categoryId: "burgers",
      name: "Spicy Inferno Crunch",
      price: "$13.50",
      description: "Crispy fried chicken breast, habanero slaw, pickled jalapeños, and spicy chipotle aioli.",
      badges: ["Spicy 🌶️"],
      image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b3",
      categoryId: "burgers",
      name: "Truffle Mushroom Plant Smash",
      price: "$15.00",
      description: "Beyond Meat patty, sautéed wild mushrooms, vegan truffle mayo, and dairy-free mozzarella.",
      badges: ["Vegan 🌱"],
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "s1",
      categoryId: "sides",
      name: "Loaded Truffle Fries",
      price: "$6.99",
      description: "Hand-cut potato fries tossed in parmesan, white truffle oil, and fresh parsley.",
      badges: ["Popular 🔥"],
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "d1",
      categoryId: "drinks",
      name: "Salted Caramel Monster Shake",
      price: "$7.50",
      description: "Thick vanilla bean gelato, homemade salted caramel, crushed pretzels, whipped cream.",
      badges: ["Chef Special ⭐"],
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = menuData;
}
```

- [ ] **Step 2: Create `css/styles.css` design system with CSS custom variables and vibrant theme styling**

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
  --bg-primary: #0b0f19;
  --bg-secondary: #111827;
  --card-bg: rgba(30, 41, 59, 0.65);
  --card-border: rgba(255, 255, 255, 0.08);
  --accent-orange: #f97316;
  --accent-red: #ef4444;
  --accent-amber: #f59e0b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --radius-lg: 18px;
  --radius-md: 12px;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
  min-height: 100vh;
  padding-bottom: 80px;
}

.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
}
```

- [ ] **Step 3: Commit Task 1**

```bash
git add js/menu-data.js css/styles.css
git commit -m "feat: add menu data structure and core vibrant css design system"
```

---

### Task 2: Build Main Web Page HTML Structure & Layout

**Files:**
- Create: `index.html`
- Modify: `css/styles.css`

**Interfaces:**
- Displays Header hero, sticky search/filter bar, grid containers, footer, and hidden QR modal layout.

- [ ] **Step 1: Build `index.html` structure**

Include semantic markup, hero header, sticky search and category filter bar, container `#menu-grid`, footer, and `#qr-modal`. Include script tag loading `qrcode.min.js`, `js/menu-data.js`, and `js/app.js`.

- [ ] **Step 2: Add CSS grid, flex, and modal styles in `css/styles.css`**

Add CSS for `.hero-header`, `.sticky-filter-bar`, `.category-pill`, `.menu-card`, `.badge`, `.qr-modal-overlay`, and `@media print` rule.

- [ ] **Step 3: Commit Task 2**

```bash
git add index.html css/styles.css
git commit -m "feat: create index.html structure and responsive layout components"
```

---

### Task 3: Implement Interactive JavaScript (App Logic & Filtering)

**Files:**
- Create: `js/app.js`

**Interfaces:**
- Consumes: `window.menuData`
- Renders: Menu cards dynamically inside `#menu-grid`.
- Handlers: Category click filter, search keyup filter, call/whatsapp click.

- [ ] **Step 1: Create `js/app.js` logic**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderCategories();
  renderMenu('all', '');
  setupEvents();
});
```

Implement dynamic item filtering by text search and category ID.

- [ ] **Step 2: Commit Task 3**

```bash
git add js/app.js
git commit -m "feat: add dynamic menu rendering, search, and category filter logic"
```

---

### Task 4: Add QRCode Generator & Print Studio Modal

**Files:**
- Create: `js/qrcode.min.js` (Lightweight QRCode library)
- Modify: `index.html`
- Modify: `js/app.js`
- Modify: `css/styles.css`

**Interfaces:**
- Generates high resolution QR code canvas/SVG for any given URL.
- Provides a printable Table Tent Card layout using CSS `@media print`.

- [ ] **Step 1: Download/Write QRCode.js library in `js/qrcode.min.js`**
- [ ] **Step 2: Connect QR Code Modal logic in `js/app.js`**
- [ ] **Step 3: Add `@media print` rules in `css/styles.css` for 2-sided table tent printing**
- [ ] **Step 4: Commit Task 4**

```bash
git add js/qrcode.min.js index.html js/app.js css/styles.css
git commit -m "feat: integrate QR code generator and printable table tent studio"
```

---

### Task 5: Add Zero-Cost Deployment Guide & Final Verification

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create `README.md` with step-by-step deployment instructions for GitHub Pages and Netlify Drop**
- [ ] **Step 2: Verify application locally in browser**
- [ ] **Step 3: Final Commit**

```bash
git add README.md
git commit -m "docs: add zero-cost deployment guide"
```
