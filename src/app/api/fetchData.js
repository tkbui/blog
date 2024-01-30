import { BASE_URL } from './utils';

export const fetchGames = async () => {
  return fetch(BASE_URL + '/games')
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
  return fetch(BASE_URL + '/home')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
