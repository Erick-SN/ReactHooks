import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({
          error: null,
          laining: false,
          data,
        });
      });
  }, [url]);
  return state;
};
