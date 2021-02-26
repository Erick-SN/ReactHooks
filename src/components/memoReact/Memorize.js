import { useCounter } from '../useState/AdvanceExample/useCounter';
import { useState } from 'react';
import Small from './Small';

const Memorize = () => {
  const { state, adding } = useCounter(11);
  const [memo, setMemo] = useState(true);
  return (
    <>
      <div>
        <h1>
          Holis: <Small value={state} />
        </h1>
        <hr />
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

export default Memorize;
