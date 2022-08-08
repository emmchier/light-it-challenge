import React from 'react';
import Button from '../../../atoms/button';
import Icon from '../../../atoms/icon';

const ResizeButtons = () => {
  return (
    <div className="resize-buttons flex items-center flex-col">
      <Button
        onClick={() => console.log('Incrementar')}
        ariaLabel="Incrementar"
        classes="rounded-top"
      >
        <Icon icon="add" color="#707070" ariaLabel="icono de incrementar" />
      </Button>
      <hr className="divider" />
      <Button
        onClick={() => console.log('Decrementar')}
        ariaLabel="Decrementar"
        classes="rounded-bottom"
      >
        <Icon icon="sustract" color="#707070" ariaLabel="icono de decrementar" />
      </Button>
    </div>
  );
};

export default ResizeButtons;
