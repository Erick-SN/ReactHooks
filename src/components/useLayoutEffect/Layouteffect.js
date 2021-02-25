import { useFetch } from '../useEffect/useFetch';
import { useCounter } from '../useState/AdvanceExample/useCounter';
import { useLayoutEffect, useRef, useState } from 'react';
import './layout.css';
const Layouteffect = () => {
  const { state, adding } = useCounter();
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { author, quote } = !!data && data[0];
  const pTag = useRef();
  const [size, setSize] = useState();
  useLayoutEffect(() => {
    setSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <div>
        <h1>Example uselayouteffect</h1>

        <blockquote className="blockquote text-right">
          <p className="mb-o" ref={pTag}>
            {quote}
          </p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
        <pre>{JSON.stringify(size, null, 3)}</pre>
        <button className="btn btn-primary" onClick={() => adding()}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Layouteffect;
