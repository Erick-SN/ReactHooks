import { useFetch } from './useFetch';
import { useCounter } from '../useState/AdvanceExample/useCounter';
const Layouteffect = () => {
  const { state, adding } = useCounter();
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <>
      <div>
        <h1>Example uselayouteffect</h1>
        {loading ? (
          <div className="alert alert-info text-center">Loading...</div>
        ) : (
          <blockquote className="blockquote text-right">
            <p className="mb-o">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )}
        <button className="btn btn-primary" onClick={() => adding()}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default Layouteffect;
