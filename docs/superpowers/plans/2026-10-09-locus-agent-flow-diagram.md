# Locus AI Agent-Flow Diagram Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an animated, auto-cycling diagram of Locus AI's real MVP 01 trust flow (Slack/Gmail/Notion → Memory → Citation) to the homepage Locus spotlight section, toggleable against the existing product screenshot.

**Architecture:** One new self-contained component (`LocusFlowDiagram`) plus one new data constant (`FLOW_STEPS`), added to `src/App.jsx` alongside the file's existing local helper components. A new pill-tab toggle (`Product` / `How it works`) in the Locus spotlight's right-hand panel swaps between the existing screenshot block and the new diagram, via the same `AnimatePresence` crossfade pattern already used elsewhere in the file.

**Tech Stack:** React 19, Framer Motion 12 (already a dependency — adds `useReducedMotion`, nothing new installed), Vite 8. No backend, no new dependencies, no test runner (repo has none — verification is `npm run build` + manual browser check, matching how the rest of this codebase is verified).

## Global Constraints

- No new npm dependencies — build entirely with `framer-motion` (already installed) and existing local helpers (`Brand`, `C`, `GRAD`).
- No new files — this codebase keeps the entire homepage in `src/App.jsx`; follow that convention.
- No backend, no network calls, no API keys — everything is static, local, client-side data (`FLOW_STEPS`).
- Must respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion` hook.
- The existing product screenshot stays the **default** view in the toggle — never auto-switch away from it.
- Reuse existing `BRANDS` entries for Slack/Gmail/Notion icons — do not add new logo assets.
- Match existing code style exactly: inline `style={{...}}` objects, no CSS-in-JS libraries, same pill-button visual language as the `LOCUS_MVPS` toggle (`src/App.jsx:813-836`).

---

### Task 1: Add `FLOW_STEPS` data and the `LocusFlowDiagram` component

**Files:**
- Modify: `src/App.jsx:2` (import)
- Modify: `src/App.jsx:371` (insert new const + component directly after the existing `LOCUS_ROADMAP` block, which ends at line 371 with `];`)

**Interfaces:**
- Consumes: module-scope `C` (color tokens, defined earlier in the file), `Brand` component (defined earlier in the file, props `{ id, size, radius }`), `motion`/`AnimatePresence` (already imported).
- Produces: `FLOW_STEPS` (array of `{ key, label, brand, color, caption }`) and `LocusFlowDiagram` (a zero-prop component rendering the full interactive diagram: node row + caption). Task 2 imports nothing new — it just renders `<LocusFlowDiagram/>`.

- [ ] **Step 1: Add `useReducedMotion` to the framer-motion import**

In `src/App.jsx`, line 2, change:

```js
import { motion, AnimatePresence, useInView } from 'framer-motion';
```

to:

```js
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
```

- [ ] **Step 2: Insert `FLOW_STEPS` and `LocusFlowDiagram` after the `LOCUS_ROADMAP` block**

Find this existing block (ends at line 371):

```js
const LOCUS_ROADMAP = [
  { key: 'foundation', label: 'Foundation', status: 'done',    color: '#0F766E' },
  { key: 'mvp01',       label: 'MVP 01',     status: 'live',    color: '#047857' },
  { key: 'mvp02',       label: 'MVP 02',     status: 'active',  color: '#7C3AED' },
  { key: 'vision',      label: 'Vision',     status: 'planned', color: '#6B6775' },
];
```

Immediately after its closing `];`, insert:

```js

/* Agent-flow diagram for the Locus spotlight's "How it works" tab — animates
   the real MVP 01 trust flow already described in copy: sources feed the
   memory layer, which answers with a citation back to the original source. */
const FLOW_STEPS = [
  { key: 'slack',    label: 'Slack',    brand: 'slack',  color: '#4A154B', caption: 'Reading Slack — read-only, no exports' },
  { key: 'gmail',    label: 'Gmail',    brand: 'gmail',  color: '#EA4335', caption: 'Reading Gmail — read-only, no exports' },
  { key: 'notion',   label: 'Notion',   brand: 'notion', color: '#7C3AED', caption: 'Reading Notion — read-only, no exports' },
  { key: 'memory',   label: 'Memory',   brand: null,     color: '#4F46E5', caption: "Routed into Locus AI's organizational memory layer" },
  { key: 'citation', label: 'Citation', brand: null,     color: '#047857', caption: 'Grounded answer, cited back to its original source' },
];

