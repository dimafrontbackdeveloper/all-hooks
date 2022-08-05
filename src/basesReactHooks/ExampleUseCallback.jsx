import React, { useCallback, useState } from 'react';

const ExampleUseCallback = () => {
  const [name, setName] = useState('');

  const age = 22;

  /*
  useCallback занимееться тем, что кеширует ссылку на функцию.
  Это полезно только в том случае, когда вы передаете функцию как пропс, и при 
  перерендеринге компонента не создастся новая функция, а значит дочерние компоненты
  не будут перерендерены
  */
  const getName = useCallback(() => {
    console.log(`use callback: ${name}`);
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default ExampleUseCallback;
