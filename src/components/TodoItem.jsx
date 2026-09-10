import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {

  const {
    toggleTodo,
    deleteTodo
  } = useTodos();

  return (

   <div className="todo-item">

  <div className="todo-left">

    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />

    <span className={todo.completed ? "completed-task" : ""}>
      {todo.text}
    </span>

  </div>

  <button
    className="delete-btn"
    onClick={() => deleteTodo(todo.id)}
  >
    Delete
  </button>

</div>
  );
}

export default TodoItem;