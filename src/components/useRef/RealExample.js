import Example from '../useEffect/Example';
import { useState } from 'react';
const RealExample = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h1>RealExample</h1>
        <hr />
        {show && <Example />}
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Show/Hide
        </button>
      </div>
    </>
  );
};

export default RealExample;
