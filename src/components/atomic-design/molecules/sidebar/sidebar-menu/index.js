import React from 'react';
import Button from '../../../atoms/button';
import Icon from '../../../atoms/icon';

const SidebarMenu = ({ showMenu = false, setShowMenu }) => {
  return (
    <div className={`sidebar-menu ${showMenu === false ? 'closed' : 'opened'}`}>
      <div className="sidebar-menu__content">
        Hola que tal
        <Button onClick={() => setShowMenu(false)} ariaLabel="cerrar menú lateral">
          <span className="skew-effect skew-top"></span>
          <Icon icon="chevron" color="#707070" ariaLabel="icono flecha izquierda" />
          <span className="skew-effect skew-bottom"></span>
        </Button>
      </div>
    </div>
  );
};

export default SidebarMenu;
