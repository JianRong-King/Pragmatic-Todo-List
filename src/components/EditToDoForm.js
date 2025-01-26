import React, { useState } from "react";

export const EditToDoForm = ({ editTodo, task }) => {
  // Initialize the state with the current task's text
  const [value, setValue] = useState(task.task);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the updated task (value) to the backend
      await fetch(`http://localhost:5000/todos/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: value }), // Use 'value' here instead of 'task.task'
      });

      // Update the todo locally after the update has been made on the backend
      editTodo(value, task.id);

      // Clear the input field
      setValue("");
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  return (
    <form
      className="TodoForm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="todo-input"
        value={value} // Bind the input field to the 'value' state
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)} // Update 'value' state as the user types
      />

      <button
        type="submit"
        className="todo-btn"
      >
        Update Task
      </button>
    </form>
  );
};
