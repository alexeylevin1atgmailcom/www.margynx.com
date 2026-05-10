# AGENTIX QUANTUM COCKPIT — Design System Documentation

## Overview

This design system translates the Agentix Quantum Cockpit's aerospace interface aesthetic into a polished web design language for a premium B2B SaaS marketing site.

**Source of Truth:** The cockpit interface design (cockpit-design-v2.jpg)

**Design DNA:** Precision engineered, aerospace console, restrained futurism, commercially credible

## Design System Deliverables

This system provides **components and styling rules only** — not full page layouts. The components can be composed to build marketing pages while maintaining visual consistency.

---

## 1. Shape Language System

### Geometric Language

All UI elements use **chamfered corners** — diagonal cuts on the **top-left and bottom-right corners only**. This asymmetric cut is the signature of the Agentix cockpit aesthetic, evoking a machined, aerospace console feel.

**Shape:** A 6-point polygon (not an octagon). Top-right and bottom-left remain sharp 90° corners.

**Utility Classes:**
- `.agx-chamfer-corner-sm` — Small chamfer (6px cut, TL + BR)
- `.agx-chamfer-corner` — Standard chamfer (10px cut, TL + BR)
- `.agx-chamfer-corner-lg` — Large chamfer (16px cut, TL + BR)

**CSS clip-path (standard, 10px):**
```css
clip-path: polygon(
  10px 0,                        /* top-left chamfer */
  100% 0,                        /* top-right — sharp */
  100% calc(100% - 10px),        /* bottom-right chamfer */
  calc(100% - 10px) 100%,        /* bottom-right chamfer */
  0 100%,                        /* bottom-left — sharp */
  0 10px                         /* top-left chamfer */
);
```

**Implementation:**
```tsx
<div className="agx-chamfer-corner bg-[var(--agx-bg-panel)]">
  Content with chamfered corners (TL + BR only)
</div>
```

### Frame & Border Logic

- **Standard borders:** 1px (--agx-border-thin)
- **Medium borders:** 2px (--agx-border-medium)
- **Accent borders:** 3px (--agx-border-thick)

