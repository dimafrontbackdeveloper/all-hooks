import React from 'react';
import { useOutside } from './hooks';

const ExOutside = () => {
  const { ref, isShow, setIsShow } = useOutside(false);

  return (
    <div>
      <button
        ref={ref}
        onClick={() => {
          setIsShow(true);
        }}>
        show element
      </button>
      {isShow && <div>hidden div</div>}
    </div>
  );
};

export default ExOutside;
