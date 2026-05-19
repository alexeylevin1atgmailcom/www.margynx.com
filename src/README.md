# Landing Pages — Developer Guide

Routes: `margynx.com/ltcr` and `margynx.com/lpo`

---

## File map

```
ltcr/index.html               HTML shell — sets data-mode="ltcr"
lpo/index.html                HTML shell — sets data-mode="lpo"
src/config/landingModes.js    Single source of truth for all page content
scripts/landing.js            Shared renderer — reads mode, builds DOM
styles/landing.css            Landing-page layout styles (extends styles.css)
```

The HTML files are thin shells. All copy, structure, and CTA logic live in `landingModes.js`. The renderer in `landing.js` reads the config and builds the page at load time.

---

## How to add a third mode (e.g. `/mmbo`)

1. Open `src/config/landingModes.js`.
2. Add a new key to `landingModes` following the same shape as `ltcr` or `lpo`.
3. Create `mmbo/index.html` — copy either existing shell and change `data-mode="mmbo"`.
4. No changes to `landing.js` or `landing.css` are needed.

The `solutionTracks` array controls section structure:
- One item → single solution section (like LTCR).
- Two items → two sequential solution sections separated by a border (like LPO).
- Three or more items would render as three sequential sections — the CSS handles it automatically.

---

## Positioning rule — read before editing any copy

Margynx is a **helper**, never a replacement. The reader is the operator or analyst doing the daily work — address them directly ("you"), not their team ("your analyst").

Margynx handles:
- Repetitive monitoring across all SKUs every day
- Cross-referencing metrics, competitors, fees, seasonality
- Executing price moves the user has pre-authorized
- Surfacing issues for review

The user:
- Designs the strategy in plain language
- Pre-authorizes rules and thresholds
- Reviews and approves every recommendation
- Owns every decision

**Never write copy that:**
- Implies a human is failing at their job
- Suggests Margynx catches what a person missed
- Positions Margynx as making strategic calls independently
- Uses "dirty work", "grunt work", "best people", or "that's not what you hired them for"
- Addresses the reader in second-person plural ("your analyst", "your team") — use "you"

The reader should finish the page feeling more capable, not threatened.

---

## The `solutionTracks` config field

Each track object:

```js
{
  title: 'Section heading shown above the steps.',
  intro: 'Optional supporting line under the heading. Set to null to omit.',
  steps: [
    { title: 'Step title', body: 'Step description.' },
    // up to as many steps as needed
  ],
}
```

Single-track mode (LTCR) — one item in the array:
```js
solutionTracks: [ { title: '...', intro: null, steps: [...] } ]
```

Two-track mode (LPO) — two items. The second track gets a top border for visual separation:
```js
solutionTracks: [
  { title: 'Track one heading.', intro: '...', steps: [...] },
  { title: 'Track two heading.', intro: '...', steps: [...] },
]
```

---

## How to update `seasonalEvents`

The LPO CTA button text is calendar-aware. The `seasonalEvents` array in `landingModes.js` controls which events qualify and what text to show.

```js
var seasonalEvents = [
  {
    name: 'Prime Day',          // human label (for reference only)
    startDate: '07-10',         // MM-DD — event opens; 90-day window counts back from here
    endDate: '07-20',           // MM-DD — event closes (informational)
    ctaText: 'Start Planning Prime Day',  // button text during the window
  },
  // ...
];
```

**Logic:** `getLpoCta()` scans all events and finds the one whose `startDate` falls soonest within the next 90 days. If none qualify, it returns `'Start Planning Your Next Season'`.

**To add a new event** (e.g. a new Amazon sale): append an entry to `seasonalEvents`. No other changes needed.

**To adjust a window**: change `startDate` to move when the 90-day countdown begins.

**To test a specific date**: call `getLpoCta(new Date('2025-10-15'))` in the browser console with the desired date.

---

## Social proof section

Both modes have `socialProof: { visible: false }`. The section is fully wired up in `landing.js` — set `visible: true` once real case studies are ready. No structural changes required.

---

## Tracking

Each page appends `?src=ltcr` or `?src=lpo` to the signup URL (`landing.margynx.com`). The signup backend accepts arbitrary query params.

If `gtag` is loaded on the page, `landing.js` fires a `page_view` event with `{ landing_mode: mode }`. No new analytics dependencies are added.
