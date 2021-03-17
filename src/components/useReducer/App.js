import TodoState from './context/TodoState';
import ToDoApp from './ToDoApp';
const App = () => {
  return (
    <>
      <TodoState>
        <ToDoApp />
      </TodoState>
    </>
  );
};

export default App;
