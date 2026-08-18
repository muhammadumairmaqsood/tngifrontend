# Think and Grow Website

Official website codebase for Think and Grow International School.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Vitest

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and Run

```sh
npm install
npm run dev
```

The app runs on the local Vite dev server (default: `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

- `src/pages` - Route-level pages
- `src/components` - Reusable UI and layout components
- `src/config/siteContent.ts` - Central content configuration for embeds and document links
- `src/hooks` - Shared app hooks

## Routing

Main routes are defined in `src/App.tsx`, including:

- `/` Home
- `/about` About
- `/programmes` Programmes
- `/admissions` Admissions
- `/resources` Resources
- `/contact` Contact
- `/careers` Careers
- `/admin` Admin

## Content Management (Important)

The single source of truth for website embed links and managed external content is:

- `src/config/siteContent.ts`

If you need to update forms, maps, videos, policies, handbooks, or other embedded resources, edit that file.

Detailed instructions are available in:

- `docs/CONTENT_MANAGEMENT.md`

## Documentation

- `docs/CONTENT_MANAGEMENT.md` - How to edit embeds, links, and content entries safely

## Legacy Product Document

The original PRD is retained for historical reference only:

- `Think-and-Grow-Website-PRD.md`

It is archived and should not be treated as the source of truth for implementation decisions.
