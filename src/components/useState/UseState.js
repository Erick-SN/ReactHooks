import { useState } from 'react';
import './useState.css';

const UseState = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });
  const { counter1, counter2 } = state;
  const handleAddCounter = () => {
    setState({
      ...state,
      counter1: counter1 + 1,
    });
  };
  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button onClick={handleAddCounter} className="btn btn-primary">
        +1
      </button>
    </>
  );
};

export default UseState;
