import { useContext } from 'react';
import { UserContext } from '../UserContext';
const HomeScreen = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
};

export default HomeScreen;
