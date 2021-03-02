import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, handleDelete, handleToggle }) => {
  return (
    <>
      <div>
        <ul className="list-group list-group-flush">
          {tasks.map((toDo, i) => (
            <TodoItem
              todo={toDo}
              key={toDo.id}
              index={i}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoList;
