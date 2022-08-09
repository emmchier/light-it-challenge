import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import Text from '../text';

const Empty = ({ text }) => (
  <div className="empty">
    <Icon icon="empty" ariaLabel="icono contenido vacía" />
    <Text>Aun no hay {text} </Text>
  </div>
);

Empty.propTypes = {
  text: PropTypes.string,
};

Empty.defaultProps = {
  text: '',
};

export default Empty;
