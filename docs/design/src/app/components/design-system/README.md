# Agentix Quantum Cockpit Design System

A premium B2B SaaS design language derived from aerospace cockpit interfaces. Built for credibility, precision, and technical sophistication.

## Design Philosophy

**Feel:** Premium, precise, futuristic but restrained, technical, trustworthy, commercially credible

**Not:** Gaming UI, sci-fi movie props, neon gimmick, toy dashboard, crypto landing page

## Core Visual Language

### Shape Language

All components use **chamfered corners** instead of rounded rectangles:
- Small: `agx-chamfer-corner-sm` (3px cuts)
- Medium: `agx-chamfer-corner` (5px cuts)
- Large: `agx-chamfer-corner-lg` (8px cuts)

This geometric treatment creates an engineered, aerospace aesthetic.

### Glow System

Subtle, premium glows on interactive elements:
- `agx-glow-blue` — Subtle blue glow
- `agx-glow-blue-strong` — Enhanced blue glow
- `agx-glow-cyan` — Cyan accent glow

**Important:** Glows should never be loud or juvenile. Use restraint.

### Typography

**Hero Title Font:** Saira Condensed — Used for main cockpit title only
- All-caps with tight letter spacing (0.05em)
- Medium weight, condensed style
- Class: `agx-hero-title`
- Use for: "AGENTIX QUANTUM COCKPIT" title and logo

**Display Font:** Rajdhani — Used for headings, labels, and technical displays
- All-caps with expanded letter spacing (0.12em - 0.15em)
- Medium to bold weights
- Classes: `agx-display-text`, `agx-display-text-hero`
- Use for: Section headings, card titles, labels

**Body Font:** Inter — Used for readable content
- Normal case, standard tracking
- Applied to paragraphs and descriptions

**Key Pairing:**
```tsx
<AgxHeroTextBlock
  mainLine="Your Amazon business, explained and operated in plain language."
  subLine="A seller cockpit that tells you what changed, why it changed, and what to do now."
/>
```

## Component Library

### Buttons

```tsx
import { AgxButton } from './components/design-system';

<AgxButton variant="primary">Primary CTA</AgxButton>
<AgxButton variant="secondary">Secondary</AgxButton>
<AgxButton variant="tertiary">Ghost Button</AgxButton>
<AgxButton variant="compact">Compact Nav</AgxButton>
<AgxButton variant="icon">⚙</AgxButton>
```

**States:** Default, Hover, Active, Focus, Disabled
**Geometry:** All buttons use chamfered corners

### Form Controls

```tsx
import { AgxInput, AgxSelect, AgxCheckbox, AgxToggle, AgxChip } from './components/design-system';

<AgxInput label="Email" placeholder="Enter email..." />
<AgxSelect label="Options" options={[...]} />
<AgxCheckbox label="Accept terms" />
<AgxToggle label="Enable feature" />
<AgxChip active>Filter Tag</AgxChip>
```

**All inputs inherit chamfered geometry and glow behavior on focus**

### Cards & Panels

```tsx
import { AgxCard, AgxPanel, AgxModal } from './components/design-system';

<AgxCard variant="feature">Content...</AgxCard>
<AgxPanel title="Dashboard" headerAction={<button>...</button>}>
  Panel content
</AgxPanel>
<AgxModal isOpen={true} onClose={() => {}} title="Title">
  Modal content
</AgxModal>
```

**Variants:**
- `default` — Standard card
- `elevated` — Card with glow
- `feature` — Larger card with hover effect
- `clickable` — Interactive card
- `pricing` — Pricing table card

### Navigation

```tsx
import { AgxNavBar, AgxNavItem, AgxStickyHeader } from './components/design-system';

<AgxNavBar
  logo={<div>LOGO</div>}
  actions={<AgxButton>Sign In</AgxButton>}
>
  <AgxNavItem active>Dashboard</AgxNavItem>
  <AgxNavItem>Settings</AgxNavItem>
</AgxNavBar>
```

### Typography Components

```tsx
import { AgxHeading, AgxLabel, AgxBodyText, AgxSubline } from './components/design-system';

<AgxHeading variant="hero">MAIN TITLE</AgxHeading>
<AgxHeading variant="section">SECTION HEADING</AgxHeading>
<AgxLabel>OVERLINE TEXT</AgxLabel>
<AgxBodyText>Regular paragraph content...</AgxBodyText>
<AgxSubline>Supporting italic subline text</AgxSubline>
```

### Status & Feedback

```tsx
import { AgxBadge, AgxAlert, AgxProgressBar, AgxSpinner } from './components/design-system';

<AgxBadge variant="success">Active</AgxBadge>
<AgxAlert variant="warning" title="Warning">Message</AgxAlert>
<AgxProgressBar value={75} showPercentage />
<AgxSpinner size="md" />
```

## Color System

