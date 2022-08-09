const BASE_URL = process.env.REACT_APP_BASE_URL;

// endpoints
const GET_EQUIPMENT = `${BASE_URL}/equipamiento`;
const GET_OVERTURES = `${BASE_URL}/aberturas`;
const GET_ENDINGS = `${BASE_URL}/terminaciones`;

// headers
const headers = new Headers();
headers.append('Accept', 'application/json');

const parameters = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
};

export const getEquipment = async () => {
  try {
    const result = await fetch(GET_EQUIPMENT, parameters);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('error al traer equipamiento', error);
  }
};

export const getOvertures = async () => {
  try {
    const result = await fetch(GET_OVERTURES, parameters);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('error al traer aberturas', error);
  }
};

export const getEndings = async () => {
  try {
    const result = await fetch(GET_ENDINGS, parameters);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('error al traer terminaciones', error);
  }
};
