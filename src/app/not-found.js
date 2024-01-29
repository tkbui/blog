'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

function Custom404() {
  const router = useRouter();
  setTimeout(() => {
    router.push('/');
  }, 2000);

  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <h3>{"Sorry, that page doesn't exist!"}</h3>
      <h6>Redirecting to home...</h6>
    </div>
  );
}

export default Custom404;
