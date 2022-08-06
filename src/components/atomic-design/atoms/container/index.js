import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, size, display, alignItems, justifyContent, flexDirection }) => (
  <div
    className={`main-container ${size} ${display} ${alignItems} ${justifyContent} ${flexDirection}`}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  display: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
};

Container.defaultProps = {
  size: 'md',
  display: 'block',
  alignItems: 'items-start',
  justifyContent: 'justify-start',
  flexDirection: 'flex-row',
};

export default Container;
