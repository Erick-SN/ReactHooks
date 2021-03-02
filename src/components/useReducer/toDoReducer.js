export const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    case 'togle':
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
