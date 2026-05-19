import React, { useState } from 'react';
import {
  AgxButton,
  AgxInput,
  AgxTextArea,
  AgxSelect,
  AgxCheckbox,
  AgxRadio,
  AgxToggle,
  AgxChip,
  AgxSegmentedControl,
  AgxCard,
  AgxPanel,
  AgxModal,
  AgxNavBar,
  AgxNavItem,
  AgxHeading,
  AgxLabel,
  AgxBodyText,
  AgxSubline,
  AgxCaption,
  AgxHeroTextBlock,
  AgxStatDisplay,
  AgxBadge,
  AgxDivider,
  AgxProgressBar,
  AgxTooltip,
  AgxSkeleton,
  AgxSpinner,
  AgxAlert,
} from './index';

export const AgxDesignSystemShowcase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [segmentValue, setSegmentValue] = useState('option1');
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen bg-[var(--agx-bg-primary)] text-[var(--agx-text-primary)] p-[var(--agx-space-2xl)]">
      {/* Header */}
      <div className="mb-[var(--agx-space-3xl)]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl agx-hero-title text-[var(--agx-text-primary)] mb-[var(--agx-space-lg)]">
          MARGYNX COCKPIT
        </h1>
        <AgxSubline>Premium B2B SaaS Design System — Aerospace Engineering Aesthetic</AgxSubline>
      </div>

      {/* Navigation Demo */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Navigation Components</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <AgxNavBar
          logo={<div className="agx-hero-title text-xl">AGENTIX</div>}
          actions={
            <>
              <AgxButton variant="compact">Sign In</AgxButton>
              <AgxButton variant="primary">Get Started</AgxButton>
            </>
          }
        >
          <AgxNavItem active>Dashboard</AgxNavItem>
          <AgxNavItem>Analytics</AgxNavItem>
          <AgxNavItem>Settings</AgxNavItem>
          <AgxNavItem>Documentation</AgxNavItem>
        </AgxNavBar>
      </section>

      {/* Typography System */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Typography System</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="space-y-[var(--agx-space-xl)]">
          <div>
            <AgxLabel>Main Title Font (Saira Condensed)</AgxLabel>
            <h1 className="text-5xl agx-hero-title text-[var(--agx-text-primary)]">
              MARGYNX COCKPIT
            </h1>
          </div>
          <div>
            <AgxLabel>Display Font (Rajdhani)</AgxLabel>
            <AgxHeading variant="hero">HERO DISPLAY HEADING</AgxHeading>
          </div>
          <div>
            <AgxHeading variant="section">SECTION HEADING</AgxHeading>
          </div>
          <div>
            <AgxHeading variant="subsection">SUBSECTION HEADING</AgxHeading>
          </div>
          <div>
            <AgxLabel>LABEL / OVERLINE TEXT</AgxLabel>
            <AgxBodyText>
              Body copy uses Inter for readability. This paragraph demonstrates how body text
              should appear in the design system with proper line height and color contrast.
            </AgxBodyText>
            <AgxSubline>
              This is a subline — smaller, italic, quieter. Used to provide supporting context
              below a main heading without competing for attention.
            </AgxSubline>
            <AgxCaption>Caption text for fine print and metadata</AgxCaption>
          </div>
          <div>
            <AgxHeroTextBlock
              mainLine="Your Amazon business, explained and operated in plain language."
              subLine="A seller cockpit that tells you what changed, why it changed, and what to do now."
            />
          </div>
        </div>
      </section>

      {/* Button System */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Button System</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="flex flex-wrap gap-[var(--agx-space-md)]">
          <AgxButton variant="primary">Primary Button</AgxButton>
          <AgxButton variant="secondary">Secondary Button</AgxButton>
          <AgxButton variant="tertiary">Tertiary Button</AgxButton>
          <AgxButton variant="compact">Compact Nav Button</AgxButton>
          <AgxButton variant="icon">⚙</AgxButton>
          <AgxButton variant="primary" disabled>Disabled</AgxButton>
        </div>
      </section>

      {/* Form Controls */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Form Controls</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--agx-space-xl)] max-w-4xl">
          <AgxInput
            label="Text Input"
            placeholder="Enter your email..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <AgxInput
            label="Password Input"
            type="password"
            placeholder="Enter password..."
          />
          <AgxSelect
            label="Dropdown Select"
            options={[
              { value: '1', label: 'Option One' },
              { value: '2', label: 'Option Two' },
              { value: '3', label: 'Option Three' },
            ]}
          />
          <div className="space-y-[var(--agx-space-md)]">
            <AgxLabel>Form Controls</AgxLabel>
            <AgxCheckbox label="Accept terms and conditions" />
            <AgxRadio label="Radio option A" name="demo" />
            <AgxRadio label="Radio option B" name="demo" />
            <AgxToggle label="Enable notifications" />
          </div>
          <div className="md:col-span-2">
            <AgxTextArea
              label="Message"
              placeholder="Enter your message..."
              rows={4}
            />
          </div>
        </div>

        <div className="mt-[var(--agx-space-xl)] space-y-[var(--agx-space-md)]">
          <AgxLabel>Segmented Control</AgxLabel>
          <AgxSegmentedControl
            options={[
              { value: 'option1', label: 'Overview' },
              { value: 'option2', label: 'Analytics' },
              { value: 'option3', label: 'Settings' },
            ]}
            value={segmentValue}
            onChange={setSegmentValue}
          />
        </div>

        <div className="mt-[var(--agx-space-xl)]">
          <AgxLabel>Filter Chips</AgxLabel>
          <div className="flex flex-wrap gap-[var(--agx-space-sm)]">
            <AgxChip active>Active Tag</AgxChip>
            <AgxChip onClick={() => {}}>Clickable Tag</AgxChip>
            <AgxChip onRemove={() => {}}>Removable Tag</AgxChip>
            <AgxChip>Static Tag</AgxChip>
          </div>
        </div>
      </section>

      {/* Cards & Panels */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Cards & Panels</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--agx-space-xl)] mb-[var(--agx-space-xl)]">
          <AgxCard variant="default">
            <AgxHeading variant="card">Default Card</AgxHeading>
            <AgxBodyText>Standard card container for content organization.</AgxBodyText>
          </AgxCard>

          <AgxCard variant="elevated">
            <AgxHeading variant="card">Elevated Card</AgxHeading>
            <AgxBodyText>Enhanced card with blue glow effect.</AgxBodyText>
          </AgxCard>

          <AgxCard variant="clickable" onClick={() => alert('Card clicked!')}>
            <AgxHeading variant="card">Clickable Card</AgxHeading>
            <AgxBodyText>Interactive card with hover states.</AgxBodyText>
          </AgxCard>
        </div>

        <AgxPanel
          title="Panel Component"
          headerAction={<AgxButton variant="compact">Action</AgxButton>}
        >
          <AgxBodyText>
            Panels provide a structured container with an optional header bar. Perfect for
            dashboard modules and feature sections.
          </AgxBodyText>
        </AgxPanel>
      </section>

      {/* Stats & Metrics */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Stats Display</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--agx-space-xl)]">
          <AgxStatDisplay value="99.9%" label="Uptime" trend="up" />
          <AgxStatDisplay value="2.3M" label="Requests" trend="up" />
          <AgxStatDisplay value="42ms" label="Latency" trend="down" />
          <AgxStatDisplay value="148" label="Active Users" trend="neutral" />
        </div>
      </section>

      {/* Badges & Status */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Badges & Status</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="flex flex-wrap gap-[var(--agx-space-md)]">
          <AgxBadge variant="default">Default</AgxBadge>
          <AgxBadge variant="info">Info</AgxBadge>
          <AgxBadge variant="success">Success</AgxBadge>
          <AgxBadge variant="warning">Warning</AgxBadge>
          <AgxBadge variant="error">Error</AgxBadge>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Progress Indicators</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="space-y-[var(--agx-space-lg)] max-w-2xl">
          <AgxProgressBar value={75} label="Processing" showPercentage variant="default" />
          <AgxProgressBar value={100} label="Complete" showPercentage variant="success" />
          <AgxProgressBar value={45} label="At Risk" showPercentage variant="warning" />
          <AgxProgressBar value={20} label="Critical" showPercentage variant="error" />
        </div>

        <div className="mt-[var(--agx-space-xl)] flex gap-[var(--agx-space-lg)]">
          <AgxSpinner size="sm" />
          <AgxSpinner size="md" />
          <AgxSpinner size="lg" />
        </div>
      </section>

      {/* Alerts */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Alert Messages</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="space-y-[var(--agx-space-md)] max-w-3xl">
          <AgxAlert variant="info" title="System Information">
            The scheduled maintenance window will begin at 02:00 UTC.
          </AgxAlert>
          <AgxAlert variant="success" title="Deployment Complete">
            Version 2.4.1 has been successfully deployed to production.
          </AgxAlert>
          <AgxAlert variant="warning" title="Performance Warning">
            API response times are 25% above baseline threshold.
          </AgxAlert>
          <AgxAlert variant="error" title="Critical Error" onClose={() => {}}>
            Failed to sync with external data source. Connection timeout after 30s.
          </AgxAlert>
        </div>
      </section>

      {/* Tooltips */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Tooltips</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="flex gap-[var(--agx-space-xl)]">
          <AgxTooltip content="Tooltip on top" position="top">
            <AgxButton variant="secondary">Hover Me (Top)</AgxButton>
          </AgxTooltip>
          <AgxTooltip content="Tooltip on right" position="right">
            <AgxButton variant="secondary">Hover Me (Right)</AgxButton>
          </AgxTooltip>
        </div>
      </section>

      {/* Loading States */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Loading Skeletons</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="space-y-[var(--agx-space-md)] max-w-2xl">
          <AgxSkeleton variant="text" />
          <AgxSkeleton variant="text" className="w-3/4" />
          <AgxSkeleton variant="button" />
          <AgxSkeleton variant="card" />
        </div>
      </section>

      {/* Modal Demo */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Modal Dialog</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <AgxButton variant="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </AgxButton>

        <AgxModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Modal Title"
        >
          <AgxBodyText>
            This is a modal dialog with the Agentix design language. It features the signature
            chamfered corners and blue glow effect.
          </AgxBodyText>
          <div className="mt-[var(--agx-space-xl)] flex gap-[var(--agx-space-md)]">
            <AgxButton variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </AgxButton>
            <AgxButton variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </AgxButton>
          </div>
        </AgxModal>
      </section>

      {/* Design Principles */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Design Principles</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--agx-space-xl)]">
          <AgxCard variant="feature">
            <AgxHeading variant="card">Precision</AgxHeading>
            <AgxBodyText>
              Chamfered corners and engineered spacing create a technical, precise aesthetic.
            </AgxBodyText>
          </AgxCard>

          <AgxCard variant="feature">
            <AgxHeading variant="card">Restraint</AgxHeading>
            <AgxBodyText>
              Subtle glows and muted colors maintain premium credibility without excess.
            </AgxBodyText>
          </AgxCard>

          <AgxCard variant="feature">
            <AgxHeading variant="card">Aerospace DNA</AgxHeading>
            <AgxBodyText>
              Visual language derived from cockpit interfaces — futuristic yet trustworthy.
            </AgxBodyText>
          </AgxCard>
        </div>
      </section>

      {/* Color System */}
      <section className="mb-[var(--agx-space-3xl)]">
        <AgxHeading variant="section">Color System</AgxHeading>
        <AgxDivider withGlow className="mb-[var(--agx-space-xl)]" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--agx-space-lg)]">
          <div>
            <div className="agx-chamfer-corner h-20 bg-[var(--agx-bg-primary)] border border-[var(--agx-border-bright)] mb-2" />
            <AgxCaption>Primary BG</AgxCaption>
          </div>
          <div>
            <div className="agx-chamfer-corner h-20 bg-[var(--agx-blue-primary)] mb-2" />
            <AgxCaption>Blue Primary</AgxCaption>
          </div>
          <div>
            <div className="agx-chamfer-corner h-20 bg-[var(--agx-cyan-accent)] mb-2" />
            <AgxCaption>Cyan Accent</AgxCaption>
          </div>
          <div>
            <div className="agx-chamfer-corner h-20 bg-[var(--agx-green-subtle)] mb-2" />
            <AgxCaption>Green State</AgxCaption>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgxDesignSystemShowcase;
