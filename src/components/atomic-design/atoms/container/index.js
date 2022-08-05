import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, container }) => (
  <div className={`main-container ${container}`}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.string,
};

Container.defaultProps = {
  container: 'md',
};

export default Container;