### Background Colors
- `--agx-bg-primary` — Main background (#000510)
- `--agx-bg-elevated` — Raised surfaces (#000a18)
- `--agx-bg-panel` — Card/panel background (#001028)
- `--agx-bg-header` — Navigation/header background (#000814)

### Border Colors
- `--agx-border-default` — Standard borders (#0a2540)
- `--agx-border-bright` — Enhanced borders (#1a4a6f)
- `--agx-border-active` — Active state borders (#4a9eff)

### Accent Colors
- `--agx-blue-primary` — Primary muted blue (#4a9eff)
- `--agx-blue-bright` — Bright blue (#6bb5ff)
- `--agx-cyan-accent` — Cyan highlight (#5bc0de)

### State Colors
- `--agx-green-subtle` — Success states (#3ddc84)
- `--agx-amber-subtle` — Warning states (#ffa726)
- `--agx-red-subtle` — Error states (#ff5252)

### Text Colors
- `--agx-text-primary` — Primary text (#e8ecf2)
- `--agx-text-secondary` — Secondary text (#8a95ab)
- `--agx-text-muted` — Muted text (#5a6578)

## Spacing System

Precise, engineered spacing:
- `--agx-space-xs` — 4px
- `--agx-space-sm` — 8px
- `--agx-space-md` — 12px
- `--agx-space-lg` — 16px
- `--agx-space-xl` — 24px
- `--agx-space-2xl` — 32px
- `--agx-space-3xl` — 48px

## Motion Principles

Transitions should feel:
- Controlled and precise
- Responsive but not bouncy
- Like a system interface waking up
- Never playful or soft

**Timing:**
- `--agx-transition-fast` — 150ms
- `--agx-transition-normal` — 250ms
- `--agx-transition-slow` — 350ms

## Usage Examples

### Building a Feature Section

```tsx
<section className="py-[var(--agx-space-3xl)]">
  <AgxHeading variant="section">FEATURE OVERVIEW</AgxHeading>
  <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />
  
  <div className="grid grid-cols-3 gap-[var(--agx-space-xl)]">
    <AgxCard variant="feature">
      <AgxHeading variant="card">PRECISION</AgxHeading>
      <AgxBodyText>Engineered for accuracy...</AgxBodyText>
    </AgxCard>
    {/* More cards... */}
  </div>
</section>
```

### Building a Form

```tsx
<AgxPanel title="CONFIGURATION">
  <form className="space-y-[var(--agx-space-lg)]">
    <AgxInput label="API Key" type="password" />
    <AgxSelect label="Region" options={regions} />
    <AgxToggle label="Enable monitoring" />
    <AgxButton variant="primary" type="submit">
      Save Configuration
    </AgxButton>
  </form>
</AgxPanel>
```

### Building a Stats Dashboard

```tsx
<div className="grid grid-cols-4 gap-[var(--agx-space-xl)]">
  <AgxStatDisplay value="99.9%" label="Uptime" trend="up" />
  <AgxStatDisplay value="2.3M" label="Requests" trend="up" />
  <AgxStatDisplay value="42ms" label="Latency" trend="down" />
  <AgxStatDisplay value="148" label="Users" trend="neutral" />
</div>
```

## Iconography Guidelines

Icons should be:
- Technical and clean
- Minimal line-based style
- Slightly futuristic but not playful
- Consistent stroke width
- Use Lucide React or similar geometric icon sets

## Best Practices

### ✅ Do
- Use chamfered corners consistently
- Apply subtle glows on interactive elements
- Use Rajdhani for headings and labels (all-caps)
- Maintain precise spacing using design tokens
- Keep glows subtle and premium

### ❌ Don't
- Use rounded corners (border-radius)
- Apply loud, saturated neon effects
- Mix rounded and chamfered geometries
- Use playful or bouncy animations
- Apply Rajdhani to body copy (use Inter instead)

## Component States

All interactive components support:
- **Default** — Resting state
- **Hover** — Border brightens, subtle glow appears
- **Active** — Background darkens, border strengthens
- **Focus** — Blue ring with offset (accessibility)
- **Disabled** — 50% opacity, cursor disabled

## Accessibility

- All interactive elements support keyboard navigation
- Focus rings meet WCAG contrast requirements
- Color is never the only indicator of state
- Chamfered shapes maintain sufficient touch target sizes

## Integration

Import components from the design system:

```tsx
import {
  AgxButton,
  AgxCard,
  AgxHeading,
  // ... other components
} from './components/design-system';
```

Or import the full showcase to see all components in action:

```tsx
import { AgxDesignSystemShowcase } from './components/design-system/AgxDesignSystemShowcase';
```

## Design Tokens

All design tokens are defined in `/src/styles/theme.css` and use CSS custom properties for easy theming and consistency.

---

**Built for the Agentix Quantum Cockpit** — Where aerospace precision meets B2B SaaS credibility.
