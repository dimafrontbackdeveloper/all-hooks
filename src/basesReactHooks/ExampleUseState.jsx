import React, { useState } from 'react';

const ExampleUseState = () => {
  const [data, setData] = useState({});

  return (
    <>
      {/* prev - возвращает актуальное значение */}
      <input
        type="text"
        value={data.name}
        onChange={(e) => {
          setData((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <div>
        <b>Value: {data.name}</b>
      </div>
    </>
  );
};

export default ExampleUseState;
