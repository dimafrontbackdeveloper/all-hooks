import React, { useState } from 'react';

const ExampleUseStateTS = () => {
  // useState
  interface IData {
    name: string;
    phone: string;
    postCode: number;
  }

  const [data, setData] = useState<IData>({} as IData);

  return (
    <>
      <div>
        {/* prev - возвращает актуальное значение */}
        <input
          type="text"
          value={data.name}
          onChange={(e) => {
            setData((prev: IData) => ({ ...prev, name: e.target.value }));
          }}
        />
        <div>
          <b>Value: {data.name}</b>
        </div>
      </div>
    </>
  );
};

export default ExampleUseStateTS;
