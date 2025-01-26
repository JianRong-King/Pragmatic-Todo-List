import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const onDelete = async () => {
    try {
      await fetch(`http://localhost:5000/todos/${task.id}`, {
        method: "DELETE",
      });
      deleteTodo(task.id);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => onDelete()}
        />
      </div>
    </div>
  );
};
