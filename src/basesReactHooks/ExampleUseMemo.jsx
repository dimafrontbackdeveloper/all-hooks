import React, { useMemo, useState } from 'react';

const ExampleUseMemo = () => {
  const [name, setName] = useState('');

  const age = 22;

  // при изменении name, в value будет записано новое значение
  const value = useMemo(
    () => ({
      name,
      age,
    }),
    [name],
  );

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default ExampleUseMemo;
