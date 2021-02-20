import { useForm } from './useForm';
import './effects.css';
const SimpleForm = () => {
  const [form, handleChange] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = form;

  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          placeholder="Tu nombre"
          autocomplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          placeholder="email"
          autocomplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          placeholder="password"
          autocomplete="off"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default SimpleForm;
