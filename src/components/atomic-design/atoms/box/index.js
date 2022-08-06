import React from 'react';
import PropTypes from 'prop-types';

const Box = ({
  children,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  background,
  width,
  height,
  margin,
  padding,
  radius,
  classes,
}) => (
  <div
    className={`${display} ${alignItems} ${justifyContent} ${flexDirection} ${background} ${width} ${height} ${margin} ${padding} ${radius} ${classes}`}
  >
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node,
  display: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  classes: PropTypes.string,
};

Box.defaultProps = {
  display: 'block',
  alignItems: 'items-start',
  justifyContent: 'justify-start',
  flexDirection: 'flex-row',
  background: 'bg-transparent',
  width: 'w-auto',
  height: 'h-auto',
  margin: 'm-0',
  padding: 'p-0',
  radius: 'rounded-none',
  classes: '',
};

export default Box;
