import React from 'react';

import Button from '../../../atoms/button';
import Icon from '../../../atoms/icon';

const DirectionButtons = () => (
  <div className="direction-buttons">
    <div className="direction-buttons__content">
      <Button
        onClick={() => console.log('flecha a izquierda')}
        ariaLabel="izquierda"
        classes="direction-left"
      >
        <Icon icon="arrow" rotate="-rotate-90" color="#707070" ariaLabel="icono flecha izquierda" />
      </Button>
      <Button
        onClick={() => console.log('flecha arriba')}
        ariaLabel="arriba"
        classes="direction-top"
      >
        <Icon icon="arrow" color="#707070" ariaLabel="icono flecha arriba" />
      </Button>
      <Button
        onClick={() => console.log('flecha a derecha')}
        ariaLabel="derecha"
        classes="direction-right"
      >
        <Icon icon="arrow" rotate="rotate-90" color="#707070" ariaLabel="icono flecha derecha" />
      </Button>
      <Button
        onClick={() => console.log('flecha abajo')}
        ariaLabel="abajo"
        classes="direction-bottom"
      >
        <Icon icon="arrow" rotate="rotate-180" color="#707070" ariaLabel="icono flecha abajo" />
      </Button>
    </div>
  </div>
);

export default DirectionButtons;
