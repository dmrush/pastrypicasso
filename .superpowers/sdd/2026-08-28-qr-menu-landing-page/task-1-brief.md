# Task 1 Brief: Scaffolding, Top Comment Block, HTML Structure & CSS Design System

## Files to touch:
- Create: `index.html`

## Requirements:
1. Top instructions comment block at top of `index.html` covering editing menu/restaurant data and 3-step free static hosting (GitHub Pages, Netlify, Cloudflare Pages).
2. Modern Warm Bistro CSS Design System inside `<style>` tag:
   - CSS Variables: `--bg-main: #FDFBF7`, `--card-bg: #FFFFFF`, `--accent-primary: #C85A32`, `--accent-warm: #D97706`, `--text-main: #1C1917`, `--text-muted: #78716C`, `--shadow-sm: 0 2px 8px rgba(0,0,0,0.05)`, `--radius: 12px`, `--focus-ring: 2px solid #C85A32`.
   - Typography: Load `Plus Jakarta Sans` Google Font with `font-display: swap` + system font fallback stack (`system-ui, -apple-system, sans-serif`).
   - Mobile-first responsive layout (320px to desktop), min 44px tap targets for buttons and interactive pills.
   - Design components: Header styling, sticky nav horizontal pill container (`.sticky-nav`), search bar styling (`#search-input`), menu grid, item card styling, badges (`.badge`), dietary tags (`.tag`), QR modal display (`#qr-section`), empty state container (`#no-results`).
3. Semantic HTML Structure:
   - `<header>` with `#res-name`, `#res-tagline`, `#res-address`, `#res-hours`, `#res-notice`, CTA buttons (`#btn-call`, `#btn-whatsapp`).
   - `<nav class="sticky-nav">` with `#category-pills` wrapper.
   - `<main>` with `#search-bar`, `#menu-grid`, `#no-results`.
   - `<aside id="qr-section">` with `#qr-container`, `#qr-url-text`, `#btn-download-qr` button, and local preview warning text.
   - `<footer>` with restaurant info and copyright.
4. Editable JS Data Structure inside `<script>` tagged with `/* EDIT HERE */`:
   - `RESTAURANT` object (name, tagline, phone, whatsapp, address, hours, notice, currency).
   - `MENU_CATEGORIES` array (id, name, icon).
   - `MENU_ITEMS` array (id, categoryId, name, description, price, badge, tags).
5. Test & Commit: Verify `index.html` opens without syntax errors. Commit with message `feat: scaffold index.html with Warm Bistro design system and menu data schemas`.
