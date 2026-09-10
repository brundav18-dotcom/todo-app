import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {

  // useState - stores all tasks
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // useState - stores dark mode
  const [darkMode, setDarkMode] = useState(false);

  // useEffect - saves tasks whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add task
  const addTodo = (text) => {

    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos((prevTodos) => [
      ...prevTodos,
      newTodo
    ]);
  };

  // Complete / Uncomplete task
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
        const updatedTodos = prevTodos.map((todo) =>
        todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
        );

        // Incomplete tasks first, completed tasks at the bottom
        return updatedTodos.sort(
        (a, b) => Number(a.completed) - Number(b.completed)
            );
    });
  };

  // Delete task
  const deleteTodo = (id) => {

    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook
export function useTodos() {
  return useContext(TodoContext);
}