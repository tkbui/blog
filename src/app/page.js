import React from 'react';
import Image from 'next/image';

export default function Home() {
  const description =
    "i've been learning some frontend (next.js, react.js, html, bootstrap css) at work and i'd like to try to practice and improve on these skills by making a lil blog site! hopefully this will be filled with some tidbits about me - namely hobbies and interests, but maybe in the future i'll add some professional deets too :) i'm also hoping to make certain pages dynamic and pull data via apis e.g. with spotify rather than relying on static data in the project. but that's for future me to worry about!";
  return (
    <div className="d-flex flex-column mt-4 mx-auto">
      <div className="d-flex justify-content-center flex-row m-3 image-header-section">
        <div className="pe-4">
          <Image
            src="/images/tatami cover square.png"
            width={250}
            height={250}
            className="img-fluid rounded-circle border border-primary border-2"
            alt="A picture from Tatami Galaxy."
          />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h1>{"hiya! i'm tk :3c"}</h1>
          <h4 className="text-secondary">and welcome, welcome!!!</h4>
        </div>
      </div>
      <div className="description p-5 pt-3 text-center mx-auto">
        <p>{description}</p>
      </div>
    </div>
  );
}