Borders use layered colors:
- Default: `var(--agx-border-default)` (#1a2332)
- Hover: `var(--agx-border-bright)` (#2a3648)
- Active: `var(--agx-border-active)` (#3d5a8c)

---

## 2. Button System

All buttons use chamfered geometry and state-based glows.

### Variants

**Primary CTA:**
```tsx
<AgxButton variant="primary">Get Started</AgxButton>
```
- Filled blue background
- Blue bright border
- Strong glow on hover
- Height: 40px

**Secondary:**
```tsx
<AgxButton variant="secondary">Learn More</AgxButton>
```
- Transparent background
- Border outline
- Subtle glow on hover

**Tertiary/Ghost:**
```tsx
<AgxButton variant="tertiary">Explore</AgxButton>
```
- No background or border
- Text color change on hover

**Compact Nav:**
```tsx
<AgxButton variant="compact">Sign In</AgxButton>
```
- Smaller height (32px)
- For navigation and toolbars

**Icon Button:**
```tsx
<AgxButton variant="icon">⚙</AgxButton>
```
- Square shape (40x40px)
- For icon-only actions

### States

All buttons support:
- **Default** — Resting state
- **Hover** — Border brightens, glow activates
- **Active** — Background shifts, pressed effect
- **Focus** — Blue ring (accessibility)
- **Disabled** — 50% opacity

---

## 3. Input & Form Control System

### Text Inputs

```tsx
<AgxInput
  label="Email Address"
  placeholder="you@company.com"
  type="email"
/>
```

Features:
- Chamfered corners
- Height: 44px
- Blue glow on focus
- Label with uppercase tracking

### Textarea

```tsx
<AgxTextArea
  label="Message"
  placeholder="Enter your message..."
  rows={4}
/>
```

### Dropdown Select

```tsx
<AgxSelect
  label="Region"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'eu', label: 'Europe' }
  ]}
/>
```

### Checkbox

```tsx
<AgxCheckbox label="I agree to terms" />
```

Chamfered square checkbox with checkmark animation.

### Radio Button

```tsx
<AgxRadio label="Option A" name="choice" />
<AgxRadio label="Option B" name="choice" />
```

Circular radio with inner dot indicator.

### Toggle Switch

```tsx
<AgxToggle label="Enable notifications" />
```

Chamfered toggle track with sliding indicator.

### Segmented Control

```tsx
<AgxSegmentedControl
  options={[
    { value: 'month', label: 'Monthly' },
    { value: 'year', label: 'Yearly' }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

Perfect for pricing toggles and view switchers.

### Filter Chips

```tsx
<AgxChip active onClick={() => {}}>Active Filter</AgxChip>
<AgxChip onRemove={() => {}}>Removable Tag</AgxChip>
```

---

## 4. Card & Panel System

### Feature Card

```tsx
<AgxCard variant="feature">
  <AgxHeading variant="card">REAL-TIME ANALYTICS</AgxHeading>
  <AgxBodyText>
    Monitor your business metrics with precision cockpit displays.
  </AgxBodyText>
</AgxCard>
```

**Variants:**
- `default` — Standard card
- `elevated` — Card with blue glow
- `feature` — Larger card, hover effect
- `clickable` — Interactive card
- `pricing` — Pricing table card

### Panel Container

```tsx
<AgxPanel
  title="DASHBOARD OVERVIEW"
  headerAction={<AgxButton variant="compact">Export</AgxButton>}
>
  Panel content here
</AgxPanel>
```

Panels have a header bar with optional actions.

### Modal Shell

```tsx
<AgxModal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  title="CONFIGURATION"
>
  Modal content
</AgxModal>
```

Full-screen overlay with chamfered modal window.

---

## 5. Navigation Components

### Top Navigation Bar

```tsx
<AgxNavBar
  logo={<div className="agx-display-text text-xl">AGENTIX</div>}
  actions={
    <>
      <AgxButton variant="compact">Sign In</AgxButton>
      <AgxButton variant="primary">Start Free Trial</AgxButton>
    </>
  }
>
  <AgxNavItem active>Features</AgxNavItem>
  <AgxNavItem>Pricing</AgxNavItem>
  <AgxNavItem>Documentation</AgxNavItem>
  <AgxNavItem>About</AgxNavItem>
</AgxNavBar>
```

Height: 64px with chamfered design.

### Sticky Header

```tsx
<AgxStickyHeader>
  <AgxNavBar {...props} />
</AgxStickyHeader>
```

Adds backdrop blur and shadow on scroll.

### Mobile Menu

```tsx
<AgxMobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
  <AgxNavItem active>Features</AgxNavItem>
  <AgxNavItem>Pricing</AgxNavItem>
</AgxMobileMenu>
```

Slide-in panel from right with chamfered edge.

### Breadcrumb Navigation

```tsx
<AgxBreadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Analytics' }
  ]}
/>
```

---

## 6. Typography System

### Hero Title Font: Saira Condensed

Used exclusively for the main cockpit title:
- All-caps presentation
- Tight letter spacing (0.05em)
- Medium weight (600)
- Condensed, geometric style matching the cockpit image

**Class:**
- `.agx-hero-title` — Main title style

**Usage:**
```tsx
<h1 className="text-5xl agx-hero-title">AGENTIX QUANTUM COCKPIT</h1>
```

Use this ONLY for:
- Main "AGENTIX QUANTUM COCKPIT" title
- Logo text
- Primary brand headline

### Display Font: Rajdhani

Used for headings, labels, and technical displays:
- All-caps presentation
- Expanded letter spacing (0.12em - 0.15em)
- Medium to bold weights
- Aerospace/futuristic aesthetic

**Classes:**
- `.agx-display-text` — Standard display style (600 weight, 0.12em spacing)
- `.agx-display-text-hero` — Hero display style (700 weight, 0.15em spacing)

**Usage:**
```tsx
<AgxHeading variant="section">FEATURES OVERVIEW</AgxHeading>
```

Use for:
- Section headings
- Card titles
- Labels and overlines
- Navigation items

### Body Font: Inter

Used for readable content:
- Normal case
- Standard tracking
- Applied to paragraphs, descriptions, dense content

### Typography Components

**Hero Display:**
```tsx
<AgxHeading variant="hero">AGENTIX QUANTUM COCKPIT</AgxHeading>
```
Text: 5xl-7xl, Rajdhani all-caps

**Section Heading:**
```tsx
<AgxHeading variant="section">FEATURES OVERVIEW</AgxHeading>
```
Text: 3xl-4xl, Rajdhani all-caps

**Card Title:**
```tsx
<AgxHeading variant="card">REAL-TIME MONITORING</AgxHeading>
```
Text: xl, Rajdhani all-caps

**Label/Overline:**
```tsx
<AgxLabel>PRODUCT CATEGORY</AgxLabel>
```
Text: xs uppercase, wide tracking

**Body Copy:**
```tsx
<AgxBodyText>
  Your Amazon business, explained and operated in plain language.
</AgxBodyText>
```
Inter font, normal case, readable

**Subline (Supporting Line):**
```tsx
<AgxSubline>
  A seller cockpit that tells you what changed, why it changed, and what to do now.
</AgxSubline>
```
Italic, smaller, quieter — visually subordinate

**Caption:**
```tsx
<AgxCaption>Last updated: 2 minutes ago</AgxCaption>
```
Small muted text for metadata

### Hero Text Block Example

The exact pairing from requirements:

```tsx
<AgxHeroTextBlock
  mainLine="Your Amazon business, explained and operated in plain language."
  subLine="A seller cockpit that tells you what changed, why it changed, and what to do now."
/>
```

Main line: Large, prominent
Sub line: Smaller, italic, quieter

---

## 7. Color System

### Dark Aerospace Palette

Derived from the Agentix Quantum Cockpit interface — deep space blacks with electric cyan accents.

**Backgrounds:**
- `--agx-bg-primary` → #000510 (main background — near-black with blue tint)
- `--agx-bg-elevated` → #000a18 (raised surfaces)
- `--agx-bg-panel` → #001028 (cards/panels)
- `--agx-bg-header` → #000814 (navigation)

**Borders:**
- `--agx-border-default` → #0a2540 (subtle dark blue)
- `--agx-border-bright` → #1a4a6f (brighter blue)
- `--agx-border-active` → #4a9eff (muted blue active state)

**Primary Accents:**
- `--agx-blue-primary` → #4a9eff (muted blue — primary actions)
- `--agx-blue-bright` → #6bb5ff (bright blue highlights)
- `--agx-cyan-accent` → #5bc0de (subtle cyan accents)

**State Colors:**
- `--agx-green-subtle` → #3ddc84 (success)
- `--agx-amber-subtle` → #ffa726 (warning)
- `--agx-red-subtle` → #ff5252 (error)

**Text:**
- `--agx-text-primary` → #e8ecf2 (main text)
- `--agx-text-secondary` → #8a95ab (muted text)
- `--agx-text-muted` → #5a6578 (subtle text)

### Usage

```tsx
<div className="bg-[var(--agx-bg-panel)] border-[var(--agx-border-default)]">
  <h2 className="text-[var(--agx-text-primary)]">Title</h2>
  <p className="text-[var(--agx-text-secondary)]">Description</p>
</div>
```

---

## 8. Glow, Border & Depth System

### Glow Classes

**Subtle Blue Glow:**
```tsx
<div className="agx-glow-blue">Element with subtle glow</div>
```
Box shadow: `0 0 12px rgba(74, 158, 255, 0.35)`

**Strong Blue Glow:**
```tsx
<div className="agx-glow-blue-strong">Element with strong glow</div>
```
Box shadow: `0 0 20px rgba(74, 158, 255, 0.5)`

**Cyan Glow:**
```tsx
<div className="agx-glow-cyan">Element with cyan glow</div>
```

### Glow Behavior

- Applied on **hover** for interactive elements
- Applied on **focus** for accessibility
- Applied on **active** state for primary CTAs
- Always subtle — never loud or juvenile

### Border System

Borders thicken and brighten on interaction:
1. **Default:** Thin, muted (`--agx-border-default`)
2. **Hover:** Same thickness, brighter (`--agx-border-bright`)
3. **Active:** Medium thickness, brightest (`--agx-blue-primary`)

### Focus Rings

All interactive elements have accessible focus rings:
```css
focus:outline-none
focus:ring-2
focus:ring-[var(--agx-blue-primary)]
focus:ring-offset-2
focus:ring-offset-[var(--agx-bg-primary)]
```

---

## 9. Iconography Direction

**Style:** Technical, clean, minimal, system-oriented, slightly futuristic

**Recommended Library:** Lucide React (geometric, technical icons)

**Properties:**
- Line-based icons (not filled)
- Consistent stroke width (2px)
- 24px or 20px sizing
- Match chamfered aesthetic where possible

**Example:**
```tsx
import { Settings, ChevronRight, AlertCircle } from 'lucide-react';

<AgxButton variant="icon">
  <Settings size={20} />
</AgxButton>
```

---

## 10. Spacing & Sizing Rules

### Spacing Scale

Precise, engineered spacing:

```css
--agx-space-xs: 4px
--agx-space-sm: 8px
--agx-space-md: 12px
--agx-space-lg: 16px
--agx-space-xl: 24px
--agx-space-2xl: 32px
--agx-space-3xl: 48px
```

**Usage:**
```tsx
<div className="p-[var(--agx-space-xl)] gap-[var(--agx-space-md)]">
  Content with consistent spacing
</div>
```

### Component Heights

- **Button:** 40px (`--agx-height-button`)
- **Input:** 44px (`--agx-height-input`)
- **Nav Bar:** 64px (`--agx-height-nav`)
- **Compact Button:** 32px (`--agx-height-compact`)

### Density

The system feels **precise and engineered**, not airy:
- Tighter than generic startup UIs
- Controlled whitespace
- Information-dense where appropriate

---

## 11. Motion Guidance

### Timing Functions

```css
--agx-transition-fast: 150ms
--agx-transition-normal: 250ms
--agx-transition-slow: 350ms
```

### Animation Principles

Motion should feel:
- **Controlled** — No bounce or spring
- **Precise** — Linear or ease-out easing
- **Responsive** — Fast feedback to interaction
- **Subtle** — System waking up, not performative

**Example:**
```tsx
<div className="transition-all duration-[var(--agx-transition-normal)]">
  Element with controlled transition
</div>
```

### Common Transitions

- **Hover:** Border color, glow activation
- **Press:** Background shift, scale 0.98
- **Reveal:** Opacity fade-in
- **Focus:** Ring appearance

**Not used:**
- Bouncy animations
- Playful effects
- Soft elastic easing

---

## 12. Additional Components

### Badges

```tsx
<AgxBadge variant="success">Active</AgxBadge>
<AgxBadge variant="warning">Pending</AgxBadge>
<AgxBadge variant="error">Offline</AgxBadge>
```

### Progress Bars

```tsx
<AgxProgressBar
  value={75}
  max={100}
  label="Processing"
  showPercentage
  variant="default"
/>
```

### Alerts

```tsx
<AgxAlert variant="info" title="System Update">
  Version 2.4.0 has been deployed successfully.
</AgxAlert>
```

### Stats Display

```tsx
<AgxStatDisplay
  value="99.9%"
  label="Uptime"
  trend="up"
/>
```

### Tooltips

```tsx
<AgxTooltip content="Detailed explanation" position="top">
  <AgxButton variant="icon">?</AgxButton>
</AgxTooltip>
```

### Loading States

```tsx
<AgxSpinner size="md" />
<AgxSkeleton variant="card" />
```

---

## Usage Guidelines

### ✅ Do

- Use chamfered corners consistently across all components
- Apply Rajdhani for headings and labels (all-caps)
- Use Inter for body copy and descriptions
- Maintain precise spacing using design tokens
- Keep glows subtle and premium
- Use technical, minimal icons

### ❌ Don't

- Mix rounded and chamfered geometries
- Use Rajdhani for long paragraphs
- Apply loud, saturated neon effects
- Use playful or bouncy animations
- Use decorative or whimsical icons
- Deviate from the spacing scale

---

## Building a Website with This System

### Example: Hero Section

```tsx
<section className="py-[var(--agx-space-3xl)] px-[var(--agx-space-xl)]">
  <div className="max-w-6xl mx-auto">
    <AgxHeroTextBlock
      mainLine="Your Amazon business, explained and operated in plain language."
      subLine="A seller cockpit that tells you what changed, why it changed, and what to do now."
    />
    
    <div className="flex gap-[var(--agx-space-md)] mt-[var(--agx-space-2xl)]">
      <AgxButton variant="primary">Start Free Trial</AgxButton>
      <AgxButton variant="secondary">Watch Demo</AgxButton>
    </div>
  </div>
</section>
```

### Example: Feature Grid

```tsx
<section className="py-[var(--agx-space-3xl)]">
  <AgxHeading variant="section">PLATFORM CAPABILITIES</AgxHeading>
  <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--agx-space-xl)]">
    <AgxCard variant="feature">
      <AgxHeading variant="card">REAL-TIME ANALYTICS</AgxHeading>
      <AgxBodyText>
        Monitor performance metrics with precision dashboard displays.
      </AgxBodyText>
    </AgxCard>
    
    <AgxCard variant="feature">
      <AgxHeading variant="card">AUTOMATED OPERATIONS</AgxHeading>
      <AgxBodyText>
        AI-powered automation handles routine tasks intelligently.
      </AgxBodyText>
    </AgxCard>
    
    <AgxCard variant="feature">
      <AgxHeading variant="card">PREDICTIVE INSIGHTS</AgxHeading>
      <AgxBodyText>
        Anticipate trends before they impact your business.
      </AgxBodyText>
    </AgxCard>
  </div>
