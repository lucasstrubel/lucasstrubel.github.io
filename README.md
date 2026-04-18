# Portfolio

Live site: lucasstrubel.github.io

## About this project

A personal portfolio built from scratch using HTML, CSS, and vanilla JavaScript — without frameworks or templates. My goal was to create a modern, fully responsive site while staying close to the fundamentals. By writing every line myself, I deepened my understanding of how each part works together and strengthened the foundation I rely on when building more complex projects.

## What's inside

- **Responsive layout** — CSS Grid + Flexbox with a mobile hamburger menu
- **Light / dark mode** — toggle in the nav bar; respects `prefers-color-scheme` on first visit and persists the choice via `localStorage`
- **Scroll animations** — IntersectionObserver reveals with staggered card entrances
- **Active nav highlight** — nav link updates automatically as you scroll through sections
- **Project detail pages** — dedicated pages for each featured project under `projects/`
- **Blog** — writing section with individual post pages under `blog/`
- **Dynamic footer** — current year injected via JavaScript
- **Google Fonts** — Inter + Space Grotesk loaded via preconnect for fast rendering

## What I learned

- **Vanilla JS discipline** — managing scroll events, IntersectionObserver, and DOM manipulation without a library makes you appreciate exactly what frameworks abstract away
- **CSS architecture** — structuring a stylesheet with custom properties and utility patterns keeps things maintainable without a preprocessor
- **Theme switching** — applying a `data-theme` attribute at the root and driving all colours through CSS custom properties makes toggling themes a one-liner; the inline script in `<head>` prevents flash of wrong theme on load
- **Performance basics** — using `passive` scroll listeners, `preconnect` for fonts, and lazy reveals via IntersectionObserver instead of scroll event polling
- **Deployment** — publishing on GitHub Pages and understanding how static hosting, caching, and DNS fit together

## Tech

HTML · CSS · JavaScript · GitHub Pages