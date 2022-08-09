import React, { useEffect, useState } from 'react';
import { ApiContext } from '../context';
import { getEndings, getEquipment, getOvertures } from '../service';

const ApiContextProvider = ({ children }) => {
  const [equipment, setEquipment] = useState([]);
  const [overtures, setOvertures] = useState([]);
  const [endings, setEndings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    ])
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
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
        loading,
        setLoading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
