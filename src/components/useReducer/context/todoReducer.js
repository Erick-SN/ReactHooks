import { ADD_TASK, DELETE_TASK, DONE_TASK } from './todoTypes';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((todo) => todo.id !== action.payload);
    case DONE_TASK:
      return state.map((todo) => {
        if (todo.id === action.payload) return { ...todo, done: !todo.done };
        else {
          return todo;
        }
      });
    default:
      return state;
  }
};
