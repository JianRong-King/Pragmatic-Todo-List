import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo';
import { EditToDoForm } from './EditToDoForm';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const editTodo = id => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task: task, isEditing: !todo.isEditing } : todo
            )
        );
    };


    return (
        <div className="TodoWrapper">
            <h1>Todo Of The Day!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (<EditToDoForm editTodo={editTask}
                    task = {todo} />) : (

                <Todo key={todo.id} task={todo} 
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo} // take editTodo function
                />
                )
            ))}
        </div>
    );
};
