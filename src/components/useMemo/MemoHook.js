import { useCounter } from '../useState/AdvanceExample/useCounter';
import { useState, useMemo } from 'react';

const MemoHook = () => {
  const { state, adding } = useCounter(11);
  const [memo, setMemo] = useState(true);
  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log('ahi vamos');
    }
    return `${iteraciones} veces`;
  };

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <>
      <div>
        <h1>
          MemoHook:<small>{state}</small>
        </h1>
        <hr />
        <p>{memoProcesoPesado}</p>
        <button className="btn btn-primary" onClick={() => adding()}>
          +1
        </button>
        <button className="btn btn-primary" onClick={() => setMemo(!memo)}>
          Show/Hide {JSON.stringify(memo)}
        </button>
      </div>
    </>
  );
};

export default MemoHook;
