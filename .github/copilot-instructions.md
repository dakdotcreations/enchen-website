# Enchen Creative Hub — Copilot Instructions

A **Svelte 5 static portfolio/agency site** with no back-end, no CMS, and no testing framework. All data is hardcoded in page scripts.

## Build & Check Commands

```sh
pnpm dev        # start dev server (Vite)
pnpm build      # production build
pnpm preview    # preview production build
pnpm check      # type-check with svelte-check (run after every change)
```

No test runner is configured. Use `npm run check` to verify types after edits.

## Architecture

- **Routing**: File-based via SvelteKit (`src/routes/`). Pages: `/`, `/about`, `/services`, `/portfolio`, `/testimonials`, `/contact`.
- **Static only**: No `+page.server.ts`, `+layout.server.ts`, `+page.ts`, or API routes. No server-side data loading.
- **No reusable components**: All markup is inlined into individual `+page.svelte` files. Do not create component files unless the user explicitly asks.
- **Data**: Hardcoded arrays in `<script lang="ts">` blocks. No external API calls or CMS.
- **Layout**: `src/routes/+layout.svelte` manages the global nav, footer, custom cursor, mobile menu, and scroll-reveal via `IntersectionObserver`.

## Svelte 5 Runes — Critical Conventions

`runes: true` is enforced globally in `svelte.config.js` for **all** `.svelte` files. This means:

- **Always use runes syntax**:
  ```svelte
  let count = $state(0);
  let { children } = $props();
  let doubled = $derived(count * 2);
  ```
- **Never use** legacy Svelte 3/4 syntax: no `export let`, no `$:` reactive declarations, no `on:click` / `on:` event directives.
- **Event handlers** use the Svelte 5 property style:
  ```svelte
  <button onclick={() => (open = !open)}>Toggle</button>
  <form onsubmit={handleSubmit}>
  ```
- **Slot rendering** uses snippets: `{@render children()}` — not `<slot />`.

## Styling Conventions

- **All styles live in `src/app.css`** — no `<style>` blocks inside `.svelte` files, no CSS Modules, no Tailwind.
- Add new styles to `app.css` and apply them as plain class names in markup.
- Use the existing **CSS custom properties** for all colors and typography:
  ```css
  /* Backgrounds */
  --black: #221E1F;  --dark: #1A1618;  --dark-mid: #2C2729;  --dark-card: #332E30;
  /* Text */
  --text: #161616;   --text-mid: #4A4A4A;  --muted: #888888;
  /* Accents */
  --gold: #C42280;   --gold-light: #D94A9B;
  /* UI */
  --border: #D9D6CF; --light: #EDEAE3; --off-white: #F6F3EE; --white: #FAFAF8;
  ```
- **Fonts**: `Century Gothic` (headings — system font, tight letter-spacing via `letter-spacing: -0.04em`) and `DM Sans` (body/UI — loaded via Google Fonts in `app.html`). The heading font is referenced via the `--font-heading` CSS variable. Do not add additional font imports.
- **Scroll-reveal**: Add `class="reveal"` to elements that should animate in on scroll. The layout's `IntersectionObserver` adds `.visible` automatically.
- **Responsive**: Two breakpoints — `max-width: 1024px` (tablet) and `max-width: 640px` (mobile).

## TypeScript

- `strict: true`. All script blocks use `<script lang="ts">`.
- Keep type annotations minimal — only annotate where the type isn't obvious (e.g., `$state<number | null>(null)`).

## Adapter

`@sveltejs/adapter-auto` — auto-detects Vercel, Netlify, Node, etc. on deploy. No adapter config changes needed for standard deployment targets.
