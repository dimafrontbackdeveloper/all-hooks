import React from 'react';
import { useFetch } from './hooks';

const UseFetchEx = () => {
  const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {<div>Data: {JSON.stringify(data, 2)}</div>}
        {error && <div>Error: {error}</div>}
      </div>
    );
  }
};

export default UseFetchEx;
