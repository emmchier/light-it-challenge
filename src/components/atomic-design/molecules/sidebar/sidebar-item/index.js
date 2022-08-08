import PropTypes from 'prop-types';

import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../../../../context';

import Text from '../../../atoms/text';
import Box from '../../../atoms/box';

const SidebarItem = ({ icon, slug, isActive }) => {
  const { activeItem, setActiveItem, setShowMenu } = useContext(MainContext);

  const handleClick = () => {
    setShowMenu(true);
    setActiveItem({ currentItem: slug, isSelected: true });
  };

  return (
    <li onClick={handleClick} className="sidebar-item">
      <div
        className={`${
          activeItem.currentItem === slug && activeItem.isSelected === true
            ? 'bg-secondary-light'
            : 'bg-transparent'
        } z-10`}
      >
        <Box
          height="h-3"
          background="bg-white"
          classes={`${
            activeItem.currentItem === slug && activeItem.isSelected === true
              ? 'visible'
              : 'invisible'
          } corner-top z-10 rounded-br-lg`}
        />
        <div className={`sidebar-item__content z-10 p-2`}>
          {icon}
          <Text cap="capitalize">{slug}</Text>
        </div>
        <Box
          height="h-3"
          background="bg-white"
          classes={`${
            activeItem.currentItem === slug && activeItem.isSelected === true
              ? 'visible'
              : 'invisible'
          } corner-bottom z-10 rounded-tr-lg`}
        />
      </div>
    </li>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
};

export default SidebarItem;
