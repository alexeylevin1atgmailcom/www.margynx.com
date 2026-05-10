import React from 'react';

export interface AgxCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const AgxCheckbox: React.FC<AgxCheckboxProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <label className="flex items-center gap-[var(--agx-space-sm)] cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div
          className="
            agx-chamfer-corner-sm
            w-5 h-5
            border-[var(--agx-border-medium)]
            border-[var(--agx-border-bright)]
            bg-[var(--agx-bg-elevated)]
            transition-all duration-[var(--agx-transition-normal)]
            group-hover:border-[var(--agx-blue-primary)]
            group-hover:shadow-[var(--agx-glow-blue)]
            peer-checked:bg-[var(--agx-blue-primary)]
            peer-checked:border-[var(--agx-blue-bright)]
            peer-checked:shadow-[var(--agx-glow-blue)]
            peer-focus:ring-2 peer-focus:ring-[var(--agx-blue-primary)] peer-focus:ring-offset-2 peer-focus:ring-offset-[var(--agx-bg-primary)]
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
            flex items-center justify-center
          "
        >
          <svg
            className="w-3 h-3 text-[var(--agx-text-primary)] opacity-0 peer-checked:opacity-100 transition-opacity"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="2,6 5,9 10,3" />
          </svg>
        </div>
      </div>
      {label && (
        <span className="text-[var(--agx-text-primary)] select-none">{label}</span>
      )}
    </label>
  );
};

export interface AgxRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const AgxRadio: React.FC<AgxRadioProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <label className="flex items-center gap-[var(--agx-space-sm)] cursor-pointer group">
      <div className="relative">
        <input
          type="radio"
          className="peer sr-only"
          {...props}
        />
        <div
          className="
            w-5 h-5
            rounded-full
            border-[var(--agx-border-medium)]
            border-[var(--agx-border-bright)]
            bg-[var(--agx-bg-elevated)]
            transition-all duration-[var(--agx-transition-normal)]
            group-hover:border-[var(--agx-blue-primary)]
            group-hover:shadow-[var(--agx-glow-blue)]
            peer-checked:border-[var(--agx-blue-bright)]
            peer-focus:ring-2 peer-focus:ring-[var(--agx-blue-primary)] peer-focus:ring-offset-2 peer-focus:ring-offset-[var(--agx-bg-primary)]
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
            flex items-center justify-center
          "
        >
          <div
            className="
              w-2.5 h-2.5
              rounded-full
              bg-[var(--agx-blue-primary)]
              shadow-[var(--agx-glow-blue)]
              scale-0
              peer-checked:scale-100
              transition-transform duration-[var(--agx-transition-fast)]
            "
          />
        </div>
      </div>
      {label && (
        <span className="text-[var(--agx-text-primary)] select-none">{label}</span>
      )}
    </label>
  );
};

export interface AgxToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const AgxToggle: React.FC<AgxToggleProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <label className="flex items-center gap-[var(--agx-space-sm)] cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div
          className="
            agx-chamfer-corner-sm
            w-12 h-6
            border-[var(--agx-border-medium)]
            border-[var(--agx-border-bright)]
            bg-[var(--agx-bg-elevated)]
            transition-all duration-[var(--agx-transition-normal)]
            group-hover:border-[var(--agx-blue-primary)]
            peer-checked:bg-[var(--agx-blue-muted)]
            peer-checked:border-[var(--agx-blue-primary)]
            peer-focus:ring-2 peer-focus:ring-[var(--agx-blue-primary)] peer-focus:ring-offset-2 peer-focus:ring-offset-[var(--agx-bg-primary)]
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
          "
        >
          <div
            className="
              agx-chamfer-corner-sm
              absolute top-0.5 left-0.5
              w-4 h-4
              bg-[var(--agx-border-bright)]
              transition-all duration-[var(--agx-transition-normal)]
              peer-checked:left-[calc(100%-18px)]
              peer-checked:bg-[var(--agx-blue-bright)]
              peer-checked:shadow-[var(--agx-glow-blue)]
            "
          />
        </div>
      </div>
      {label && (
        <span className="text-[var(--agx-text-primary)] select-none">{label}</span>
      )}
    </label>
  );
};

export interface AgxChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
}

export const AgxChip: React.FC<AgxChipProps> = ({
  children,
  active = false,
  onClick,
  onRemove,
  className = '',
}) => {
  return (
    <div
      className={`
        agx-chamfer-corner-sm
        inline-flex items-center gap-[var(--agx-space-xs)]
        px-[var(--agx-space-md)]
        py-[var(--agx-space-xs)]
        border-[var(--agx-border-thin)]
        text-sm
        transition-all duration-[var(--agx-transition-normal)]
        ${
          active
            ? 'bg-[var(--agx-blue-muted)] border-[var(--agx-blue-primary)] text-[var(--agx-text-primary)] shadow-[var(--agx-glow-blue)]'
            : 'bg-[var(--agx-bg-elevated)] border-[var(--agx-border-default)] text-[var(--agx-text-secondary)]'
        }
        ${onClick ? 'cursor-pointer hover:border-[var(--agx-blue-primary)] hover:text-[var(--agx-text-primary)]' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      <span>{children}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:text-[var(--agx-blue-bright)] transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export interface AgxSegmentedControlProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const AgxSegmentedControl: React.FC<AgxSegmentedControlProps> = ({
  options,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div
      className={`
        agx-chamfer-corner
        inline-flex
        bg-[var(--agx-bg-elevated)]
        border-[var(--agx-border-thin)]
        border-[var(--agx-border-default)]
        p-1
        ${className}
      `}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`
            agx-chamfer-corner-sm
            px-[var(--agx-space-md)]
            py-[var(--agx-space-xs)]
            text-sm
            transition-all duration-[var(--agx-transition-normal)]
            ${
              value === option.value
                ? 'bg-[var(--agx-blue-primary)] text-[var(--agx-text-primary)] shadow-[var(--agx-glow-blue)]'
                : 'text-[var(--agx-text-secondary)] hover:text-[var(--agx-text-primary)]'
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
