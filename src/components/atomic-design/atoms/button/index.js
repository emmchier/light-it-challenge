import React from 'react';
import Icon from '../icon';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'default',
  ariaLabel = '',
  iconLeft = false,
  iconRight = false,
}) => {
  const getVariant = (variant) => {
    switch (variant) {
      case 'default':
        return 'button';
      case 'text':
        return 'button__text';
      default:
        break;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`button ${getVariant(variant)}`}
      type={type}
      aria-label={ariaLabel}
    >
      {iconLeft && (
        <span className="rotate-70 mr-2 scale-50">
          <Icon icon="chevron" />
        </span>
      )}
      {children}
      {iconRight && (
        <span className="rotate-180 ml-2 scale-50">
          <Icon icon="chevron" />
        </span>
      )}
    </button>
  );
};

export default Button;
