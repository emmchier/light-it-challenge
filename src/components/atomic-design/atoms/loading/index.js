import React from 'react';
import Icon from '../icon';
import Text from '../text';

const Loading = () => {
  return (
    <div className="loading animate-pulse">
      <Icon icon="spinner" ariaLabel="icono cargando..." />
      <Text cap="capitalize">Cargando...</Text>
    </div>
  );
};

export default Loading;
