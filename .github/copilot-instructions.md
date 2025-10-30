## Goal
Help AI coding agents be productive in the `foire-aux-cadeaux-site` repository by describing the architecture, developer workflows, conventions, and concrete examples.

## Quick facts
- Framework: React + TypeScript + Vite (see `package.json`, `vite.config.ts`).
- Router: `react-router-dom` (routes wired in `src/App.tsx`).
- Styling: Tailwind CSS; entry: `src/index.css` and `tailwind.config.js`.
- Build scripts: `npm run dev` (Vite dev server), `npm run build` (runs `tsc -b` then `vite build`), `npm run preview` (vite preview), `npm run lint` (ESLint).
- Node requirement: >=16 (see `package.json.engines`).

## Big picture / architecture
- Single-page app with a top-level `Layout` component that wraps routes (`src/Components/Layouts/Layout.tsx`).
- Pages live under `src/Pages/*` and are attached to routes in `src/App.tsx`.
- Reusable UI pieces are under `src/Components/` split into `Common`, `Layouts`, and `Sections` — follow this separation when adding new UI code.
- Global types live in `src/types/index.ts` and hooks in `src/Hooks/` (e.g. `useSEO.ts`).

## Important patterns & conventions (do these exactly)
- File/Component naming: PascalCase for React components and files under `src/Components` and `src/Pages` (e.g. `PartnersSection.tsx`, `Contact.tsx`).
- Components use React functional components and TypeScript `React.FC` in existing code — prefer consistent typing when adding new components.
- Routing: Add new pages in `src/Pages` and register routes inside `src/App.tsx` under the `<Route path="/" element={<Layout/>}>` block.
- CSS: Use Tailwind utility classes. Keep global styles in `src/index.css` / `App.css`.
- Assets: static files (images, manifest) live in `public/` and are referenced at root paths like `/images/...`.
- Carousel: Project uses `swiper` v12 — imports come from `swiper/react` and `swiper/modules` (see `src/Components/Sections/PartnersSection.tsx`).

## Developer workflows / commands
- Start dev server (fast feedback + HMR): `npm run dev` (add `-- --host` to expose on network).
- Build: `npm run build` (runs TypeScript build then Vite production build).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (project has `eslint.config.js`).
- Type-checking: `tsc -b` is invoked in `build` script; run manually for full checks.

## Examples (copy/paste friendly)
- Add a new page:
  1. Create `src/Pages/MyPage.tsx` (export default React.FC component).
  2. Register route in `src/App.tsx`: `<Route path="mypage" element={<MyPage/>} />` inside the `Layout` route block.

- Use Swiper modules (pattern used in `PartnersSection.tsx`):
  - import { Swiper, SwiperSlide } from 'swiper/react'
  - import modules from 'swiper/modules' and pass `modules={[Autoplay, Navigation]}`

## Files to inspect for context
- `package.json`, `vite.config.ts`, `tailwind.config.js`, `tsconfig.json` (path aliases exist but code imports mostly relative paths), `src/App.tsx`, `src/Components/Layouts/Layout.tsx`, `src/Pages/*`.

## What not to change without human confirmation
- Public-facing copy (content under `src/Pages` and `public/`) unless the change is minor.
- Build scripts and `tsconfig` settings are project-level constraints (ask before changing `target`, `paths`, or `moduleResolution`).

If anything above is unclear or you need more examples (route creation, component template, or adding Tailwind utilities), say which area to expand and I will update this file.
