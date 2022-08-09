import PropTypes from 'prop-types';

import React, { useContext } from 'react';
import { ApiContext, MainContext } from '../../../../../context';

import Text from '../../../atoms/text';
import Box from '../../../atoms/box';

const SidebarItem = ({ icon, slug }) => {
  const { activeItem, setActiveItem, setShowMenu, setShowActions, setShowCurrentOption } =
    useContext(MainContext);
  const { equipment, overtures, endings } = useContext(ApiContext);

  const filterMenuList = (slug) => {
    switch (slug) {
      case 'equipamiento':
        return equipment;
      case 'aberturas':
        return overtures;
      case 'terminaciones':
        return endings;
      default:
        return [];
    }
  };

  const handleClick = () => {
    setShowMenu(true);
    setActiveItem({ title: slug, items: filterMenuList(slug), isSelected: true });
    setShowActions(true);
    setShowCurrentOption(false);
  };

  return (
    <li onClick={handleClick} className="sidebar-item">
      <div
        className={`${
          activeItem.title === slug && activeItem.isSelected === true
            ? 'bg-secondary-light'
            : 'bg-transparent'
        } z-10`}
      >
        <Box
          height="h-3"
          background="bg-white"
          classes={`${
            activeItem.title === slug && activeItem.isSelected === true ? 'visible' : 'invisible'
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
            activeItem.title === slug && activeItem.isSelected === true ? 'visible' : 'invisible'
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
