import { useState } from 'react';
import { UserContext } from './UserContext';
import AppRouter from './AppRouter';
const App = () => {
  const [user, setUser] = useState({});
  return (
    <>
      <div>
        <UserContext.Provider
          value={{
            user,
            setUser,
          }}
        >
          <AppRouter />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default App;
