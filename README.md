# UI starter with Astro

A modern, performance-first landing page built with **Astro**, **Tailwind CSS**, and a scalable frontend architecture.  
Designed to support static content by default with optional client-side interactivity when needed.

---

## Tech Stack

### Core Platform

- **Astro** – Static-first framework with partial hydration
- **Vite** – Fast dev server and build tool (via Astro)

### Styling & UI

- **Tailwind CSS v4** – Utility-first styling
- **@tailwindcss/vite** – Native Tailwind integration with Vite
- **tailwindcss-animate / tw-animate-css** – Animation utilities
- **class-variance-authority** – Variant-driven component styling
- **clsx / tailwind-merge** – Conditional classes and conflict resolution

### Interactivity (Optional)

- **Vue 3** – Enabled for interactive islands when required
- **@astrojs/vue** – Astro integration for Vue
- **@vueuse/core** – Composable utilities for browser APIs and state helpers

> Note: Vue is integrated but not required for all pages. Astro renders static HTML by default.

---

## Forms & Validation

- **vee-validate** – Form state management
- **zod** – Schema-based validation
- **@vee-validate/zod** – Zod adapter for vee-validate
- **validator** – Utility validation for email, phone numbers, and strings

---

## Data & Content

- **country-state-city** – ISO-based country, state, and city datasets
- **astro-seo** – SEO metadata management
- **astro-icon** – Icon rendering for Astro
- **lucide-vue-next** – SVG icon set
- **swiper** – Touch-friendly sliders and carousels

---

## Project Structure

```txt
src/
├─ pages/          # Route-based pages
├─ layouts/        # Layout wrappers
├─ components/     # Reusable UI components
├─ styles/         # Global styles (Tailwind)
└─ content/        # Static content collections
```

```bash
npm run dev      Start development server
npm run build    Build for production
npm run preview  Preview production build
```

## Versioning

Current version: 0.0.1
Semantic versioning will be applied as features stabilize.
