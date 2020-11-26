import React, { useState, forwardRef } from 'react';
import cn from 'classnames';

export type InputSize = 'l' | 'm';
export type InputVariant = 'primary' | 'secondary' | 'promo';
export interface IInput {
  id?: string;
  variant: InputVariant;
  theme?: string;
  placeholder: string;
  label?: string;
  value: string | number;
  disabled?: boolean;
  success?: boolean;
  error?: string | null;
  icon?: React.ReactElement;
  clearable?: boolean;
  onChange: (value: string) => void;
  isSelectInput?: boolean;
  maxLength?: number;
  className?: string;
}

export const Input = forwardRef(
  (
    {
      id,
      variant,
      theme = 'white',
      placeholder,
      label,
      value,
      disabled,
      success,
      error,
      icon,
      clearable = true,
      onChange,
      isSelectInput,
      maxLength,
      className,
      ...props
    }: IInput,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const inputSize = responsiveSize || defaultSize;

    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value);
    };

    const clearInput = () => {
      onChange('');
    };

    return (
      <div
        className={cn(
          'input-container',
          variant,
          inputSize,
          theme,
          {
            disabled,
            focused: isFocused,
            filled: value && !disabled && !error,
            error,
            'input-container--select-input': isSelectInput,
          },
          className,
        )}
      >
        <label htmlFor={id} className="input-container__label">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
          className={inputSize}
          {...props}
        />
        {success ? (
          <SuccessIcon className="input-container__icon" />
        ) : (
          clearable && value && <CrossIcon className="input-container__icon" onClick={clearInput} />
        )}
        {error && <span className="input-container__error-text">{error}</span>}
        {icon && <div className="input-container__custom-icon">{icon}</div>}
      </div>
    );
  },
);
