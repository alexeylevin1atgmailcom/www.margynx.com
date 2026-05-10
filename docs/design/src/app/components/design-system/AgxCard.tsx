import React from 'react';

export interface AgxCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'feature' | 'clickable' | 'pricing';
  className?: string;
  onClick?: () => void;
}

export const AgxCard: React.FC<AgxCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const baseStyles = `
    agx-chamfer-corner-lg
    border-[var(--agx-border-thin)]
    transition-all duration-[var(--agx-transition-normal)]
  `;

  const variants = {
    default: `
      bg-[var(--agx-bg-panel)]
      border-[var(--agx-border-default)]
      p-[var(--agx-space-xl)]
    `,
    elevated: `
      bg-[var(--agx-bg-elevated)]
      border-[var(--agx-border-bright)]
      p-[var(--agx-space-xl)]
      shadow-[var(--agx-glow-blue)]
    `,
    feature: `
      bg-[var(--agx-bg-panel)]
      border-[var(--agx-border-default)]
      p-[var(--agx-space-2xl)]
      hover:border-[var(--agx-blue-primary)]
      hover:shadow-[var(--agx-glow-blue)]
    `,
    clickable: `
      bg-[var(--agx-bg-panel)]
      border-[var(--agx-border-default)]
      p-[var(--agx-space-xl)]
      cursor-pointer
      hover:border-[var(--agx-blue-primary)]
      hover:bg-[var(--agx-bg-elevated)]
      hover:shadow-[var(--agx-glow-blue)]
      active:scale-[0.98]
    `,
    pricing: `
      bg-[var(--agx-bg-panel)]
      border-[var(--agx-border-bright)]
      p-[var(--agx-space-2xl)]
      hover:border-[var(--agx-blue-primary)]
      hover:shadow-[var(--agx-glow-blue-strong)]
    `,
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export interface AgxPanelProps {
  children: React.ReactNode;
  title?: string;
  headerAction?: React.ReactNode;
  className?: string;
}

export const AgxPanel: React.FC<AgxPanelProps> = ({
  children,
  title,
  headerAction,
  className = '',
}) => {
  return (
    <div
      className={`
        agx-chamfer-corner-lg
        bg-[var(--agx-bg-panel)]
        border-[var(--agx-border-thin)]
        border-[var(--agx-border-default)]
        overflow-hidden
        ${className}
      `}
    >
      {title && (
        <div
          className="
            agx-chamfer-corner-sm
            bg-[var(--agx-bg-header)]
            border-b-[var(--agx-border-thin)]
            border-b-[var(--agx-border-bright)]
            px-[var(--agx-space-lg)]
            py-[var(--agx-space-md)]
            flex items-center justify-between
          "
        >
          <h3 className="agx-display-text text-[var(--agx-text-primary)]">
            {title}
          </h3>
          {headerAction}
        </div>
      )}
      <div className="p-[var(--agx-space-xl)]">{children}</div>
    </div>
  );
};

export interface AgxModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
}

export const AgxModal: React.FC<AgxModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
  className = '',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`
          agx-chamfer-corner-lg
          bg-[var(--agx-bg-panel)]
          border-[var(--agx-border-medium)]
          border-[var(--agx-blue-primary)]
          shadow-[var(--agx-glow-blue-strong)]
          max-w-2xl w-full mx-4
          max-h-[90vh]
          overflow-hidden
          flex flex-col
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div
            className="
              bg-[var(--agx-bg-header)]
              border-b-[var(--agx-border-thin)]
              border-b-[var(--agx-border-bright)]
              px-[var(--agx-space-xl)]
              py-[var(--agx-space-lg)]
              flex items-center justify-between
            "
          >
            <h2 className="agx-display-text text-[var(--agx-text-primary)]">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="
                text-[var(--agx-text-secondary)]
                hover:text-[var(--agx-blue-bright)]
                transition-colors
              "
            >
              ✕
            </button>
          </div>
        )}
        <div className="p-[var(--agx-space-xl)] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
