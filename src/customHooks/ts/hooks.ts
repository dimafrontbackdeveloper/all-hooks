import { RootState } from '../../redux/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../../redux/actions/index';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';

// use selector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(key);
    if (jsonVal !== null) return JSON.parse(jsonVal);

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useInput = (initialVal: any) => {
  const [val, setVal] = useState(initialVal);

  const reset = () => {
    setVal(initialVal);
  };

  const bind = {
    value: val,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value),
  };

  return { val, reset, bind };
};

type TypeOut = {
  ref: any;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

/* 
	Personal Hook
	Hide element when click outside
*/
export const useOutside = (initialIsVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { ref, isShow, setIsShow };
};
