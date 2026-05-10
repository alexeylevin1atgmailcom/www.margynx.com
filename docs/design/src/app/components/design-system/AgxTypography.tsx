import React from 'react';

export interface AgxHeadingProps {
  children: React.ReactNode;
  variant?: 'hero' | 'section' | 'subsection' | 'card';
  className?: string;
}

export const AgxHeading: React.FC<AgxHeadingProps> = ({
  children,
  variant = 'section',
  className = '',
}) => {
  const variants = {
    hero: 'text-5xl md:text-6xl lg:text-7xl agx-display-text-hero text-[var(--agx-text-primary)] mb-[var(--agx-space-lg)]',
    section: 'text-3xl md:text-4xl agx-display-text text-[var(--agx-text-primary)] mb-[var(--agx-space-md)]',
    subsection: 'text-2xl agx-display-text text-[var(--agx-text-primary)] mb-[var(--agx-space-sm)]',
    card: 'text-xl agx-display-text text-[var(--agx-text-primary)] mb-[var(--agx-space-sm)]',
  };

  return <h2 className={`${variants[variant]} ${className}`}>{children}</h2>;
};

export interface AgxLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const AgxLabel: React.FC<AgxLabelProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        text-xs
        uppercase
        tracking-[0.15em]
        text-[var(--agx-text-secondary)]
        font-medium
        mb-[var(--agx-space-xs)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface AgxBodyTextProps {
  children: React.ReactNode;
  className?: string;
}

export const AgxBodyText: React.FC<AgxBodyTextProps> = ({ children, className = '' }) => {
  return (
    <p
      className={`
        text-base
        text-[var(--agx-text-primary)]
        leading-relaxed
        ${className}
      `}
    >
      {children}
    </p>
  );
};

export interface AgxSublineProps {
  children: React.ReactNode;
  className?: string;
}

export const AgxSubline: React.FC<AgxSublineProps> = ({ children, className = '' }) => {
  return (
    <p
      className={`
        text-lg
        italic
        text-[var(--agx-text-secondary)]
        leading-relaxed
        mt-[var(--agx-space-sm)]
        ${className}
      `}
    >
      {children}
    </p>
  );
};

export interface AgxCaptionProps {
  children: React.ReactNode;
  className?: string;
}

export const AgxCaption: React.FC<AgxCaptionProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`
        text-sm
        text-[var(--agx-text-muted)]
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export interface AgxHeroTextBlockProps {
  mainLine: string;
  subLine: string;
  className?: string;
}

export const AgxHeroTextBlock: React.FC<AgxHeroTextBlockProps> = ({
  mainLine,
  subLine,
  className = '',
}) => {
  return (
    <div className={className}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--agx-text-primary)] leading-tight mb-[var(--agx-space-md)]">
        {mainLine}
      </h1>
      <AgxSubline className="text-xl md:text-2xl">{subLine}</AgxSubline>
    </div>
  );
};

export interface AgxStatDisplayProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const AgxStatDisplay: React.FC<AgxStatDisplayProps> = ({
  value,
  label,
  trend,
  className = '',
}) => {
  const trendColors = {
    up: 'text-[var(--agx-green-subtle)]',
    down: 'text-[var(--agx-red-subtle)]',
    neutral: 'text-[var(--agx-text-secondary)]',
  };

  return (
    <div className={className}>
      <div
        className={`
          text-4xl
          agx-display-text
          ${trend ? trendColors[trend] : 'text-[var(--agx-blue-bright)]'}
          mb-[var(--agx-space-xs)]
        `}
      >
        {value}
      </div>
      <AgxLabel>{label}</AgxLabel>
    </div>
  );
};
