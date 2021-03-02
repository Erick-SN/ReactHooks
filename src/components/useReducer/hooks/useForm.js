import { useState } from 'react';
export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState);
  const reset = () => {
    setState(initialState);
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return { state, handleChange, reset };
};
