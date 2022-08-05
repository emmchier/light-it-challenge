import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, size }) => (
  <div className={`main-container ${size}`}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

Container.defaultProps = {
  size: 'md',
};

export default Container;
