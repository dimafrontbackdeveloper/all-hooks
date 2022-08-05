import React from 'react';
import { useSelector } from 'react-redux';

export const ExampleUseSelector = () => {
  const value = useSelector((state) => state.firstReducer.value);

  return <div></div>;
};

export default ExampleUseSelector;
