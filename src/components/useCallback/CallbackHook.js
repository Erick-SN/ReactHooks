import { useState, useCallback } from 'react';
import Hijo from './Hijo';
const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };
  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);
  return (
    <>
      <div>
        <h1>Counter {counter}</h1>
        <Hijo adding={increment} />
      </div>
    </>
  );
};

export default CallbackHook;
