# Locus AI Agent-Flow Diagram — Design

## Context

The homepage Locus AI spotlight section (`#locus` in `src/App.jsx`) currently shows a static framed screenshot of the product dashboard plus a thumbnail strip. The goal is to make the spotlight more interactive/visual by adding a "live agentic AI dynamics" element — without adding a backend, an LLM API call, or generic decorative AI filler that doesn't say anything specific about the product.

Decided direction: an animated diagram of Locus AI's *actual* MVP 01 trust flow, already described in existing copy as "Memory → Citation → View Original." This is accurate to the real product, reinforces the founder's ability to explain a system clearly, and reuses the site's existing visual/motion language rather than introducing a new style.

Rejected alternatives:
- Generic decorative AI particles/node-graph background — reads as templated AI-startup filler, says nothing about this specific product.
- A real interactive chat/agent widget — needs a backend function, an API key, ongoing cost/abuse exposure, and a live LLM demo that can embarrass the site if it's slow or wrong. Disproportionate for a portfolio.

## Placement & interaction model

Lives in the existing Locus spotlight section, right-hand panel, where the framed screenshot currently sits. The screenshot stays the **default** view — it's the only real proof the product ships, and removing it in favor of an animation would undercut credibility for anyone who never interacts.

A new pill-tab pair sits above that panel: **Product** | **How it works**, styled identically to the existing MVP 01 / MVP 02 toggle on the left side of the same section (same pill shape, active-state color/shadow treatment, `aria-pressed`). Switching tabs crossfades via the same `AnimatePresence mode="wait"` pattern already used for the MVP tab body and the achievement ticker.

## Visual & content design

5 steps, horizontal row on desktop / stacked column on mobile (`flex-col md:flex-row`, matching other sections' breakpoint convention):

1. **Slack** — read-only ingestion
2. **Gmail** — read-only ingestion
3. **Notion** — read-only ingestion
4. **Memory** — Locus AI's organizational memory layer (central node)
5. **Citation → View Original** — grounded answer traced back to source

(Sources 1–3 feed into node 4, which flows to node 5 — reusing copy already on the site: "Every answer is supported by source evidence: Memory → Citation → View Original carries a user from a retrieved answer straight back to the original Slack, Gmail, or Notion source for verification.")

Nodes are circular, connected by lines — visually extending the existing `LOCUS_ROADMAP` stepper pattern (dot + connecting line + label) that's already in the codebase, but made dynamic: the active step is highlighted, and a small pulse animates along the connector to the next node, echoing the `ping-slow` live-dot treatment already used for "MVP 01 · Live."

Auto-cycles every ~2.5s (close to the existing achievement-ticker's 3s cadence). A caption below the diagram updates per step, e.g.:
- "① Reading Slack, Gmail & Notion — read-only, no exports"
- "② Routed into Locus AI's memory layer"
- "③ Grounded answer, cited back to its original source"

Clicking a node jumps to that step directly and pauses auto-advance — same interaction model as the MVP tab toggle (click pins it; it still auto-rotates otherwise).

## Component architecture & data flow

- New component `LocusFlowDiagram`, defined in `src/App.jsx` alongside the other local helper components (`Brand`, `DeckArrows`, `CountUp`) — same file, same conventions, no new files.
- New constant `FLOW_STEPS` (same shape/spirit as `LOCUS_ROADMAP`): `{ key, label, caption, brand }[]`. Sources reuse existing `BRANDS` entries (`slack` monogram, `gmail` monogram, `notion` logo) — no new assets.
- New pill-tab state (`locusView: 'product' | 'flow'`) alongside the existing `locusTab` state, same `useState`/`useEffect` interval pattern as `achIdx`/`locusTab`.
- Everything is static, local, client-side. No network calls, no backend, no new dependencies — built entirely with Framer Motion, already a project dependency.

## Accessibility, responsiveness, testing

- Respects `prefers-reduced-motion` via Framer Motion's `useReducedMotion` hook: reduced-motion visitors get instant step changes (opacity swap) instead of the traveling pulse animation.
- Toggle buttons get `aria-pressed`, matching the existing MVP tab buttons.
- Responsive via the same breakpoint classes used throughout `App.jsx`.
- No test runner exists in this repo; verification is `npm run build` (type/lint sanity) plus a manual check in the dev server at desktop and mobile widths, consistent with how the rest of the codebase is verified.

## Explicit non-goals

- Not touching the `/case/locus` case study page (`src/pages/CaseStudy.jsx` / `src/data/caseStudies.js`) in this pass. Homepage spotlight is the highest-visibility placement; this can extend there later if wanted.
- Not adding any real AI/LLM integration, backend, or API — this is a simulated visual only.
