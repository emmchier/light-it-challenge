import React from 'react';

import Icon from '../icon';
import Text from '../text';

const Empty = ({ text }) => (
  <div className="empty">
    <Icon icon="empty" ariaLabel="icono contenido vacía" />
    <Text>Aun no hay {text} </Text>
  </div>
);

export default Empty;
