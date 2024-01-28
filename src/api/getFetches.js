// GET call to return list of games and details
const fetchGames = () => {
  fetch()
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log('Error: ', error));
};

// GET call to return list of songs and details
const fetchSongs = () => {
  fetch()
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log('Error: ', error));
};
