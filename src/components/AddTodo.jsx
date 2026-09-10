import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function AddTodo() {

  // useState stores the input value
  const [text, setText] = useState("");

  const { addTodo } = useTodos();

  const handleSubmit = (e) => {

    e.preventDefault();

    addTodo(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">

      <input
        type="text"
        placeholder="Enter your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
}

export default AddTodo;