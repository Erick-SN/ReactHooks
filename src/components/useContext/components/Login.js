import { UserContext } from '../UserContext';
import { useContext } from 'react';
const Login = () => {
  const { setUser } = useContext(UserContext);
  return (
    <>
      <div>
        <h1>Login</h1>
        <hr />
        <button
          onClick={() =>
            setUser((u) => ({
              ...u,
              id: 123,
              name: 'Erick',
            }))
          }
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
