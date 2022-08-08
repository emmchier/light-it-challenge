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

  //   useEffect(() => {
  //     getGlobalData().then(({ props }) => {
  //       setData({
  //         pages: props?.pages.map((page) => page.fields),
  //       });
  //     });
  //   }, []);

  //   console.log(data);

  return (
    <MainContext.Provider value={{ data, showMenu, setShowMenu, handleShowMenu }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
