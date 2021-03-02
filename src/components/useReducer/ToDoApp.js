import { useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { useForm } from './hooks/useForm';
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
  const { state: formValue, handleChange, reset } = useForm({
    description: '',
  });

  useEffect(() => {
    ls.setItem('todos', JSON.stringify(state));
  }, [state]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.description.trim().length < 1) return;
    const newToDo = {
      id: new Date().getTime(),
      desc: formValue.description,
      done: false,
    };
    const action = {
      type: 'add',
      payload: newToDo,
    };
    dispatch(action);
    reset();
  };
  return (
    <>
      <div>
        <h1>ToDp App ({state.length})</h1>
        <hr />
        <div className="row">
          <div className="col-7">
            <ul className="list-group list-group-flush">
              {state.map((toDo, i) => (
                <li key={toDo.id} className="list-group-item">
                  <p className="text-center">
                    {i + 1}
                    {toDo.desc}
                  </p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-5">
            <h4>Agregar ToDo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="description"
                value={formValue}
                autoComplete="off"
                className="form-control"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
