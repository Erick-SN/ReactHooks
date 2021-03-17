import { useReducer } from 'react';
import { todoContext } from './todoContext';
import { todoReducer } from './todoReducer';

import { ADD_TASK, DELETE_TASK, DONE_TASK } from './todoTypes';

const TodoState = (props) => {
  const ls = localStorage;
  const initialState = () => JSON.parse(ls.getItem('todos')) || [];
  const [state, dispatch] = useReducer(todoReducer, [], initialState);

  const handleDelete = (id) => {
    const action = {
      type: DELETE_TASK,
      payload: id,
    };
    dispatch(action);
  };

  const handleToggle = (id) => {
    const action = {
      type: DONE_TASK,
      payload: id,
    };
    dispatch(action);
  };

  const handleAdd = (newToDo) => {
    const action = {
      type: ADD_TASK,
      payload: newToDo,
    };
    dispatch(action);
  };
  return (
    <todoContext.Provider
      value={{
        state,
        handleDelete,
        handleAdd,
        handleToggle,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoState;
