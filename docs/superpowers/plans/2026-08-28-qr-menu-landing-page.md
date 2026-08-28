# Single-File QR Restaurant Menu Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a zero-dependency, ultra-lightweight (<50KB), single-file `index.html` restaurant menu landing page with inlined CSS, JS, dynamic data rendering, real-time search, sticky category pills, and self-generated QR code export.

**Architecture:** A single self-contained `index.html` file containing HTML structure, custom CSS design system, plain JS data objects, DOM rendering/filtering engine, scroll observer, and Canvas-based QR code download generator.

**Tech Stack:** Vanilla HTML5, Vanilla CSS3, Vanilla JS (ES6+), `qrcode.min.js` (loaded via CDN with inline SVG fallback matrix generator).

## Global Constraints
- Single file deliverable: `index.html` (all CSS in `<style>`, all JS in `<script>`).
- Total payload target: < 50KB excluding Google Fonts.
- Touch target minimum: 44px x 44px for all interactive buttons and pills.
- Accessibility: WCAG AA color contrast, semantic HTML, visible `:focus-visible` outlines.
- Compatibility: Mobile-first, responsive from 320px screens to desktop, works raw or on static hosts.

---

### Task 1: Scaffolding, Top Comment Block, HTML Structure & CSS Design System

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: None
- Produces: HTML structure, `<style>` block with Warm Bistro theme, `<script>` template with `RESTAURANT`, `MENU_CATEGORIES`, and `MENU_ITEMS` arrays.

- [ ] **Step 1: Create `index.html` scaffold with header comment, CSS, and JS data structure**

Write the base HTML file containing:
1. Top instructions block with editing & 3-step deployment guidance.
2. Complete CSS style block with Warm Bistro custom properties (`--bg-main: #FDFBF7`, `--accent-primary: #C85A32`, `--text-main: #1C1917`, etc.), mobile layout, search box, category pills bar, menu grid, card styling, badge tags, and QR modal container.
3. Base HTML structure: `<header>`, `<nav class="sticky-nav">`, `<main id="menu-container">`, `<aside id="qr-section">`, `<footer>`.
4. Editable JS data objects (`RESTAURANT`, `MENU_CATEGORIES`, `MENU_ITEMS`) tagged with `/* EDIT HERE */`.

- [ ] **Step 2: Verify HTML syntax & CSS properties in browser/node environment**

Verify that `index.html` opens cleanly in browser without console syntax errors.

- [ ] **Step 3: Commit Task 1**

```bash
git add index.html
git commit -m "feat: scaffold index.html with Warm Bistro design system and menu data schemas"
```

---

### Task 2: Implement Dynamic Menu Rendering, Category Scrolling & Real-Time Search

**Files:**
- Modify: `index.html` (`<script>` section)

**Interfaces:**
- Consumes: `RESTAURANT`, `MENU_CATEGORIES`, `MENU_ITEMS` objects from Task 1.
- Produces: Dynamic DOM population, scroll observer for sticky pills, search input filtering, Call/WhatsApp button listeners.

- [ ] **Step 1: Write Javascript functions for DOM rendering, filtering & scroll tracking**

Add inside `<script>`:
1. `renderHeader()`: Populates restaurant name, tagline, address, hours, notice, and sets up `tel:` & WhatsApp links.
2. `renderCategoryPills()`: Renders `<button class="pill">` elements dynamically inside `.sticky-nav`.
3. `renderMenu(items)`: Group items by `categoryId`, render section headings with item count badges, render individual item cards with price, badges, tags, and descriptions.
4. `initSearch()`: Attach keyup/input handler to `#search-input` to dynamically filter items by name and description, toggling clear button and `#no-results` container.
5. `initScrollObserver()`: Setup `IntersectionObserver` to automatically highlight active category pill as user scrolls through menu sections.

- [ ] **Step 2: Test rendering and search in browser**

Verify:
- Clicking a category pill scrolls smoothly to that section.
- Typing into search input filters items live and shows empty state on 0 matches.
- Scrolling down highlights the active category pill.

- [ ] **Step 3: Commit Task 2**

```bash
git add index.html
git commit -m "feat: add dynamic menu rendering, scroll observer, and real-time search logic"
```

---

### Task 3: Implement QR Code Generation, PNG Download Export & Final Polish

**Files:**
- Modify: `index.html` (`<aside id="qr-section">` and `<script>` sections)

**Interfaces:**
- Consumes: `window.location.href`, Canvas element.
- Produces: QR code rendering, "Download QR as PNG" button handler, public hosting notice.

- [ ] **Step 1: Integrate QR code generator & PNG download export logic**

Add inside `<script>`:
1. CDN loader script for `qrcode.js` or inlined lightweight QR generator fallback.
2. `generateQRCode()`: Generates QR encoding `window.location.href` into canvas/SVG element inside `#qr-container`.
3. Displays current URL string inside `#qr-url-text`.
4. `initDownloadQR()`: Wire `#btn-download-qr` button to export canvas to PNG image (`menu-qr.png`).
5. Add explicit notice in UI and code comments about local `file://` testing vs hosted `https://` production links.

- [ ] **Step 2: Test QR generation and PNG download**

Verify:
- QR code renders correctly.
- Clicking "Download QR as PNG" downloads a valid PNG image file.
- Total `index.html` file size is under 50KB.
- Zero console errors or warnings.

- [ ] **Step 3: Commit Task 3**

```bash
git add index.html
git commit -m "feat: complete QR code generation, PNG export, and final responsive menu polish"
```
