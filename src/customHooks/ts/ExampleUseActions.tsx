import React from 'react';
import { useActions } from './hooks';

const ExampleUseActions = () => {
  const { changeValue } = useActions();

  console.log(changeValue);

  return <div></div>;
};

export default ExampleUseActions;
