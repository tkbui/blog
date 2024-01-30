'use client';

import React from 'react';
import Spinner from '../spinner/Spinner';
import { useSelector } from 'react-redux';

function Loading() {
  const isDarkMode = useSelector((state) => state.isDarkMode);

  return (
    <div className={`vh-100 vw-100 ${isDarkMode ? 'dark bg-dark' : ''}`}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <Spinner />
      </div>
    </div>
  );
}

export default Loading;
