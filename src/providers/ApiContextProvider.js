import React, { useEffect, useState } from 'react';
import { ApiContext } from '../context';
import { getEndings, getEquipment, getOvertures } from '../service';

const ApiContextProvider = ({ children }) => {
  const [equipment, setEquipment] = useState([]);
  const [overtures, setOvertures] = useState([]);
  const [endings, setEndings] = useState([]);

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
    <ApiContext.Provider
      value={{
        equipment,
        setEquipment,
        overtures,
        setOvertures,
        endings,
        setEndings,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
