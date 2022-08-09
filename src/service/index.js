const BASE_URL = process.env.REACT_APP_BASE_URL;

// endpoints
const GET_EQUIPMENT = `${BASE_URL}/equipamiento`;
const GET_OVERTURES = `${BASE_URL}/aberturas`;
const GET_ENDINGS = `${BASE_URL}/terminaciones`;

export const getEquipment = async () => {
  try {
    const result = await fetch(GET_EQUIPMENT);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('error al traer equipamiento', error);
  }
};

export const getOvertures = async () => {
  try {
    const result = await fetch(GET_OVERTURES);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('error al traer aberturas', error);
  }
};

export const getEndings = async () => {
  try {
    const result = await fetch(GET_ENDINGS);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('error al traer terminaciones', error);
  }
};
