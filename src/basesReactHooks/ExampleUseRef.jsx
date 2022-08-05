import React, { useEffect, useLayoutEffect, useRef } from 'react';

const ExampleUseRef = () => {
  // хук, который позволяет привязаться к какому либо инпуту, и как-то с ним взаемодействовать (типо document.querySelector())
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'qwerty2';
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input type="text" value="qwerty1" ref={inputRef} />
    </div>
  );
};

export default ExampleUseRef;
