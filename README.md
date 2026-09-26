# Portfolio

Live site: [lucasstrubel.me](https://lucasstrubel.me)

## About this project

A personal portfolio built from scratch using HTML, CSS, and vanilla JavaScript — without frameworks or templates. My goal was to create a modern, fully responsive site while staying close to the fundamentals. By writing every line myself, I deepened my understanding of how each part works together and strengthened the foundation I rely on when building more complex projects.

## What's inside

- **Responsive layout** — CSS Grid + Flexbox with a mobile hamburger menu
- **Light / dark mode** — toggle in the nav bar; respects `prefers-color-scheme` on first visit and persists the choice via `localStorage`
- **English / German** — language toggle in the nav bar, English by default; English is written in the markup (so crawlers and link previews see it), German UI strings are swapped in from a dictionary in `lang.js`, long-form pages carry paired `data-lang` blocks, and the choice persists via `localStorage`
- **Scroll animations** — IntersectionObserver reveals with staggered card entrances
- **Active nav highlight** — nav link updates automatically as you scroll through sections
- **Project case studies** — detail pages under `projects/`, starting with [Faktura](https://github.com/lucasstrubel/faktura)
- **Blog** — writing section with individual post pages under `blog/`
- **Dynamic footer** — current year injected via JavaScript
- **Self-hosted fonts** — Inter + Space Grotesk served from `assets/fonts/` as variable woff2, so no visitor data goes to Google (GDPR)
- **Link previews & SEO** — English meta description and Open Graph tags with a dedicated preview image, canonical URLs, `sitemap.xml`, `robots.txt` and JSON-LD structured data
- **Accessible cards** — project and blog cards are real links (stretched-link pattern), reachable by keyboard with a visible focus ring
- **Custom 404 page** — served by GitHub Pages for any unknown URL, in both languages
- **Content Security Policy** — no inline scripts or styles, so a strict `script-src 'self'` policy is set via meta tag on every page
- **Accessibility** — skip link, visible focus ring, WCAG AA colour contrast in both themes, `prefers-reduced-motion` support, and a mobile menu with `aria-expanded` that closes on Escape

## What I learned

- **Vanilla JS discipline** — managing scroll events, IntersectionObserver, and DOM manipulation without a library makes you appreciate exactly what frameworks abstract away
- **CSS architecture** — structuring a stylesheet with custom properties and utility patterns keeps things maintainable without a preprocessor
- **Theme switching** — applying a `data-theme` attribute at the root and driving all colours through CSS custom properties makes toggling themes a one-liner; a tiny synchronous `init.js` in `<head>` prevents a flash of the wrong theme or language on load
- **Performance basics** — using `passive` scroll listeners, self-hosted variable fonts, WebP/JPEG images with explicit dimensions to avoid layout shift, and lazy reveals via IntersectionObserver instead of scroll event polling
- **Deployment** — publishing on GitHub Pages and understanding how static hosting, caching, and DNS fit together

## Tech

HTML · CSS · JavaScript · GitHub Pages