import React from 'react';
import { useInput } from './hooks';

const UseInputEx = () => {
  const { bind, val, reset } = useInput('');

  console.log(val);

  return (
    <div>
      <input {...bind} placeholder="Enter city" value={val} />{' '}
      <button onClick={reset}>clear input</button>
    </div>
  );
};

export default UseInputEx;
