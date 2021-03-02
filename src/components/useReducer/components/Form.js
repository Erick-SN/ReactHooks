import { useForm } from '../hooks/useForm';
const Form = ({ handleAdd }) => {
  const { state: formValue, handleChange, reset } = useForm({
    description: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.description.trim().length < 1) return;
    const newToDo = {
      id: new Date().getTime(),
      desc: formValue.description,
      done: false,
    };
    handleAdd(newToDo);
    reset();
  };
  return (
    <>
      <div>
        <h4>Agregar ToDo</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            value={formValue.description}
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
    </>
  );
};

export default Form;
