import { BASE_URL } from './utils';

export const fetchGames = async () => {
  console.log('base: ' + process.env.API_URL);
  return fetch(process.env.API_URL + '/games')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchSongs = async () => {
  return fetch(BASE_URL + '/songs')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const fetchTest = async () => {
  return fetch(process.env.API_URL + '/home')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
