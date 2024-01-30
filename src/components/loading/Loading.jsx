'use client';

import React from 'react';
import Spinner from '../spinner/Spinner';
// import { useSelector } from 'react-redux';

function Loading() {
  // const isDarkMode = useSelector((state) => state.isDarkMode);
  // TODO: see why having the following className value for the outermost div
  // causes an error "prop className did not match Server and Client" - want the loading page to be
  // dynamically light or dark themed, but the ${isDarkMode ...} portion is not added to className
  // className={`vh-100 vw-100 ${isDarkMode && 'dark bg-dark'}`}

  // having the loading bg-color as bg-secondary for now as a happy medium between dark/light themes ^^;
  return (
    <div className={`vh-100 vw-100 dark bg-secondary`}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <Spinner />
      </div>
    </div>
  );
}

export default Loading;
