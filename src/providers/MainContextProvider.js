import React, { useState } from 'react';

import { MainContext } from '../context';

const MainContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);
  const [activeItem, setActiveItem] = useState({
    title: '',
    items: [],
    isSelected: false,
  });

  const [currentOption, setCurrentOption] = useState({
    title: '',
    name: '',
    items: [],
  });
  const [showCurrentOption, setShowCurrentOption] = useState(false);

  return (
    <MainContext.Provider
      value={{
        showMenu,
        setShowMenu,
        handleShowMenu,
        activeItem,
        setActiveItem,
        showActions,
        setShowActions,
        currentOption,
        setCurrentOption,
        showCurrentOption,
        setShowCurrentOption,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
