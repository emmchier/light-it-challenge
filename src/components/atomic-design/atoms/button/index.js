import React from 'react';
import PropTypes from 'prop-types';

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
      case 'fullWidth':
        return 'button__fullWidth';
      default:
        return 'button';
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  variant: 'default',
  iconLeft: false,
  iconRight: false,
  onClick: () => {},
};

export default Button;
