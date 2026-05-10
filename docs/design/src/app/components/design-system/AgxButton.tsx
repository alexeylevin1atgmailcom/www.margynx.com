import React from 'react';

export interface AgxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'compact' | 'icon';
  children: React.ReactNode;
}

export const AgxButton: React.FC<AgxButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = `
    relative overflow-hidden
    transition-all duration-[var(--agx-transition-normal)]
    font-medium
    agx-chamfer-corner
    border-[var(--agx-border-medium)]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[var(--agx-blue-primary)]
      border-[var(--agx-blue-bright)]
      text-[var(--agx-text-primary)]
      hover:bg-[var(--agx-blue-bright)]
      hover:shadow-[var(--agx-glow-blue-strong)]
      active:bg-[var(--agx-blue-muted)]
      focus:outline-none focus:ring-2 focus:ring-[var(--agx-blue-bright)] focus:ring-offset-2 focus:ring-offset-[var(--agx-bg-primary)]
      h-[var(--agx-height-button)]
      px-[var(--agx-space-xl)]
    `,
    secondary: `
      bg-transparent
      border-[var(--agx-border-bright)]
      text-[var(--agx-text-primary)]
      hover:bg-[var(--agx-bg-elevated)]
      hover:border-[var(--agx-blue-primary)]
      hover:shadow-[var(--agx-glow-blue)]
      active:bg-[var(--agx-bg-panel)]
      focus:outline-none focus:ring-2 focus:ring-[var(--agx-blue-primary)] focus:ring-offset-2 focus:ring-offset-[var(--agx-bg-primary)]
      h-[var(--agx-height-button)]
      px-[var(--agx-space-xl)]
    `,
    tertiary: `
      bg-transparent
      border-transparent
      text-[var(--agx-text-secondary)]
      hover:text-[var(--agx-blue-bright)]
      hover:bg-[var(--agx-bg-elevated)]
      active:text-[var(--agx-blue-primary)]
      focus:outline-none focus:ring-2 focus:ring-[var(--agx-blue-primary)] focus:ring-offset-2 focus:ring-offset-[var(--agx-bg-primary)]
      h-[var(--agx-height-button)]
      px-[var(--agx-space-lg)]
    `,
    compact: `
      bg-transparent
      border-[var(--agx-border-default)]
      text-[var(--agx-text-secondary)]
      hover:border-[var(--agx-blue-primary)]
      hover:text-[var(--agx-text-primary)]
      hover:shadow-[var(--agx-glow-blue)]
      active:bg-[var(--agx-bg-elevated)]
      focus:outline-none focus:ring-1 focus:ring-[var(--agx-blue-primary)]
      h-[var(--agx-height-compact)]
      px-[var(--agx-space-md)]
      text-sm
    `,
    icon: `
      bg-transparent
      border-[var(--agx-border-default)]
      text-[var(--agx-text-secondary)]
      hover:border-[var(--agx-blue-primary)]
      hover:text-[var(--agx-blue-bright)]
      hover:shadow-[var(--agx-glow-blue)]
      active:bg-[var(--agx-bg-elevated)]
      focus:outline-none focus:ring-1 focus:ring-[var(--agx-blue-primary)]
      h-[var(--agx-height-button)]
      w-[var(--agx-height-button)]
      p-0
      flex items-center justify-center
    `,
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
