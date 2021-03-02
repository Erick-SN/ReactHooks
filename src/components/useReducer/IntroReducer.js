const initialState = [
  {
    id: 1,
    toDo: 'Comprar pan',
    done: false,
  },
];

const toDoReducer = (state = initialState, action) => {
  if (action?.type === 'NuevaTarea') {
    return [...state, action.payload];
  }
  return state;
};

let toDos = toDoReducer();

const newToDo = {
  id: 2,
  toDo: 'Hacer tarea',
  done: false,
};

const action = {
  type: 'NuevaTarea',
  payload: newToDo,
};

toDos = toDoReducer(toDos, action);

console.log(toDos);

const IntroReducer = () => {
  return (
    <>
      <h1>Holi</h1>
    </>
  );
};

export default IntroReducer;
