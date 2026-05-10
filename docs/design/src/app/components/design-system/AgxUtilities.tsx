import React from 'react';

export interface AgxBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

export const AgxBadge: React.FC<AgxBadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-[var(--agx-bg-elevated)] border-[var(--agx-border-bright)] text-[var(--agx-text-primary)]',
    success: 'bg-[var(--agx-green-muted)] border-[var(--agx-green-subtle)] text-[var(--agx-text-primary)] shadow-[0_0_8px_rgba(61,220,132,0.3)]',
    warning: 'bg-[var(--agx-amber-muted)] border-[var(--agx-amber-subtle)] text-[var(--agx-text-primary)] shadow-[0_0_8px_rgba(255,167,38,0.3)]',
    error: 'bg-[var(--agx-red-muted)] border-[var(--agx-red-subtle)] text-[var(--agx-text-primary)] shadow-[0_0_8px_rgba(255,82,82,0.3)]',
    info: 'bg-[var(--agx-blue-muted)] border-[var(--agx-blue-primary)] text-[var(--agx-text-primary)] shadow-[var(--agx-glow-blue)]',
  };

  return (
    <span
      className={`
        agx-chamfer-corner-sm
        inline-flex items-center
        px-[var(--agx-space-sm)]
        py-[var(--agx-space-xs)]
        border-[var(--agx-border-thin)]
        text-xs
        uppercase
        tracking-wider
        font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export interface AgxDividerProps {
  orientation?: 'horizontal' | 'vertical';
  withGlow?: boolean;
  className?: string;
}

export const AgxDivider: React.FC<AgxDividerProps> = ({
  orientation = 'horizontal',
  withGlow = false,
  className = '',
}) => {
  const baseStyles = `bg-[var(--agx-border-bright)] ${withGlow ? 'shadow-[var(--agx-glow-blue)]' : ''}`;

  if (orientation === 'vertical') {
    return <div className={`w-[1px] h-full ${baseStyles} ${className}`} />;
  }

  return <div className={`h-[1px] w-full ${baseStyles} ${className}`} />;
};

export interface AgxProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export const AgxProgressBar: React.FC<AgxProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  variant = 'default',
  className = '',
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  const variants = {
    default: 'bg-[var(--agx-blue-primary)] shadow-[var(--agx-glow-blue)]',
    success: 'bg-[var(--agx-green-subtle)] shadow-[0_0_8px_rgba(61,220,132,0.3)]',
    warning: 'bg-[var(--agx-amber-subtle)] shadow-[0_0_8px_rgba(255,167,38,0.3)]',
    error: 'bg-[var(--agx-red-subtle)] shadow-[0_0_8px_rgba(255,82,82,0.3)]',
  };

  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-[var(--agx-space-xs)]">
          {label && <span className="text-sm text-[var(--agx-text-secondary)] uppercase tracking-wider">{label}</span>}
          {showPercentage && <span className="text-sm text-[var(--agx-text-primary)] agx-display-text">{percentage.toFixed(0)}%</span>}
        </div>
      )}
      <div
        className="
          agx-chamfer-corner-sm
          h-2
          bg-[var(--agx-bg-elevated)]
          border-[var(--agx-border-thin)]
          border-[var(--agx-border-default)]
          overflow-hidden
        "
      >
        <div
          className={`
            h-full
            transition-all duration-[var(--agx-transition-slow)]
            ${variants[variant]}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export interface AgxTooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const AgxTooltip: React.FC<AgxTooltipProps> = ({
  children,
  content,
  position = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`
            agx-chamfer-corner-sm
            absolute z-50
            bg-[var(--agx-bg-panel)]
            border-[var(--agx-border-thin)]
            border-[var(--agx-blue-primary)]
            shadow-[var(--agx-glow-blue-strong)]
            px-[var(--agx-space-md)]
            py-[var(--agx-space-sm)]
            text-sm
            text-[var(--agx-text-primary)]
            whitespace-nowrap
            pointer-events-none
            ${positions[position]}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export interface AgxSkeletonProps {
  variant?: 'text' | 'card' | 'button' | 'avatar';
  className?: string;
}

export const AgxSkeleton: React.FC<AgxSkeletonProps> = ({
  variant = 'text',
  className = '',
}) => {
  const variants = {
    text: 'h-4 w-full',
    card: 'h-48 w-full',
    button: 'h-[var(--agx-height-button)] w-32',
    avatar: 'h-12 w-12',
  };

  return (
    <div
      className={`
        agx-chamfer-corner-sm
        ${variants[variant]}
        bg-[var(--agx-bg-elevated)]
        border-[var(--agx-border-thin)]
        border-[var(--agx-border-default)]
        animate-pulse
        ${className}
      `}
    />
  );
};

export interface AgxSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AgxSpinner: React.FC<AgxSpinnerProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  };

  return (
    <div
      className={`
        ${sizes[size]}
        border-[var(--agx-border-bright)]
        border-t-[var(--agx-blue-bright)]
        rounded-full
        animate-spin
        ${className}
      `}
    />
  );
};

export interface AgxAlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  onClose?: () => void;
  className?: string;
}

export const AgxAlert: React.FC<AgxAlertProps> = ({
  children,
  variant = 'info',
  title,
  onClose,
  className = '',
}) => {
  const variants = {
    info: 'border-[var(--agx-blue-primary)] bg-[var(--agx-blue-muted)]/20',
    success: 'border-[var(--agx-green-subtle)] bg-[var(--agx-green-muted)]/20',
    warning: 'border-[var(--agx-amber-subtle)] bg-[var(--agx-amber-muted)]/20',
    error: 'border-[var(--agx-red-subtle)] bg-[var(--agx-red-muted)]/20',
  };

  return (
    <div
      className={`
        agx-chamfer-corner
        border-l-[var(--agx-border-thick)]
        ${variants[variant]}
        p-[var(--agx-space-lg)]
        ${className}
      `}
    >
      <div className="flex items-start justify-between gap-[var(--agx-space-md)]">
        <div className="flex-1">
          {title && (
            <div className="agx-display-text text-[var(--agx-text-primary)] mb-[var(--agx-space-xs)]">
              {title}
            </div>
          )}
          <div className="text-[var(--agx-text-primary)]">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[var(--agx-text-secondary)] hover:text-[var(--agx-text-primary)] transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
