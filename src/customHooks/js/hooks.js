import { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';

export const useCookie = (name, initialValue) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;

    Cookies.set(name, initialValue);
    return initialValue;
  });

  const updateCookie = useCallback(
    (newVal, options) => {
      Cookies.set(name, newVal, options);
      setValue(newVal);
    },
    [name],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();

        setData(data);
      };

      fetchData();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, error };
};
