import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {

  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <p className="empty">
        No tasks yet! 🎉
      </p>
    );
  }

  return (
    <div>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}

    </div>
  );
}

export default TodoList;