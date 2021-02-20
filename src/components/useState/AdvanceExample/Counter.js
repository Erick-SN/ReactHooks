import { useCounter } from './useCounter';
const Counter = () => {
  const { state, adding, substract, reset } = useCounter();
  return (
    <>
      <h1>Counter with customHook: {state}</h1>
      <hr />
      <button onClick={() => adding(2)} className="btn">
        +1
      </button>
      <button onClick={reset} className="btn">
        Reset
      </button>
      <button onClick={() => substract(3)} className="btn">
        -1
      </button>
    </>
  );
};

export default Counter;
