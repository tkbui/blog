import React from 'react';
import fetchTest from '../api/fetchTest';

async function TestFetch() {
  console.log('url: ' + process.env.API_URL);
  const data = await fetchTest();
  console.log('data: ' + data);
  return <h1 className="position-absolute top-50 start-50 translate-middle">{`${data.message} :3c`}</h1>;
}

export default TestFetch;
