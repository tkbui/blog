'use client';

import React, { useState, useEffect } from 'react';
import Game from './Game';
import { fetchGames } from '../api/fetchData';

function DisplayGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const promise = fetchGames();
    promise.then((response) => {
      setGames(response.games);
      console.log('games: ' + games);
    });
  }, []);

  return (
    <div>
      {games.map((game, index) => {
        <Game
          key={index}
          title={game.title}
          genre={game.genre}
          link={game.link}
          imageLink={game.imageLink}
          comments={game.comments}
        />;
      })}
    </div>
  );
}

export default DisplayGames;
