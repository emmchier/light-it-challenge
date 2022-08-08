import React, { useEffect, useState } from 'react';
import { MainContext } from '../context';
import { getEndings, getEquipment, getOvertures } from '../service';

const MainContextProvider = ({ children }) => {
  const [equipment, setEquipment] = useState([]);
  const [overtures, setOvertures] = useState([]);
  const [endings, setEndings] = useState([]);

  const [showMenu, setShowMenu] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);
  const [activeItem, setActiveItem] = useState({
    currentItem: '',
    isSelected: false,
  });

  const [currentOption, setCurrentOption] = useState({
    title: '',
    name: '',
    items: [],
  });
  const [showCurrentOption, setShowCurrentOption] = useState(false);

  useEffect(() => {
    Promise.all([
      getEquipment().then((res) => {
        setEquipment(res);
      }),
      getOvertures().then((res) => {
        setOvertures(res);
      }),
      getEndings().then((res) => {
        setEndings(res);
      }),
    ]).catch(function (error) {
      console.log(error);
    });
  }, []);

  console.log(equipment);
  console.log(overtures);
  console.log(endings);

  return (
    <MainContext.Provider
      value={{
        equipment,
        setEquipment,
        overtures,
        setOvertures,
        endings,
        setEndings,
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
