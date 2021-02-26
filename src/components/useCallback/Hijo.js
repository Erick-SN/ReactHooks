import { memo } from 'react';

const Hijo = memo(({ adding }) => {
  console.log('me genere');
  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={() => adding()}>
          +
        </button>
      </div>
    </>
  );
});

export default Hijo;
