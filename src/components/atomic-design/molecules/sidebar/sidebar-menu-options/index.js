import React, { useContext } from 'react';
import { MainContext } from '../../../../../context';
import Button from '../../../atoms/button';

import Heading from '../../../atoms/heading';

const SidebarMenuOptions = ({ slug, menuOptionsList }) => {
  const { setCurrentOption, setShowCurrentOption } = useContext(MainContext);

  const handleCurrentOption = (item) => {
    setCurrentOption({
      title: slug,
      name: item.name,
      items: item.items,
    });
    setShowCurrentOption(true);
  };

  return (
    <div className="sidebar-menu-item">
      <Heading variant="h3" cap="capitalize">
        {slug}
      </Heading>
      <ul className="option-list">
        {menuOptionsList?.map((item) => (
          <li key={item.name} className="option-item">
            <Button onClick={() => handleCurrentOption(item)} ariaLabel={`ir a ${item.name}`}>
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenuOptions;
