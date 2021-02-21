import { useRef } from 'react';
const FocusScreen = () => {
  const ref = useRef();
  const handleClick = () => {
    ref.current.select();
  };
  return (
    <>
      <div>
        <h1>Focus Screen</h1>
        <hr />
        <input ref={ref} className="form-control" placeholder="Su nombre" />
        <button className="btn btn-primary" onClick={handleClick}>
          Focus
        </button>
      </div>
    </>
  );
};

export default FocusScreen;
