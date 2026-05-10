import React from 'react';

export interface AgxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const AgxInput: React.FC<AgxInputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[var(--agx-space-xs)]">
      {label && (
        <label className="text-[var(--agx-text-secondary)] text-sm uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        className={`
          agx-chamfer-corner
          h-[var(--agx-height-input)]
          px-[var(--agx-space-md)]
          bg-[var(--agx-bg-elevated)]
          border-[var(--agx-border-thin)]
          border-[var(--agx-border-default)]
          text-[var(--agx-text-primary)]
          placeholder:text-[var(--agx-text-muted)]
          transition-all duration-[var(--agx-transition-normal)]
          hover:border-[var(--agx-border-bright)]
          focus:outline-none focus:border-[var(--agx-blue-primary)]
          focus:shadow-[var(--agx-glow-blue)]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-[var(--agx-red-subtle)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-[var(--agx-red-subtle)] text-sm">{error}</span>
      )}
    </div>
  );
};

export interface AgxTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const AgxTextArea: React.FC<AgxTextAreaProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[var(--agx-space-xs)]">
      {label && (
        <label className="text-[var(--agx-text-secondary)] text-sm uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        className={`
          agx-chamfer-corner
          min-h-[120px]
          p-[var(--agx-space-md)]
          bg-[var(--agx-bg-elevated)]
          border-[var(--agx-border-thin)]
          border-[var(--agx-border-default)]
          text-[var(--agx-text-primary)]
          placeholder:text-[var(--agx-text-muted)]
          transition-all duration-[var(--agx-transition-normal)]
          hover:border-[var(--agx-border-bright)]
          focus:outline-none focus:border-[var(--agx-blue-primary)]
          focus:shadow-[var(--agx-glow-blue)]
          disabled:opacity-50 disabled:cursor-not-allowed
          resize-none
          ${error ? 'border-[var(--agx-red-subtle)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-[var(--agx-red-subtle)] text-sm">{error}</span>
      )}
    </div>
  );
};

export interface AgxSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const AgxSelect: React.FC<AgxSelectProps> = ({
  label,
  error,
  options,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[var(--agx-space-xs)]">
      {label && (
        <label className="text-[var(--agx-text-secondary)] text-sm uppercase tracking-wider">
          {label}
        </label>
      )}
      <select
        className={`
          agx-chamfer-corner
          h-[var(--agx-height-input)]
          px-[var(--agx-space-md)]
          bg-[var(--agx-bg-elevated)]
          border-[var(--agx-border-thin)]
          border-[var(--agx-border-default)]
          text-[var(--agx-text-primary)]
          transition-all duration-[var(--agx-transition-normal)]
          hover:border-[var(--agx-border-bright)]
          focus:outline-none focus:border-[var(--agx-blue-primary)]
          focus:shadow-[var(--agx-glow-blue)]
          disabled:opacity-50 disabled:cursor-not-allowed
          cursor-pointer
          ${error ? 'border-[var(--agx-red-subtle)]' : ''}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-[var(--agx-red-subtle)] text-sm">{error}</span>
      )}
    </div>
  );
};
