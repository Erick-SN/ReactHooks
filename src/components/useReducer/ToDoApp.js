import TodoList from './components/TodoList';
import Form from './components/Form';
import { useEffect, useContext } from 'react';
import { todoContext } from './context/todoContext';

import './styles.css';
const ls = localStorage;
const ToDoApp = () => {
  const todosContext = useContext(todoContext);
  const { state, handleDelete, handleAdd, handleToggle } = todosContext;
  useEffect(() => {
    ls.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <>
      <div>
        <h1>ToDp App ({state.length})</h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <TodoList
              tasks={state}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          </div>
          <div className="col-5">
            <Form handleAdd={handleAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
