import { FC } from 'react';
import { useLocalStorage } from './hooks';

const ExLocalStorage: FC = () => {
  // useLocalStorage(item name, initial value)
  const [a, setA] = useLocalStorage('a', 1);

  console.log(a);

  return (
    <div>
      <span>a: {a}</span>
      <button onClick={() => setA(2)}>Change A</button>
    </div>
  );
};

export default ExLocalStorage;
