# La Foire Aux Cadeaux — Frontend (React + TypeScript + Vite)

Minimal Vite + React + TypeScript frontend for the "La Foire Aux Cadeaux" website.

Quick links
- [package.json](package.json)
- [vite.config.ts](vite.config.ts)
- [tailwind.config.js](tailwind.config.js)
- [src/App.tsx](src/App.tsx)
- [`Layout`](src/Components/Layouts/Layout.tsx)
- [`Header`](src/Components/Layouts/Header.tsx)
- [`Footer`](src/Components/Layouts/Footer.tsx)
- [src/Pages](src/Pages)
- [`useSEO`](src/Hooks/useSEO.ts)
- [src/types/index.ts](src/types/index.ts)
- [`PartnersSection`](src/Components/Sections/PartnersSection.tsx)

Quick start
1. Requirements: Node >= 16 (see [package.json](package.json) engines).
2. Install:
   npm install
3. Dev (HMR):
   npm run dev
4. Build:
   npm run build
5. Preview production build:
   npm run preview
6. Lint:
   npm run lint
7. Type-check:
   tsc -b (also run via npm run build)

Project structure (high level)
- src/
  - App.tsx — route wiring and top-level app ([src/App.tsx](src/App.tsx))
  - Pages/ — pages displayed by router (create pages here)
  - Components/
    - Layouts/ — shared layout components (`Layout`, `Header`, `Footer`)
    - Common/ — small reusable UI bits
    - Sections/ — larger page sections (e.g. [`PartnersSection`](src/Components/Sections/PartnersSection.tsx))
  - Hooks/ — custom hooks (e.g. [`useSEO`](src/Hooks/useSEO.ts))
  - types/ — global TypeScript types ([src/types/index.ts](src/types/index.ts))

Conventions & patterns
- File/component naming: PascalCase for React components and files in `src/Components` and `src/Pages`.
- Components: functional components typed as `React.FC`.
- Routing: Add new pages under [src/Pages](src/Pages) and register them in [src/App.tsx](src/App.tsx) inside the `<Route path="/" element={<Layout/>}>` block.
- Styling: Tailwind CSS utilities. Global CSS entry: [src/index.css](src/index.css).
- Assets: put static images and files in `public/` and reference them with root paths (e.g. `/images/...`).
- Carousel: project uses `swiper` (see [`PartnersSection`](src/Components/Sections/PartnersSection.tsx)).

Adding a page (example)
1. Create `src/Pages/MyPage.tsx` exporting a `React.FC`.
2. Register route in [src/App.tsx](src/App.tsx): add `<Route path="mypage" element={<MyPage/>} />` inside the `Layout` route block.

Notes
- Public copy (pages & `public/`) should not be changed without review.
- Build scripts, TypeScript config and path aliases are project-level constraints — ask before changing them.

For quick reference to SEO helpers and types, see [`useSEO`](src/Hooks/useSEO.ts) and [src/types/index.ts](src/types/index.ts).
