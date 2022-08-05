import React from 'react';
import { RootState } from '../../redux/store';
import { useTypedSelector } from './hooks';

const ExampleUseTypedSelector = () => {
  const firstReducer = useTypedSelector((state) => state.firstReducer.value);
  console.log(firstReducer);

  return <div></div>;
};

export default ExampleUseTypedSelector;
