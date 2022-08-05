import React, { useEffect } from 'react';

const ExampleUseEffect = () => {
  /*
  если ничего не передавать вторым параметром, хук будет срабатывать при каждом ререндере компоненты
  если передать пустой массив, хук сработает при первом рендере компонента
  если передать в массив какие-либо переменные,то хук сработает при первом рендере компоненты и при изменении этих переменных, будет срабатывать этот хук 
  */

  useEffect(() => {
    console.log('on every rerender');
  });

  useEffect(() => {
    console.log('on first render');
  }, []);

  // когда компонент исчезнет, то пройзойдет clearInterval
  useEffect(() => {
    const inter = setInterval(() => {}, 1000);

    return clearInterval(inter);
  }, []);

  return <div></div>;
};

export default ExampleUseEffect;
