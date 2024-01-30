'use client';

import React, { useState, useEffect } from 'react';
import { fetchGames } from '../api/fetchData';

function Games() {
  const [games, setGames] = useState({});

  const getGames = async () => {
    const data = await fetchGames();
    console.log('data: ' + data);
    console.log('games: ' + data.games);
  };

  return (
    <button className="position-absolute start-50 top-50 translate-middle" onClick={getGames}>
      Click!
    </button>
  );
}

export default Games;
