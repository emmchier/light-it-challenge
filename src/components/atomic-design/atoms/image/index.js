import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, height, onError }) => (
  <img
    src={src}
    width={width}
    height={height}
    alt={alt}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null;
      currentTarget.src = onError;
    }}
  />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  src: '',
  width: 'w-auto',
  height: 'h-auto',
  alt: '',
  onError: '',
};

export default Image;
