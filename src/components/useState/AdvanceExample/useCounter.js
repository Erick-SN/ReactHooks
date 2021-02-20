import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);
  const adding = (factor = 1) => {
    setState(state + factor);
  };
  const substract = (factor = 1) => {
    setState(state - factor);
  };
  const reset = () => {
    setState(initialState);
  };
  return {
    state,
    adding,
    substract,
    reset,
  };
};
