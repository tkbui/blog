import React from 'react';
import Image from 'next/image';
import './Home.scss';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center flex-row m-3">
        <div className="d-flex flex-column pe-4">
          <Image
            src="/images/tatami cover square.png"
            width={250}
            height={250}
            className="img-fluid rounded-circle border border-primary border-2"
            alt="A picture from Tatami Galaxy."
          />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h1>hiya! i'm tk :3c</h1>
          <h4 className="text-secondary">and welcome, welcome!!!</h4>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <p>a lengthier description about this blog page will go here!!</p>
      </div>
    </div>
  );
}
