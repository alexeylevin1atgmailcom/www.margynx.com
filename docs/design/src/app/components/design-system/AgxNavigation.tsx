import React from 'react';

export interface AgxNavBarProps {
  logo?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export const AgxNavBar: React.FC<AgxNavBarProps> = ({
  logo,
  children,
  actions,
  className = '',
}) => {
  return (
    <nav
      className={`
        agx-chamfer-corner
        h-[var(--agx-height-nav)]
        bg-[var(--agx-bg-header)]
        border-b-[var(--agx-border-medium)]
        border-b-[var(--agx-border-bright)]
        px-[var(--agx-space-xl)]
        flex items-center justify-between
        ${className}
      `}
    >
      <div className="flex items-center gap-[var(--agx-space-2xl)]">
        {logo}
        <div className="flex items-center gap-[var(--agx-space-md)]">
          {children}
        </div>
      </div>
      {actions && <div className="flex items-center gap-[var(--agx-space-md)]">{actions}</div>}
    </nav>
  );
};

export interface AgxNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const AgxNavItem: React.FC<AgxNavItemProps> = ({
  children,
  active = false,
  onClick,
  href,
  className = '',
}) => {
  const Component = href ? 'a' : 'button';
  const baseStyles = `
    agx-chamfer-corner-sm
    px-[var(--agx-space-lg)]
    py-[var(--agx-space-sm)]
    text-sm
    uppercase
    tracking-wider
    transition-all duration-[var(--agx-transition-normal)]
    border-[var(--agx-border-thin)]
  `;

  const activeStyles = active
    ? `
      bg-[var(--agx-blue-muted)]
      border-[var(--agx-blue-primary)]
      text-[var(--agx-text-primary)]
      shadow-[var(--agx-glow-blue)]
    `
    : `
      border-transparent
      text-[var(--agx-text-secondary)]
      hover:text-[var(--agx-text-primary)]
      hover:border-[var(--agx-border-bright)]
      hover:bg-[var(--agx-bg-elevated)]
    `;

  return (
    <Component
      className={`${baseStyles} ${activeStyles} ${className}`}
      onClick={onClick}
      {...(href ? { href } : {})}
    >
      {children}
    </Component>
  );
};

export interface AgxStickyHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const AgxStickyHeader: React.FC<AgxStickyHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        sticky top-0 z-40
        backdrop-blur-md
        bg-[var(--agx-bg-header)]/95
        border-b-[var(--agx-border-thin)]
        border-b-[var(--agx-border-bright)]
        shadow-[0_4px_12px_rgba(0,0,0,0.3)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface AgxMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const AgxMobileMenu: React.FC<AgxMobileMenuProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80
          agx-chamfer-corner-lg
          bg-[var(--agx-bg-panel)]
          border-l-[var(--agx-border-medium)]
          border-l-[var(--agx-blue-primary)]
          shadow-[var(--agx-glow-blue-strong)]
          transition-transform duration-[var(--agx-transition-slow)]
          z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          ${className}
        `}
      >
        <div className="p-[var(--agx-space-xl)] h-full overflow-y-auto">
          <div className="flex justify-end mb-[var(--agx-space-xl)]">
            <button
              onClick={onClose}
              className="
                text-[var(--agx-text-secondary)]
                hover:text-[var(--agx-blue-bright)]
                transition-colors
                text-2xl
              "
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-[var(--agx-space-md)]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export interface AgxBreadcrumbProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export const AgxBreadcrumb: React.FC<AgxBreadcrumbProps> = ({
  items,
  className = '',
}) => {
  return (
    <nav className={`flex items-center gap-[var(--agx-space-xs)] text-sm ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-[var(--agx-border-bright)]">/</span>
          )}
          {item.href ? (
            <a
              href={item.href}
              className="
                text-[var(--agx-text-secondary)]
                hover:text-[var(--agx-blue-bright)]
                transition-colors
                uppercase
                tracking-wider
              "
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[var(--agx-text-primary)] uppercase tracking-wider">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
