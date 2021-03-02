import TodoList from './components/TodoList';
import Form from './components/Form';
import { useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { useEffect } from 'react';
import './styles.css';

const ls = localStorage;
const init = () => {
  return JSON.parse(ls.getItem('todos')) || [];
  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: 'Aprender React',
  //       done: false,
  //     },
  //   ];
};

const ToDoApp = () => {
  const [state, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(() => {
    ls.setItem('todos', JSON.stringify(state));
  }, [state]);

  const handleDelete = (id) => {
    const action = {
      type: 'delete',
      payload: id,
    };
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = {
      type: 'togle',
      payload: id,
    };
    dispatch(action);
  };

  const handleAdd = (newToDo) => {
    const action = {
      type: 'add',
      payload: newToDo,
    };
    dispatch(action);
  };
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