function LocusFlowDiagram() {
  const [step, setStep] = useState(0);
  const pausedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => {
      if (!pausedRef.current) setStep(i => (i + 1) % FLOW_STEPS.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const handlePick = i => {
    setStep(i);
    pausedRef.current = true;
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px' }}>
        {FLOW_STEPS.map((s, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <div key={s.key} style={{ display: 'flex', alignItems: 'center', flex: i < FLOW_STEPS.length - 1 ? 1 : '0 0 auto' }}>
              <button type="button" onClick={() => handlePick(i)} aria-label={`Show step: ${s.label}`} aria-pressed={active}
                style={{
                  flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                }}>
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: active ? '34px' : '26px', height: active ? '34px' : '26px', borderRadius: '50%',
                  background: active || done ? s.color : '#FFFFFF',
                  border: `2px solid ${s.color}`,
                  transition: 'width 0.25s, height 0.25s, background 0.25s',
                  boxShadow: active ? `0 0 0 4px ${s.color}22` : 'none',
                }}>
                  {s.brand ? <Brand id={s.brand} size={active ? 16 : 13}/> : <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: active || done ? '#fff' : s.color }}/>}
                </span>
                <span style={{ fontSize: '0.5625rem', fontWeight: 700, color: active ? s.color : C.subtle, textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{s.label}</span>
              </button>
              {i < FLOW_STEPS.length - 1 && (
                <div style={{ position: 'relative', flex: 1, height: '2px', minWidth: '12px', marginBottom: '16px', background: C.border, overflow: 'hidden', borderRadius: '2px' }}>
                  {!reduceMotion && i === step && (
                    <motion.span
                      initial={{ left: '-20%' }} animate={{ left: '100%' }}
                      transition={{ duration: 0.9, ease: [0.4, 0, 0.6, 1] }}
                      style={{ position: 'absolute', top: '-2px', width: '10px', height: '6px', borderRadius: '3px', background: s.color }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ minHeight: '34px', marginTop: '14px' }}>
        <AnimatePresence mode="wait">
          <motion.p key={step}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
            transition={{ duration: 0.25 }}
            style={{ fontSize: '0.8125rem', color: C.muted, lineHeight: 1.6, textAlign: 'center' }}>
            {FLOW_STEPS[step].caption}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify the build succeeds**

Run: `npm run build`
Expected: `✓ built in ...ms` with no errors. (The new component is unused at this point — that's fine; `vite build` runs no lint step, so an unused top-level function does not fail the build.)

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "Add Locus agent-flow diagram component (not yet wired into UI)"
```

---

### Task 2: Wire the Product/How-it-works toggle into the Locus spotlight panel

**Files:**
- Modify: `src/App.jsx:611` (add `locusView` state next to `locusTab`)
- Modify: `src/App.jsx:911-939` (replace the "RIGHT: framed screenshot" block with a toggle + conditional panel)

**Interfaces:**
- Consumes: `LocusFlowDiagram` and `FLOW_STEPS` from Task 1; existing `GRAD`, `C`, `AnimatePresence`, `motion`, `Link` (all already in scope in `App()`).
- Produces: final user-facing feature. No later task depends on this.

- [ ] **Step 1: Add the `locusView` state**

In `src/App.jsx`, line 611, change:

```js
  const [locusTab, setLocusTab] = useState(0);
```

to:

```js
  const [locusTab, setLocusTab] = useState(0);
  const [locusView, setLocusView] = useState('product');
```

- [ ] **Step 2: Replace the framed-screenshot block with the toggle + conditional panel**

Find this exact block (`src/App.jsx:911-939`):

```js
              {/* ── RIGHT: framed screenshot ── */}
              <div style={{ flex: '1 1 420px' }}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 20px 48px rgba(20,18,38,0.14)', background: '#FFFFFF' }}>
                  <div style={{ display: 'flex', gap: '6px', padding: '10px 14px', borderBottom: `1px solid ${C.border}`, background: '#FAFAFC' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#F87171' }}/>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FBBF24' }}/>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#34D399' }}/>
                  </div>
                  <img src="/locus/locus-dashboard.png" alt="Locus AI dashboard: organizational memory at a glance" style={{ width: '100%', display: 'block' }}/>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                  {[
                    { src: '/locus/locus-decision-log.png', alt: 'Memory Explorer screen' },
                    { src: '/locus/locus-pulse.png', alt: 'Team Pulse screen' },
                    { src: '/locus/locus-search-results.png', alt: 'Search results screen' },
                  ].map((t, ti) => (
                    <Link key={ti} to="/case/locus" style={{ flex: 1, display: 'block' }}>
                      <img
                        src={t.src}
                        alt={t.alt}
                        loading="lazy"
                        style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px', border: `1px solid ${C.border}`, transition: 'border-color 0.15s, opacity 0.15s' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.opacity = '0.85'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.opacity = '1'; }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
```

Replace it with:

```js
              {/* ── RIGHT: framed screenshot / flow diagram toggle ── */}
              <div style={{ flex: '1 1 420px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                  {[['product', 'Product'], ['flow', 'How it works']].map(([key, label]) => {
                    const active = locusView === key;
                    return (
                      <button key={key} type="button" onClick={() => setLocusView(key)} aria-pressed={active}
                        style={{
                          fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                          padding: '7px 14px', borderRadius: '980px', cursor: 'pointer',
                          border: `1px solid ${active ? C.purple : C.border}`,
                          color: active ? '#fff' : C.muted,
                          background: active ? GRAD : 'transparent',
                          transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
                        }}>
                        {label}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  {locusView === 'product' ? (
                    <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                      <div style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 20px 48px rgba(20,18,38,0.14)', background: '#FFFFFF' }}>
                        <div style={{ display: 'flex', gap: '6px', padding: '10px 14px', borderBottom: `1px solid ${C.border}`, background: '#FAFAFC' }}>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#F87171' }}/>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FBBF24' }}/>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#34D399' }}/>
                        </div>
                        <img src="/locus/locus-dashboard.png" alt="Locus AI dashboard: organizational memory at a glance" style={{ width: '100%', display: 'block' }}/>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                        {[
                          { src: '/locus/locus-decision-log.png', alt: 'Memory Explorer screen' },
                          { src: '/locus/locus-pulse.png', alt: 'Team Pulse screen' },
                          { src: '/locus/locus-search-results.png', alt: 'Search results screen' },
                        ].map((t, ti) => (
                          <Link key={ti} to="/case/locus" style={{ flex: 1, display: 'block' }}>
                            <img
                              src={t.src}
                              alt={t.alt}
                              loading="lazy"
                              style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top', borderRadius: '8px', border: `1px solid ${C.border}`, transition: 'border-color 0.15s, opacity 0.15s' }}
                              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'; e.currentTarget.style.opacity = '0.85'; }}
                              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.opacity = '1'; }}
                            />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="flow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                      style={{ borderRadius: '16px', border: `1px solid ${C.border}`, boxShadow: '0 20px 48px rgba(20,18,38,0.14)', background: '#FFFFFF', padding: '28px 20px' }}>
                      <LocusFlowDiagram/>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
```

- [ ] **Step 3: Verify the build succeeds**

Run: `npm run build`
Expected: `✓ built in ...ms` with no errors.

- [ ] **Step 4: Manual browser verification**

Run: `npm run dev`, open the printed local URL.

Check, on the homepage:
1. Scroll to the Locus AI spotlight section (`#locus`). The "Product" tab is active by default and the real dashboard screenshot + 3 thumbnails render exactly as before.
2. Click "How it works" — it crossfades to the new diagram: 5 nodes (Slack, Gmail, Notion, Memory, Citation) connected by lines, with a caption below.
3. Watch for ~10 seconds — the active node highlights and advances automatically roughly every 2.5s, with a small pulse animating along the connector to the next node, and the caption below updates in sync.
4. Click directly on the "Memory" node — it should jump straight to that step and the caption should update immediately; auto-advance should stop (step stays on "Memory" after the pause, no further auto-jumps).
5. Click "Product" — it crossfades back to the screenshot, unchanged.
6. Resize the browser to a narrow (mobile) width — the node row and toggle buttons should still fit without horizontal overflow or clipped text.
7. In your OS/browser accessibility settings, enable "reduce motion," reload, and switch to "How it works" again — the pulse animation along the connector should no longer appear (steps still advance, just without the traveling pulse), and the caption crossfade should not slide vertically.

Stop here and report back if anything in this checklist doesn't match — don't proceed to commit until it does.

- [ ] **Step 5: Commit and push**

```bash
git add src/App.jsx
git commit -m "Add Product/How-it-works toggle with animated Locus agent-flow diagram"
git push
```

Expected: push succeeds, `git status` shows branch up to date with `origin/main`. Vercel auto-deploys from `main`.

---

## Self-Review Notes

- **Spec coverage:** Placement/toggle (spec §1) → Task 2. Visual/content design, 5 steps, auto-cycle, click-to-jump, pulse (spec §2) → Task 1. Component architecture, `FLOW_STEPS`, state pattern, no new deps (spec §3) → Task 1 + Task 2 Step 1. Reduced-motion, `aria-pressed`, responsive, build-only verification (spec §4) → Task 1 Step 2 (reduced-motion in component) + Task 2 (toggle `aria-pressed`, manual responsive check). Non-goals (case study page, real AI backend) → untouched by both tasks, nothing in this plan touches `CaseStudy.jsx` or `caseStudies.js`, or adds any network/API code.
- **Type/naming consistency:** `locusView` / `setLocusView` (Task 2 Step 1) match the two call sites that read/write it (Task 2 Step 2's toggle buttons and conditional render). `LocusFlowDiagram` (Task 1) matches its single call site `<LocusFlowDiagram/>` (Task 2 Step 2). `FLOW_STEPS` is only referenced inside `LocusFlowDiagram` itself — no cross-task naming drift.
- **No placeholders:** both tasks contain complete, pasteable code; no TBD/TODO; manual verification steps list concrete, checkable observations rather than "test it works."
