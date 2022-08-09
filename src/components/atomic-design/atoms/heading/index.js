import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, variant, color, weight, cap }) => {
  const getHeading = () => {
    switch (variant) {
      case 'h1':
        return <h1 className={`heading ${variant} ${color} ${weight} ${cap}`}>{children}</h1>;
      case 'h2':
        return <h2 className={`heading ${variant} ${color} ${weight} ${cap}`}>{children}</h2>;
      case 'h3':
        return <h3 className={`heading ${variant} ${color} ${weight} ${cap}`}>{children}</h3>;
      case 'h4':
        return <h4 className={`heading ${variant} ${color} ${weight} ${cap}`}>{children}</h4>;
      case 'h5':
        return <h5 className={`heading ${variant} ${color} ${weight} ${cap}`}>{children}</h5>;
      case 'h6':
        return <h6 className={`heading ${variant} ${color} ${weight} ${cap}`}>{children}</h6>;
      default:
        return <h3 className={`heading ${variant} ${color} ${weight} ${cap}`}>{children}</h3>;
    }
  };
  return <>{getHeading()}</>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  cap: PropTypes.string,
};

Heading.defaultProps = {
  variant: 'h3',
  color: 'text-primary-main',
  weight: 'font-medium',
  cap: 'normal-case',
};

export default Heading;
