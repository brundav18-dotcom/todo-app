import { useTodos } from "./context/TodoContext";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {

  const {
    todos,
    darkMode,
    setDarkMode
  } = useTodos();

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = todos.length - completed;

  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

      <div className="container">

        {/* Header */}

        <div className="header">

          <h1>
            📝 My To-Do List
          </h1>

          <button
            className="theme-btn"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode
              ? "☀️ Light"
              : "🌙 Dark"}
          </button>

        </div>

        {/* Add Task */}

        <AddTodo />

        {/* Statistics */}

        <div className="stats">

          <div>
            <h3>{todos.length}</h3>
            <p>Total</p>
          </div>

          <div>
            <h3>{pending}</h3>
            <p>Pending</p>
          </div>

          <div>
            <h3>{completed}</h3>
            <p>Completed</p>
          </div>

        </div>

        {/* Todo List */}

        <TodoList />

      </div>

    </div>
  );
}

export default App;