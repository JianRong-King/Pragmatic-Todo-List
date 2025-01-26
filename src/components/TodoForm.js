import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call addTodo to generate the ID and add the new todo
    const newTodoId = await addTodo(value);

    try {
      // Now make the POST request with the generated ID
      await fetch("http://localhost:5000/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: newTodoId, description: value }),
      });
    } catch (error) {
      console.error(error.message);
    }

    // Clear the input field after submitting
    setValue("");
  };

  return (
    <form
      className="TodoForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="todo-btn"
      >
        Add Task
      </button>
    </form>
  );
};
