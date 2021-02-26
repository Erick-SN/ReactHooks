import { memo } from 'react';

const Hijo = memo(({ numero, incrementar }) => {
  console.log('Ejecutado');
  return (
    <>
      <button
        className="btn btn-primary mr-3"
        onClick={() => incrementar(numero)}
      >
        {numero}
      </button>
    </>
  );
});

export default Hijo;
