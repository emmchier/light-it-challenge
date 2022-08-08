import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../atoms/text';
import Box from '../../../atoms/box';

const SidebarItem = ({ icon, slug, onClick }) => {
  const [isRounded, setIsRounded] = useState(false);

  const handleClick = () => {
    setIsRounded(!isRounded);
    onClick();
  };

  return (
    <li onClick={handleClick} className="sidebar-item">
      <div className={`${isRounded === true ? 'bg-secondary-main' : 'bg-transparent'} z-10`}>
        <Box
          height="h-3"
          background="bg-white"
          classes={`${isRounded === true ? 'visible' : 'invisible'} corner-top z-10 rounded-br-lg`}
        />
        <div className={`sidebar-item__content z-10 p-2`}>
          {icon}
          <Text cap="capitalize">{slug}</Text>
        </div>
        <Box
          height="h-3"
          background="bg-white"
          classes={`${
            isRounded === true ? 'visible' : 'invisible'
          } corner-bottom z-10 rounded-tr-lg`}
        />
      </div>
    </li>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  slug: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SidebarItem.defaultProps = {
  onClick: () => {},
};

export default SidebarItem;