</section>
```

### Example: Pricing Table

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--agx-space-xl)]">
  <AgxCard variant="pricing">
    <AgxLabel>STARTER</AgxLabel>
    <div className="agx-display-text text-4xl my-[var(--agx-space-md)]">
      $49<span className="text-base text-[var(--agx-text-secondary)]">/mo</span>
    </div>
    <AgxButton variant="secondary" className="w-full">
      Get Started
    </AgxButton>
  </AgxCard>
  
  {/* More pricing tiers... */}
</div>
```

---

## Design System Files

All components are located in `/src/app/components/design-system/`:

- `AgxButton.tsx` — Button variants
- `AgxInput.tsx` — Input fields
- `AgxFormControls.tsx` — Checkboxes, toggles, chips
- `AgxCard.tsx` — Cards, panels, modals
- `AgxNavigation.tsx` — Nav bars and menu components
- `AgxTypography.tsx` — Heading and text components
- `AgxUtilities.tsx` — Badges, progress, alerts, tooltips
- `AgxDesignSystemShowcase.tsx` — Full component demo
- `index.ts` — Central export file

**Theme tokens:** `/src/styles/theme.css`

**Typography:** `/src/styles/fonts.css` (Rajdhani + Inter from Google Fonts)

---

## Viewing the Design System

Run the application to see the full component showcase with all variants, states, and usage examples.

```tsx
import { AgxDesignSystemShowcase } from './components/design-system/AgxDesignSystemShowcase';
```

The showcase demonstrates:
- All component variants
- Interactive states
- Color system
- Typography hierarchy
- Spacing system
- Real usage examples

---

## Final Note

This design system is **not** the website itself. It provides the **visual building blocks** to construct a premium B2B SaaS marketing site that feels like it was built from the cockpit's DNA — precise, technical, trustworthy, and sophisticated.

The website builder should use these components to create page layouts, marketing sections, and conversion flows while maintaining the aerospace-engineered aesthetic.

**Built for Agentix Quantum Cockpit** — Premium B2B SaaS with aerospace precision.
