import React, { useEffect, useLayoutEffect } from 'react';

const ExampleUseLayoutEffect = () => {
  // useLayoutEffect будет выполняться до подгрузки приложения (до создания html) и подгружаеться быстрее чем useEffect
  useLayoutEffect(() => {
    console.log('use layout effect');
  }, []);

  useEffect(() => {
    console.log('use effect');
  }, []);

  return <div></div>;
};

export default ExampleUseLayoutEffect;
