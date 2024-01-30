import React from 'react';
import Image from 'next/image';

function Game({ title, genre, link, imageLink, comments }) {
  console.log(`props: ${title}`);
  return (
    <div className="d-flex flex-row">
      <Image src={imageLink} width={250} height={250} className="img-fluid rounded" alt={`${title} image`} />
      <div className="d-flex flex-column">
        <h6>{title}</h6>
        <p>{genre}</p>
        <p>{comments}</p>
        <p>
          <a href={link}>Steam Link</a>
        </p>
      </div>
    </div>
  );
}

export default Game;
