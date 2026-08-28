# Design Specification: Zero-Budget QR Code Menu Landing Page & Print Studio

**Date:** 2026-08-28  
**Status:** Draft / Pending User Review  
**Author:** Antigravity AI  

---

## 1. Executive Summary & Goals

The goal of this project is to build a zero-budget, ultra-fast, visually captivating digital restaurant menu landing page accessible via QR code scan. 

### Key Requirements:
1. **Zero Budget**: No monthly fees, no subscription requirements, free hosting forever.
2. **Instant Loading & Mobile First**: Optimized for smartphones scanning table QR codes in low-signal environments.
3. **Vibrant & Bold Aesthetic**: Modern dark backdrop (`#0f172a`) with energetic gradients (`#f97316` flame orange, `#ef4444` red, `#eab308` yellow), Google Fonts (`Outfit` & `Plus Jakarta Sans`), and glassmorphic micro-interactions.
4. **Interactive Customer Features**:
   - Sticky category filter pills (Burgers, Mains, Drinks, Desserts, Specials).
   - Instant search bar filtering menu items in real time.
   - Dietary & highlight badges (`Popular 🔥`, `Spicy 🌶️`, `Vegan 🌱`, `Chef Special ⭐`).
   - One-touch WhatsApp / Phone order & call button.
5. **Built-in QR Code & Table Tent Studio**:
   - Embedded QR code generator powered by QRCode.js.
   - Integrated print stylesheet (`@media print`) that formats table-top tent cards with restaurant branding and scanned QR code for instant home/office printing.

---

## 2. Technical Architecture & File Structure

The project is structured as a clean, dependency-free static web app:

```
qrcode/
├── index.html                # Main application structure, layout, & print modal
├── css/
│   └── styles.css            # Core design system, vibrant theme, responsiveness & @media print styles
├── js/
│   ├── menu-data.js          # Editable menu items, categories, & restaurant details
│   ├── app.js                # Dynamic rendering, search, category filter, & modal logic
│   └── qrcode.min.js         # Lightweight zero-dependency QR code generator library
├── assets/
│   └── images/               # Food images and placeholders
└── README.md                 # Step-by-step zero-cost deployment guide (GitHub Pages, Netlify Drop, Cloudflare)
```

---

## 3. UI/UX & Visual Design

### Color Palette
- **Background**: Deep Dark (`#0b0f19`, `#111827`)
- **Card Surface**: Glassmorphic Dark (`rgba(30, 41, 59, 0.7)` with `backdrop-filter: blur(12px)`)
- **Primary Accent**: Flame Orange (`#f97316` to `#ea580c`)
- **Secondary Accent**: Electric Amber (`#f59e0b`)
- **Text Primary**: Crisp White (`#f8fafc`)
- **Text Muted**: Warm Slate (`#94a3b8`)

### Key Components
1. **Hero Header**: Restaurant branding logo/icon, tagline, table indicator badge, and direct call/order CTA buttons.
2. **Search & Filter Bar**: Sticky sub-header with real-time text input filter and horizontal scrolling category tabs.
3. **Menu Card Grid**: Grid layout presenting food image, title, price tag, tags/badges, and detailed description.
4. **QR & Table Tent Generator Studio**:
   - Accessible via Footer link or Admin button.
   - Allows owner to type their published website URL.
   - Instantly renders high-resolution QR code.
   - Offers "Print Table Tent Cards" button which opens a print-formatted page with 2-sided table stand layout.

---

## 4. Zero-Cost Hosting & Deployment Strategy

1. **GitHub Pages (Recommended)**:
   - Free unlimited bandwidth for static sites.
   - Custom URL format: `https://<username>.github.io/<repo-name>`
2. **Netlify Drop**:
   - Drag-and-drop instant publishing without git commands.
3. **QR Code Printing**:
   - Once deployed, open the Built-in QR Studio, paste the live URL, download/print table cards directly.

---

## 5. Verification & Testing Plan

1. **Mobile Responsiveness**: Test on iPhone, Android, and desktop viewports.
2. **Performance**: Verify 100/100 Lighthouse performance score (instant load < 1s).
3. **QR Code Functionality**: Verify generated QR code resolves correctly when scanned by real phone camera.
4. **Print Formatting**: Test browser print preview (`Ctrl+P`) for table tent card alignment.
