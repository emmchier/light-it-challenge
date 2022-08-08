import React, { useState } from 'react';
import { MainContext } from '../context';

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState({
    aberturas: [],
    equipamiento: [],
    terminaciones: [],
  });

  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);
  const [activeItem, setActiveItem] = useState({
    currentItem: '',
    isSelected: false,
  });

  //   useEffect(() => {
  //     getGlobalData().then(({ props }) => {
  //       setData({
  //         pages: props?.pages.map((page) => page.fields),
  //       });
  //     });
  //   }, []);

  //   console.log(data);

  return (
    <MainContext.Provider
      value={{ data, showMenu, setShowMenu, handleShowMenu, activeItem, setActiveItem }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
