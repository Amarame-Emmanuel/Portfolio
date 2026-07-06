# Portfolio — Emmanuel Amarame

A fast, accessible personal portfolio built with **React 19** and **Vite**.

## Features

- Single-page layout: Hero, About, Projects, Contact
- Active-section highlighting in the navbar (IntersectionObserver scroll-spy)
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Accessible: skip link, labelled icon links, keyboard focus styles, `aria-expanded` mobile menu
- Content-driven — copy, links, skills and projects live in one file

## Tech stack

- React 19 + Vite
- `lucide-react` and `react-icons` for iconography
- Plain CSS with custom properties (no UI framework)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server with HMR
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Editing content

All text, links, skills and projects are defined in
[`src/data/content.js`](src/data/content.js). Update that file to change what the
site displays — no component edits required.

## Project structure

```
src/
  components/    UI sections (Navbar, Hero, About, Projects, Contact) + Reveal, SocialLinks
  hooks/         useInView (scroll reveal), useActiveSection (scroll-spy)
  data/          content.js — single source of truth for site copy
  index.css      global styles, design tokens, animations
```
