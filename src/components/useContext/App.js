import AppRouter from './AppRouter';
import { UserContext } from './UserContext';
const App = () => {
  const user = {
    id: 1234,
    name: 'Erick',
    email: 'erick@gmail.com',
  };
  return (
    <>
      <div>
        <UserContext.Provider value={user}>
          <AppRouter />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default App;
