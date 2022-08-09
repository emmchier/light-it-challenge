import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, color, weight, cap }) => (
  <p className={`text p-0 m-0 ${color} ${weight} ${cap}`}>{children}</p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  weight: PropTypes.string,
  cap: PropTypes.string,
};

Text.defaultProps = {
  color: 'text-primary-main',
  weight: 'font-normal',
  cap: 'normal-case',
};

export default Text;
