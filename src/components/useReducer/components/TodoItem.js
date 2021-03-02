import PropTypes from 'prop-types';
const TodoItem = ({ todo, index, handleDelete, handleToggle }) => {
  const { id, desc, done } = todo;
  return (
    <>
      <div>
        <li key={id} className="list-group-item">
          <p
            className={`${done && 'complete'}`}
            onClick={() => handleToggle(id)}
          >
            {index + 1}
            {desc}
          </p>
          <button className="btn btn-danger" onClick={() => handleDelete(id)}>
            Borrar
          </button>
        </li>
      </div>
    </>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
export default TodoItem;
