import React, { useContext } from 'react';
import { MainContext } from '../../../../../context';
import Button from '../../../atoms/button';

import Heading from '../../../atoms/heading';
import SidebarCurrentOption from '../sidebar-current-option';

const SidebarMenuOptions = ({ activeItem }) => {
  const { currentOption, setCurrentOption, showCurrentOption, setShowCurrentOption } =
    useContext(MainContext);

  const handleCurrentOption = (item) => {
    setCurrentOption({
      title: activeItem.title,
      name: item.name,
      items: item.items,
    });
    setShowCurrentOption(true);
  };

  return (
    <>
      {showCurrentOption === true ? (
        <SidebarCurrentOption option={currentOption} setShowCurrentOption={setShowCurrentOption} />
      ) : (
        <div className="sidebar-menu-item mt-10">
          <div className="sidebar-menu-item__list">
            <Heading variant="h4" cap="capitalize" weight="font-bold">
              {activeItem.title}
            </Heading>
            <ul className="option-list mt-2">
              {activeItem.items?.map((item) => (
                <li key={item.name} className="option-item">
                  <Button
                    onClick={() => handleCurrentOption(item)}
                    iconRight={true}
                    ariaLabel={`ir a ${item.name}`}
                  >
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarMenuOptions;
